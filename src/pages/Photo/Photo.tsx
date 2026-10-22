import React from 'react';
import {
  WorkContainer,
  WorkTitel,
  WorkTitelContainer,
} from '../ServicePages/ServicePages.styled';
import { Border } from '../../components/Footer/Footer.styled';


export type WorkItemData = {
  id: string;
  folder: string;
  image_name: string;
  title: string;
  description: string;
  preview_url: string | null;
};



/**
 * Рендерить статичну сторінку фотографій із заголовком і декоративною межею.
 * Компонент не завантажує галерею та не використовує `WorkItemData`: цей тип
 * залишається контрактом для майбутнього джерела робіт без поточних побічних ефектів.
 */
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
