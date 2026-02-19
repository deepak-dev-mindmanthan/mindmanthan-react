import { SITE_CONFIG, SITE_LOGO, SITE_OG_IMAGE, SITE_URL } from "./siteConfig";
import { ROUTES, getBlogDetailPath } from "../routes/routes";
import { BLOG_POSTS } from "../data/blogs";
import { CONTENT_CONFIG } from "./contentConfig";

export interface PageSEO {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  ogUrl?: string;
  ogSiteName?: string;
  robots?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  publishedTime?: string;
  modifiedTime?: string;
  schemaType?: 'Organization' | 'ProfessionalService' | 'Article' | 'WebPage';
}

const SITE_NAME = SITE_CONFIG.siteName;
const DEFAULT_OG_IMAGE = SITE_OG_IMAGE;
const BRAND_SUFFIX = `| ${SITE_NAME}`;
const withBrand = (title: string) => `${title} ${BRAND_SUFFIX}`;

const VIEW_PATHS: Record<string, string> = {
  home: ROUTES.home,
  "about-us": ROUTES.about,
  "why-us": ROUTES.whyUs,
  team: ROUTES.team,
  partners: ROUTES.partners,
  reviews: ROUTES.reviews,
  services: ROUTES.services,
  portfolio: ROUTES.portfolio,
  contact: ROUTES.contact,
  "privacy-policy": ROUTES.privacyPolicy,
  "terms-of-service": ROUTES.termsOfService,
  "case-studies": ROUTES.caseStudies,
  "insurance-case-study": ROUTES.insuranceCaseStudy,
  "coffee-case-study": ROUTES.coffeeCaseStudy,
  "london-travel-case-study": ROUTES.londonTravelCaseStudy,
  "iot-asset-case-study": ROUTES.iotAssetCaseStudy,
  "cloud-devops-case-study": ROUTES.cloudDevopsCaseStudy,
  "api-integration-case-study": ROUTES.apiIntegrationCaseStudy,
  "custom-software": ROUTES.customSoftware,
  "mobile-app": ROUTES.mobileApp,
  "api-integration-support": ROUTES.apiIntegrationSupport,
  "web-app": ROUTES.webApp,
  ecommerce: ROUTES.ecommerce,
  "ai-automation": ROUTES.aiAutomation,
  "iot-solutions": ROUTES.iotSolutions,
  "ios-development": ROUTES.iosDevelopment,
  "android-development": ROUTES.androidDevelopment,
  "digital-transformation": ROUTES.digitalTransformation,
  security: ROUTES.security,
  "cloud-devops": ROUTES.cloudDevops,
  consulting: ROUTES.consulting,
  events: ROUTES.events,
  "blog-archive": ROUTES.blog,
  "blog-detail": ROUTES.blog,
};

const getCanonicalUrl = (view: string, id?: number) => {
  if (view === "blog-detail" && id) {
    return `${SITE_URL}${getBlogDetailPath(id)}`;
  }
  const path = VIEW_PATHS[view] || "/";
  return `${SITE_URL}${path}`;
};

export const DEFAULT_SEO: PageSEO = {
  title: `${SITE_NAME} - Software Solutions`,
  description: SITE_CONFIG.siteDescription,
  keywords:
    "software development, mobile app development, web development, custom software, mobile apps, website development, iot, cloud devops, security, api integration",
  ogImage: DEFAULT_OG_IMAGE,
  ogType: "website",
  canonical: `${SITE_URL}/`,
  ogUrl: `${SITE_URL}/`,
  ogSiteName: SITE_NAME,
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  twitterCard: "summary_large_image",
  schemaType: 'Organization'
};

