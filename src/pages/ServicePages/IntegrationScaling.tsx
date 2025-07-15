import React from 'react';
import { HomeContainer } from '../HomePage/HomePage.styled';
import Hero from '../../components/Integration&Scaling/Hero/Hero';
import Key from '../../components/Integration&Scaling/KeyCapabilities/Key';
import LivePrepInsights from '../../components/Integration&Scaling/LivePrepInsights/LivePrepInsights';
import StepByStepGuidance from '../../components/ComponentsService/StepByStepGuidance/StepByStepGuidance';
import HowWeWork from '../../components/Integration&Scaling/HowWeWork/HowWeWork';
import WhyChooseOurPlatform from '../../components/WhyChooseOurPlatform/WhyChooseOurPlatform';
import Frequently from '../../components/ComponentsService/Frequently/Frequently';
import Feedback from '../../components/Feedback/Feedback';
import ResultsFromBusinesses from '../../components/ResultsFromBusinesses/ResultsFromBusinesses';
import StartSmall from '../../components/StartSmall/StartSmall';

const IntegrationScaling: React.FC = () => {
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

export default IntegrationScaling;
