import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle.ts';
import { App} from './App.tsx';
import { Global } from '@emotion/react';
import React from 'react';
import './i18n';
import 'aos/dist/aos.css';
import 'modern-normalize/modern-normalize.css';
import { LanguageProvider } from './components/LanguageSwitcher/LanguageContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global styles={GlobalStyle} />
    <BrowserRouter basename="/">
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
