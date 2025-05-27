import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import WorkItemComponent from '../../components/WorkItemComponent/WorkItemComponent';
import {
  WorkContainer,
  WorkDescription,
  WorkTextDescription,
  WorkDescriptionWrapp,
  WorkFilterWrapp,
  WorkPhotoWrapp,
  WorkTextFilter,
  WorkTitel,
  WorkTitelContainer,
} from './Work.styled';
import { Border } from '../../components/Footer/Footer.styled';
import Loading from '../../assets/video/logo_animated_hq.webm';
import { Link } from 'react-router-dom';

export type WorkItemData = {
  id: string;
  folder: string;
  image_name: string;
  title: string;
  description: string;
  preview_url: string | null;
  vimeo_id?: string;
};

export type Quote = {
  id: number;
  text: string;
  author: string;
  source: string;
};

const Work: React.FC = () => {
  const [works, setWorks] = useState<WorkItemData[]>([]);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);
  const [filter, setFilter] = useState<'ALL' | 'COMMERCIAL' | 'PERSONAL'>(
    'ALL'
  );

  const filteredWorks =
    filter === 'ALL'
      ? works
      : works.filter(work => work.folder.toUpperCase() === filter);

  useEffect(() => {
    const fetchWorks = async () => {
      const { data, error } = await supabase.from('work').select('*');
      if (error) {
        console.error('Помилка при отриманні робіт:', error.message);
      } else {
        setWorks(data);
      }
    };

    const fetchQuotes = async () => {
      const { data, error } = await supabase.from('quotes').select('*');
      if (error) {
        console.error('Помилка при отриманні цитат:', error.message);
      } else {
        setQuotes(data);
      }
    };

    fetchWorks();
    fetchQuotes();
  }, []);

  useEffect(() => {
    if (quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
    }
  }, [quotes]);
  const source = 'work';
  return (
    <WorkContainer>
      <WorkTitelContainer>
        <WorkTitel>WORK</WorkTitel>
        <WorkFilterWrapp>
          {['ALL', 'COMMERCIAL', 'PERSONAL'].map(cat => (
            <WorkTextFilter
              key={cat}
              onClick={() => {
                setFilter(cat as 'ALL' | 'COMMERCIAL' | 'PERSONAL');
                if (quotes.length > 0) {
                  const randomIndex = Math.floor(Math.random() * quotes.length);
                  setCurrentQuote(quotes[randomIndex]);
                }
              }}
              className={filter === cat ? 'active' : ''}
            >
              {cat}
            </WorkTextFilter>
          ))}
        </WorkFilterWrapp>
      </WorkTitelContainer>

      <WorkPhotoWrapp>
        {filteredWorks.length > 0 ? (
          filteredWorks.map(work => (
            <Link
              key={work.id}
              to={`/collections/${work.id}?source=${source}&filter=${filter}`}
              style={{ width: '100%', height: '100%' }}
            >
              <WorkItemComponent key={work.id} work={work} />
            </Link>
          ))
        ) : (
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
        )}
      </WorkPhotoWrapp>
      <Border />

      {currentQuote && (
        <WorkDescriptionWrapp>
          <WorkDescription>{currentQuote.text}</WorkDescription>
          <WorkTextDescription>
            — {currentQuote.author}, <i>{currentQuote.source}</i>
          </WorkTextDescription>
        </WorkDescriptionWrapp>
      )}
    </WorkContainer>
  );
};

export default Work;
