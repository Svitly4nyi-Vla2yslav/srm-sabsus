import React from 'react';
import { HomeContainer } from '../HomePage/HomePage.styled';
import Hero from '../../components/ComponentsService/ServiceHero/Hero';
import Key from '../../components/ComponentsService/KeyCapabilities/Key';
import LivePrepInsights from '../../components/ComponentsService/LivePrepInsights/LivePrepInsights';
import StepByStepGuidance from '../../components/ComponentsService/StepByStepGuidance/StepByStepGuidance';
import HowWeWork from '../../components/ComponentsService/HowWeWork/HowWeWork';
import WhyChooseOurPlatform from '../../components/WhyChooseOurPlatform/WhyChooseOurPlatform';
import ResultsFromBusinesses from '../../components/ResultsFromBusinesses/ResultsFromBusinesses';
import Feedback from '../../components/Feedback/Feedback';
import StartSmall from '../../components/StartSmall/StartSmall';
import Frequently from '../../components/ComponentsService/Frequently/Frequently';

const CustomerExperience: React.FC = () => {
  return (
    <HomeContainer   id='ap'>
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

export default CustomerExperience;
