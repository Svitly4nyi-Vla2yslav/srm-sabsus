import styled from "styled-components";

export const SwiperContainer = styled.div`
  width: 100vh;
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
  width: 389px;
  height: 198px;
  overflow: hidden;
  position: relative;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    box-shadow: 
      /* Потужна внутрішня фіолетова тінь */
      inset 0 0 20px 0 rgba(191, 123, 246, 0.7),
      /* Додаткові внутрішні тіні */
      inset 0 -10px 25px 0 rgba(255, 255, 255, 0.15),
      inset 0 -5px 10px 0 rgba(255, 255, 255, 0.1),
      /* Яскрава зовнішня тінь */
      0 0 10px 6px rgba(191, 123, 246, 0.4),
      /* Додаткові зовнішні тіні */
      0 15px 30px -10px rgba(0, 0, 0, 0.25),
      0 5px 10px -5px rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(191, 123, 246, 0.3);
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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


