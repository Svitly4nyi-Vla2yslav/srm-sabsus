import { styled } from "styled-components";


export const ResultsFromBusinessesWrapper = styled.div`
 width: 100%;
margin: 0 auto;
margin-top: 50px;
`;

export const ResultMainText = styled.p`
margin: 0 auto;
border-radius: 24px;
padding: 4px 4px 4px 14px;
width: 50%;
height: 28px;
display: flex;
justify-content: space-between;
margin-bottom: 16px;
margin-top: 50px;
font-family: var(--font-family);
font-weight: 400;
font-size: 12px;
color: var(--white-100);
backdrop-filter: blur(16px);
box-shadow: inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 0 8px 16px -8px rgba(0, 0, 0, 0.03), 0 2px 4px -2px rgba(0, 0, 0, 0.08);
background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%);
align-items: center;
`;

export const ResultMainTitle = styled.h2`
font-family: var(--font-family);
font-weight: 600;
font-size: 36px;
line-height: 110%;
text-align: center;
color: var(--white-100);
margin-bottom: 16px;
`;

export const ResultMainTextDescription = styled.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 16px;
text-align: center;
color: var(--white-80);
margin-bottom: 56px;
`;

export const ResultDisplayGrid = styled.div`
width: 100%;
    margin: 0 auto;
    display: flex;
    gap: 6px;
    position: relative;
    align-items: flex-start;
    justify-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
`;

export const ResultCard = styled.div`
  border: 0.58px solid #212121;
  border-radius: 14px;
  padding: 11px;
width: 186px;
height: 186px;
  min-height: 186px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  backdrop-filter: blur(9.247057914733887px);
  box-shadow: 0 5px 9px -5px rgba(0, 0, 0, 0.03), 
              0 1px 2px -1px rgba(0, 0, 0, 0.08), 
              inset 0 -5px 14px 0 rgba(255, 255, 255, 0.03), 
              inset 0 -3px 3px 0 rgba(255, 255, 255, 0.03);
  background: rgba(255, 255, 255, 0.03);
`;

export const ResultCard1 = styled.div`
  border: 0.58px solid #212121;
  border-radius: 14px;
  padding: 11px;
width: 186px;
height: 186px;
  min-height: 186px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  backdrop-filter: blur(9.247057914733887px);
  box-shadow: 0 5px 9px -5px rgba(0, 0, 0, 0.03), 
              0 1px 2px -1px rgba(0, 0, 0, 0.08), 
              inset 0 -5px 14px 0 rgba(255, 255, 255, 0.03), 
              inset 0 -3px 3px 0 rgba(255, 255, 255, 0.03);
  background: rgba(255, 255, 255, 0.03);
`;

export const ResultIconCard = styled.img`
width: 115px;
height: 60px;
`;

export const ResultTitleWrapper = styled.div`
width: 163px;
height: 66px;
`;

export const ResultTitle = styled.p`
font-family: var(--font-family);
font-weight: 600;
font-size: 46px;
line-height: 100%;
color: var(--white-100);
`;

export const ResultText = styled.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 10px;
line-height: 130%;
color: var(--white-60);
`;

export const ResultImage = styled.img`
  border-radius: 14px;
width: 151px;
height: 186px;
  object-fit: cover;
`;

export const ResultImage1 = styled.img`
border-radius: 14px;
width: 150px;
height: 231px;
`;

export const ResultImage2 = styled.img`
border-radius: 14px;
width: 150px;
height: 142px;
`;

export const ResultImage3 = styled.img`
border-radius: 14px;
width: 187px;
height: 186px;
margin-top: -45px;

`;

export const ResultMasterImage = styled.img`
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 203px;
  height: 429px;
  pointer-events: none; /* Щоб не заважало клікам */
`;

