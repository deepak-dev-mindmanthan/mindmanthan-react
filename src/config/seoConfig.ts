import { SITE_CONFIG, SITE_LOGO, SITE_OG_IMAGE, SITE_URL } from "./siteConfig";
import { ROUTES, getBlogDetailPath } from "../routes/routes";

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

const VIEW_PATHS: Record<string, string> = {
  home: ROUTES.home,
  "about-us": ROUTES.about,
  "why-us": ROUTES.whyUs,
  services: ROUTES.services,
  portfolio: ROUTES.portfolio,
  contact: ROUTES.contact,
  "case-studies": ROUTES.caseStudies,
  "insurance-case-study": ROUTES.insuranceCaseStudy,
  "coffee-case-study": ROUTES.coffeeCaseStudy,
  "london-travel-case-study": ROUTES.londonTravelCaseStudy,
  "custom-software": ROUTES.customSoftware,
  "mobile-app": ROUTES.mobileApp,
  "staff-augmentation": ROUTES.staffAugmentation,
  "web-app": ROUTES.webApp,
  blockchain: ROUTES.blockchain,
  "ios-development": ROUTES.iosDevelopment,
  "android-development": ROUTES.androidDevelopment,
  "digital-transformation": ROUTES.digitalTransformation,
  security: ROUTES.security,
  fintech: ROUTES.fintech,
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
  title: "Mind Manthan - Software Solutions",
  description: SITE_CONFIG.siteDescription,
  keywords:
    "software development, mobile app development, web development, custom software, digital transformation, cybersecurity, fintech",
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
    title: "Mind Manthan - Innovative Software Solutions & Digital Transformation",
    description:
      "Mind Manthan builds custom software, mobile apps, and digital platforms that help teams move faster and scale with confidence.",
    canonical: getCanonicalUrl("home"),
    ogUrl: getCanonicalUrl("home"),
    schemaType: 'ProfessionalService'
  },
  'about-us': {
    ...DEFAULT_SEO,
    title: "About Us | Mind Manthan",
    description: "Learn more about Mind Manthan, our mission, values, and the expert team behind our award-winning software solutions.",
    canonical: getCanonicalUrl("about-us"),
    ogUrl: getCanonicalUrl("about-us"),
    schemaType: 'WebPage'
  },
  'why-us': {
    ...DEFAULT_SEO,
    title: "Why Choose Us | Mind Manthan",
    description: "Discover why businesses trust Mind Manthan for their digital transformation and software development needs.",
    canonical: getCanonicalUrl("why-us"),
    ogUrl: getCanonicalUrl("why-us"),
    schemaType: 'WebPage'
  },
  services: {
    ...DEFAULT_SEO,
    title: "Our Services | Mind Manthan",
    description: "Explore our comprehensive range of software development services, from custom software to cloud solutions.",
    canonical: getCanonicalUrl("services"),
    ogUrl: getCanonicalUrl("services"),
    schemaType: 'ProfessionalService'
  },
  portfolio: {
    ...DEFAULT_SEO,
    title: "Portfolio | Mind Manthan",
    description: "View our latest projects and see how we've helped businesses achieve their digital goals.",
    canonical: getCanonicalUrl("portfolio"),
    ogUrl: getCanonicalUrl("portfolio"),
    schemaType: 'WebPage'
  },
  contact: {
    ...DEFAULT_SEO,
    title: "Contact Us | Mind Manthan",
    description: "Get in touch with us to discuss your next project. We're here to help you build your digital future.",
    canonical: getCanonicalUrl("contact"),
    ogUrl: getCanonicalUrl("contact"),
    schemaType: 'WebPage'
  },
  'case-studies': {
    ...DEFAULT_SEO,
    title: "Case Studies | Mind Manthan",
    description: "In-depth look at how we've solved complex challenges for our clients through innovative software solutions.",
    canonical: getCanonicalUrl("case-studies"),
    ogUrl: getCanonicalUrl("case-studies"),
    schemaType: 'WebPage'
  },
  'insurance-case-study': {
    ...DEFAULT_SEO,
    title: "Insurance Platform Case Study | Mind Manthan",
    description: "See how we delivered a secure, scalable insurance platform with improved onboarding and claims workflows.",
    canonical: getCanonicalUrl("insurance-case-study"),
    ogUrl: getCanonicalUrl("insurance-case-study"),
    schemaType: 'WebPage'
  },
  'coffee-case-study': {
    ...DEFAULT_SEO,
    title: "Coffee Brand Case Study | Mind Manthan",
    description: "Discover how we built a modern customer experience and data-driven operations for a coffee brand.",
    canonical: getCanonicalUrl("coffee-case-study"),
    ogUrl: getCanonicalUrl("coffee-case-study"),
    schemaType: 'WebPage'
  },
  'london-travel-case-study': {
    ...DEFAULT_SEO,
    title: "London Travel Case Study | Mind Manthan",
    description: "Explore how we designed a travel platform that boosted conversions and streamlined booking.",
    canonical: getCanonicalUrl("london-travel-case-study"),
    ogUrl: getCanonicalUrl("london-travel-case-study"),
    schemaType: 'WebPage'
  },
  'custom-software': {
    ...DEFAULT_SEO,
    title: "Custom Software Development | Mind Manthan",
    description: "Bespoke software solutions tailored to your unique business needs and goals.",
    canonical: getCanonicalUrl("custom-software"),
    ogUrl: getCanonicalUrl("custom-software"),
    schemaType: 'ProfessionalService'
  },
  'mobile-app': {
    ...DEFAULT_SEO,
    title: "Mobile App Development | Mind Manthan",
    description: "High-quality mobile applications for iOS and Android, built with the latest technologies.",
    canonical: getCanonicalUrl("mobile-app"),
    ogUrl: getCanonicalUrl("mobile-app"),
    schemaType: 'ProfessionalService'
  },
  'staff-augmentation': {
    ...DEFAULT_SEO,
    title: "Staff Augmentation | Mind Manthan",
    description: "Scale your tech team quickly with our vetted developers and engineers.",
    canonical: getCanonicalUrl("staff-augmentation"),
    ogUrl: getCanonicalUrl("staff-augmentation"),
    schemaType: 'ProfessionalService'
  },
  'web-app': {
    ...DEFAULT_SEO,
    title: "Web App Development | Mind Manthan",
    description: "Scalable and performant web applications for modern businesses.",
    canonical: getCanonicalUrl("web-app"),
    ogUrl: getCanonicalUrl("web-app"),
    schemaType: 'ProfessionalService'
  },
  blockchain: {
    ...DEFAULT_SEO,
    title: "Blockchain Development | Mind Manthan",
    description: "Innovative blockchain solutions for secure and transparent business operations.",
    canonical: getCanonicalUrl("blockchain"),
    ogUrl: getCanonicalUrl("blockchain"),
    schemaType: 'ProfessionalService'
  },
  'ios-development': {
    ...DEFAULT_SEO,
    title: "iOS Development | Mind Manthan",
    description: "Expert iOS app development services for iPhone and iPad.",
    canonical: getCanonicalUrl("ios-development"),
    ogUrl: getCanonicalUrl("ios-development"),
    schemaType: 'ProfessionalService'
  },
  'android-development': {
    ...DEFAULT_SEO,
    title: "Android Development | Mind Manthan",
    description: "Professional Android app development services for a wide range of devices.",
    canonical: getCanonicalUrl("android-development"),
    ogUrl: getCanonicalUrl("android-development"),
    schemaType: 'ProfessionalService'
  },
  'digital-transformation': {
    ...DEFAULT_SEO,
    title: "Digital Transformation | Mind Manthan",
    description: "Modernize your business with our comprehensive digital transformation strategies.",
    canonical: getCanonicalUrl("digital-transformation"),
    ogUrl: getCanonicalUrl("digital-transformation"),
    schemaType: 'ProfessionalService'
  },
  security: {
    ...DEFAULT_SEO,
    title: "Security Solutions | Mind Manthan",
    description: "Protect your digital assets with our advanced security and threat mitigation services.",
    canonical: getCanonicalUrl("security"),
    ogUrl: getCanonicalUrl("security"),
    schemaType: 'ProfessionalService'
  },
  fintech: {
    ...DEFAULT_SEO,
    title: "Fintech Solutions | Mind Manthan",
    description: "Innovative financial technology solutions for the modern era.",
    canonical: getCanonicalUrl("fintech"),
    ogUrl: getCanonicalUrl("fintech"),
    schemaType: 'ProfessionalService'
  },
  consulting: {
    ...DEFAULT_SEO,
    title: "IT Consulting | Mind Manthan",
    description: "Expert IT consulting services to help you navigate the complex digital landscape.",
    canonical: getCanonicalUrl("consulting"),
    ogUrl: getCanonicalUrl("consulting"),
    schemaType: 'ProfessionalService'
  },
  events: {
    ...DEFAULT_SEO,
    title: "Events | Mind Manthan",
    description: "Stay up to date with the latest events and news from Mind Manthan.",
    canonical: getCanonicalUrl("events"),
    ogUrl: getCanonicalUrl("events"),
    schemaType: 'WebPage'
  },
  'blog-archive': {
    ...DEFAULT_SEO,
    title: "Blog | Mind Manthan",
    description: "Insights, news, and trends from the world of software development and digital transformation.",
    canonical: getCanonicalUrl("blog-archive"),
    ogUrl: getCanonicalUrl("blog-archive"),
    schemaType: 'WebPage'
  },
  'not-found': {
    ...DEFAULT_SEO,
    title: "Page Not Found | Mind Manthan",
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

export const BLOGS: Record<number, BlogSeoItem> = {
  1: {
    title: "Identify the best technologies for your business with Mind Manthan's new tool",
    excerpt: "Choosing the right technology stack for your business is crucial for long-term success. Our new tool helps you identify the perfect match.",
    author: "Sarah Johnson",
    date: "2024-03-15"
  },
  2: {
    title: 'How Chat GPT is Revolutionizing the Way We Find Information',
    excerpt: 'ChatGPT has changed how we search for and consume information online. Discover the revolutionary impact of AI-powered conversations.',
    author: "Michael Chen",
    date: "2024-03-10"
  },
  3: {
    title: "Clutch Recognizes Mind Manthan Among New York's Top Development for 2023",
    excerpt: 'We are thrilled to announce that Mind Manthan has been recognized as one of New York\'s top development companies.',
    author: "David Rodriguez",
    date: "2024-03-05"
  }
};

export const getSEO = (view: string, id?: number): PageSEO => {
  if (view === 'blog-detail' && id && BLOGS[id]) {
    return {
      ...DEFAULT_SEO,
      title: `${BLOGS[id].title} | Mind Manthan Blog`,
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
      "name": pageSeo.title.replace(" | Mind Manthan", ""),
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
              "text": "We provide custom software development, mobile and web apps, cloud solutions, and managed IT services."
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
      "serviceType": seo.title.replace(" | Mind Manthan", ""),
      "provider": baseOrganization,
      "url": pageUrl
      }
    ];
  }

  return [baseOrganization, webPageSchema, breadcrumbSchema];
};
