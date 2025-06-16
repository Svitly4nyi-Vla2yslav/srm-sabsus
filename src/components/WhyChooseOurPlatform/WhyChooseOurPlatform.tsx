import React from 'react';
import {
  GeneralContainer,
  MainText,
  MainTitel,
  PuzzleIcon,
  WhyText,
} from './WhyChooseOurPlatform.styled';
import puzzle from "../../assets/icons/stars-01puzzle.svg";
import FeatureSwiper from './ChooseSwipper';
import { useTranslation } from 'react-i18next';

const WhyChooseOurPlatform: React.FC = () => {
  const { t } = useTranslation();

  return (
    <GeneralContainer>
      <WhyText>
        {t('whyChoosePlatform.title')} <PuzzleIcon src={puzzle} alt='🎲' />
      </WhyText>
      <MainTitel dangerouslySetInnerHTML={{ __html: t('whyChoosePlatform.mainTitle') }} />
      <MainText>
        {t('whyChoosePlatform.description')}
      </MainText>
      <FeatureSwiper/>
    </GeneralContainer>
  );
};

export default WhyChooseOurPlatform;