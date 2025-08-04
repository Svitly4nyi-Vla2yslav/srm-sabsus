import React from 'react';

import { HomeContainer } from '../HomePage/HomePage.styled';
import AllinOneSRM from '../../components/AllinOneSRM/AllinOneSRM';
import Frequently from '../../components/ComponentsService/Frequently/Frequently';
import Feedback from '../../components/Feedback/Feedback';
import StartSmall from '../../components/StartSmall/StartSmall';

const Work: React.FC = () => {
  return (
    <HomeContainer id='all' style={{ marginTop: '120px' }}>
      <AllinOneSRM />
      <Frequently />
      <Feedback />
      <StartSmall />
    </HomeContainer>
  );
};

export default Work;
