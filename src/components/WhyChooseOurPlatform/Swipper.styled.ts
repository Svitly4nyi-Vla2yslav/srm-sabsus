import { styled } from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: center;
  gap: 40px;

    @media screen and (min-width: 768px) {
    border-top: 1px solid var(--white-60);
    padding-top: 40px;
    display: flex;
    flex-direction: row;
    gap: 0px;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: baseline;
    margin: 0 auto: 
    max-width: 740px;
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
max-width: 1130px;
margin: 0 auto;
  }
`;

export const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;

    @media screen and (min-width: 768px) {

  }

  @media screen and (min-width: 1440px) {

  }
`;

export const BadgeWrapper = styled.div`
  position: relative;
  width: 127px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

    @media screen and (min-width: 768px) {

  }

  @media screen and (min-width: 1440px) {

  }
`;

export const AbsoluteBadge = styled.div`
  display: flex;
  max-width: 127px;
  height: 28px;

@media screen and (min-width: 768px) {

}

@media screen and (min-width: 1440px) {

}
`;

export interface BadgeOutlineProps {
  opacity?: number | string;
}

export const BadgeOutline = styled.div<BadgeOutlineProps>`
  position: absolute;
  width: 127px;
  height: 28px;
  border-radius: 24px;
  display: flex;
  opacity: ${props => props.opacity || 0};

@media screen and (min-width: 768px) {

}

@media screen and (min-width: 1440px) {

}
`;

export const BadgeContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
   width: fit-content;
   gap: 6px;

@media screen and (min-width: 768px) {

}

@media screen and (min-width: 1440px) {

}
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 80%;
  top: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;

  border-radius: 25px;
  padding: 4px;
  width: 22px;
  height: 22px;
  font-size: 13px;
  box-shadow:
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.18),
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03),
    0 8px 16px -8px rgba(0, 0, 0, 0.03),
    0 2px 4px -2px rgba(0, 0, 0, 0.08),
    0 0px 20px rgba(464, 367, 391, 0.99);
  background: linear-gradient(
      315deg,
      rgba(141, 136, 143, 0.58) 7%,
      rgba(79, 74, 82, 0.86)
    )
    rgba(255, 255, 255, 0.03);
@media screen and (min-width: 768px) {

}

