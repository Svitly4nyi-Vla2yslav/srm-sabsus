import "modern-normalize";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/geist-sans/400.css"; // Geist Regular
import "@fontsource/geist-sans/600.css"; // Geist SemiBold
import "@fontsource/geist-mono/600.css"; // Geist Mono SemiBold
import { css } from "@emotion/react";
import GeistRegular from "../public/fonts/Geist/Geist-Regular.ttf";
import GeistSemiBold from "../public/fonts/Geist/Geist-SemiBold.ttf"
import GeistMono from "../public/fonts/Geist_mono/GeistMono-SemiBold.ttf"
import JetBrainsMonoMedium from "../public/fonts/JetBrains/JetBrainsMono-Medium.ttf"
import JetBrainsMonoRegular from "../public/fonts/JetBrains/JetBrainsMono-Regular.ttf"
export const GlobalStyle = css`

  @font-face {
    font-family: 'Geist';
    src: url(${GeistRegular})  format("truetype");
    font-style: normal;
  }

  @font-face {
    font-family: 'Geist';
    src: url(${GeistSemiBold}) format("truetype");
    font-style: normal;
  }

  @font-face {
    font-family: 'Geist Mono';
    src: url(${GeistMono}) format("truetype");
    font-style: normal;
  }
  @font-face {
    font-family: 'JetBrainsMono Medium';
    src: url(${JetBrainsMonoMedium}) format("truetype");
    font-style: normal;
  }

  @font-face {
    font-family: 'JetBrainsMono Regular';
    src: url(${JetBrainsMonoRegular}) format("truetype");
    font-style: normal;
  }

  :root {
    --font-family: "Geist", sans-serif;
    --second-family: "JetBrains Mono", sans-serif;
    --third-family: "Geist Mono", sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --v1: calc(max(9vw, 11vh));
    scrollbar-width: none;
    word-wrap: break-word;
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
    font-family: "Geist", sans-serif;
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
    font-family: var(--second-family);
    background: linear-gradient(90deg, #e4e4e4 0%, #203a43 33.33%, #2c5364 66.66%, #e4e4e4 100%);
    background-size: 305% 100%;
    background-position: right bottom;
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
