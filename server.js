import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProd = process.env.NODE_ENV === 'production';

async function createServer() {
  const app = express();

  let vite;
  if (!isProd) {
    console.log('Running in DEVELOPMENT mode');
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom'
    });
    app.use(vite.middlewares);
  } else {
    console.log('Running in PRODUCTION mode');
    const compression = (await import('compression')).default;
    const serveStatic = (await import('serve-static')).default;
    
    app.use(compression());
    app.use(
      serveStatic(path.resolve(__dirname, 'dist/client'), {
        index: false
      })
    );
  }

  app.use(async (req, res, next) => {
    const url = req.originalUrl;

    // Skip requests for static assets (files with extensions) to avoid FOUC and unnecessary SSR
    if (url.includes('.') && !url.endsWith('.html')) {
      return next();
    }

    try {
      let template, render;
      if (!isProd) {
        template = await fs.readFile(
          path.resolve(__dirname, 'index.html'),
          'utf-8'
        );
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
      } else {
        console.log(`[SSR] Serving "${url}" using build files from /dist`);
        template = await fs.readFile(
          path.resolve(__dirname, 'dist/client/index.html'),
          'utf-8'
        );
        // Using pathToFileURL to ensure correct path handling on Windows for ESM import
        const renderPath = pathToFileURL(path.resolve(__dirname, 'dist/server/entry-server.js')).href;
        render = (await import(renderPath)).render;
      }

      const { html: appHtml, helmet } = await render(url);

      const headTags = `${helmet.title.toString()}${helmet.meta.toString()}${helmet.link.toString()}${helmet.script.toString()}`;
      
      console.log(`[SSR] Injecting head tags for ${url}: ${headTags.length} chars`);

      let html = template.replace(`<!--ssr-outlet-->`, appHtml);

      if (html.includes('<!--ssr-head-tags-->')) {
        html = html.replace('<!--ssr-head-tags-->', headTags);
      } else {
        html = html.replace('</head>', `${headTags}</head>`);
      }

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      !isProd && vite.ssrFixStacktrace(e);
      console.error(e.stack);
      res.status(500).end(e.stack);
    }
  });

  const port = process.env.PORT || 5173;
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

createServer();
