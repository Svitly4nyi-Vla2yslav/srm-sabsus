import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Cassette from '../../../assets/icons/Costomer/Videocassette.svg';
import logo from '../../../assets/icons/logo-srm.svg';
import Tools from '../../../assets/icons/Toolbar Group.svg';
import point from '../../../assets/icons/Traffic Lights (Big Sur).svg';
import video from '../../../assets/video/GloryToUkraine.webm';
import BackgroundImage from '../../../assets/icons/Costomer/VideoBackground.png';
import ControlFast from '../../../assets/icons/Costomer/Seconadry Buttons copy.svg';
import ControlRewind from '../../../assets/icons/Costomer/Seconadry Buttons.svg';
import { useTranslation } from 'react-i18next';
import { useVideoContent } from '../../../firebase';
import ErrorScreen from '../../ErrorScreen';
import LoadingScreen from '../../LoadingScreen';
import useMediaQuery from '@mui/material/useMediaQuery';

export const StepWrapp = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  margin-bottom: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StepMainText = styled(motion.p)`
  margin: 0 auto;
  border-radius: 24px;
  padding: 4px 4px 4px 14px;
  width: max-content;
  height: 28px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-top: 50px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  color: var(--white-100);
  backdrop-filter: blur(16px);
  box-shadow:
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03),
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03),
    0 8px 16px -8px rgba(0, 0, 0, 0.03),
    0 2px 4px -2px rgba(0, 0, 0, 0.08);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.12) 7%,
    rgba(255, 255, 255, 0) 86%
  );
  align-items: center;
  will-change: transform, opacity;
`;

export const StepMainTitle = styled(motion.h2)`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 36px;
  line-height: 110%;
  text-align: center;
  color: var(--white-100);
  margin-bottom: 16px;
  will-change: transform, opacity;

  @media screen and (min-width: 768px) {
    font-size: 44px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 800px;
    width: 100%;
    margin: 0 auto 26px;
  }
`;

export const StepMainTextDescription = styled(motion.p)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: var(--white-80);
  margin-bottom: 56px;
  will-change: transform, opacity;

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 130%;
  }

  @media screen and (min-width: 1440px) {
    max-width: 800px;
    width: 100%;
    margin: 0 auto 26px;
  }
`;

export const StepSpanIcon = styled.img`
  border-radius: 25px;
  padding: 4px;
  overflow: visible;
  font-size: 13px;
  width: 20px;
  margin-left: 6px;
  box-shadow:
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.18),
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03),
    0 4px 8px rgba(0, 0, 0, 0.08),
    0 1px 2px rgba(0, 0, 0, 0.06);
  background: linear-gradient(
      315deg,
      rgba(122, 121, 122, 0) 7%,
      rgba(172, 172, 172, 0) 86%
    )
    rgba(255, 255, 255, 0.03);
  -webkit-transform: translateZ(0);
`;

export const HeaderContainer = styled.div`
  margin: 0 auto;
  width: 343px;
  height: auto;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(11.129203796386719px);
  box-shadow:
    0 6px 11px -6px rgba(0, 0, 0, 0.03),
    0 1px 3px -1px rgba(0, 0, 0, 0.08),
    inset 0 -6px 17px 0 rgba(255, 255, 255, 0.03),
    inset 0 -3px 4px 0 rgba(255, 255, 255, 0.03);
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  border-left: 0.15px solid #212121;
  border-right: 0.15px solid #212121;
  border-top: 0.15px solid #212121;

  @media screen and (min-width: 768px) {
    max-width: 740px;
    width: 100%;
    margin: 0 auto;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1130px;
  }
`;

export const SlideHeader = styled.div`
  padding: 16px 22px;
  width: 100%;
  max-width: 343px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 0.35px solid rgba(33, 33, 33, 0.7);
  -webkit-backdrop-filter: blur(11px);
  backdrop-filter: blur(11px);
  box-shadow:
    0 6px 11px -6px rgba(0, 0, 0, 0.03),
    0 1px 3px -1px rgba(0, 0, 0, 0.08),
    inset 0 -6px 17px 0 rgba(255, 255, 255, 0.03),
    inset 0 -3px 4px 0 rgba(255, 255, 255, 0.03);
  background: rgba(255, 255, 255, 0.03);
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.03),
    rgba(255, 255, 255, 0.01)
  );

  @supports (-webkit-touch-callout: none) {
    background-color: rgba(85, 85, 85, 0.86);
    -webkit-backdrop-filter: saturate(180%) blur(11px);
  }

  @media screen and (min-width: 768px) {
    max-width: 740px;
    width: 100%;
    margin: 0 auto;
    padding: 16px 24px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1130px;
    padding: 16px 32px;
  }
`;

export const SlideLogo = styled.img`
  width: 37px;
  height: 9px;
