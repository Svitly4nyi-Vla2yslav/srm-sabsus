import { styled } from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

export const BadgeWrapper = styled.div`
  position: relative;
  width: 127px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const AbsoluteBadge = styled.div`
  display: flex;
  max-width: 127px;
  height: 28px;
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
`;

export const BadgeContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  width: 100%;
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
  width: 136px;
  height: 28px;
  border: none;
  outline: none;
  justify-content: space-between;
`;

export const BadgeText = styled.p`
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.2em;
`;

export const Title = styled.p`
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.3em;
  text-align: center;
  width: 100%;
`;

export const Subtitle = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 15px;
  text-align: center;
  color: var(--white-60);
  text-align: center;
  width: 100%;
`;

export const Divider = styled.div`
  background: rgba(245, 228, 228, 0.25);
  width: 34px;
  height: 1px;
  transform: rotate(90deg);
`;

// Styled Components for the Swiper Slides
export const SlideContainer = styled.div`
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
`;

export const SlideHeader = styled.div`
  padding: 16px 22px 16px 22px;
  width: 343px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 0.35px solid #212121;

  backdrop-filter: blur(11.129203796386719px);
  box-shadow:
    0 6px 11px -6px rgba(0, 0, 0, 0.03),
    0 1px 3px -1px rgba(0, 0, 0, 0.08),
    inset 0 -6px 17px 0 rgba(255, 255, 255, 0.03),
    inset 0 -3px 4px 0 rgba(255, 255, 255, 0.03);
  background: rgba(255, 255, 255, 0.03);
  margin-bottom: 6px;
`;

export const SlideLogo = styled.img`
  width: 37px;
  height: 9px;
`;

export const SlideContent = styled.div`
  width: 343px;
  height: 492px;
  display: flex;
  position: relative; /* Додаємо для позиціонування дочірніх елементів */
  overflow: hidden; /* Щоб обрізати картинку за межами контейнера */
  border-radius: 0 0 28px 0; /* Закруглення лише знизу */
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
`;

export const LogoImage = styled.img`
  width: 82px;
  height: 11px;
`;
export const ToolGroup = styled.img`
  width: 79px;
  height: 19px;
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
`;

export const OverlayTitle = styled.h3`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 20px;
  line-height: 130%;
  text-align: center;
  color: var(--white-100);
  margin-bottom: 12px;
`;

export const OverlayText = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: var(--white-80);
  margin-bottom: 20px;
`;
