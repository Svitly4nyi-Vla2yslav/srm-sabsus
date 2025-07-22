import React from 'react';
import { AboutContainer } from './AboutUs.styled';
import HeroAnimation from '../../components/AboutComponents/HeroAnimation';
import StartSmall from '../../components/StartSmall/StartSmall';
import { HowWeWork } from '../../components/AboutComponents/HowWeWork/HowWeWork';

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
