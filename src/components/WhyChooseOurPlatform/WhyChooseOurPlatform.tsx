import React from 'react';
import {
  GeneralContainer,
  MainText,
  MainTitel,
  PuzzleIcon,
  WhyText,
} from './WhyChooseOurPlatform.styled';
import puzzle from "../../assets/icons/stars-01puzzle.svg"
import FeatureSwiper from './ChooseSwipper';

const WhyChooseOurPlatform: React.FC = () => {
  return (
    <GeneralContainer>
      <WhyText>
        Why choose our platform <PuzzleIcon src={puzzle} alt='🎲' />
      </WhyText>
      <MainTitel>
        Beyond POS <br />A system that grows with you
      </MainTitel>
      <MainText>
        We built an ecosystem that removes vendor lock-ins, works on any device,
        and adapts to any business — from corner cafés to international chains.
      </MainText>
      <FeatureSwiper/>
    </GeneralContainer>
  );
};

export default WhyChooseOurPlatform;
