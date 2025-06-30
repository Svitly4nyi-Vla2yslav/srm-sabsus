import React from 'react';
import { Container, HeroWrapper } from '../../Hero/Hero.styled';
import Spline from '@splinetool/react-spline';

const Hero: React.FC = () => {
  return (
    <HeroWrapper 
    style={{marginTop: 370,}}
    >
      <Container>
        <Spline 
          scene="https://prod.spline.design/xuwX0qwENokWyrTw/scene.splinecode" 
          style={{
            transition: 'transform 0.5s ease-out',
            filter: 'blur(0.5px)',
            transform: 'rotate(180deg)',
          }}
        />
      </Container>
    </HeroWrapper>
  );
};

export default Hero;