@media screen and (min-width: 1440px) {

}
`;

export const BadgeButton = styled.button`
  cursor: pointer;
  display: flex;
  padding: 4px 4px 4px 18px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 24px;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.12) 7%,
      rgba(255, 255, 255, 0) 86%
    ),
    rgba(255, 255, 255, 0.03);
  box-shadow:
    0px 2px 4px -2px rgba(0, 0, 0, 0.08),
    0px 8px 16px -8px rgba(0, 0, 0, 0.03),
    0px -5px 6px 0px rgba(255, 255, 255, 0.03) inset,
    0px -8px 24px 0px rgba(255, 255, 255, 0.03) inset;
  width: 140px;
  height: 28px;
  border: none;
  outline: none;
  justify-content: space-between;
  position: relative; // Додаємо для псевдоелемента

  @media screen and (min-width: 768px) {
    &::after {
      content: '';
      position: absolute;
      bottom: 67px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 3px;
      box-shadow: inset 0 0 20px 0 rgba(191, 123, 246, 0.7), inset 0 -10px 25px 0 rgba(255, 255, 255, 0.15), inset 0 -5px 10px 0 rgba(255, 255, 255, 0.1), 0 0 10px 6px rgba(191, 123, 246, 0.4), 0 15px 30px -10px rgba(0, 0, 0, 0.25), 0 5px 10px -5px rgba(0, 0, 0, 0.2);
      background: linear-gradient(90deg, #BF7BF6 0%, #6A6BFF 100%);
      transition: width 0.3s ease;
    }

    &.active::after,
    &[aria-selected="true"]::after {
      width: 100%;
    }
  }

  @media screen and (min-width: 1440px) {
    &::after {
    // bottom: 67px;
    }
  }
`;

export const BadgeText = styled.p`
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.2em;
 padding-right: 10px;

 @media screen and (min-width: 768px) {

}

@media screen and (min-width: 1440px) {

}
`;

export const Title = styled.p`
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.3em;
  text-align: center;
  width: 100%;

@media screen and (min-width: 768px) {

}

@media screen and (min-width: 1440px) {

}
`;

export const Subtitle = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 15px;
  text-align: center;
  color: var(--white-60);
  text-align: center;
  width: 100%;
@media screen and (min-width: 768px) {

}

@media screen and (min-width: 1440px) {

}
`;

export const Divider = styled.div`
  background: rgba(245, 228, 228, 0.25);
  width: 34px;
  height: 1px;
  transform: rotate(90deg);

  @media screen and (min-width: 768px) {
width: 501px;
    height: 2px;
}

@media screen and (min-width: 1440px) {

}
`;

// Styled Components for the Swiper Slides
export const SlideContainer = styled.div`
margin: 0 auto;
  width: 343px;
  height: 545px;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(11.129203796386719px);
  box-shadow:
    0 6px 11px -6px rgba(0, 0, 0, 0.03),
    0 1px 3px -1px rgba(0, 0, 0, 0.08),
    inset 0 -6px 17px 0 rgba(255, 255, 255, 0.03),
    inset 0 -3px 4px 0 rgba(255, 255, 255, 0.03);
  background: rgba(255, 255, 255, 0.03);
  border-radius: 28px ;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60%;
    box-shadow: inset 0 -100px 50px -30px rgba(0, 0, 0, 0.65);
    // backdrop-filter: blur(12px);
    z-index: 1;

    pointer-events: none;
  }

 @media screen and (min-width: 768px) {
max-width: 740px;
width: 100%;
margin: 0 auto;

}

@media screen and (min-width: 1440px) {
max-width: 1130px;
} 
`;

export const SlideHeader = styled.div`
  padding: 16px 22px;
  width: 100%;
  max-width: 343px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 0.35px solid rgba(33, 33, 33, 0.7); /* Прозорість для iOS */

  /* Оптимізовані стилі для iOS */
  -webkit-backdrop-filter: blur(11px); /* Префікс для Safari */
  backdrop-filter: blur(11px);
  
  /* Оптимізовані тіні для iOS */
  box-shadow:
    0 6px 11px -6px rgba(0, 0, 0, 0.03),
    0 1px 3px -1px rgba(0, 0, 0, 0.08),
    inset 0 -6px 17px 0 rgba(255, 255, 255, 0.03),
    inset 0 -3px 4px 0 rgba(255, 255, 255, 0.03);
  
  /* Оптимізований фон для iOS */
  background-color: rgba(255, 255, 255, 0.03);
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.03),
    rgba(255, 255, 255, 0.01)
  );
  
  margin-bottom: 6px;

  /* Виправлення для Safari */
  @supports (-webkit-touch-callout: none) {
    background-color: rgba(0, 0, 0, 0.86); /* Фолбек для iOS */
    -webkit-backdrop-filter: saturate(180%) blur(11px);
  }

  @media screen and (min-width: 768px) {
    max-width: 740px;
    width: 100%;
    margin: 0 auto;
    padding: 16px 24px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1130px;
    padding: 16px 32px;
  }
`;

export const SlideLogo = styled.img`
  width: 37px;
  height: 9px;

  @media screen and (min-width: 768px) {

}

@media screen and (min-width: 1440px) {

}
`;

export const SlideContent = styled.div`
  width: 343px;
  height: 492px;
  display: flex;
  position: relative; /* Додаємо для позиціонування дочірніх елементів */
  overflow: hidden; /* Щоб обрізати картинку за межами контейнера */
  border-radius: 0 0 28px 0; /* Закруглення лише знизу */


 @media screen and (min-width: 768px) {
max-width: 740px;
width: 100%;
margin: 0 auto;

}

@media screen and (min-width: 1440px) {
max-width: 1130px;
} 
`;
export const SlideImage = styled.div<{ $image: string }>`
  position: absolute;
  top: 0; /* Фіксуємо зверху */
  left: -1%; /* Фіксуємо зліва */
  width: 100vh;
  height: 100%;
  background-image: url(${props => props.$image});
  background-size: cover;
  background-position: start;
  background-repeat: no-repeat;

 @media screen and (min-width: 768px) {
max-width: 740px;
width: 100%;
margin: 0 auto;

}

@media screen and (min-width: 1440px) {
max-width: 1130px;
} 
`;

export const LogoImage = styled.img`
  width: 82px;
  height: 11px;


`;
export const ToolGroup = styled.img`
  width: 79px;
  height: 19px;
  @media screen and (min-width: 768px) {

}

@media screen and (min-width: 1440px) {

}
`;

export const ContentOverlay = styled.div`
  position: absolute;
  bottom: 0%;
  left: 0;
  right: 0;
  height: 74%;
  padding: 20px;
  backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(10px);
    background: linear-gradient(360deg, rgba(0, 0, 0, 0.9) 10%, rgba(0, 0, 0, 0.2) 100%);
  background: linear-gradient(360deg, #000 10%, rgba(0, 0, 0, 0.1) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  @media screen and (min-width: 768px) {

}

@media screen and (min-width: 1440px) {

}
`;

export const Overlay = styled.div`

`;

export const OverlayTitle = styled.h3`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 20px;
  line-height: 130%;
  text-align: center;
  color: var(--white-100);
  margin-bottom: 12px;
 @media screen and (min-width: 768px) {

}

@media screen and (min-width: 1440px) {

}
`;

export const OverlayText = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: var(--white-80);
  margin-bottom: 20px;
@media screen and (min-width: 768px) {

}

@media screen and (min-width: 1440px) {

}
`;
