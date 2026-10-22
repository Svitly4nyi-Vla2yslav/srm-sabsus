import React from 'react';
import { InfoContainer } from './Info.styled';
import PricePlan from '../../components/PricePlan/PricePlan';
import Feedback from '../../components/Feedback/Feedback';

/**
 * Формує інформаційну сторінку з тарифними планами та блоком відгуків.
 * Компонент не приймає аргументів і лише компонує готові секції,
 * делегуючи їм власний стан, локалізацію та взаємодію з користувачем.
 */
const Info: React.FC = () => {
  return <InfoContainer   id='app' >
    <PricePlan />
    <Feedback/>
  </InfoContainer>;
};

export default Info;
