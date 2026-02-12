
export interface PageSEO {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

export const DEFAULT_SEO: PageSEO = {
  title: "Mind Manthan - Software Solutions",
  description: "A high-performance, modern React-based replication of the Mind Manthan theme, featuring dark-themed aesthetics, neon accents, and comprehensive software development services.",
  keywords: "software development, mobile app development, web development, blockchain, fintech, digital transformation, security",
  ogImage: "/assets/images/mindmanthan.webp",
  ogType: "website",
  canonical: "https://mindmanthan.com",
};

export const SEO_CONFIG: Record<string, PageSEO> = {
  home: {
    ...DEFAULT_SEO,
    title: "Mind Manthan - Innovative Software Solutions & Digital Transformation",
  },
  'about-us': {
    ...DEFAULT_SEO,
    title: "About Us | Mind Manthan",
    description: "Learn more about Mind Manthan, our mission, values, and the expert team behind our award-winning software solutions.",
  },
  'why-us': {
    ...DEFAULT_SEO,
    title: "Why Choose Us | Mind Manthan",
    description: "Discover why businesses trust Mind Manthan for their digital transformation and software development needs.",
  },
  services: {
    ...DEFAULT_SEO,
    title: "Our Services | Mind Manthan",
    description: "Explore our comprehensive range of software development services, from custom software to cloud solutions.",
  },
  portfolio: {
    ...DEFAULT_SEO,
    title: "Portfolio | Mind Manthan",
    description: "View our latest projects and see how we've helped businesses achieve their digital goals.",
  },
  contact: {
    ...DEFAULT_SEO,
    title: "Contact Us | Mind Manthan",
    description: "Get in touch with us to discuss your next project. We're here to help you build your digital future.",
  },
  'case-studies': {
    ...DEFAULT_SEO,
    title: "Case Studies | Mind Manthan",
    description: "In-depth look at how we've solved complex challenges for our clients through innovative software solutions.",
  },
  'custom-software': {
    ...DEFAULT_SEO,
    title: "Custom Software Development | Mind Manthan",
    description: "Bespoke software solutions tailored to your unique business needs and goals.",
  },
  'mobile-app': {
    ...DEFAULT_SEO,
    title: "Mobile App Development | Mind Manthan",
    description: "High-quality mobile applications for iOS and Android, built with the latest technologies.",
  },
  'staff-augmentation': {
    ...DEFAULT_SEO,
    title: "Staff Augmentation | Mind Manthan",
    description: "Scale your tech team quickly with our vetted developers and engineers.",
  },
  'web-app': {
    ...DEFAULT_SEO,
    title: "Web App Development | Mind Manthan",
    description: "Scalable and performant web applications for modern businesses.",
  },
  blockchain: {
    ...DEFAULT_SEO,
    title: "Blockchain Development | Mind Manthan",
    description: "Innovative blockchain solutions for secure and transparent business operations.",
  },
  'ios-development': {
    ...DEFAULT_SEO,
    title: "iOS Development | Mind Manthan",
    description: "Expert iOS app development services for iPhone and iPad.",
  },
  'android-development': {
    ...DEFAULT_SEO,
    title: "Android Development | Mind Manthan",
    description: "Professional Android app development services for a wide range of devices.",
  },
  'digital-transformation': {
    ...DEFAULT_SEO,
    title: "Digital Transformation | Mind Manthan",
    description: "Modernize your business with our comprehensive digital transformation strategies.",
  },
  security: {
    ...DEFAULT_SEO,
    title: "Security Solutions | Mind Manthan",
    description: "Protect your digital assets with our advanced security and threat mitigation services.",
  },
  fintech: {
    ...DEFAULT_SEO,
    title: "Fintech Solutions | Mind Manthan",
    description: "Innovative financial technology solutions for the modern era.",
  },
  consulting: {
    ...DEFAULT_SEO,
    title: "IT Consulting | Mind Manthan",
    description: "Expert IT consulting services to help you navigate the complex digital landscape.",
  },
  events: {
    ...DEFAULT_SEO,
    title: "Events | Mind Manthan",
    description: "Stay up to date with the latest events and news from Mind Manthan.",
  },
  'blog-archive': {
    ...DEFAULT_SEO,
    title: "Blog | Mind Manthan",
    description: "Insights, news, and trends from the world of software development and digital transformation.",
  },
};

export const BLOGS: Record<number, any> = {
  1: {
    title: "Identify the best technologies for your business with Mind Manthan's new tool",
    excerpt: "Choosing the right technology stack for your business is crucial for long-term success. Our new tool helps you identify the perfect match.",
  },
  2: {
    title: 'How Chat GPT is Revolutionizing the Way We Find Information',
    excerpt: 'ChatGPT has changed how we search for and consume information online. Discover the revolutionary impact of AI-powered conversations.',
  },
  3: {
    title: "Clutch Recognizes Mind Manthan Among New York's Top Development for 2023",
    excerpt: 'We are thrilled to announce that Mind Manthan has been recognized as one of New York\'s top development companies.',
  }
};

export const getSEO = (view: string, id?: number): PageSEO => {
  if (view === 'blog-detail' && id && BLOGS[id]) {
    return {
      ...DEFAULT_SEO,
      title: `${BLOGS[id].title} | Mind Manthan Blog`,
      description: BLOGS[id].excerpt,
    };
  }
  return SEO_CONFIG[view] || DEFAULT_SEO;
};
