import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle.ts';
import { App } from './App.tsx';
import { Global } from '@emotion/react';
import React from 'react';
import './i18n';
import 'aos/dist/aos.css';
import 'modern-normalize/modern-normalize.css';
import { LanguageProvider } from './components/LanguageSwitcher/LanguageContext';

// ✅ NEW: Unhead for React 19
import { createHead, UnheadProvider } from '@unhead/react/client';

const head = createHead();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UnheadProvider head={head}>
      <Global styles={GlobalStyle} />
      <BrowserRouter basename="/">
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </BrowserRouter>
    </UnheadProvider>
  </React.StrictMode>
);
