import React from 'react';
import { InfoContainer } from './Info.styled';
import PricePlan from '../../components/PricePlan/PricePlan';
import Feedback from '../../components/Feedback/Feedback';

const Info: React.FC = () => {
  return <InfoContainer   id='app' >
    <PricePlan />
    <Feedback/>
  </InfoContainer>;
};

export default Info;
