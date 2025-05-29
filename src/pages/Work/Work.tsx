import React from 'react';

import {
  WorkContainer,
  WorkPhotoWrapp,
  WorkTitel,
  WorkTitelContainer,
} from './Work.styled';

import { Border } from '../../components/Footer/Footer.styled';



const Work: React.FC = () => {
  return (
    <WorkContainer>
      <WorkTitelContainer>
        <WorkTitel>WORK</WorkTitel>
      </WorkTitelContainer>

      <WorkPhotoWrapp></WorkPhotoWrapp>
      <Border />
    </WorkContainer>
  );
};

export default Work;
