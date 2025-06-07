import React from 'react';
import {
  ResultCard,
  ResultCard1,
  ResultDisplayGrid,
  ResultIconCard,
  ResultImage,
  ResultImage1,
  ResultImage2,
  ResultImage3,
  ResultMainText,
  ResultMainTextDescription,
  ResultMainTitle,
  ResultMasterImage,
  ResultsFromBusinessesWrapper,
  ResultText,
  ResultTitle,
  ResultTitleWrapper,
} from './ResultsFromBusinesses.styled';
import { CardButtonText } from '../AllinOneSRM/AllinOneSRM.styled';

import icon18 from '../../assets/icons/cards4/Chart Increasing.svg';
import IconPazzario from '../../assets/icons/pizzario/pizzarioIcon.png';
import Image1 from '../../assets/icons/pizzario/image1.svg';
import Image2 from '../../assets/icons/pizzario/image2.png';
import Image3 from '../../assets/icons/pizzario/image3.png';
import Image4 from '../../assets/icons/pizzario/image4.png';
import Iphone from '../../assets/icons/pizzario/iPhone16ProMax.png';
import burban from '../../assets/icons/pizzario/burbanIcons.png';

const ResultsFromBusinesses: React.FC = () => {
  return (
    <ResultsFromBusinessesWrapper>
      <ResultMainText>
        Results from Businesses <CardButtonText src={icon18} alt="💹" />{' '}
      </ResultMainText>
      <ResultMainTitle>
        How teams grow faster with our CRM ecosystem
      </ResultMainTitle>
      <ResultMainTextDescription>
        No hidden fees. No hardware lock-ins. Launch for free, scale on demand,
        or fully own your ecosystem under your brand.
      </ResultMainTextDescription>
      <ResultDisplayGrid>
        <ResultMasterImage src={Iphone} alt="Main Image" />

        <ResultCard>
          <ResultIconCard src={IconPazzario} alt="Icon" />
          <ResultTitleWrapper>
            <ResultTitle>430%</ResultTitle>
            <ResultText>ROI after 3 years</ResultText>
          </ResultTitleWrapper>
        </ResultCard>

        <ResultImage src={Image1} alt="Image 1" />

        <ResultImage1 src={Image2} alt="Image 2" />

        <ResultCard1>
          <ResultIconCard src={burban} alt="Icon" />
          <ResultTitleWrapper>
            <ResultTitle>+37%</ResultTitle>
            <ResultText>Card Text</ResultText>
          </ResultTitleWrapper>
        </ResultCard1>

        <ResultImage2 src={Image3} alt="Image 3" />

        <ResultImage3 src={Image4} alt="Image 4" />
      </ResultDisplayGrid>
    </ResultsFromBusinessesWrapper>
  );
};

export default ResultsFromBusinesses;
