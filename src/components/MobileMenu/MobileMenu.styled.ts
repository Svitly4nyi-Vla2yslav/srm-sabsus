import { motion } from "framer-motion";
import styled from "styled-components";

// Styled Components
export const Wrapper = styled.div`
    display: flex;
    align-items: center;

        @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){
display: none;

}
`;

export const BurgerButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
    border-radius: 12px;
    padding: 8px;
    width: 36px;
    height: 36px;
    cursor: pointer;
    z-index: 10;
    backdrop-filter: blur(16px);
box-shadow: inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 0 8px 16px -8px rgba(0, 0, 0, 0.03), 0 2px 4px -2px rgba(0, 0, 0, 0.08);
background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%);
border: none;
      @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

export const Line = styled(motion.div)`
 width: 20px;
height: 2px;
background: white;
border-radius: 2px;
z-index: 10;

@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

export const MenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.96);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  z-index: 1;
  overflow-y: auto;
  padding-left: 16px;

      @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

export const ButtonWrapp = styled.div`
position: absolute;
width: 300px;
 left: 50%;
 transform: translateX(-50%);
 bottom: 10%;

     @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

export const MenuLink = styled(motion.span)`
font-family: var(--font-family);
font-weight: 500;
font-size: 56px;
line-height: 100%;
color: var(--white-50);
  margin: 12px 0;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.8s;
  &:hover {
    color:rgb(255, 255, 255);
  }

      @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){
font-family: var(--font-family);
font-weight: 400;
font-size: 18px;
line-height: 135%;
text-align: center;
color: var(--white);

}
`;

export const IconsStars =  styled.img`
width: 20px;

`;