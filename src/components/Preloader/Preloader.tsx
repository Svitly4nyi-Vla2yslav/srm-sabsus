import { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import VideoLogo from "../../assets/video/logo_animated_hq.webm";

// Анімації
const fadeOutAnimation = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const zoomInPulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

const hitEffect = keyframes`
  0% { transform: scale(1); }
  10% { transform: scale(1.3); }
  20% { transform: scale(0.9); }
  30% { transform: scale(1.1); }
  40% { transform: scale(1); }
  100% { transform: scale(1); }
`;

// Styled components
const PreloaderContainer = styled.div<{ $fadeOut: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:rgb(24, 24, 24);
  z-index: 9999;

  ${({ $fadeOut }) =>
    $fadeOut &&
    css`
      animation: ${fadeOutAnimation} 1s forwards;
    `}
`;

const VideoContainer = styled.div<{ $playVideo: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  ${({ $playVideo }) =>
    $playVideo &&
    css`
      animation: ${hitEffect} 0.5s linear, ${zoomInPulse} 1s 0.5s linear;
    `}
`;

const Video = styled.video`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
`;

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Запускаємо ефект удару та відео відразу
    setPlayVideo(true);
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.error("Video play error:", e));
    }

    // Ховаємо Preloader через 3 секунди після запуску
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 1000); // Завершення Preloader
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <PreloaderContainer $fadeOut={fadeOut}>
      <VideoContainer $playVideo={playVideo}>
        <Video 
          ref={videoRef}
          muted 
          loop={false}
          preload="auto"
        >
          <source src={VideoLogo} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      </VideoContainer>
    </PreloaderContainer>
  );
};

export default Preloader;