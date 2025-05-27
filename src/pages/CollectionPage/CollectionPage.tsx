import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import CollectionComponent from '../../components/CollectionComponent/CollectionComponent';
import CollectionSlider from '../../components/CollectionsSwiper/CollectionsSwiper';
import Loading from '../../assets/video/logo_animated_hq.webm';
import { Border } from '../../components/Footer/Footer.styled';
import { NotFoundWraperr, NotFoundText } from '../Work/Work.styled';

const CollectionPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation(); // Перенесено на початок компонента
  const searchParams = new URLSearchParams(location.search);
  const source = searchParams.get('source') as 'work' | 'photo' || 'work';

  const [collection, setCollection] = useState<any>(null);
  const [collections, setCollections] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        const { data: collectionData, error: collectionError } = await supabase
          .from('collections')
          .select(`*, work:work_id (folder)`)
          .eq('id', id)
          .single();

        if (collectionError) throw collectionError;
        if (!collectionData) throw new Error('Collection not found');

        const { data: allCollections } = await supabase
          .from('collections')
          .select('id')
          .order('year', { ascending: false });

        const folder = collectionData.work?.folder || collectionData.work_id.toString();

        setCollection({ 
          ...collectionData,
          folder: folder
        });
        setCollections(allCollections || []);
        
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    if (!loading) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [loading]);

  if (loading) {
    return (
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#000',
        }}
      >
        <video
          src={Loading}
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '150px', height: '150px' }}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#000',
        }}
      >
        <video
          src={Loading}
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '150px', height: '150px' }}
        />
        Error: {error}
      </div>
    );
  }

  if (!collection) {
    return (
      <NotFoundWraperr>
        <Border />
        <NotFoundText>
          404
          <br />
          NOT FOUND
        </NotFoundText>
      </NotFoundWraperr>
    );
  }

  return (
    <>
      <CollectionComponent 
        collection={collection} 
        collections={collections} 
        source={source}
      />
      <CollectionSlider
        currentId={collection.id}
        collectionIds={collections.map(c => c.id)}
        collectionName={collection.collection_name}
      />
    </>
  );
};

export default CollectionPage;