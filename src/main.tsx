import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle.ts';
import { App } from './App.tsx';
import { Global } from '@emotion/react';
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global styles={GlobalStyle} />
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