`;

export const LogoImage = styled.img`
  width: 82px;
  height: 11px;
`;

export const ToolGroup = styled.img`
  width: 79px;
  height: 19px;
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio by default */
  overflow: hidden;
  border-radius: 10px;
  background: rgba(2, 0, 23, 1);
  @media (max-width: 768px) {
    padding-bottom: 75%; /* 4:3 для мобільних пристроїв */
  }

  @media (min-width: 1920px) {
    padding-bottom: 50%; /* Широкоекранні монітори */
  }
`;

const StyledVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: rgba(255, 255, 255, 0.03);
`;

const VideoControls = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 16px;
  z-index: 2;
  flex-direction: row;
  align-items: center;
`;

const ControlButton = styled.button`
  border: none;
  border-radius: 50%;
  backdrop-filter: blur(6px);
  background-color: rgba(255, 255, 255, 0.08);
  color: white;
  cursor: pointer;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }

  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
  }

  @media screen and (min-width: 1440px) {
    width: 54px;
    height: 54px;
  }
`;

const ControlButtonPlay = styled(ControlButton)`
  background-color: rgba(255, 255, 255, 0.12);
  width: 62px;
  height: 62px;

  @media screen and (min-width: 768px) {
    width: 72px;
    height: 72px;
  }

  @media screen and (min-width: 1440px) {
    width: 80px;
    height: 80px;
  }
`;

export const ControlIcon = styled.img`
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 28px;
    height: 28px;
  }
`;

const VideoHoverWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StepByStepGuidance: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width:768px)');
  const isTablet = useMediaQuery('(max-width:1024px)');

  // Оптимізація: завантажуємо різні версії відео для різних пристроїв
  const { videoUrl, loading, error } = useVideoContent(
    isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'
  );

  // Оптимізація: lazy loading для відео
  const [, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Оптимізація: попереднє завантаження постеру
  useEffect(() => {
    const img = new Image();
    img.src = BackgroundImage;
  }, []);

  // Таймер для автоматичного приховування контролів
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (showControls) {
      timeoutId = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [showControls]);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true); // Оновлюємо стан після успішного запуску
          setShowControls(true);
        })
        .catch(e => {
          console.error('Video play failed:', e);
          setIsPlaying(false);
        });
    } else {
      videoRef.current.pause();
      setIsPlaying(false); // Оновлюємо стан при паузі
      setShowControls(true);
    }
  };

  const seek = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds;
      setShowControls(true);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      setIsPlaying(true);
      setShowControls(true);
      setTimeout(() => setShowControls(false), 3000);
    };

    const handlePause = () => {
      setIsPlaying(false);
      setShowControls(true);
      setTimeout(() => setShowControls(false), 3000);
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', () => setIsPlaying(false));

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, []);

  if (loading) return <LoadingScreen />;
  if (error) return <ErrorScreen message={error} />;
  return (
    <StepWrapp>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <StepMainText>
          {t('stepByStepGuidance1.title')}{' '}
          <StepSpanIcon src={Cassette} alt="⏺️" />
        </StepMainText>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <StepMainTitle>{t('stepByStepGuidance1.heading')}</StepMainTitle>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <StepMainTextDescription>
          {t('stepByStepGuidance1.description')}
        </StepMainTextDescription>
      </motion.div>
      <HeaderContainer>
        <SlideHeader>
          <SlideLogo src={point} alt="Logo" />
          <LogoImage src={logo} alt="Logo" />
          <ToolGroup src={Tools} alt="Tools" />
        </SlideHeader>
        <VideoHoverWrapper
          onClick={togglePlay} // Додали клік на відео для play/pause
        >
          <VideoWrapper>
            <StyledVideo ref={videoRef} poster={BackgroundImage} controls>
              <source src={videoUrl || video} type="video/mp4" />
              {t('videoNotSupported')}
            </StyledVideo>

            {showControls && (
              <VideoControls>
                <ControlButton
                  onClick={e => {
                    seek(-15);
                    e.stopPropagation();
                  }}
                >
                  <ControlIcon src={ControlRewind} alt="Rewind" />
                </ControlButton>
                <ControlButtonPlay
                  onClick={e => {
                    togglePlay();
                    e.stopPropagation();
                  }}
                >
                  {isPlaying ? '⏸' : '▶'}
                </ControlButtonPlay>
                <ControlButton
                  onClick={e => {
                    seek(15);
                    e.stopPropagation();
                  }}
                >
                  <ControlIcon src={ControlFast} alt="Fast forward" />
                </ControlButton>
              </VideoControls>
            )}
          </VideoWrapper>
        </VideoHoverWrapper>
      </HeaderContainer>
    </StepWrapp>
  );
};

export default StepByStepGuidance;
