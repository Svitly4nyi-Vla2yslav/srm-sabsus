import React, { useState, useEffect, useRef } from 'react';
import Modal, { CloseButton, MediaContainer, TextContainer } from '../Modal/Modal';
import Loading from '../../assets/video/logo_animated_hq.webm';
import {
  CollectionContainer,
  CollectionHeader,
  CollectionGrid,
  CollectionBlock,
  TextBlock,
  CollectionTitle,
  CollectionWrapper,
  CollectionText,
  CollectionDescription,
  CollectionTextWrapper,
  CollectionImageWrapper,
  ImageBlock,
  // Folder,
  VimeoContainer,
  WorkTextFilter,
  WorkFilterWrapp,
  WorkTitelContainer,
  WorkTitel,
  PlayerVimeo,
  VimeoVideoContainer,
  VideoCaption,
} from './CollectionComponent.styled';
import Player from '@vimeo/player';

import { useLocation } from 'react-router-dom';

export interface CollectionData {
  id: number;
  work_id: string;
  collection_name: string;
  year: string;
  tags: string[];
  synopsis: string;
  description: string;
  folder: string;
  [key: string]: any;
  // Main media (can be image or video)
  image_name: string;
  image_name1?: string;
  image_name2?: string;
  image_name3?: string;
  image_name4?: string;
  image_name5?: string;
  image_name6?: string;
  image_name7?: string;
  image_name8?: string;
  image_name9?: string;
  image_name41?: string;

  // Titles for media
  image_name_title?: string;
  image_name1_title?: string;
  image_name2_title?: string;
  image_name3_title?: string;
  image_name4_title?: string;
  image_name5_title?: string;
  image_name6_title?: string;
  image_name7_title?: string;
  image_name8_title?: string;
  image_name9_title?: string;
  image_name41_title?: string;

  // Additional content fields
  title1?: string;
  title11?: string;

  // Optional work title from related table
  work_title?: string;

  // Vimeo video IDs (if available)
  // vimeo_id?: string;
  // vimeo_id1?: string;
  // vimeo_id2?: string;
  // vimeo_id3?: string;
  // vimeo_id4?: string;
  // vimeo_id5?: string;
  // vimeo_id6?: string;
  // vimeo_id7?: string;
  // vimeo_id8?: string;
  // vimeo_id9?: string;
  // vimeo_id41?: string;
}

export interface CollectionComponentProps {
  collection: CollectionData;
  collections?: CollectionData[];
  source?: 'work' | 'photo';
  initialFilter?: 'ALL' | 'COMMERCIAL' | 'PERSONAL';
}

