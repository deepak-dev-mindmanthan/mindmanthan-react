import { SITE_CONFIG } from "./siteConfig";

const currentYear = new Date().getFullYear();

export const CONTENT_CONFIG = {
  company: {
    shortName: SITE_CONFIG.siteName,
    legalName: `${SITE_CONFIG.siteName} Software Solutions`,
    blogAuthor: `${SITE_CONFIG.siteName} Editorial`,
    blogTitle: `${SITE_CONFIG.siteName} Blog`,
    copyrightStartYear: 2024,
    copyrightEndYear: currentYear,
  },
  cta: {
    contactUs: "Contact Us",
    scheduleConsultation: "Schedule a Free Consultation",
    getInTouch: "Get in touch",
  },
} as const;

export const getCopyrightYears = () => {
  const { copyrightStartYear, copyrightEndYear } = CONTENT_CONFIG.company;
  return copyrightStartYear === copyrightEndYear
    ? `${copyrightStartYear}`
    : `${copyrightStartYear}-${copyrightEndYear}`;
};
