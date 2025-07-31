import styled, { keyframes } from "styled-components";

export const SwiperContainer = styled.div`
position: relative;
  width: 100vw;
  height: 100%;
  background-color: transparent; /* півпрозорий фон */
  
margin: 0px 0;
padding: 40px 0px;

.swiper-wrapper {
display: flex;
transition-timing-function: linear !important;
padding: 0px 0px;
margin: 0 auto;
  }

@media screen and (min-width: 744px){

}

@media screen and (min-width: 1440px){

}
`;

export const CardContainer = styled.a`
  display: flex;
  padding: 18px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 21.028px;
  backdrop-filter: blur(14.02px);
  box-shadow: 
    inset 0 -7px 21px 0 rgba(255, 255, 255, 0.03),
    inset 0 -4px 5px 0 rgba(255, 255, 255, 0.03),
    0 7px 14px -7px rgba(0, 0, 0, 0.03),
    0 2px 4px -2px rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.03);
  width: 350px;
 height: 198px;
 margin-top: 100px;
  overflow: hidden;
  position: relative;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    box-shadow: 
       0 0 5px 4px #494BEC, 
      0 0 5px 0px #4F51ED, 
      inset 0 0 16px 8px #6567EF;
      background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(74, 131, 238, 0.86);
  }
`;

export const floatAnimation = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(5px, -5px); /* Рух вправо-вверх */
  }
  100% {
    transform: translate(0, 0);
  }
`;

export const ArrowIcon = styled.img`
  width: 46px;
  height: 46px;
  position: absolute;
  right: 20px;
  top: 20px;
  border: none;
  animation: ${floatAnimation} 2s ease-in-out infinite;
  transition: transform 0.3s ease;

  &:hover {
    animation-play-state: paused; /* Пауза при наведенні */
    transform: translate(3px, -3px); /* Фіксуємо в кінцевій позиції */
  }
`;


export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const DescriptionText = styled.p`
  color: #FFF;
  font-family: 'Inter', sans-serif;
  font-size: 12.266px;
  font-weight: 400;
  line-height: 1.3em;
  width: 100%;
`;

export const PercentageText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 76.226px;
  font-weight: 500;
  line-height: 1em;
  background: linear-gradient(93deg, #FFF 0.99%, #F7F8FD 14.42%, #B6B8EE 29.08%, #6A82FC 38.92%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 100%;
`;

export const GradientLine = styled.div`
  position: absolute;
  left: 14px;
  top: 4px;
  width: 275px;
  height: 5px;
`;

export const SmallLine = styled.div`
  position: absolute;
  left: 2px;
  top: 2px;
  width: 119px;
  height: 5px;
`;


