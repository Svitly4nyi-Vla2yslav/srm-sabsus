import React from 'react';
import {
  WorkContainer,
  WorkTitel,
  WorkTitelContainer,
} from '../Work/Work.styled';
import { Border } from '../../components/Footer/Footer.styled';


export type WorkItemData = {
  id: string;
  folder: string;
  image_name: string;
  title: string;
  description: string;
  preview_url: string | null;
};



const Photo: React.FC = () => {

  return (
    <WorkContainer>
      <WorkTitelContainer>
        <WorkTitel>PHOTOGRAPHY</WorkTitel>
       
      </WorkTitelContainer>

      
      <Border />
     
    </WorkContainer>
  );
};

export default Photo;
