  import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageSEO, DEFAULT_SEO } from '../seoConfig';

interface SEOProps {
  seo?: PageSEO;
}

const SEO: React.FC<SEOProps> = ({ seo }) => {
  const {
    title = DEFAULT_SEO.title,
    description = DEFAULT_SEO.description,
    keywords = DEFAULT_SEO.keywords,
    ogImage = DEFAULT_SEO.ogImage,
    ogType = DEFAULT_SEO.ogType,
    canonical = DEFAULT_SEO.canonical,
    ogUrl = DEFAULT_SEO.ogUrl,
    ogSiteName = DEFAULT_SEO.ogSiteName,
    robots = DEFAULT_SEO.robots,
    twitterCard = DEFAULT_SEO.twitterCard,
    twitterSite = DEFAULT_SEO.twitterSite,
    twitterCreator = DEFAULT_SEO.twitterCreator,
    publishedTime = DEFAULT_SEO.publishedTime,
    modifiedTime = DEFAULT_SEO.modifiedTime,
  } = seo || {};

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {robots && <meta name="robots" content={robots} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      {ogSiteName && <meta property="og:site_name" content={ogSiteName} />}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard || "summary_large_image"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {twitterSite && <meta name="twitter:site" content={twitterSite} />}
      {twitterCreator && <meta name="twitter:creator" content={twitterCreator} />}

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="ssr-test" content="helmet-is-working-v5" />
    </Helmet>
  );
};

export default SEO;
