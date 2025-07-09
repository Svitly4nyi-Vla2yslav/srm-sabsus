import React from 'react';
import { HomeContainer } from '../HomePage/HomePage.styled';
import Hero from '../../components/Kitchen&Fulfillment/Hero/Hero';
import Key from '../../components/Kitchen&Fulfillment/KeyCapabilities/Key';
import LivePrepInsights from '../../components/Kitchen&Fulfillment/LivePrepInsights/LivePrepInsights';
import StepByStepGuidance from '../../components/ComponentsService/StepByStepGuidance/StepByStepGuidance';
import HowWeWork from '../../components/ComponentsService/HowWeWork/HowWeWork';
import WhyChooseOurPlatform from '../../components/WhyChooseOurPlatform/WhyChooseOurPlatform';
import ResultsFromBusinesses from '../../components/ResultsFromBusinesses/ResultsFromBusinesses';
import Feedback from '../../components/Feedback/Feedback';
import Frequently from '../../components/ComponentsService/Frequently/Frequently';
import StartSmall from '../../components/StartSmall/StartSmall';

const KitchenFulfillment: React.FC = () => {
  return (
    <HomeContainer>
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

export default KitchenFulfillment;
