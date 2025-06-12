import AllinOneSRM from '../../components/AllinOneSRM/AllinOneSRM';
import Feedback from '../../components/Feedback/Feedback';
import Hero from '../../components/Hero/Hero';
import PartnersBanner from '../../components/PartnersBanner/PartnersBanner';
import PricingTable from '../../components/PricePlan/PricePlan';
import ResultsFromBusinesses from '../../components/ResultsFromBusinesses/ResultsFromBusinesses';
import WhyChooseOurPlatform from '../../components/WhyChooseOurPlatform/WhyChooseOurPlatform';
import { HomeContainer } from './HomePage.styled';
import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <HomeContainer>
        <Hero/>
        <WhyChooseOurPlatform/>
        <AllinOneSRM/>
        <ResultsFromBusinesses/>
        <Feedback/>
        <PricingTable/>
        <PartnersBanner/>
      </HomeContainer>
    </>
  );
};

export default Home;
