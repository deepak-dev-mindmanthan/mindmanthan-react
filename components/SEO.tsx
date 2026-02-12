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
  } = seo || {};

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="ssr-test" content="helmet-is-working-v5" />
    </Helmet>
  );
};

export default SEO;
