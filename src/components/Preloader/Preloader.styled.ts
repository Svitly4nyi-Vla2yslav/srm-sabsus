// import styled, { keyframes } from "styled-components";

// // Анімації для тексту
// export const slideInFromLeft = keyframes`
//   from {
//     transform: translateX(-100%);
//     opacity: 0;
//   }
//   to {
//     transform: translateX(0);
//     opacity: 1;
//   }
// `;

// export const slideInFromRight = keyframes`
//   from {
//     transform: translateX(100%);
//     opacity: 0;
//   }
//   to {
//     transform: translateX(0);
//     opacity: 1;
//   }
// `;

// export const fadeOut = keyframes`
//   from {
//     opacity: 1;
//   }
//   to {
//     opacity: 0;
//   }
// `;

// // Контейнер для Preloader
// export const PreloaderContainer = styled.div<{ fadeOut: boolean }>`
//   display: ${({ fadeOut }) => (fadeOut ? "none" : "flex")};
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: #0f2027; /* Темний фон */
//   z-index: 9999;
//   animation: ${({ fadeOut }) => fadeOut && fadeOut} 1s forwards;
// `;

// // Логотип
// export const Logo = styled.img`
//   width: 150px;
//   height: auto;
//   margin-bottom: 1rem;
// `;

// // Текст
// export const AnimatedText = styled.p<{ animation: any; delay: string }>`
//   font-size: 1.5rem;
//   color: #00ffe7;
//   margin: 0;
//   opacity: 0;
//   animation: ${({ animation }) => animation} 1s ease-out forwards;
//   animation-delay: ${({ delay }) => delay};
// `;
