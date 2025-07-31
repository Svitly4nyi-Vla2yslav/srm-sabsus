import { motion } from 'framer-motion';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: transparent;
`;

const Logo = styled(motion.svg).attrs({
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      ease: "linear",
      duration: 2
    }
  }
})`
  width: 164px;
  height: 164px;
  margin-bottom: 16px;
`;

const LoadingText = styled(motion.div)`
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.05em;
`;

const textAnimation = {
  animate: {
    opacity: [0.3, 1, 0.3],
    transition: {
      duration: 1.5,
      repeat: Infinity,
    },
  },
};

const LoadingScreen = () => {
  return (
    <LoaderContainer>
      <Logo
        viewBox="0 0 48 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22.8291 0.924989L36.4462 0.924988L47.8504 19.5085H43.2727L34.1573 4.515H30.2164L38.6946 19.5085H25.0516L13.6572 0.924989L18.2351 0.924989L27.3405 15.7747H31.5386L22.8291 0.924989Z" fill="white" />
        <path d="M18.2352 32.127L25.0517 21.0014H47.8503L45.5614 24.7353H27.3406L24.9737 28.5226L43.2723 28.469L36.4458 39.5945H13.6572L15.9462 35.8513H34.1569L36.4539 32.1143L18.2352 32.127Z" fill="white" />
        <path d="M7.49353 31.38L0.666992 20.2545L12.0714 1.67105L14.3603 5.3953L5.25483 20.2545L7.58711 24.0574L16.6492 9.13867L23.4657 20.2547L12.0714 38.8476L9.78249 35.1045L18.8879 20.2547L16.6332 16.4063L7.49353 31.38Z" fill="white" />
      </Logo>

      <LoadingText {...textAnimation}></LoadingText>
    </LoaderContainer>
  );
};

export default LoadingScreen;