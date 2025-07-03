import React, { lazy, Suspense } from 'react';
import { Container, HeroWrapper } from '../../Hero/Hero.styled';
import useMediaQuery from '@mui/material/useMediaQuery';
import HeroIcon from "../../../assets/icons/HeroMarketing.png"
const Spline = lazy(() => import('@splinetool/react-spline'));

const FallbackImage = () => (
  <img
    src={HeroIcon}
    alt="3D Scene"
    style={{
      width: '100%',
      height: 'auto',
      filter: 'blur(0.5px)',
      // transform: 'rotate(180deg)'
    }}
  />
);

const Hero: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <HeroWrapper style={{ marginTop: 370 }}>
      <Container>
        {isMobile ? (
          <FallbackImage />
        ) : (
          <Suspense fallback={<FallbackImage />}>
            <Spline
              scene="https://prod.spline.design/xuwX0qwENokWyrTw/scene.splinecode"
              style={{
                  width: '100%',
                transition: 'transform 0.5s ease-out',
                filter: 'blur(0.5px)',
                transform: 'rotate(180deg)',
              }}
            />
          </Suspense>
        )}
      </Container>
    </HeroWrapper>
  );
};

export default Hero;