const CollectionComponent: React.FC<CollectionComponentProps> = ({
  collection,
}) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const source = searchParams.get('source') || 'work';
  const [filter, setFilter] = useState<'ALL' | 'COMMERCIAL' | 'PERSONAL'>(
    (searchParams.get('filter') as 'ALL' | 'COMMERCIAL' | 'PERSONAL') || 'ALL'
  );
  const updateUrlFilter = (newFilter: string) => {
    const newSearchParams = new URLSearchParams(location.search);
    newSearchParams.set('filter', newFilter);
    window.history.replaceState(
      {},
      '',
      `${location.pathname}?${newSearchParams}`
    );
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMedia, setCurrentMedia] = useState({
    url: '',
    type: 'image',
    altText: '',
    description: '',
    vimeoId: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [failedMedia, setFailedMedia] = useState<Set<string>>(new Set());
  const topRef = useRef<HTMLDivElement>(null);
  const vimeoPlayerRef = useRef<Player | null>(null);
  const vimeoContainerRef = useRef<HTMLDivElement>(null);

  const getMediaUrl = (mediaName: string) => {
    return `https://qcrjljxbutsvgveiozjd.supabase.co/storage/v1/object/public/work-images/${collection.folder}/${mediaName}`;
  };

  const getVimeoId = (mediaKey: string): string => {
    const vimeoKey = mediaKey.replace('image_name', 'vimeo_id');
    return (collection[vimeoKey as keyof CollectionData] as string) || '';
  };

  const handleMediaError = (mediaName: string) => {
    setFailedMedia(prev => new Set(prev).add(mediaName));
  };

  const isMediaFailed = (mediaName: string) => {
    return failedMedia.has(mediaName);
  };

  const getMediaType = (mediaName: string): 'image' | 'video' => {
    const videoExtensions = ['.mp4', '.webm', '.mov'];
    return videoExtensions.some(ext => mediaName.toLowerCase().endsWith(ext))
      ? 'video'
      : 'image';
  };

  useEffect(() => {
    const loadMedia = async () => {
      try {
        setIsLoading(true);
        setFailedMedia(new Set());

        const mediaToLoad = [
          collection.image_name,
          collection.image_name1,
          collection.image_name2,
          collection.image_name3,
          collection.image_name4,
          collection.image_name41,
          collection.image_name5,
          collection.image_name6,
          collection.image_name7,
          collection.image_name8,
          collection.image_name9,
        ].filter(Boolean) as string[];

        await Promise.all(
          mediaToLoad.map(mediaName => {
            return new Promise<void>(resolve => {
              const mediaType = getMediaType(mediaName);
              if (mediaType === 'image') {
                const img = new Image();
                img.src = getMediaUrl(mediaName);
                img.onload = () => resolve();
                img.onerror = () => {
                  handleMediaError(mediaName);
                  resolve();
                };
              } else {
                resolve();
              }
            });
          })
        );

        setIsLoading(false);
      } catch (error) {
        console.error('Error loading media:', error);
        setIsLoading(false);
      }
    };

    loadMedia();
  }, [collection.id]);

  useEffect(() => {
    if (
      isModalOpen &&
      currentMedia.type === 'video' &&
      currentMedia.vimeoId &&
      vimeoContainerRef.current
    ) {
      // Initialize Vimeo player when modal opens
      vimeoPlayerRef.current = new Player(vimeoContainerRef.current, {
        id: parseInt(currentMedia.vimeoId),
        width: 1280,
        height: 720,
        autoplay: true,
        muted: false,
      });

      return () => {
        // Cleanup player when modal closes or changes
        if (vimeoPlayerRef.current) {
          vimeoPlayerRef.current.destroy();
          vimeoPlayerRef.current = null;
        }
      };
    }
  }, [isModalOpen, currentMedia]);

  const openModal = (mediaName: string, mediaKey: string, altText: string) => {
    if (isMediaFailed(mediaName)) return;

    // Заборонити скрол сторінки
    document.body.style.overflow = 'hidden';

    const descriptionKey = `${mediaKey}_title` as keyof CollectionData;
    const mediaType = getMediaType(mediaName);
    const vimeoId = getVimeoId(mediaKey);

    setCurrentMedia({
      url: vimeoId ? '' : getMediaUrl(mediaName),
      type: mediaType,
      altText: altText,
      description: collection[descriptionKey] || '',
      vimeoId: vimeoId,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    // Повернути скрол сторінки
    document.body.style.overflow = 'auto';
    setIsModalOpen(false);
  };
  const renderVimeoVideos = () => {
    const videos: { id: string; key: string; title: string; index: number }[] =
      [];

    // Головне відео
    if (collection.vimeo_id) {
      videos.push({
        id: collection.vimeo_id,
        key: 'image_name',
        title: collection.collection_name,
        index: 0,
      });
    }

    // Додаткові відео
    for (let i = 1; i <= 10; i++) {
      const vimeoKey = `vimeo_id${i}` as keyof CollectionData;
      if (collection[vimeoKey]) {
        videos.push({
          id: collection[vimeoKey] as string,
          key: `image_name${i}`,
          title: `${collection.collection_name} Vimeo ${i}`,
          index: i,
        });
      }
    }

    return videos.map(video => {
      const descriptionKey = `${video.key}_title` as keyof CollectionData;
      const description = collection[descriptionKey] || '';

      return (
        <VideoPlayer
          key={`vimeo-player-${video.id}-${video.index}`}
          vimeoId={video.id}
          url=""
          description={description}
          title={collection.work_title}
        />
      );
    });
  };
  const renderMedia = (
    mediaName: string | undefined,
    mediaKey: string,
    altText: string,
    index: number,
    styles = {}
  ) => {
    const vimeoId = getVimeoId(mediaKey);

    // Якщо немає ні зображення, ні Vimeo ID - не рендеримо
    if (!mediaName && !vimeoId) return null;
    if (mediaName && isMediaFailed(mediaName)) return null;

    const mediaType = mediaName ? getMediaType(mediaName) : 'video';
    const mediaUrl = mediaName ? getMediaUrl(mediaName) : '';

    // Якщо є Vimeo ID - рендеримо Vimeo прев'ю
    if (vimeoId) {
      return (
        <div
          key={`vimeo-${vimeoId}-${index}`}
          style={{
            ...styles,
            position: 'relative',
            width: '100%',
            height: '50vw',
            cursor: 'pointer',
          }}
          onClick={() => openModal(mediaName || '', mediaKey, altText)}
        >
          <img
            src={`https://vumbnail.com/${vimeoId}.jpg`}
            alt={altText}
            style={{
              width: '100%',
              height: '50%',
              objectFit: 'cover',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80px',
              height: '80px',
              backgroundColor: 'rgba(255,255,255,0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      );
    }

    return (
      <div className="image-container" key={`${mediaName}-${index}`}>
        {mediaType === 'image' ? (
          <img
            src={mediaUrl}
            alt={altText}
            onClick={() => openModal(mediaName || '', mediaKey, altText)}
            onError={() => handleMediaError(mediaName ?? '')}
            style={styles}
          />
        ) : (
          <div
            onClick={() => openModal(mediaName || '', mediaKey, altText)}
            style={{
              ...styles,
              backgroundImage: `url(${mediaUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              cursor: 'pointer',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80px',
                height: '80px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>
    );
  };

  if (isLoading) {
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

  const VideoPlayer = ({ url, vimeoId, description, title }: {
    url: string;
    vimeoId: string;
    description: string;
    title?: string;
  }) => {
    return (
      <PlayerVimeo>
        <VimeoVideoContainer>
          {vimeoId ? (
            <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?autoplay=0&loop=0&title=0&byline=0&portrait=0&controls=1&share=1`}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
                frameBorder="0"
            />
          ) : (
            <video src={url} controls />
          )}
        </VimeoVideoContainer>
        
        <VideoCaption>
          {description && <p>{description}</p>}
          {title && <h3>{title}</h3>}
        </VideoCaption>
      </PlayerVimeo>
    );
  };
 

  return (
    <CollectionContainer ref={topRef}>
      <WorkTitelContainer>
        <WorkTitel>{source === 'photo' ? 'PHOTOGRAPHY' : 'WORK'}</WorkTitel>
        <WorkFilterWrapp>
          {['ALL', 'COMMERCIAL', 'PERSONAL'].map(cat => (
            <WorkTextFilter
              key={cat}
              onClick={() => {
                if (filter !== cat) {
                  setFilter(cat as 'ALL' | 'COMMERCIAL' | 'PERSONAL');
                  updateUrlFilter(cat);
                }
              }}
              className={filter === cat ? 'active' : ''}
              aria-disabled={filter === cat}
              data-active={filter === cat}
              tabIndex={filter === cat ? -1 : 0} // Вимкнути фокус для активного
            >
              {cat}
            </WorkTextFilter>
          ))}
        </WorkFilterWrapp>
      </WorkTitelContainer>
      <CollectionHeader>
        <CollectionWrapper>
          <CollectionText>Collection</CollectionText>
          <CollectionTitle>{collection.collection_name}</CollectionTitle>
        </CollectionWrapper>
        <CollectionWrapper>
          <CollectionText>Year</CollectionText>
          <CollectionTitle>{collection.year}</CollectionTitle>
        </CollectionWrapper>

        <CollectionWrapper>
          <CollectionText>Tags</CollectionText>{' '}
          <CollectionTitle style={{ width: '60%' }}>
            {collection.tags.join(' ')}
          </CollectionTitle>
        </CollectionWrapper>

        <CollectionWrapper>
          <CollectionText>Synopsis</CollectionText>{' '}
          <CollectionDescription>{collection.synopsis}</CollectionDescription>
        </CollectionWrapper>
      </CollectionHeader>
      <div style={{}}>
        {renderVimeoVideos().map((video, index) => (
          <React.Fragment key={`vimeo-video-${index}`}>{video}</React.Fragment>
        ))}
       
      </div>
      <CollectionTextWrapper>
        <CollectionText>Description</CollectionText>
        <CollectionDescription>{collection.description}</CollectionDescription>
      </CollectionTextWrapper>

{/* Блок 2 / 3 картинки */}

      <CollectionGrid
        $itemsCount={
          [
            collection.image_name1,
            collection.image_name2,
            collection.image_name3,
          ].filter(media => media && !isMediaFailed(media)).length
        }
      >
        {[
          collection.image_name1,
          collection.image_name2,
          collection.image_name3,
        ]
          .filter(media => media && !isMediaFailed(media))
          .map((media, index) =>
            renderMedia(
              media,
              `image_name${index + 1}`,
              `${collection.collection_name} ${index + 1}`,
              index + 1
            )
          )}
      </CollectionGrid>
{/* Блок картинка / текст */}

      {collection.image_name4 &&
        collection.title1 &&
        !isMediaFailed(collection.image_name4) && (
          <CollectionBlock>
            <ImageBlock>
              {renderMedia(
                collection.image_name4,
                'image_name4',
                collection.title1 || '',
                4
              )}
            </ImageBlock>
            <TextBlock>
              <h3>{collection.title1}</h3>
            </TextBlock>
          </CollectionBlock>
        )}
{/* Блок картинка / текст */}
      {collection.image_name41 &&
        collection.title11 &&
        !isMediaFailed(collection.image_name41) && (
          <CollectionBlock>
            {collection.title11 && (
              <TextBlock>
                <h3>{collection.title11}</h3>
              </TextBlock>
            )}
            <ImageBlock>
              {renderMedia(
                collection.image_name41,
                'image_name41',
                collection.title11 || '',
                41
              )}
            </ImageBlock>
          </CollectionBlock>
        )}

{/* Блок 5 / 2 картинок */}
      <CollectionImageWrapper>
        {[5, 6, 7, 8, 9].map(num => {
          const media = collection[
            `image_name${num}` as keyof CollectionData
          ] as string | undefined;
          return media
            ? renderMedia(
                media,
                `image_name${num}`,
                `${collection.collection_name} ${num}`,
                num
              )
            : null;
        })}
      </CollectionImageWrapper>

      {isModalOpen && (
  <Modal onClose={closeModal}>
    <CloseButton onClick={closeModal}>✖</CloseButton>
    
    <MediaContainer>
      {currentMedia.type === 'image' ? (
        <img
          src={currentMedia.url}
          alt={currentMedia.altText}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
          }}
        />
      ) : currentMedia.vimeoId ? (
        <VimeoContainer ref={vimeoContainerRef} />
      ) : (
        <video
          src={currentMedia.url}
          controls
          autoPlay
          style={{
            maxWidth: '100%',
            maxHeight: '70vh',
            objectFit: 'contain',
          }}
        />
      )}
    </MediaContainer>

    <TextContainer>
      {currentMedia.description && (
        <p>{currentMedia.description}</p>
      )}
      {collection.work_title && (
        <h3>{collection.work_title}</h3>
      )}
    </TextContainer>
  </Modal>
)}
    </CollectionContainer>
  );
};

export default CollectionComponent;