export const SEO_CONFIG: Record<string, PageSEO> = {
  home: {
    ...DEFAULT_SEO,
    title: `${SITE_NAME} - Innovative Software Solutions & Digital Transformation`,
    description:
      `${SITE_NAME} builds custom software, mobile apps, and digital platforms that help teams move faster and scale with confidence.`,
    canonical: getCanonicalUrl("home"),
    ogUrl: getCanonicalUrl("home"),
    schemaType: 'ProfessionalService'
  },
  'about-us': {
    ...DEFAULT_SEO,
    title: withBrand("About Us"),
    description: `Learn more about ${SITE_NAME}, our mission, values, and the expert team behind our award-winning software solutions.`,
    canonical: getCanonicalUrl("about-us"),
    ogUrl: getCanonicalUrl("about-us"),
    schemaType: 'WebPage'
  },
  'why-us': {
    ...DEFAULT_SEO,
    title: withBrand("Why Choose Us"),
    description: `Discover why businesses trust ${SITE_NAME} for their digital transformation and software development needs.`,
    canonical: getCanonicalUrl("why-us"),
    ogUrl: getCanonicalUrl("why-us"),
    schemaType: 'WebPage'
  },
  team: {
    ...DEFAULT_SEO,
    title: withBrand("Our Team"),
    description: `Meet the delivery leaders, engineers, and strategists behind ${SITE_NAME}.`,
    canonical: getCanonicalUrl("team"),
    ogUrl: getCanonicalUrl("team"),
    schemaType: 'WebPage'
  },
  partners: {
    ...DEFAULT_SEO,
    title: withBrand("Partners & Certifications"),
    description: `Technology partners, certifications, and delivery standards that power ${SITE_NAME} projects.`,
    canonical: getCanonicalUrl("partners"),
    ogUrl: getCanonicalUrl("partners"),
    schemaType: 'WebPage'
  },
  reviews: {
    ...DEFAULT_SEO,
    title: withBrand("Reviews & Awards"),
    description: `Client reviews, awards, and recognition for ${SITE_NAME} delivery excellence.`,
    canonical: getCanonicalUrl("reviews"),
    ogUrl: getCanonicalUrl("reviews"),
    schemaType: 'WebPage'
  },
  services: {
    ...DEFAULT_SEO,
    title: withBrand("Our Services"),
    description: "Explore our comprehensive range of software development services, from custom software to cloud solutions.",
    canonical: getCanonicalUrl("services"),
    ogUrl: getCanonicalUrl("services"),
    schemaType: 'ProfessionalService'
  },
  portfolio: {
    ...DEFAULT_SEO,
    title: withBrand("Portfolio"),
    description: "View our latest projects and see how we've helped businesses achieve their digital goals.",
    canonical: getCanonicalUrl("portfolio"),
    ogUrl: getCanonicalUrl("portfolio"),
    schemaType: 'WebPage'
  },
  contact: {
    ...DEFAULT_SEO,
    title: withBrand("Contact Us"),
    description: "Get in touch with us to discuss your next project. We're here to help you build your digital future.",
    canonical: getCanonicalUrl("contact"),
    ogUrl: getCanonicalUrl("contact"),
    schemaType: 'WebPage'
  },
  "privacy-policy": {
    ...DEFAULT_SEO,
    title: withBrand("Privacy Policy"),
    description: `Read how ${SITE_NAME} collects, processes, and safeguards personal and business data.`,
    canonical: getCanonicalUrl("privacy-policy"),
    ogUrl: getCanonicalUrl("privacy-policy"),
    schemaType: "WebPage",
  },
  "terms-of-service": {
    ...DEFAULT_SEO,
    title: withBrand("Terms of Service"),
    description: `Review the legal terms for using ${SITE_NAME} website and service engagements.`,
    canonical: getCanonicalUrl("terms-of-service"),
    ogUrl: getCanonicalUrl("terms-of-service"),
    schemaType: "WebPage",
  },
  'case-studies': {
    ...DEFAULT_SEO,
    title: withBrand("Case Studies"),
    description: "In-depth look at how we've solved complex challenges for our clients through innovative software solutions.",
    canonical: getCanonicalUrl("case-studies"),
    ogUrl: getCanonicalUrl("case-studies"),
    schemaType: 'WebPage'
  },
  'insurance-case-study': {
    ...DEFAULT_SEO,
    title: withBrand("Insurance Workflow Platform Case Study"),
    description: "See how we delivered a secure, scalable insurance platform with improved onboarding and claims workflows.",
    canonical: getCanonicalUrl("insurance-case-study"),
    ogUrl: getCanonicalUrl("insurance-case-study"),
    schemaType: 'WebPage'
  },
  'coffee-case-study': {
    ...DEFAULT_SEO,
    title: withBrand("Coffee Supply Chain Platform Case Study"),
    description: "Discover how we built an integrated coffee supply chain platform with IoT telemetry and operations automation.",
    canonical: getCanonicalUrl("coffee-case-study"),
    ogUrl: getCanonicalUrl("coffee-case-study"),
    schemaType: 'WebPage'
  },
  'london-travel-case-study': {
    ...DEFAULT_SEO,
    title: withBrand("Travel App Platform Case Study"),
    description: "Explore how we designed a travel platform that boosted conversions and streamlined booking.",
    canonical: getCanonicalUrl("london-travel-case-study"),
    ogUrl: getCanonicalUrl("london-travel-case-study"),
    schemaType: 'WebPage'
  },
  'iot-asset-case-study': {
    ...DEFAULT_SEO,
    title: withBrand("IoT Asset Monitoring Case Study"),
    description: "Read how we implemented real-time asset monitoring, alerts, and analytics using secure IoT architecture.",
    canonical: getCanonicalUrl("iot-asset-case-study"),
    ogUrl: getCanonicalUrl("iot-asset-case-study"),
    schemaType: 'WebPage'
  },
  'cloud-devops-case-study': {
    ...DEFAULT_SEO,
    title: withBrand("Cloud DevOps Modernization Case Study"),
    description: "See how we modernized cloud infrastructure with CI/CD, observability, and deployment automation.",
    canonical: getCanonicalUrl("cloud-devops-case-study"),
    ogUrl: getCanonicalUrl("cloud-devops-case-study"),
    schemaType: 'WebPage'
  },
  'api-integration-case-study': {
    ...DEFAULT_SEO,
    title: withBrand("API Integration Hub Case Study"),
    description: "Learn how we built a secure API integration layer for payments, notifications, and partner systems.",
    canonical: getCanonicalUrl("api-integration-case-study"),
    ogUrl: getCanonicalUrl("api-integration-case-study"),
    schemaType: 'WebPage'
  },
  'custom-software': {
    ...DEFAULT_SEO,
    title: withBrand("Custom Software Development"),
    description: "Bespoke software solutions tailored to your unique business needs and goals.",
    canonical: getCanonicalUrl("custom-software"),
    ogUrl: getCanonicalUrl("custom-software"),
    schemaType: 'ProfessionalService'
  },
  'mobile-app': {
    ...DEFAULT_SEO,
    title: withBrand("Mobile App Development"),
    description: "High-quality mobile applications for iOS and Android, built with the latest technologies.",
    canonical: getCanonicalUrl("mobile-app"),
    ogUrl: getCanonicalUrl("mobile-app"),
    schemaType: 'ProfessionalService'
  },
  'api-integration-support': {
    ...DEFAULT_SEO,
    title: withBrand("API Integration & Support"),
    description: "Secure API integration, custom API development, monitoring, optimization, and technical support services.",
    canonical: getCanonicalUrl("api-integration-support"),
    ogUrl: getCanonicalUrl("api-integration-support"),
    schemaType: 'ProfessionalService'
  },
  'web-app': {
    ...DEFAULT_SEO,
    title: withBrand("Web App Development"),
    description: "Scalable and performant web applications for modern businesses.",
    canonical: getCanonicalUrl("web-app"),
    ogUrl: getCanonicalUrl("web-app"),
    schemaType: 'ProfessionalService'
  },
  ecommerce: {
    ...DEFAULT_SEO,
    title: withBrand("E-commerce Solutions"),
    description: "Custom e-commerce platforms, secure checkout, payment integration, catalog management, and conversion-focused optimization.",
    canonical: getCanonicalUrl("ecommerce"),
    ogUrl: getCanonicalUrl("ecommerce"),
    schemaType: 'ProfessionalService'
  },
  "ai-automation": {
    ...DEFAULT_SEO,
    title: withBrand("AI Automations and Integration"),
    description: "AI automations, API-based integration with OpenAI, Gemini, and Claude, workflow orchestration, and operational support.",
    canonical: getCanonicalUrl("ai-automation"),
    ogUrl: getCanonicalUrl("ai-automation"),
    schemaType: 'ProfessionalService'
  },
  "iot-solutions": {
    ...DEFAULT_SEO,
    title: withBrand("IoT Solutions"),
    description: "Scalable IoT solutions with secure connectivity, real-time data processing, and operational dashboards.",
    canonical: getCanonicalUrl("iot-solutions"),
    ogUrl: getCanonicalUrl("iot-solutions"),
    schemaType: 'ProfessionalService'
  },
  'ios-development': {
    ...DEFAULT_SEO,
    title: withBrand("iOS Development"),
    description: "Expert iOS app development services for iPhone and iPad.",
    canonical: getCanonicalUrl("ios-development"),
    ogUrl: getCanonicalUrl("ios-development"),
    schemaType: 'ProfessionalService'
  },
  'android-development': {
    ...DEFAULT_SEO,
    title: withBrand("Android Development"),
    description: "Professional Android app development services for a wide range of devices.",
    canonical: getCanonicalUrl("android-development"),
    ogUrl: getCanonicalUrl("android-development"),
    schemaType: 'ProfessionalService'
  },
  'digital-transformation': {
    ...DEFAULT_SEO,
    title: withBrand("Digital Transformation"),
    description: "Modernize your business with our comprehensive digital transformation strategies.",
    canonical: getCanonicalUrl("digital-transformation"),
    ogUrl: getCanonicalUrl("digital-transformation"),
    schemaType: 'ProfessionalService'
  },
  security: {
    ...DEFAULT_SEO,
    title: withBrand("Security Solutions"),
    description: "Protect your digital assets with our advanced security and threat mitigation services.",
    canonical: getCanonicalUrl("security"),
    ogUrl: getCanonicalUrl("security"),
    schemaType: 'ProfessionalService'
  },
  "cloud-devops": {
    ...DEFAULT_SEO,
    title: withBrand("Cloud and DevOps Services"),
    description: "Cloud migration, CI/CD setup, containerization, and monitoring services for reliable software delivery.",
    canonical: getCanonicalUrl("cloud-devops"),
    ogUrl: getCanonicalUrl("cloud-devops"),
    schemaType: 'ProfessionalService'
  },
  consulting: {
    ...DEFAULT_SEO,
    title: withBrand("SEO & Growth Services"),
    description: "Technical SEO, on-page and off-page optimization, growth strategy, audits, and performance-focused digital consulting.",
    canonical: getCanonicalUrl("consulting"),
    ogUrl: getCanonicalUrl("consulting"),
    schemaType: 'ProfessionalService'
  },
  events: {
    ...DEFAULT_SEO,
    title: withBrand("Events"),
    description: `Stay up to date with the latest events and news from ${SITE_NAME}.`,
    canonical: getCanonicalUrl("events"),
    ogUrl: getCanonicalUrl("events"),
    schemaType: 'WebPage'
  },
  'blog-archive': {
    ...DEFAULT_SEO,
    title: withBrand("Blog"),
    description: "Insights, news, and trends from the world of software development and digital transformation.",
    canonical: getCanonicalUrl("blog-archive"),
    ogUrl: getCanonicalUrl("blog-archive"),
    schemaType: 'WebPage'
  },
  'not-found': {
    ...DEFAULT_SEO,
    title: withBrand("Page Not Found"),
    description: "The page you are looking for could not be found.",
    canonical: getCanonicalUrl("home"),
    ogUrl: getCanonicalUrl("home"),
    robots: "noindex, nofollow",
    schemaType: 'WebPage'
  },
};

