export const SITE_CONFIG = {
  domain: "mindmanthansoftwaresolutions.com",
  protocol: "https",
  siteName: "Mind Manthan",
  siteDescription:
    "Mind Manthan delivers custom software development, mobile and web apps, and digital transformation services for growing businesses.",
  logoPath: "/assets/images/mindmanthan.webp",
  defaultOgImagePath: "/assets/images/mindmanthan.webp",
  twitterHandle: "",
  facebookPage: "",
  instagramPage: "",
  linkedinPage: "",
  youtubeChannel: "",
  githubOrg: "",
  additionalProfiles: [] as string[],
  business: {
    type: "Software Company",
    phone: "",
    email: "",
    address: {
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: ""
    },
    serviceAreas: [] as string[],
    hours: ""
  }
};

export const SITE_URL = `${SITE_CONFIG.protocol}://${SITE_CONFIG.domain}`;
export const SITE_LOGO = `${SITE_URL}${SITE_CONFIG.logoPath}`;
export const SITE_OG_IMAGE = `${SITE_URL}${SITE_CONFIG.defaultOgImagePath}`;
