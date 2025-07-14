import React from 'react';
import { HomeContainer } from '../HomePage/HomePage.styled';
import Hero from '../../components/Analytics&Management/Hero/Hero';
import Key from '../../components/Analytics&Management/KeyCapabilities/Key';
import LivePrepInsights from '../../components/Analytics&Management/LivePrepInsights/LivePrepInsights';
import StepByStepGuidance from '../../components/ComponentsService/StepByStepGuidance/StepByStepGuidance';
import Frequently from '../../components/ComponentsService/Frequently/Frequently';
import Feedback from '../../components/Feedback/Feedback';
import ResultsFromBusinesses from '../../components/ResultsFromBusinesses/ResultsFromBusinesses';
import StartSmall from '../../components/StartSmall/StartSmall';
import WhyChooseOurPlatform from '../../components/WhyChooseOurPlatform/WhyChooseOurPlatform';
import HowWeWork from '../../components/Inventory&Warehousing/HowWeWork/HowWeWork';

const AnalyticsManagement: React.FC = () => {
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

export default AnalyticsManagement;
