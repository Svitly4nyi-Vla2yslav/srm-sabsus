import React from 'react';
import { AboutContainer } from './AboutUs.styled';
import HeroAnimation from '../../components/AboutComponents/HeroAnimation';
import StartSmall from '../../components/StartSmall/StartSmall';
import { HowWeWork } from '../../components/AboutComponents/HowWeWork/HowWeWork';

/**
 * Збирає сторінку про платформу з hero-анімації, опису робочого підходу та CTA StartSmall.
 * Компонент не приймає props, не зберігає стан і лише визначає порядок готових секцій.
 */
const AboutUs: React.FC = () => {
  return (
    <AboutContainer>
      <HeroAnimation />
      <HowWeWork />
      <StartSmall/>
    </AboutContainer>
  );
};

export default AboutUs;
