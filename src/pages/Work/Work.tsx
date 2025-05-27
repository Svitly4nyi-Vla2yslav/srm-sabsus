import React from 'react';

import {
  WorkContainer,
  WorkPhotoWrapp,
  WorkTitel,
  WorkTitelContainer,
} from './Work.styled';
import { Border } from '../../components/Footer/Footer.styled';

export type WorkItemData = {
  id: string;
  folder: string;
  image_name: string;
  title: string;
  description: string;
  preview_url: string | null;
  vimeo_id?: string;
};

export type Quote = {
  id: number;
  text: string;
  author: string;
  source: string;
};

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
