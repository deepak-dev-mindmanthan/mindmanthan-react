import React from 'react';
import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import type { HelmetServerState } from 'react-helmet-async/lib/types';
import { StaticRouter } from 'react-router';
import App from './App';

export function render(url: string) {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </React.StrictMode>
  );
  const { helmet } = helmetContext;
  return { html, helmet };
}

