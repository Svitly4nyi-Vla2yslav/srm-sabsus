import { styled } from "styled-components";


export const MasterContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px; // або інше значення, яке вам потрібно
  padding: 0 16px; // додайте відступи по бокам для малих екранів
`;

export const MainTextPrice = styled.p`
margin: 0 auto;
border-radius: 24px;
padding: 4px 4px 4px 8px;
width: 109px;
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

export const CardButtonText = styled.img`
  border-radius: 25px;
  margin: 0 auto;
  padding: 4px;
  overflow: visible;
  font-size: 13px;
  width: 20px;
  box-shadow: 
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.18), 
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 
    0 8px 16px -8px rgba(0, 0, 0, 0.03), 
    0 2px 4px -2px rgba(0, 0, 0, 0.08), 
    0 0px 20px rgba(464, 367, 391, 0.99);
  background: 
    linear-gradient(315deg, rgba(122, 121, 122, 0.58) 7%, rgb(172 172 172 / 22%) 86%) 
    rgba(255, 255, 255, 0.03);
  
  /* Фікс для рендерингу тіней на iOS */
  -webkit-transform: translateZ(0);
`;

export const PriceTitle = styled.h2`
font-family: var(--font-family);
font-weight: 600;
margin: 0 auto;
font-size: 36px;
line-height: 110%;
text-align: center;
color: var(--white-100);
margin-bottom: 16px;
`;

export const PriceText = styled.p`
margin: 0 auto;
font-family: var(--font-family);
font-weight: 400;
font-size: 16px;
text-align: center;
color: var(--white-80);
margin-bottom: 56px;
`;



export const PriceButton = styled.button`
  cursor: pointer;
  margin: 0 auto;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: fit-content;
  border: none;
     color: white;
`;

export const PriceButtonTextDefault = styled.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 20px;
color: var(--black);
`;

export const ActiveButton = styled(PriceButton)`
  border-radius: 12px;
  background: #FFF;

`;

export const ActiveText = styled(ActiveButton)`
   color: #000;
    font-weight: 400;
`;

export const Container = styled.div`
  // padding: 40px 24px;
  color: white;
  margin: 0 auto;
`;

export const SwitchContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
border: 1px solid #212121;
border-radius: 24px;
  width: 100%;
width: 308px;
height: 64px;
backdrop-filter: blur(16px);
box-shadow: inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 0 8px 16px -8px rgba(0, 0, 0, 0.03), 0 2px 4px -2px rgba(0, 0, 0, 0.08);
background: rgba(255, 255, 255, 0.03);
margin-bottom: 24px;
font-family: var(--font-family);
font-weight: 500;
font-size: 20px;
color: var(--white-100);
  button {
  font-family: var(--font-family);
font-weight: 400;
font-size: 20px;
color: var(--white);
      cursor: pointer;
  white-space: nowrap;
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: fit-content;
  border: none;
  background: transparent;

    &.active {
      background: white;
      color: black;
        border-radius: 12px;
    }
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
 
  padding: 0 16px;
`;

export const Card = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'highlight',
}) <{ highlight?: boolean }>`
  background: ${({ highlight }) =>
    highlight ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.03)'};
  padding: 20px;
  margin: 0 auto;
  border-radius: 16px;
  width: 100%;
 width:  343px; 
backdrop-filter: blur(16px);
  box-shadow: ${({ highlight }) =>
    highlight
      ? `
        0 0 10px 4px #494BEC,
        0 0 30px 0px #4F51ED,
        inset 0 0 12px 4px #6567EF
      `
      : 'none'};

  border: ${({ highlight }) =>
    highlight
      ? '2px solid white'
      : '1px solid #333'};

h3 {
font-family: var(--font-family);
font-weight: 400;
font-size: 16px;
line-height: 130%;
color: #494bec;

}

span{
font-family: var(--font-family);
font-weight: 400;
font-size: 16px;
line-height: 130%;
color:rgb(106, 108, 211);
border-radius: 54px;
padding: 1px 6px;
border: 1px solid  #494bec;
box-shadow:   0 0 5px 1px rgba(117, 118, 203, 0.44),
        0 0 10px 0px rgb(100, 102, 215),
        inset 0 0 16px 3px #6567EF;
}

div{
    display: flex
;
    flex-direction: row;
    justify-content: space-between;

}
`;



export const Price = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 16px 0;
  font-family: var(--font-family);
font-weight: 500;
font-size: 22px;
line-height: 130%;
color: var(--white-100);
display: flex;
align-items: baseline;
border-bottom: 1px solid  var(--white-25);
padding-bottom: 16px;


p{
font-family: var(--font-family);
font-weight: 500;
font-size: 22px;
line-height: 130%;
color: var(--white-100);

};
`;

export const PriceCash = styled.h4`
font-family: var(--font-family);
font-weight: 400;
font-size: 32px;
line-height: 130%;
color: var(--white-100);
display: flex;
align-items: baseline;
`;

export const Span = styled.div`
font-family: var(--font-family);
font-weight: 400;
font-size: 14px;
line-height: 130%;
color: var(--white-100);
`;

export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'highlight',
}) <{ highlight?: boolean }>`
  border-radius: 12px;
  padding: 12px 20px;
  width: 303px;
  height: 43px;
  margin: 20px 0;

  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  color: ${({ highlight }) => highlight ? '#E4E5FC' : 'var(--white-100)'};

  backdrop-filter: blur(16px);
  background: ${({ highlight }) =>
    highlight
      ? `linear-gradient(180deg, rgb(72, 27, 179) 0%, rgba(255, 255, 255, 0.03) 100%)`
      : `linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%)`};

  box-shadow: ${({ highlight }) =>
    highlight
      ? `0 0 20px rgba(101, 103, 239, 0.5), inset 0 0 10px rgba(73, 75, 236, 0.4)`
      : `inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03),
         inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03),
         0 8px 16px -8px rgba(0, 0, 0, 0.03),
         0 2px 4px -2px rgba(0, 0, 0, 0.08)`};

  ${({ highlight }) =>
    highlight &&
    `
    position: relative;
    z-index: 1;
    border: none;

    &::before {
      content: '';
      position: absolute;
      top: -1px;
      left: -1px;
      right: -1px;
      bottom: -1px;
      border-radius: 12px;
      padding: 1px;
      background: linear-gradient(90deg, #494BEC, #4F51ED, #6567EF, #E4E5FC);
      -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      z-index: -1;
    }
  `}
`;


export const Note = styled.p`
  margin-top: 16px;
  font-size: 14px;
  color: #ccc;
`;
