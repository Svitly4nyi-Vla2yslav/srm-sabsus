import AllinOneSRM from '../../components/ComponentsHome/AllinOneSRM/AllinOneSRM';
import Feedback from '../../components/ComponentsHome/Feedback/Feedback';
import Hero from '../../components/ComponentsHome/Hero/Hero';
import PartnersBanner from '../../components/ComponentsHome/PartnersBanner/PartnersBanner';
import PricingTable from '../../components/ComponentsHome/PricePlan/PricePlan';
import ResultsFromBusinesses from '../../components/ComponentsHome/ResultsFromBusinesses/ResultsFromBusinesses';
import StartSmall from '../../components/ComponentsHome/StartSmall/StartSmall';
import WhyChooseOurPlatform from '../../components/ComponentsHome/WhyChooseOurPlatform/WhyChooseOurPlatform';
import { HomeContainer } from './HomePage.styled';
import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <HomeContainer>
        <Hero />
        <AllinOneSRM />
        <WhyChooseOurPlatform />
        <ResultsFromBusinesses />
        <Feedback />
        <PricingTable />
        <PartnersBanner />
        <StartSmall />
      </HomeContainer>
    </>
  );
};

export default Home;
