import Hero from '../../components/Hero/Hero';
import { HomeContainer } from './HomePage.styled';
import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <HomeContainer>
        <Hero/>
      </HomeContainer>
    </>
  );
};

export default Home;
