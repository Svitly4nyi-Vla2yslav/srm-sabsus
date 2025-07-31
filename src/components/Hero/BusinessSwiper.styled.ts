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

export const CardContainer = styled.div`
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
    transform: translate(5px, -5px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

export const Wrapper = styled.div`
position: relative;
top: -100px;
`;

export const TextContainer = styled.div`
position : relative;
top: 140px;
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
    animation-play-state: paused;
    transform: translate(3px, -3px);
  }
`;

export const ContentWrapper = styled.div`
display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    // gap: 5px;
    // flex-direction: row;
    // flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
`;

export const SpanUnicorn = styled.span`
  border-radius: 25px;
  margin-left: 10px;
  padding: 2px;
  width: 22px;
  height: 22px;
  font-size: 13px;

  box-shadow:
    inset 0 -8px 24px rgba(255, 255, 255, 0.18),
    inset 0 -5px 6px rgba(255, 255, 255, 0.03),
    0 4px 8px rgba(0, 0, 0, 0.03),
    0 2px 4px rgba(0, 0, 0, 0.08),
    0 0px 10px rgba(244, 242, 245, 0.58); /* ніжне фіолетове світіння */

  background: linear-gradient(
    315deg,
    rgba(31, 30, 31, 0.96) 7%,
    rgba(40, 38, 41, 0.54) 86%
  );
`;

export const BusinessName = styled.p`
  color: #FFF;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.3em;
  text-align: center;
`;

export const BusinessImage = styled.img`
   filter: drop-shadow(0 0 20px rgba(123, 137, 231, 1));
  transition: filter 0.3s ease;
  width: 189px;
height: min-content;
  &:hover {
    filter: drop-shadow(0 0 40px rgba(92, 112, 240, 1));
  object-fit: cover;
`;

export const GradientLine = styled.div`
//   position: absolute;
//   left: 14px;
//   top: 4px;
//   width: 275px;
//   height: 5px;
//   background: linear-gradient(90deg, rgba(191, 123, 246, 0.8), transparent);
`;

export const SmallLine = styled.div`
//   position: absolute;
//   left: 2px;
//   top: 2px;
//   width: 119px;
//   height: 5px;
//   background: linear-gradient(90deg, rgba(106, 130, 252, 0.8), transparent);
`;