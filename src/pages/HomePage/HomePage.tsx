import Hero from '../../components/Hero/Hero';
import WhyChooseOurPlatform from '../../components/WhyChooseOurPlatform/WhyChooseOurPlatform';
import { HomeContainer } from './HomePage.styled';
import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <HomeContainer>
        <Hero/>
        <WhyChooseOurPlatform/>
      </HomeContainer>
    </>
  );
};

export default Home;
