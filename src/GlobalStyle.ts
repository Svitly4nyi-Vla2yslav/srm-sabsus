import "modern-normalize";
import { css } from "@emotion/react";
import FontAwesome5Free from "../src/assets/fonts/fa-regular-400.ttf"
import Helvetica from "../src/assets/fonts/Helvetica.ttf"
import HelveticaBold from "../src/assets/fonts/Helvetica-Bold.ttf"
import HelveticaNeueRoman from "../src/assets/fonts/HelveticaNeueRoman.otf"
import Inter_18ptMedium from "../src/assets/fonts/Inter_18pt-Medium.ttf"
import Inter_18ptSemiBold from "../src/assets/fonts/Inter_18pt-SemiBold.ttf"
import Inter_24ptRegular from "../src/assets/fonts/Inter_24pt-Regular.ttf"
import PlusJakartaSans from "../src/assets/fonts/PlusJakartaSans[wght].ttf"

export const GlobalStyle = css`
  /* Font Awesome */
  @font-face {
    font-family: 'Font Awesome 5 Free';
    src: url(${FontAwesome5Free}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  /* Helvetica */
  @font-face {
    font-family: 'Helvetica';
    src: url(${Helvetica}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Helvetica';
    src: url(${HelveticaBold}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  /* Helvetica Neue */
  @font-face {
    font-family: 'Helvetica Neue';
    src: url(${HelveticaNeueRoman}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  /* Inter */
  @font-face {
    font-family: 'Inter';
    src: url(${Inter_18ptMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${Inter_18ptSemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${Inter_24ptRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  /* Plus Jakarta Sans */
  @font-face {
    font-family: 'Plus Jakarta Display';
    src: url(${PlusJakartaSans}) format('truetype-variations');
    font-weight: 100 900;
    font-style: normal;
  }

  /* SF Pro */
  @font-face {
    font-family: 'SF Pro';
    src: url('../src/assets/fonts/SFPRODISPLAYSEMIBOLDITALIC.OTF') format('opentype');
    font-weight: 600;
    font-style: italic;
  }

  :root {
    --black: #000;
    --purple-800: #1a1f37;
    --gray-500: #c4c4c4;
    --purple-400: #8082ff;
    --purple-500: #4c4eec;
    --white-50: rgba(255, 255, 255, 0.5);
    --white-75: rgba(255, 255, 255, 0.75);
    --white-80: rgba(255, 255, 255, 0.8);
    --white-60: rgba(255, 255, 255, 0.6);
    --white-25: rgba(255, 255, 255, 0.25);
    --white-70: rgba(255, 255, 255, 0.7);
    --white-6: rgba(255, 255, 255, 0.06);
    --white-24: rgba(255, 255, 255, 0.24);
    --white-30: rgba(255, 255, 255, 0.3);
    --white-100: #fff;
    
    /* Fonts */
    --font-family: "Inter", sans-serif;
    --second-family: "Plus Jakarta Display", sans-serif;
    --third-family: "Helvetica", sans-serif;
    --font3: "Font Awesome 5 Free", sans-serif;
    --font4: "Helvetica Neue", sans-serif;
    --font5: "SF Pro", sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --v1: calc(max(9vw, 11vh));
    scrollbar-width: none;
    word-wrap: break-word;
        z-index: 1;

  }

  body {
    font-family: var(--font-family);
    background-color: #000;
    color: #fff;
    min-height: 100vh;
    transition-duration: 300ms;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
    
  body.modal-open {
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    font-family: var(--second-family);
    color: #fff;
  }

  code {
    font-family: var(--second-family);
  }

  a {
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #808080;
      transition: all 0.3s ease-in-out;
    }
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }
  
  video {
    object-fit: contain;
    overflow-clip-margin: content-box;
    overflow: clip;
  }

  ul, li {
    list-style: none;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  html, body {
    height: -webkit-fill-available;
    font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
  }

  body::-webkit-scrollbar {
    display: none;
  }

  input, textarea, button {
    font-size: 16px;
    font-family: inherit;
  }

  @media (prefers-color-scheme: dark) {
    body {
      background-color: #000;
      color: #fff;
    }
  }

  @keyframes buttonAnimationOut {
    0% { background-position: center bottom; }
    99.99% { background-position: left bottom; }
    100% { background-position: right bottom; }
  }

  @keyframes move {
    from { transform: translateY(0%); }
    to { transform: translateY(-100%); }
  }
`;