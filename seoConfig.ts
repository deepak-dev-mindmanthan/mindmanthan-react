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

const SITE_NAME = "Mind Manthan";
const SITE_URL = "https://mindmanthan.com";
const SITE_LOGO = `${SITE_URL}/assets/images/mindmanthan.webp`;
const DEFAULT_OG_IMAGE = SITE_LOGO;

const VIEW_PATHS: Record<string, string> = {
  home: "/",
  "about-us": "/about-us",
  "why-us": "/why-us",
  services: "/services",
  portfolio: "/portfolio",
  contact: "/contact",
  "case-studies": "/case-studies",
  "custom-software": "/custom-software",
  "mobile-app": "/mobile-app",
  "staff-augmentation": "/staff-augmentation",
  "web-app": "/web-app",
  blockchain: "/blockchain",
  "ios-development": "/ios-development",
  "android-development": "/android-development",
  "digital-transformation": "/digital-transformation",
  security: "/security",
  fintech: "/fintech",
  consulting: "/consulting",
  events: "/events",
  "blog-archive": "/blog",
  "blog-detail": "/blog",
};

const getCanonicalUrl = (view: string, id?: number) => {
  if (view === "blog-detail" && id) {
    return `${SITE_URL}${VIEW_PATHS["blog-detail"]}?id=${id}`;
  }
  const path = VIEW_PATHS[view] || "/";
  return `${SITE_URL}${path}`;
};

export const DEFAULT_SEO: PageSEO = {
  title: "Mind Manthan - Software Solutions",
  description:
    "Mind Manthan delivers custom software development, mobile and web apps, and digital transformation services for growing businesses.",
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
};

export const BLOGS: Record<number, any> = {
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
    "logo": SITE_LOGO
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
