import { styled } from "styled-components";

export const AllinOneSRMContainer = styled.div`
  margin-top: 150px;
  margin: 0 auto;
  /* Фікс для Safari - запобігає зламу верстки при скролі */
  -webkit-overflow-scrolling: touch;
`

export const MainText = styled.p`
  margin: 0 auto;
  border-radius: 24px;
  padding: 4px 4px 4px 14px;
  width: 243px;
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
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  /* Фікс для Safari - запобігає зламу flex-контейнера */
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
`;

export const Card = styled.div`
  border: 1px solid #212121;
  border-radius: 24px;
  padding: 16px;
  width: 343px;
  height: 332px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  
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
`;

export const CardText = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  color: var(--white-80);
  margin-bottom: 20px;
  /* Запобігає "підскакуванню" тексту при завантаженні на iOS */
  -webkit-transform: translate3d(0,0,0);
`;

export const CardIcon = styled.img`
  width: 100%;
  overflow: visible;
  height: 109px;
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 30px;
  border-radius: 12px;
  background: 
    rgba(255, 255, 255, 0.03), 
    radial-gradient(156.48% 245.47% at 14.29% -16.72%, rgba(0, 0, 0, 0) 0%, #000 87.76%);
  
  /* Фікс для рендерингу зображень на iOS */
  -webkit-transform-style: preserve-3d;
  image-rendering: -webkit-optimize-contrast;
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
`;

export const CardButton = styled.p`
  border-radius: 24px;
  padding: 4px 4px 4px 8px;
  width: auto;
  gap: 8px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  color: var(--white-100);
  align-items: center;
  display: flex;
  height: 28px;
  /* backdrop-filter з підтримкою для Safari */
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), 
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 
    0 8px 16px -8px rgba(0, 0, 0, 0.03), 
    0 2px 4px -2px rgba(0, 0, 0, 0.08);
  background: 
    linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%),
    rgba(255, 255, 255, 0.03);
  
  /* Фікс для плавності анімацій на iOS */
  -webkit-transform: translateZ(0);
  /* Запобігає "липкому" стану при натисканні */
  -webkit-tap-highlight-color: transparent;
`;

export const CardButtonText = styled.img`
  border-radius: 25px;
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
