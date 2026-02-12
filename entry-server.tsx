import React from 'react';
import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

export function render(url: string) {
  const helmetContext = {};
  const html = renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <App initialPath={url} />
      </HelmetProvider>
    </React.StrictMode>
  );
  const { helmet } = helmetContext as any;
  return { html, helmet };
}
