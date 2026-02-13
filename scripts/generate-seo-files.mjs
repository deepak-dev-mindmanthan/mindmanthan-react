import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import siteConfig from "../src/config/siteConfig.data.json" with { type: "json" };

const currentFile = fileURLToPath(import.meta.url);
const rootDir = path.resolve(path.dirname(currentFile), "..");
const publicDir = path.join(rootDir, "public");

const siteUrl = `${siteConfig.protocol}://${siteConfig.domain}`;
const now = new Date();
const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

const sitemapEntries = siteConfig.seo.sitemap
  .map(
    (entry) => `  <url>
    <loc>${siteUrl}${entry.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join("\n");

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>
`;

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemapXml, "utf8");
fs.writeFileSync(path.join(publicDir, "robots.txt"), robotsTxt, "utf8");

console.log("Generated public/sitemap.xml and public/robots.txt from siteConfig.data.json");
