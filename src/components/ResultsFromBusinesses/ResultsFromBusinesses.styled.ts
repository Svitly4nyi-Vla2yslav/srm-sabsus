import { styled } from "styled-components";


export const ResultsFromBusinessesWrapper = styled.div`
 width: 343px;
margin: 0 auto;
margin-top: 50px;
margin-bottom: 88px;
 @media screen and (min-width: 768px) {
  max-width: 768px;
  width: 100%;
}
  
  @media screen and (min-width: 1440px) {
  max-width: 1440px;
    width: 100%;
  }
`;

export const ResultMainText = styled.p`
margin: 0 auto;
border-radius: 24px;
padding: 4px 4px 4px 14px;
width: max-content;
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
 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;

export const ResultMainTitle = styled.h2`
font-family: var(--font-family);
font-weight: 600;
font-size: 36px;
line-height: 110%;
text-align: center;
color: var(--white-100);
margin-bottom: 16px;
 @media screen and (min-width: 768px) {
  font-family: var(--font-family);
font-weight: 600;
font-size: 44px;
line-height: 110%;
text-align: center;
color: var(--white-100);
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;

export const ResultMainTextDescription = styled.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 16px;
text-align: center;
color: var(--white-80);
margin-bottom: 56px;

 @media screen and (min-width: 768px) {

  font-family: var(--font-family);
font-weight: 400;
font-size: 17px;
line-height: 130%;
text-align: center;
color: var(--white-80);
  }
  
  @media screen and (min-width: 1440px) {
  
  }
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

     @media screen and (min-width: 768px) {
        display: flex;
        column-gap: 4px;
        max-width: 740px;
        margin: 0 auto;
        width: 100%;
        justify-content: space-evenly;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: stretch;
        margin-top: 100px;
  }
  
  @media screen and (min-width: 1440px) {
  max-width: 1440px;
  width: 100%;
  }
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
  overflow: hidden;
   @media screen and (min-width: 768px) {
  width: 176px;
height: 176px;
min-height: 176px;
}
  
  @media screen and (min-width: 1440px) {
        display: flex;
        width: 323px;
        height: 322px;
        justify-content: space-around;
        align-items: flex-start;
        flex-wrap: wrap;
  }
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
 overflow: hidden;
  backdrop-filter: blur(9.247057914733887px);
  box-shadow: 0 5px 9px -5px rgba(0, 0, 0, 0.03), 
              0 1px 2px -1px rgba(0, 0, 0, 0.08), 
              inset 0 -5px 14px 0 rgba(255, 255, 255, 0.03), 
              inset 0 -3px 3px 0 rgba(255, 255, 255, 0.03);
  background: rgba(255, 255, 255, 0.03);
   @media screen and (min-width: 768px) {
    width: 176px;
height: 176px;
min-height: 176px;
margin-top: -20px;
  }
  
  @media screen and (min-width: 1440px) {
         display: flex;
        width: 323px;
        height: 322px;
        justify-content: space-around;
        align-items: flex-start;
        flex-wrap: wrap;
  }
`;

export const ResultIconCard = styled.img`
width: 115px;
height: 60px;
 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  width: 200px;
height: 104px;
  }
`;

export const ResultTitleWrapper = styled.div`
width: 163px;
height: 66px;
 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;

export const ResultTitle = styled.p`
font-family: var(--font-family);
font-weight: 600;
font-size: 46px;
line-height: 100%;
color: var(--white-100);
 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
font-size: 80px;
width: max-content;
  }
`;

export const ResultText = styled.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 10px;
line-height: 130%;
color: var(--white-60);
 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  font-size: 18px;
  width: max-content;
  }
`;

export const ResultImage = styled.img`
  border-radius: 14px;
width: 151px;
height: 186px;
  object-fit: cover;
   @media screen and (min-width: 768px) {
width: 176px;
height: 176px;
margin-top: -20px;
  }
  
  @media screen and (min-width: 1440px) {
  width: 323px;
height: 322px;
  }
`;

export const ResultImage1 = styled.img`
border-radius: 14px;
width: 150px;
height: 231px;
 @media screen and (min-width: 768px) {
  width: 176px;
height: 176px;
  }
  
  @media screen and (min-width: 1440px) {
    width: 323px;
height: 322px;
  }
`;

export const ResultImage2 = styled.img`
border-radius: 14px;
width: 187px;
height: 186px;
margin-top: -45px;
 @media screen and (min-width: 768px) {
  width: 176px;
height: 176px;
margin-top: 0;
  }
  
  @media screen and (min-width: 1440px) {
  width: 323px;
height: 322px;
  }
`;

export const ResultImage3 = styled.img`
border-radius: 14px;
width: 150px;
height: 142px;

 @media screen and (min-width: 768px) {
  width: 176px;
height: 176px;
 margin-top: -40px;
  }
  
  @media screen and (min-width: 1440px) {
  width: 323px;
height: 322px;
  }

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
   @media screen and (min-width: 768px) {
  width: 152px;
height: 322px;
  }
  
  @media screen and (min-width: 1440px) {
  width: 264px;
height: 558px;
  }
`;


export const ResultImage4 = styled.img`
display: none;
 @media screen and (min-width: 768px) {
 display: flex;
  border-radius: 14px;
  width: 176px;
height: 176px;
min-height: 176px;
margin-top: -40px;
  }
  
  @media screen and (min-width: 1440px) {
  width: 323px;
height: 322px;
  }

`;

export const ResultCard2 = styled.div`
display: none;
   @media screen and (min-width: 768px) {
    border: 0.58px solid #212121;
  border-radius: 14px;
  padding: 11px;
  width: 176px;
height: 176px;
min-height: 176px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
 overflow: hidden;
  backdrop-filter: blur(9.247057914733887px);
  box-shadow: 0 5px 9px -5px rgba(0, 0, 0, 0.03), 
              0 1px 2px -1px rgba(0, 0, 0, 0.08), 
              inset 0 -5px 14px 0 rgba(255, 255, 255, 0.03), 
              inset 0 -3px 3px 0 rgba(255, 255, 255, 0.03);
  background: rgba(255, 255, 255, 0.03);
  }
  
  @media screen and (min-width: 1440px) {
         display: flex;
        width: 323px;
        height: 322px;
        justify-content: space-around;
        align-items: flex-start;
        flex-wrap: wrap;
  }
`;
