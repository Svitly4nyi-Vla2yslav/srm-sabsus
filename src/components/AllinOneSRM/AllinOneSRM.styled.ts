import { styled } from "styled-components";

export const AllinOneSRMContainer = styled.div`
  margin-top: 150px;
  margin: 0 auto;
  /* Фікс для Safari - запобігає зламу верстки при скролі */
  -webkit-overflow-scrolling: touch;

    @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`

export const MainText = styled.p`
  margin: 0 auto;
  border-radius: 24px;
  padding: 4px 4px 4px 14px;
      width: max-content;
  height: 28px;
  display: flex;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  color: var(--white-100);
  justify-content: space-between;
  margin-bottom: 16px;
  margin-top: 50px;
  /* backdrop-filter може спричиняти проблеми з продуктивністю на iOS */
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px); /* Підтримка для Safari */
  box-shadow: 
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), 
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 
    0 8px 16px -8px rgba(0, 0, 0, 0.03), 
    0 2px 4px -2px rgba(0, 0, 0, 0.08);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%);
  align-items: center;
  
  /* Запобігає "липкому" стану при натисканні на iOS */
  -webkit-tap-highlight-color: transparent;

    @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;

export const MainTitle = styled.h2`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 36px;
  line-height: 110%;
  text-align: center;
  color: var(--white-100);
  margin-bottom: 16px;
  /* Фікс для автоматичного масштабування тексту на iOS */
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
    @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 26px;
  }
`;

export const MainTextDescription = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: var(--white-80);
  margin-bottom: 56px;
  /* Покращує рендеринг шрифтів на iOS */
  -webkit-font-smoothing: antialiased;
    @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
   max-width: 800px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 26px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  /* Фікс для Safari - запобігає зламу flex-контейнера */
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;

  @media screen and (min-width: 768px) {
    /* Стилі для планшетів (якщо потрібно) */
  }
  
  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto auto;
    gap: 20px;
    max-width: 1400px;
    margin: 0 auto;
    
    /* Перший ряд - 2 картки */
    & > :nth-child(1) {
      grid-column: 1;
      width: 151% ;
    }
    & > :nth-child(2) {
      grid-column: 2;
      width: 151% ;
       margin-left: 53%;
    }
    
    /* Другий ряд - 3 картки */
    & > :nth-child(3) {
      grid-column: 1;
      grid-row: 2;
    }
    & > :nth-child(4) {
      grid-column: 2;
      grid-row: 2;
    }
    & > :nth-child(5) {
      grid-column: 3;
      grid-row: 2;
    }
    
    /* Третій ряд - 2 картки */
    & > :nth-child(6) {
      grid-column: 1;
      grid-row: 3;
       width: 151% ;
    }
    & > :nth-child(7) {
      grid-column: 2;
      grid-row: 3;
        width: 151% ;
       margin-left: 53%;
    }
  }
`;

export const Card = styled.div`
  border: 1px solid #212121;
  border-radius: 24px;
  padding: 16px;
  width: 343px;
  min-height: 332px;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  /* backdrop-filter з підтримкою для Safari */
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), 
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 
    0 8px 16px -8px rgba(0, 0, 0, 0.03), 
    0 2px 4px -2px rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.03);
  
  /* Фікс для рендерингу тіней на iOS */
  transform: translateZ(0);

  @media screen and (min-width: 768px) {
    min-width: 343px;
    width: 100%;
    max-width: 740px;
    height: 388px; 
  }
  
  @media screen and (min-width: 1440px) {
    width: 100%;
    height: 388px; 
    margin: 0;
  }
`;

