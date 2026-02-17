import rawSiteConfig from "./siteConfig.data.json";

export const SITE_CONFIG = rawSiteConfig;

export const SITE_URL = `${SITE_CONFIG.protocol}://${SITE_CONFIG.domain}`;
export const SITE_LOGO = `${SITE_URL}${SITE_CONFIG.logoPath}`;
export const SITE_OG_IMAGE = `${SITE_URL}${SITE_CONFIG.defaultOgImagePath}`;

