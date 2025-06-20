import { styled } from "styled-components";


export const MasterContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px; // або інше значення, яке вам потрібно
  padding: 0 16px; // додайте відступи по бокам для малих екранів
 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
  `;

export const MainTextPrice = styled.p`
margin: 0 auto;
border-radius: 24px;
padding: 4px 4px 4px 8px;
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

export const CardButtonText = styled.img`
  border-radius: 25px;
  margin: 0 auto;
  padding: 4px;
  margin-left: 5px;
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

   @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
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

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;

export const PriceText = styled.p`
margin: 0 auto;
font-family: var(--font-family);
font-weight: 400;
font-size: 16px;
text-align: center;
color: var(--white-80);
margin-bottom: 56px;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
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

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;

export const PriceButtonTextDefault = styled.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 20px;
color: var(--black);

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;

export const ActiveButton = styled(PriceButton)`
  border-radius: 12px;
  background: #FFF;

   @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }

`;

export const ActiveText = styled(ActiveButton)`
   color: #000;
    font-weight: 400;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;

export const Container = styled.div`
  // padding: 40px 24px;
  color: white;
  margin: 0 auto;

   @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;



export const SwitchContainer = styled.div<{ $isMonthly: boolean }>`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  width: 100%;
  max-width: 350px; /* Збільшено максимальну ширину */
  min-height: 64px; /* Змінено height на min-height */
  backdrop-filter: blur(16px);
  box-shadow: 
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), 
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 
    0 8px 16px -8px rgba(0, 0, 0, 0.03), 
    0 2px 4px -2px rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.03);
  margin-bottom: 24px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 18px; /* Зменшено розмір шрифту */
  color: var(--white-100);
  position: relative;
  overflow: hidden;
  border: 1px solid #212121;
  padding: 8px; /* Зменшено padding */
  
  &::before {
    content: '';
    position: absolute;
    top: 8px;
    bottom: 8px;
    left: 8px;
    width: calc(50% - 16px); /* Гнучкий розмір фону */
    background: white;
    border-radius: 16px;
    z-index: 0;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform: translateX(${({ $isMonthly }) => $isMonthly ? '0' : 'calc(100% + 8px)'});
  }

  button {
    flex: 1; /* Кнопки займають рівну ширину */
    font-family: var(--font-family);
    font-weight: 400;
    font-size: clamp(16px, 3vw, 20px); /* Гнучкий розмір шрифту */
    color: var(--white);
    cursor: pointer;
    white-space: normal; /* Дозволяємо перенос слів */
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 12px;
    border: none;
    background: transparent;
    position: relative;
    z-index: 1;
    transition: color 0.3s ease;
    word-break: break-word; /* Перенос довгих слів */
    hyphens: auto; /* Автоматичні переноси */
    min-width: 0; /* Дозволяє тексту стискатися */

    &:hover {
      color: rgba(255, 255, 255, 0.8);
    }

    &.active {
      color: black;
      font-weight: 500;
    }
  }

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
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

   @media screen and (min-width: 768px) {
  width: 100%;
  margin: 0 auto;
width: 656px;
  }
  
  @media screen and (min-width: 1440px) {
         display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
  }
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
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ highlight }) => 
      highlight 
        ? `0 0 20px 8px #494BEC, 0 0 40px 0px #4F51ED, inset 0 0 16px 6px #6567EF`
        : `0 4px 20px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1)`};
    background: ${({ highlight }) => 
      highlight 
        ? 'rgba(255, 255, 255, 0.12)' 
        : 'rgba(255, 255, 255, 0.06)'};
    border-color: ${({ highlight }) => highlight ? '#fff' : '#555'};
  }

  &:active {
    transform: translateY(-2px);
  }

 @media screen and (min-width: 768px) {
  width: 100%;
  margin: 0 auto;
  width: 656px;
  }
  
  @media screen and (min-width: 1440px) {
  width: 440px;
  }
`;

export const CardDiv = styled.div`
    display: flex;
    flex-direction: row;
   justify-content: space-between;
    flex-wrap: nowrap;
    flex-direction: row;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;

export const CardH3 = styled.h3`
font-family: var(--font-family);
font-weight: 400;
font-size: 16px;
line-height: 130%;
color: #494bec;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;

export const CardSpan = styled.span`
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

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
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
justify-content: space-between;
    flex-wrap: nowrap;
    flex-direction: row;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;

export const PriceP = styled.p`
font-family: var(--font-family);
font-weight: 500;
font-size: 22px;
line-height: 130%;
color: var(--white-100);
width: 50%;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;


export const PriceCash = styled.h4`
font-family: var(--font-family);
font-weight: 400;
font-size: 32px;
line-height: 130%;
color: var(--white-100);
display: flex;
align-items: baseline;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;

export const Span = styled.div`
font-family: var(--font-family);
font-weight: 400;
font-size: 14px;
line-height: 130%;
color: var(--white-100);

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;

export const TitleNote = styled.div`
font-family: var(--font-family);
font-weight: 400;
font-size: 18px;
line-height: 130%;
color: var(--white-100);

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;



export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'highlight',
}) <{ highlight?: boolean }>`
  border-radius: 12px;
  padding: 12px 20px;
  width: 303px;
  height: 43px;

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

   transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ highlight }) =>
      highlight
        ? `0 0 30px rgba(101, 103, 239, 0.7), inset 0 0 15px rgba(73, 75, 236, 0.6)`
        : `0 4px 12px rgba(0, 0, 0, 0.1), inset 0 -4px 8px rgba(255, 255, 255, 0.05)`};
    background: ${({ highlight }) =>
      highlight
        ? `linear-gradient(180deg, rgb(82, 37, 189) 0%, rgba(255, 255, 255, 0.05) 100%)`
        : `linear-gradient(180deg, rgba(255, 255, 255, 0.16) 7%, rgba(255, 255, 255, 0.02) 86%)`};
  }

  &:active {
    transform: translateY(0);
    transition-duration: 0.1s;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }

 @media screen and (min-width: 768px) {
width: 100%;
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;


export const Note = styled.p`
  margin-top: 16px;
  font-family: var(--font-family);
font-weight: 400;
font-size: 18px;
line-height: 130%;
color: var(--white-100);
margin-bottom: 12px;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;

export const NoteList = styled.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 15px;
color: var(--white-60);
margin-bottom: 12px;
display: flex;
gap: 6px;
align-items: baseline;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;

export const IconCheck = styled.img`
width: 13px;
height: 13px;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;