interface BlogSeoItem {
  title: string;
  excerpt: string;
  author: string;
  date: string;
}

const toIsoDate = (displayDate: string) => {
  const parsed = new Date(displayDate);
  if (Number.isNaN(parsed.getTime())) return displayDate;
  return parsed.toISOString().slice(0, 10);
};

export const BLOGS: Record<number, BlogSeoItem> = Object.fromEntries(
  BLOG_POSTS.map((blog) => [
    blog.id,
    {
      title: blog.title,
      excerpt: blog.excerpt,
      author: blog.author,
      date: toIsoDate(blog.date),
    },
  ]),
) as Record<number, BlogSeoItem>;

export const getSEO = (view: string, id?: number): PageSEO => {
  if (view === 'blog-detail' && id && BLOGS[id]) {
    return {
      ...DEFAULT_SEO,
      title: `${BLOGS[id].title} | ${CONTENT_CONFIG.company.blogTitle}`,
      description: BLOGS[id].excerpt,
      canonical: getCanonicalUrl("blog-detail", id),
      ogUrl: getCanonicalUrl("blog-detail", id),
      schemaType: 'Article',
      publishedTime: BLOGS[id].date
    };
  }
  return SEO_CONFIG[view] || DEFAULT_SEO;
};

export const getSchema = (view: string, id?: number) => {
  const baseOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_NAME,
    "url": SITE_URL,
    "logo": SITE_LOGO,
    "sameAs": [
      SITE_CONFIG.facebookPage,
      SITE_CONFIG.instagramPage,
      SITE_CONFIG.linkedinPage,
      SITE_CONFIG.xPage,
      SITE_CONFIG.youtubeChannel,
      SITE_CONFIG.githubOrg,
      ...(SITE_CONFIG.additionalProfiles || [])
    ].filter(Boolean)
  };

  const pagePath = VIEW_PATHS[view] || "/";
  const pageUrl = getCanonicalUrl(view, id);
  const pageSeo = getSEO(view, id);

  const breadcrumbItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": `${SITE_URL}/`
    }
  ];
  if (pagePath !== "/") {
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": 2,
      "name": pageSeo.title.replace(` ${BRAND_SUFFIX}`, ""),
      "item": pageUrl
    });
  }

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageSeo.title,
    "description": pageSeo.description,
    "url": pageUrl,
    "isPartOf": {
      "@type": "WebSite",
      "name": SITE_NAME,
      "url": SITE_URL
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": pageSeo.ogImage || DEFAULT_OG_IMAGE
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems
  };

  if (view === 'home') {
    return [
      baseOrganization,
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": SITE_NAME,
        "url": SITE_URL,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${SITE_URL}/blog?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      },
      webPageSchema,
      breadcrumbSchema,
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How can I schedule a consultation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use the Schedule a Consultation link in the Resources menu or fill the contact form on our Contact page."
            }
          },
          {
            "@type": "Question",
            "name": "What services do you provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide custom software development, mobile apps, web applications, IoT solutions, cloud and DevOps, security, and API integration support."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with startups?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we partner with startups and enterprises to deliver scalable software products."
            }
          }
        ]
      }
    ];
  }

  if (view === 'blog-detail' && id && BLOGS[id]) {
    return [
      baseOrganization,
      webPageSchema,
      breadcrumbSchema,
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": BLOGS[id].title,
        "description": BLOGS[id].excerpt,
        "author": {
          "@type": "Person",
          "name": BLOGS[id].author
        },
        "datePublished": BLOGS[id].date,
        "publisher": baseOrganization
      }
    ];
  }

  const seo = SEO_CONFIG[view];
  if (seo?.schemaType === 'ProfessionalService') {
    return [
      baseOrganization,
      webPageSchema,
      breadcrumbSchema,
      {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": seo.title,
      "description": seo.description,
      "serviceType": seo.title.replace(` ${BRAND_SUFFIX}`, ""),
      "provider": baseOrganization,
      "url": pageUrl
      }
    ];
  }

  return [baseOrganization, webPageSchema, breadcrumbSchema];
};


