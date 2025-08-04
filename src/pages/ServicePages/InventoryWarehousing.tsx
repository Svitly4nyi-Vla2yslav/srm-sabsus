import React from 'react';
import { HomeContainer } from '../HomePage/HomePage.styled';
import Hero from '../../components/Inventory&Warehousing/Hero/Hero';
import Key from '../../components/Inventory&Warehousing/KeyCapabilities/Key';
import LivePrepInsights from '../../components/Inventory&Warehousing/LivePrepInsights/LivePrepInsights';
import StepByStepGuidance from '../../components/ComponentsService/StepByStepGuidance/StepByStepGuidance';
import HowWeWork from '../../components/ComponentsService/HowWeWork/HowWeWork';
import WhyChooseOurPlatform from '../../components/WhyChooseOurPlatform/WhyChooseOurPlatform';
import Frequently from '../../components/ComponentsService/Frequently/Frequently';
import Feedback from '../../components/Feedback/Feedback';
import ResultsFromBusinesses from '../../components/ResultsFromBusinesses/ResultsFromBusinesses';
import StartSmall from '../../components/StartSmall/StartSmall';

const InventoryWarehousing: React.FC = () => {
  return (
    <HomeContainer id='ap'>
      <Hero />
      <Key />
      <LivePrepInsights />
      <StepByStepGuidance />
      <HowWeWork />
      <WhyChooseOurPlatform />
      <ResultsFromBusinesses />
      <Feedback />
      <Frequently />
      <StartSmall />
    </HomeContainer>
  );
};

export default InventoryWarehousing;
