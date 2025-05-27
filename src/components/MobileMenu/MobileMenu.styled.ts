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
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;

      @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

export const Line = styled(motion.div)`
  width: 30px;
  height: 4px;
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
  align-items: center;
  flex-direction: column;
  z-index: 1;
  overflow-y: auto;

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
font-weight: 400;
font-size: 24px;
line-height: 135%;
text-align: center;
color: var(--white);
  margin: 12px 0;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.8s;
  &:hover {
    color: #fe5b14;
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