export const CardTitle = styled.h3`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  color: var(--white-100);
  margin-bottom: 8px;
  /* Покращує рендеринг тексту на Retina дисплеях */
  -webkit-font-smoothing: subpixel-antialiased;
    @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;

export const CardText = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  color: var(--white-80);
  margin-bottom: 20px;
position: relative;
    z-index: 101;
  -webkit-backdrop-filter: none;
  backdrop-filter: none;
  /* Запобігає "підскакуванню" тексту при завантаженні на iOS */
  -webkit-transform: translate3d(0,0,0);
    @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;

export const CardIcon = styled.img`
  width: 100%;
  height: 109px;
  margin: 15px auto 30px;
  border-radius: 12px;
  
  /* Оптимізовані стилі для фону */
  background: 
    rgba(255, 255, 255, 0.03),
    radial-gradient(156.48% 245.47% at 14.29% -16.72%, rgba(0, 0, 0, 0) 0%, #000 87.76%);
  
  /* Виправлення для iOS */
  -webkit-transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  image-rendering: -webkit-optimize-contrast;
  
  /* Оптимальне відображення зображення */
  object-fit: contain;
  object-position: center;
  
  /* Фікс для Retina-дисплеїв */
  @media (-webkit-min-device-pixel-ratio: 2) {
    image-rendering: crisp-edges;
  }
  
  /* Специфічні стилі для проблемних карток (3, 4, 7) */
  ${({ src }) => {
    if (src?.includes('card3') || src?.includes('card4') || src?.includes('card7')) {
      return `
        object-fit: contain;
        overflow: visible;
        padding: 0;
        -webkit-transform: translateZ(0) scale(0.95);
        transform: translateZ(0) scale(0.95);
        
        @media (max-width: 767px) {
          height: auto;
          max-height: 109px;
        }
      `;
    }
    return '';
  }}

    @media screen and (min-width: 768px) {
  height: 212px;
  }
  
  @media screen and (min-width: 1440px) {
    height: 160px;
  }
`;

export const CardButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
  /* Фікс для Safari flex-wrap багу */
  -webkit-box-pack: start;

    @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`;

export const CardButton = styled.p`
  border-radius: 24px;
  padding: 4px 8px 4px 8px; /* Уніфіковані відступи */
  width: auto;
  gap: 8px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  color: #ffffff; /* Використовуємо явний колір замість змінної для iOS */
  align-items: center;
  display: flex;
  height: 28px;
  position: relative; /* Для псевдоелементів */
  
  /* Оптимізований блюр для всіх браузерів */
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  
  /* Виправлені тіні для iOS */
  box-shadow: 
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), 
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 
    0 8px 16px -8px rgba(0, 0, 0, 0.03), 
    0 2px 4px -2px rgba(0, 0, 0, 0.08);
  
  /* Покращений градієнт з фолбеками */
  background-color: rgba(30, 30, 30, 0.5); /* Фон для браузерів без підтримки backdrop-filter */
  
  @supports (backdrop-filter: blur(16px)) or (-webkit-backdrop-filter: blur(16px)) {
    background: 
      linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%),
      rgba(255, 255, 255, 0.03);
  }
  
  /* Виправлення для Safari */
  @supports (-webkit-touch-callout: none) {
    background-color: rgba(40, 40, 40, 0.7);
    -webkit-backdrop-filter: saturate(180%) blur(16px);
  }
  
  /* Виправлення анімацій та інтерактивності */
  -webkit-transform: translateZ(0);
  -webkit-tap-highlight-color: transparent;
  transition: all 0.3s ease;
  
  /* Псевдоелемент для покращення відображення градієнта */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 24px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%);
    z-index: -1;
    opacity: 0.5;
  }
  
  /* Стан при наведенні */
  &:hover {
    background-color: rgba(50, 50, 50, 0.7);
    box-shadow: 
      inset 0 -8px 24px 0 rgba(255, 255, 255, 0.05), 
      inset 0 -5px 6px 0 rgba(255, 255, 255, 0.05), 
      0 8px 20px -8px rgba(0, 0, 0, 0.1), 
      0 4px 6px -2px rgba(0, 0, 0, 0.1);
  }
  
  /* Стан при натисканні */
  &:active {
    background-color: rgba(60, 60, 60, 0.7);
    transform: scale(0.98);
  }

@media screen and (min-width: 768px) {

}

@media screen and (min-width: 1440px) {

}
`;

export const CardButtonText = styled.img`
  border-radius: 25px;
  padding: 4px;
  overflow: visible;
  font-size: 13px;
  width: 20px;
  margin-left: 6px;
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
