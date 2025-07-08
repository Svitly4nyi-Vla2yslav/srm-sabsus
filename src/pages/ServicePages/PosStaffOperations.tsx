import React from 'react';
import { HomeContainer } from '../HomePage/HomePage.styled';
import Hero from '../../components/POS&StaffOperations/Hero/Hero';
import Key from '../../components/POS&StaffOperations/KeyCapabilities/Key';
import LivePrepInsights from '../../components/POS&StaffOperations/LivePrepInsights/LivePrepInsights';
import StepByStepGuidance from '../../components/POS&StaffOperations/StepByStepGuidance/StepByStepGuidance';
import HowWeWork from '../../components/POS&StaffOperations/HowWeWork/HowWeWork';
import Frequently from '../../components/ComponentsService/Frequently/Frequently';
import Feedback from '../../components/Feedback/Feedback';
import ResultsFromBusinesses from '../../components/ResultsFromBusinesses/ResultsFromBusinesses';
import StartSmall from '../../components/StartSmall/StartSmall';
import WhyChooseOurPlatform from '../../components/WhyChooseOurPlatform/WhyChooseOurPlatform';

const PosStaffOperations: React.FC = () => {
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

export default PosStaffOperations;
