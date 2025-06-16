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
import { useTranslation } from 'react-i18next';

const ResultsFromBusinesses: React.FC = () => {
  const { t } = useTranslation();
  const data = t('results', { returnObjects: true }) as {
    mainText: string;
    mainTitle: string;
    description: string;
    cards: Array<{
      title: string;
      text: string;
    }>;
  };

  return (
    <ResultsFromBusinessesWrapper>
      <ResultMainText>
        {data.mainText} <CardButtonText src={icon18} alt="💹" />
      </ResultMainText>
      <ResultMainTitle>{data.mainTitle}</ResultMainTitle>
      <ResultMainTextDescription>{data.description}</ResultMainTextDescription>
      <ResultDisplayGrid>
        <ResultMasterImage src={Iphone} alt="Main Image" />

        <ResultCard>
          <ResultIconCard src={IconPazzario} alt="Icon" />
          <ResultTitleWrapper>
            <ResultTitle>{data.cards[0].title}</ResultTitle>
            <ResultText>{data.cards[0].text}</ResultText>
          </ResultTitleWrapper>
        </ResultCard>

        <ResultImage src={Image1} alt="Image 1" />

        <ResultImage1 src={Image2} alt="Image 2" />

        <ResultCard1>
          <ResultIconCard src={burban} alt="Icon" />
          <ResultTitleWrapper>
            <ResultTitle>{data.cards[1].title}</ResultTitle>
            <ResultText>{data.cards[1].text}</ResultText>
          </ResultTitleWrapper>
        </ResultCard1>

        <ResultImage2 src={Image3} alt="Image 3" />

        <ResultImage3 src={Image4} alt="Image 4" />
      </ResultDisplayGrid>
    </ResultsFromBusinessesWrapper>
  );
};

export default ResultsFromBusinesses;