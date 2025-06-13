import styled from "styled-components";

export const BackroundGradient = styled.div`
  position: absolute; // або absolute, якщо потрібно відносно батьківського контейнера
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vh;
  height: 180vw;
  border-radius: 50%;
  background: radial-gradient(
    ellipse at center,
    var(--purple-500) 0%,
    rgba(76, 78, 236, 0.1) 100%,
    transparent 100%
  );
  filter: blur(180px);
  z-index: -5000; // щоб був під основним контентом
  opacity: 0.5;
`;

export const ContainerStart = styled.div`
position: relative;
  margin: 0 auto;
  /* Фікс для Safari - запобігає зламу верстки при скролі */
  -webkit-overflow-scrolling: touch;
margin-top: 100px;
margin-bottom: 154px;
z-index: 1;
`;

export const StartTitle = styled.h2`
width: 343px;
height: 80px;
margin: 0 auto;
font-family: var(--font-family);
font-weight: 600;
font-size: 36px;
line-height: 110%;
text-align: center;
background: linear-gradient(142deg, #fff 0%, #f7f8fd 28.77%, #b6b8ee 40.91%, #6a82fc 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
margin-bottom: 24px;
`;

export const StartText =  styled.p`
width: 343px;
height: 80px;
margin: 0 auto;
font-family: var(--font-family);
font-weight: 400;
font-size: 16px;
text-align: center;
color: var(--white-75);
margin-bottom: 24px;
`;

