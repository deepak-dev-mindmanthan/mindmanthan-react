export const ROUTES = {
  home: "/",
  about: "/about-us",
  whyUs: "/why-us",
  services: "/services",
  portfolio: "/portfolio",
  contact: "/contact",
  caseStudies: "/case-studies",
  insuranceCaseStudy: "/case-studies/insurance",
  coffeeCaseStudy: "/case-studies/coffee",
  londonTravelCaseStudy: "/case-studies/london-travel",
  customSoftware: "/custom-software",
  mobileApp: "/mobile-app",
  apiIntegrationSupport: "/api-integration-support",
  webApp: "/web-app",
  iotSolutions: "/iot-solutions",
  iosDevelopment: "/ios-development",
  androidDevelopment: "/android-development",
  digitalTransformation: "/digital-transformation",
  security: "/security",
  cloudDevops: "/cloud-devops",
  consulting: "/consulting",
  events: "/events",
  blog: "/blog",
  blogDetail: "/blog/:id",
};

export const getBlogDetailPath = (id: number | string) => `/blog/${id}`;

