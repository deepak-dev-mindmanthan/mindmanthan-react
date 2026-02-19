import React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { PassThrough } from 'node:stream';
import { HelmetProvider } from 'react-helmet-async';
import type { HelmetServerState } from 'react-helmet-async/lib/types';
import { StaticRouter } from 'react-router';
import App from './App';

export function render(url: string) {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const { renderToPipeableStream } = ReactDOMServer;

  return new Promise<{ html: string; helmet: HelmetServerState | undefined }>(
    (resolve, reject) => {
      let didStream = false;

      const stream = renderToPipeableStream(
        <React.StrictMode>
          <HelmetProvider context={helmetContext}>
            <StaticRouter location={url}>
              <App />
            </StaticRouter>
          </HelmetProvider>
        </React.StrictMode>,
        {
          onAllReady() {
            if (didStream) return;
            didStream = true;

            const body = new PassThrough();
            let html = '';

            body.on('data', (chunk: unknown) => {
              html += String(chunk);
            });
            body.on('end', () => {
              resolve({ html, helmet: helmetContext.helmet });
            });
            body.on('error', reject);

            stream.pipe(body);
          },
          onShellError(error) {
            reject(error);
          },
          onError(error) {
            console.error(error);
          },
        },
      );

      setTimeout(() => {
        if (!didStream) {
          stream.abort();
          reject(new Error('SSR stream aborted due to timeout'));
        }
      }, 10000);
    },
  );
}


