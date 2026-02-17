import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import SEO from "./components/SEO";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { getSEO, getSchema } from "./config/seoConfig";
import Hero from "./sections/Hero";
import StatsBanner from "./sections/StatsBanner";
import LatestInsights from "./sections/LatestInsights";
import ContactSection from "./sections/ContactSection";
import JourneySection from "./sections/JourneySection";
import CoreValues from "./sections/CoreValues";
import Reviews from "./sections/Reviews";
import RecognitionGrid from "./sections/RecognitionGrid";
import FAQSection from "./sections/FAQSection";
const AboutUsPage = React.lazy(() => import("./pages/AboutUsPage"));
const WhyUsPage = React.lazy(() => import("./pages/WhyUsPage"));
const ServicesPage = React.lazy(() => import("./pages/ServicesPage"));
const PortfolioPage = React.lazy(() => import("./pages/PortfolioPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const CaseStudies = React.lazy(() => import("./pages/CaseStudies"));
const InsuranceCaseStudyPage = React.lazy(
  () => import("./pages/InsuranceCaseStudyPage"),
);
const CoffeeCaseStudyPage = React.lazy(
  () => import("./pages/CoffeeCaseStudyPage"),
);
const LondonTravelCaseStudyPage = React.lazy(
  () => import("./pages/LondonTravelCaseStudyPage"),
);
const IotAssetCaseStudyPage = React.lazy(
  () => import("./pages/IotAssetCaseStudyPage"),
);
const CloudDevopsCaseStudyPage = React.lazy(
  () => import("./pages/CloudDevopsCaseStudyPage"),
);
const ApiIntegrationCaseStudyPage = React.lazy(
  () => import("./pages/ApiIntegrationCaseStudyPage"),
);
const CustomSoftwarePage = React.lazy(
  () => import("./pages/CustomSoftwarePage"),
);
const MobileAppPage = React.lazy(() => import("./pages/MobileAppPage"));
const ApiIntegrationSupportPage = React.lazy(() => import("./pages/ApiIntegrationSupportPage"));
const WebAppPage = React.lazy(() => import("./pages/WebAppPage"));
const IotSolutionsPage = React.lazy(() => import("./pages/IotSolutionsPage"));
const IOSDevelopmentPage = React.lazy(
  () => import("./pages/IOSDevelopmentPage"),
);
const AndroidDevelopmentPage = React.lazy(
  () => import("./pages/AndroidDevelopmentPage"),
);
const DigitalTransformationPage = React.lazy(
  () => import("./pages/DigitalTransformationPage"),
);
const SecurityPage = React.lazy(() => import("./pages/SecurityPage"));
const CloudDevopsPage = React.lazy(() => import("./pages/CloudDevopsPage"));
const ConsultingProvidersPage = React.lazy(
  () => import("./pages/ConsultingProvidersPage"),
);
const EventsPage = React.lazy(() => import("./pages/EventsPage"));
const BlogArchive = React.lazy(() => import("./pages/BlogArchive"));
const BlogPage = React.lazy(() => import("./pages/BlogPage"));
import { Shield, RefreshCw } from "lucide-react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useMatch,
  useNavigate,
} from "react-router-dom";
import { ROUTES, getBlogDetailPath } from "./routes/routes";

// Custom Blueprint Icons to match the screenshot exactly
const StaffIcon = () => (
  <svg width="80" height="80" viewBox="0 0 100 100" className="mb-8">
    <circle
      cx="50"
      cy="35"
      r="14"
      fill="none"
      stroke="#001fcc"
      strokeWidth="2"
      strokeDasharray="3 3"
    />
    <path
      d="M25 80 C25 60 75 60 75 80"
      fill="none"
      stroke="#001fcc"
      strokeWidth="2"
      strokeDasharray="4 2"
    />
    <path d="M80 25 L90 15 M85 35 L95 25" stroke="#001fcc" strokeWidth="2" />
    <circle cx="50" cy="35" r="4" fill="#001fcc" />
  </svg>
);

const MobileIcon = () => (
  <svg width="80" height="80" viewBox="0 0 100 100" className="mb-8">
    <rect
      x="30"
      y="15"
      width="40"
      height="70"
      rx="5"
      fill="none"
      stroke="#001fcc"
      strokeWidth="2"
    />
    <circle
      cx="50"
      cy="78"
      r="3"
      fill="none"
      stroke="#001fcc"
      strokeWidth="2"
    />
    <path
      d="M30 35 H70 M30 65 H70"
      stroke="#001fcc"
      strokeWidth="1"
      strokeDasharray="2 2"
    />
    <circle
      cx="65"
      cy="30"
      r="8"
      fill="none"
      stroke="#001fcc"
      strokeWidth="2"
      strokeDasharray="2 2"
    />
    <path d="M65 26 V34 M61 30 H69" stroke="#001fcc" strokeWidth="1" />
  </svg>
);

const WebIcon = () => (
  <svg width="80" height="80" viewBox="0 0 100 100" className="mb-8">
    <rect
      x="15"
      y="25"
      width="70"
      height="45"
      rx="2"
      fill="none"
      stroke="#001fcc"
      strokeWidth="2"
    />
    <path
      d="M35 70 H65 M50 70 V80 M40 80 H60"
      stroke="#001fcc"
      strokeWidth="2"
    />
    <text
      x="28"
      y="55"
      fill="#001fcc"
      fontSize="16"
      fontWeight="400"
      fontFamily="monospace"
    >
      {"< I >"}
    </text>
    <path d="M20 35 H80" stroke="#001fcc" strokeWidth="1" />
  </svg>
);

const SoftwareIcon = () => (
  <svg width="80" height="80" viewBox="0 0 100 100" className="mb-8">
    <rect
      x="20"
      y="20"
      width="60"
      height="60"
      fill="none"
      stroke="#001fcc"
      strokeWidth="2"
      strokeDasharray="3 3"
    />
    <text
      x="30"
      y="58"
      fill="#001fcc"
      fontSize="24"
      fontWeight="400"
      fontFamily="monospace"
    >
      {"</>"}
    </text>
  </svg>
);

interface IndustryCardProps {
  title: string;
  description: string;
  tag: string;
  bgColor: string;
  children: React.ReactNode;
  stackIndex?: number;
  onClick?: () => void;
}

const IndustryCard: React.FC<IndustryCardProps> = ({
  title,
  description,
  tag,
  bgColor,
  children,
  stackIndex = 0,
  onClick,
}) => {
  const topClass =
    "top-[16px] md:top-[24px]";

  const offsetClass =
    stackIndex === 0
      ? "translate-y-0"
      : stackIndex === 1
        ? "translate-y-[40px] md:translate-y-[72px]"
        : "translate-y-[80px] md:translate-y-[144px]";

  const zClass =
    stackIndex === 0 ? "z-10" : stackIndex === 1 ? "z-20" : "z-30";

  return (
    <div
      className={`sticky w-full mb-0 ${topClass} ${offsetClass} ${zClass} ${onClick ? "cursor-pointer" : ""}`}
    onClick={onClick}
    role={onClick ? "button" : undefined}
    tabIndex={onClick ? 0 : undefined}
    onKeyDown={
      onClick
        ? (event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              onClick();
            }
          }
        : undefined
    }
    >
      <div
        className={`w-full rounded-[3rem] min-h-[500px] md:min-h-[540px] lg:min-h-[600px] shadow-2xl overflow-hidden flex flex-col lg:flex-row items-center p-8 md:p-12 lg:p-16 border border-white/10 transition-transform duration-500 hover:scale-[1.01] ${bgColor}`}
      >
        <div className="flex-1 text-left">
          <span className="inline-block px-4 py-1.5 bg-white/60 rounded-md text-[#1a1b1f] text-[11px] font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
            {tag}
          </span>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1b1f] mb-8 tracking-tighter">
            {title}
          </h3>
          <p className="text-lg md:text-[19px] lg:text-xl text-gray-700 max-w-lg leading-relaxed font-medium">
            {description}
          </p>
        </div>
        <div className="flex-1 w-full h-full flex justify-center items-center mt-12 md:mt-0 relative">
          {children}
        </div>
      </div>
    </div>
  );
};

const PageLoader: React.FC = () => (
  <div className="min-h-[50vh] flex items-center justify-center text-sm text-gray-500">
    Loading...
  </div>
);

type View =
  | "home"
  | "case-studies"
  | "custom-software"
  | "mobile-app"
  | "api-integration-support"
  | "web-app"
  | "iot-solutions"
  | "ios-development"
  | "android-development"
  | "digital-transformation"
  | "security"
  | "cloud-devops"
  | "consulting"
  | "insurance-case-study"
  | "coffee-case-study"
  | "london-travel-case-study"
  | "iot-asset-case-study"
  | "cloud-devops-case-study"
  | "api-integration-case-study"
  | "about-us"
  | "why-us"
  | "services"
  | "portfolio"
  | "contact"
  | "events"
  | "blog-detail"
  | "blog-archive"
  | "not-found";

const App: React.FC = () => {
  const [zoomScale, setZoomScale] = useState(1.2);
  const techSectionRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const blogMatch = useMatch("/blog/:id");
  const blogId = useMemo(() => {
    const rawId = blogMatch?.params?.id;
    const parsed = rawId ? Number(rawId) : undefined;
    return Number.isFinite(parsed) ? parsed : undefined;
  }, [blogMatch?.params?.id]);

  const currentView: View = useMemo(() => {
    if (blogMatch) return "blog-detail";
    const path = location.pathname;
    const map: Record<string, View> = {
      [ROUTES.home]: "home",
      [ROUTES.about]: "about-us",
      [ROUTES.whyUs]: "why-us",
      [ROUTES.services]: "services",
      [ROUTES.portfolio]: "portfolio",
      [ROUTES.contact]: "contact",
      [ROUTES.caseStudies]: "case-studies",
      [ROUTES.insuranceCaseStudy]: "insurance-case-study",
      [ROUTES.coffeeCaseStudy]: "coffee-case-study",
      [ROUTES.londonTravelCaseStudy]: "london-travel-case-study",
      [ROUTES.iotAssetCaseStudy]: "iot-asset-case-study",
      [ROUTES.cloudDevopsCaseStudy]: "cloud-devops-case-study",
      [ROUTES.apiIntegrationCaseStudy]: "api-integration-case-study",
      [ROUTES.customSoftware]: "custom-software",
      [ROUTES.mobileApp]: "mobile-app",
      [ROUTES.apiIntegrationSupport]: "api-integration-support",
      [ROUTES.webApp]: "web-app",
      [ROUTES.iotSolutions]: "iot-solutions",
      [ROUTES.iosDevelopment]: "ios-development",
      [ROUTES.androidDevelopment]: "android-development",
      [ROUTES.digitalTransformation]: "digital-transformation",
      [ROUTES.security]: "security",
      [ROUTES.cloudDevops]: "cloud-devops",
      [ROUTES.consulting]: "consulting",
      [ROUTES.events]: "events",
      [ROUTES.blog]: "blog-archive",
    };
    return map[path] || "not-found";
  }, [blogMatch, location.pathname]);

  const partners = [
    {
      name: "AWS",
      type: "text",
      className: "lowercase",
      src:""
    },
    { name: "ManufactureX", type: "text", className: "lowercase" },
    { name: "RetailOps", type: "text", className: "lowercase" },
    { name: "DHL", type: "text", className: "uppercase italic" },
    { name: "IoT Labs", type: "text", className: "uppercase" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!techSectionRef.current) return;
      const rect = techSectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(
        0,
        Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)),
      );
      const newScale = 1.25 - progress * 0.25;
      setZoomScale(Math.max(1, newScale));
    };

    if (currentView === "home") {
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentView]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const scrollToSelector = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      const selector = state.scrollTo;
      setTimeout(() => scrollToSelector(selector), 50);
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.pathname, location.state, navigate]);

  const navigateHomeAndScroll = (selector: string) => {
    if (location.pathname === ROUTES.home) {
      scrollToSelector(selector);
      return;
    }
    navigate("/", { state: { scrollTo: selector } });
  };

  const commonNavProps = {
    onLogoClick: () => navigate(ROUTES.home),
    onSoftwareClick: () => navigate(ROUTES.customSoftware),
    onMobileAppClick: () => navigate(ROUTES.mobileApp),
    onApiIntegrationSupportClick: () => navigate(ROUTES.apiIntegrationSupport),
    onWebAppClick: () => navigate(ROUTES.webApp),
    onIotSolutionsClick: () => navigate(ROUTES.iotSolutions),
    onIOSDevelopmentClick: () => navigate(ROUTES.iosDevelopment),
    onAndroidDevelopmentClick: () => navigate(ROUTES.androidDevelopment),
    onDigitalTransformationClick: () => navigate(ROUTES.digitalTransformation),
    onSecurityClick: () => navigate(ROUTES.security),
    onCloudDevopsClick: () => navigate(ROUTES.cloudDevops),
    onConsultingClick: () => navigate(ROUTES.consulting),
    onInsuranceCaseStudyClick: () => navigate(ROUTES.insuranceCaseStudy),
    onCoffeeCaseStudyClick: () => navigate(ROUTES.coffeeCaseStudy),
    onLondonTravelCaseStudyClick: () => navigate(ROUTES.londonTravelCaseStudy),
    onPortfolioClick: () => navigate(ROUTES.portfolio),
    onBlogClick: () => navigate(ROUTES.blog),
    onAboutUsClick: () => navigate(ROUTES.about),
    onWhyUsClick: () => navigate(ROUTES.whyUs),
    onServicesClick: () => navigate(ROUTES.services),
    onContactClick: () => navigate(ROUTES.contact),
    onViewAllClick: () => navigate(ROUTES.blog),
    onEventsClick: () => navigate(ROUTES.events),
    onFaqClick: () => navigateHomeAndScroll("[data-faq-section]"),
    onGetInTouchClick: () =>
      navigateHomeAndScroll("[data-consultation-form], [data-contact-form]"),
    isLight: location.pathname !== ROUTES.home,
    isHomePage: location.pathname === ROUTES.home,
  };

  const renderRoutes = () => (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route
          path={ROUTES.about}
          element={
            <>
              <AboutUsPage onLearnMoreClick={() => navigate(ROUTES.whyUs)} />
              <CoreValues />
            </>
          }
        />
        <Route
          path={ROUTES.whyUs}
          element={
            <WhyUsPage onExploreServices={() => navigate(ROUTES.services)} />
          }
        />
        <Route
          path={ROUTES.services}
          element={
            <ServicesPage onNavigateHome={commonNavProps.onGetInTouchClick} />
          }
        />
        <Route
          path={ROUTES.portfolio}
          element={<PortfolioPage onBackHome={() => navigate(ROUTES.home)} />}
        />
        <Route
          path={ROUTES.contact}
          element={<ContactPage onBackHome={() => navigate(ROUTES.home)} />}
        />
        <Route
          path={ROUTES.caseStudies}
          element={
            <CaseStudies onNavigateHome={commonNavProps.onGetInTouchClick} />
          }
        />
        <Route
          path={ROUTES.insuranceCaseStudy}
          element={
            <InsuranceCaseStudyPage onBackHome={() => navigate(ROUTES.home)} />
          }
        />
        <Route
          path={ROUTES.coffeeCaseStudy}
          element={
            <CoffeeCaseStudyPage onBackHome={() => navigate(ROUTES.home)} />
          }
        />
        <Route
          path={ROUTES.londonTravelCaseStudy}
          element={
            <LondonTravelCaseStudyPage
              onBackHome={() => navigate(ROUTES.home)}
            />
          }
        />
        <Route
          path={ROUTES.iotAssetCaseStudy}
          element={
            <IotAssetCaseStudyPage onBackHome={() => navigate(ROUTES.home)} />
          }
        />
        <Route
          path={ROUTES.cloudDevopsCaseStudy}
          element={
            <CloudDevopsCaseStudyPage
              onBackHome={() => navigate(ROUTES.home)}
            />
          }
        />
        <Route
          path={ROUTES.apiIntegrationCaseStudy}
          element={
            <ApiIntegrationCaseStudyPage
              onBackHome={() => navigate(ROUTES.home)}
            />
          }
        />
        <Route
          path={ROUTES.customSoftware}
          element={
            <CustomSoftwarePage onBackHome={() => navigate(ROUTES.home)} />
          }
        />
        <Route
          path={ROUTES.mobileApp}
          element={<MobileAppPage onBackHome={() => navigate(ROUTES.home)} />}
        />
        <Route
          path={ROUTES.apiIntegrationSupport}
          element={
            <ApiIntegrationSupportPage onBackHome={() => navigate(ROUTES.home)} />
          }
        />
        <Route
          path={ROUTES.webApp}
          element={<WebAppPage onBackHome={() => navigate(ROUTES.home)} />}
        />
        <Route
          path={ROUTES.iotSolutions}
          element={<IotSolutionsPage onBackHome={() => navigate(ROUTES.home)} />}
        />
        <Route
          path={ROUTES.iosDevelopment}
          element={
            <IOSDevelopmentPage onBackHome={() => navigate(ROUTES.home)} />
          }
        />
        <Route
          path={ROUTES.androidDevelopment}
          element={
            <AndroidDevelopmentPage onBackHome={() => navigate(ROUTES.home)} />
          }
        />
        <Route
          path={ROUTES.digitalTransformation}
          element={
            <DigitalTransformationPage
              onBackHome={() => navigate(ROUTES.home)}
            />
          }
        />
        <Route
          path={ROUTES.security}
          element={<SecurityPage onBackHome={() => navigate(ROUTES.home)} />}
        />
        <Route
          path={ROUTES.cloudDevops}
          element={<CloudDevopsPage onBackHome={() => navigate(ROUTES.home)} />}
        />
        <Route
          path={ROUTES.consulting}
          element={
            <ConsultingProvidersPage onBackHome={() => navigate(ROUTES.home)} />
          }
        />
        <Route
          path={ROUTES.events}
          element={
            <EventsPage onContactClick={commonNavProps.onContactClick} />
          }
        />
        <Route
          path={ROUTES.blog}
          element={
            <BlogArchive
              onReadMoreClick={(id: number) => navigate(getBlogDetailPath(id))}
            />
          }
        />
        <Route
          path={ROUTES.blogDetail}
          element={
            blogId ? (
              <BlogPage
                blogId={blogId}
                onBackHome={() => navigate(ROUTES.home)}
                onBackToHome={() => navigate(ROUTES.blog)}
              />
            ) : (
              <BlogArchive
                onReadMoreClick={(id: number) => navigate(getBlogDetailPath(id))}
              />
            )
          }
        />
        <Route
          path={ROUTES.home}
          element={
            <>
              <section id="hero-section">
                <Hero />
              </section>
              <section
                id="about-section"
                className="pt-20 md:pt-24 pb-20 md:pb-32 px-6 bg-white relative z-10"
              >
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                  <h2 className="text-3xl md:text-5xl lg:text-[52px] font-bold text-[#1a1b1f] leading-[1.1] mb-10 tracking-tight max-w-5xl">
                    We build business-focused software platforms with clear
                    execution, secure architecture, and measurable outcomes.
                  </h2>
                  <button
                    onClick={() => navigate(ROUTES.whyUs)}
                    className="bg-[#e8edff] text-[#001fcc] px-8 py-3 rounded-md font-bold text-[15px] hover:bg-[#d9e2ff] transition-all active:scale-95"
                  >
                    Why choose us
                  </button>
                </div>
              </section>

              <section
                id="partners-section"
                className="py-10 md:py-0 md:pb-32 bg-white overflow-hidden border-b border-gray-100"
              >
                <div className="relative flex items-center">
                  <div className="animate-marquee flex items-center">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="flex items-center gap-12 md:gap-24 px-6 md:px-12">
                        {partners.map((partner, idx) => (
                          <div
                            key={`${i}-${idx}`}
                            className="flex items-center opacity-40 grayscale hover:opacity-100 transition-all duration-500 cursor-default"
                          >
                            {partner.type === "text" ? (
                              <span
                                className={`partner-text text-3xl sm:text-4xl md:text-5xl text-gray-800 whitespace-nowrap ${partner.className || ""}`}
                              >
                                {partner.name}
                              </span>
                            ) : (
                              <img
                                loading="lazy"
                                decoding="async"
                                src={partner.src}
                                className="h-11"
                                alt={partner.name}
                                width={140}
                                height={44}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section
                id="technology-team"
                ref={techSectionRef}
                className="px-6 max-w-7xl mx-auto mb-16 mt-24"
              >
                <div className="relative rounded-[2.5rem] overflow-hidden aspect-[16/8] md:aspect-[21/9] shadow-2xl border border-gray-100 bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1600"
                    alt="Technology Team Working Together"
                    className="w-full h-full object-cover block will-change-transform transition-transform duration-300 ease-out"
                    style={{ transform: `scale(${zoomScale})` }}
                    loading="eager"
                    decoding="async"
                    width={1600}
                    height={900}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
                </div>
              </section>

              <section className="py-8 md:py-12 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
                    <div className="max-w-3xl">
                      <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-[#1a1b1f] leading-[1.1] tracking-tight">
                        We provide clients <br /> with award-winning services
                      </h2>
                    </div>
                    <div className="flex flex-col items-center md:items-end">
                      <div className="mb-4">
                        <svg width="60" height="60" viewBox="0 0 100 100">
                          <path
                            d="M50 10 L85 30 V70 L50 90 L15 70 V30 Z"
                            fill="none"
                            stroke="#e2e8f0"
                            strokeWidth="2"
                          />
                          <path
                            d="M50 20 L75 35 V65 L50 80 L25 65 V35 Z"
                            fill="none"
                            stroke="#94a3b8"
                            strokeWidth="1"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-600 font-medium text-[11px] uppercase tracking-[0.2em] whitespace-nowrap">
                        Top-NotCH Developers
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
                    <div
                      className="flex flex-col items-start group cursor-pointer"
                      onClick={() => navigate(ROUTES.apiIntegrationSupport)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          navigate(ROUTES.apiIntegrationSupport);
                        }
                      }}
                    >
                      <StaffIcon />
                      <h3 className="text-[22px] font-bold text-[#1a1b1f] mb-4 leading-tight group-hover:text-[#001fcc] transition-colors">
                        API Integration & Support
                      </h3>
                      <p className="text-gray-600 text-[15px] leading-relaxed">
                        Connect your software with payment, messaging, CRM, and
                        internal systems through secure and reliable APIs.
                      </p>
                    </div>
                    <div
                      className="flex flex-col items-start group cursor-pointer"
                      onClick={() => navigate(ROUTES.mobileApp)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          navigate(ROUTES.mobileApp);
                        }
                      }}
                    >
                      <MobileIcon />
                      <h3 className="text-[22px] font-bold text-[#1a1b1f] mb-4 leading-tight group-hover:text-[#001fcc] transition-colors">
                        Mobile App Development
                      </h3>
                      <p className="text-gray-600 text-[15px] leading-relaxed">
                        From Social Media Apps like TikTok to Fitness Tracking
                        and Marketplaces.
                      </p>
                    </div>
                    <div
                      className="flex flex-col items-start group cursor-pointer"
                      onClick={() => navigate(ROUTES.webApp)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          navigate(ROUTES.webApp);
                        }
                      }}
                    >
                      <WebIcon />
                      <h3 className="text-[22px] font-bold text-[#1a1b1f] mb-4 leading-tight group-hover:text-[#001fcc] transition-colors">
                        Web App Development
                      </h3>
                      <p className="text-gray-600 text-[15px] leading-relaxed">
                        Enterprise-grade platforms optimized for performance and
                        world-wide scale.
                      </p>
                    </div>
                    <div
                      className="flex flex-col items-start group cursor-pointer"
                      onClick={() => navigate(ROUTES.customSoftware)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          navigate(ROUTES.customSoftware);
                        }
                      }}
                    >
                      <SoftwareIcon />
                      <h3 className="text-[22px] font-bold text-[#1a1b1f] mb-4 leading-tight group-hover:text-[#001fcc] transition-colors">
                        Software Development
                      </h3>
                      <p className="text-gray-600 text-[15px] leading-relaxed">
                        From a custom CRM to Transportation Management System,
                        we've built it all.
                      </p>
                    </div>
                  </div>

                  <div className="mt-20">
                    <button
                      onClick={() => navigate(ROUTES.services)}
                      className="inline-block relative text-[#001fcc] hover:text-black font-bold text-[19px] group transition-colors duration-300"
                    >
                      <span className="relative z-10">View all services</span>
                      <span className="absolute -bottom-1 left-0 w-full h-[6px] bg-[#e8edff] group-hover:bg-black group-hover:h-[6px] -z-0 transition-all duration-300"></span>
                    </button>
                  </div>
                </div>
              </section>

              <section className="py-8 md:py-12 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="text-center mb-20">
                    <span className="inline-block px-4 py-1.5 bg-[#f1f5f9] rounded-md text-[#64748b] text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
                      Selected Projects
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-[#1a1b1f] leading-[1.1] tracking-tight">
                      Solutions we engineered <br /> for real business operations
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-[#e0e7ff] rounded-[3rem] p-6 md:p-8 flex flex-col justify-between h-[500px] md:h-[540px] lg:h-[600px] relative overflow-hidden group">
                      <div>
                        <div className="flex justify-between items-start mb-12">
                          <span className="text-[24px] font-medium text-[#1a1b1f]">
                            01.
                          </span>
                          <span className="text-[14px] font-bold uppercase tracking-widest text-[#1a1b1f]">
                            Showcase
                          </span>
                        </div>
                        <h3 className="text-4xl md:text-6xl font-black text-[#1a1b1f] mb-6 md:mb-8 tracking-tighter">
                          ManufactureX
                        </h3>
                        <p className="text-[18px] md:text-[24px] font-bold text-[#1a1b1f] leading-[1.25] max-w-[220px] md:max-w-xs">
                          Industrial workflow automation and production visibility platform
                        </p>
                      </div>
                      <div className="absolute right-2 md:right-0 bottom-3 md:bottom-0 w-[170px] h-[170px] sm:w-[190px] sm:h-[190px] md:w-[320px] md:h-[320px] opacity-80 md:opacity-100 pointer-events-none group-hover:translate-x-1 md:group-hover:translate-x-4 transition-transform duration-700">
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                          <rect x="20" y="80" width="70" height="90" rx="14" fill="#1a1b1f" />
                          <rect x="98" y="40" width="82" height="130" rx="16" fill="#3b82f6" />
                          <circle cx="55" cy="120" r="18" fill="#f59e0b" />
                          <circle cx="55" cy="120" r="8" fill="#fff" />
                          <path d="M30 155 H82 M108 150 H170 M108 132 H160 M108 114 H148" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div className="flex justify-between items-end relative z-10">
                        <span className="text-[14px] font-bold text-[#1a1b1f]">
                          Featured work
                        </span>
                        <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[#1a1b1f] group-hover:text-white transition-all">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M7 17l10-10M7 7h10v10" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#fdf6e3] rounded-[3rem] p-8 flex flex-col justify-between h-[520px] md:h-[560px] lg:h-[600px] relative overflow-hidden group">
                      <div>
                        <div className="flex justify-between items-start mb-12">
                          <span className="text-[24px] font-medium text-[#1a1b1f]">
                            02.
                          </span>
                          <span className="text-[14px] font-bold uppercase tracking-widest text-[#1a1b1f]">
                            Showcase
                          </span>
                        </div>
                        <h3 className="text-6xl font-black text-[#1a1b1f] mb-8 tracking-tighter">
                          IoT Labs
                        </h3>
                        <p className="text-[24px] font-bold text-[#1a1b1f] leading-[1.2] max-w-xs">
                          Secure device telemetry and real-time monitoring dashboard
                        </p>
                      </div>
                      <div className="absolute right-8 bottom-16 w-[300px] h-[240px] group-hover:scale-105 transition-transform duration-700">
                        <svg
                          viewBox="0 0 300 240"
                          className="w-full h-full overflow-visible"
                        >
                          <path
                            d="M78 104 C78 86 92 72 110 72 C114 56 128 44 146 44 C166 44 182 58 184 78 C202 80 216 94 216 112 C216 132 200 146 180 146 H108 C90 146 78 132 78 114 Z"
                            fill="#2563eb"
                            opacity="0.95"
                          />
                          <rect x="118" y="88" width="58" height="58" rx="8" fill="#111827" />
                          <rect x="130" y="100" width="34" height="34" rx="4" fill="#0ea5e9" />
                          <path d="M145 100 V88 M153 100 V88 M161 100 V88 M145 146 V158 M153 146 V158 M161 146 V158" stroke="#111827" strokeWidth="3" strokeLinecap="round" />
                          <path d="M118 115 H106 M118 123 H106 M176 115 H188 M176 123 H188" stroke="#111827" strokeWidth="3" strokeLinecap="round" />

                          <circle cx="50" cy="58" r="12" fill="#1f2937" />
                          <circle cx="248" cy="58" r="12" fill="#1f2937" />
                          <circle cx="50" cy="188" r="12" fill="#1f2937" />
                          <circle cx="248" cy="188" r="12" fill="#1f2937" />
                          <circle cx="50" cy="58" r="4" fill="#22c55e" />
                          <circle cx="248" cy="58" r="4" fill="#22c55e" />
                          <circle cx="50" cy="188" r="4" fill="#22c55e" />
                          <circle cx="248" cy="188" r="4" fill="#22c55e" />

                          <path d="M62 58 L110 88 M236 58 L184 88 M62 188 L118 146 M236 188 L176 146" fill="none" stroke="#2563eb" strokeWidth="3.5" strokeLinecap="round" />
                          <path
                            d="M0 220 H300 M0 180 H300 M0 140 H300 M0 100 H300 M0 60 H300 M0 20 H300"
                            stroke="#000"
                            strokeWidth="0.5"
                            strokeOpacity="0.1"
                          />
                        </svg>
                      </div>
                      <div className="flex justify-between items-end relative z-10">
                        <span className="text-[14px] font-bold text-[#1a1b1f]">
                          Featured work
                        </span>
                        <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[#1a1b1f] group-hover:text-white transition-all">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M7 17l10-10M7 7h10v10" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#1a1b1f] rounded-[3rem] p-10 md:p-12 lg:p-20 flex flex-col lg:flex-row justify-between min-h-[500px] relative overflow-hidden group">
                    <div className="flex flex-col justify-between max-w-md mb-12 md:mb-0">
                      <div>
                        <div className="flex justify-between items-start mb-16">
                          <span className="text-[24px] font-medium text-white/70">
                            03.
                          </span>
                        </div>
                        <div className="flex items-center gap-3 mb-10">
                          <div className="w-8 h-8 relative">
                            <div className="absolute inset-0 bg-yellow-400 rotate-45 rounded-sm"></div>
                            <div className="absolute inset-0 flex items-center justify-center text-[10px] text-black font-black">
                              S
                            </div>
                          </div>
                          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter">
                            TravelOps
                          </h3>
                        </div>
                        <p className="text-[24px] md:text-[28px] lg:text-[32px] font-bold text-white leading-[1.1]">
                          Unified booking and operations platform
                        </p>
                      </div>
                      <div className="mt-auto">
                        <span className="text-[14px] font-bold text-white/70 block mb-6 md:mb-0">
                          Featured work
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center relative">
                      <span className="hidden md:block absolute top-0 right-0 text-[14px] font-bold uppercase tracking-widest text-white/70">
                        Showcase
                      </span>
                      <div className="grid grid-cols-3 gap-2 md:gap-5 translate-y-10 md:translate-y-14 group-hover:translate-y-6 md:group-hover:translate-y-10 transition-transform duration-700 w-full max-w-[560px]">
                        {[
                          {
                            key: "routes",
                            title: "Route Board",
                            chip: "12 Active",
                            bars: ["85%", "60%", "40%"],
                          },
                          {
                            key: "bookings",
                            title: "Bookings",
                            chip: "Live Queue",
                            bars: ["70%", "50%", "30%"],
                          },
                          {
                            key: "fleet",
                            title: "Fleet Status",
                            chip: "SLA 99.9%",
                            bars: ["90%", "65%", "45%"],
                          },
                        ].map((panel, idx) => (
                          <div
                            key={panel.key}
                            className="h-[200px] md:h-[250px] bg-[#1f2538] rounded-[1.2rem] md:rounded-[1.5rem] border-2 border-[#334a7a] relative overflow-hidden shadow-2xl p-3 md:p-4 flex flex-col"
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#60a5fa]/25 to-[#001fcc]/10" />
                            <div className="relative z-10 flex items-center justify-between mb-3">
                              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                                {panel.title}
                              </span>
                              <span className="w-2 h-2 rounded-full bg-[#93c5fd] animate-pulse" />
                            </div>

                            <div className="relative z-10 rounded-xl bg-white/8 border border-blue-200/20 p-2 md:p-3 mb-3">
                              <div className="text-[7px] md:text-[9px] text-blue-100 font-bold uppercase tracking-[0.2em] mb-2">
                                {panel.chip}
                              </div>
                              <div className="h-8 md:h-10 rounded-lg bg-gradient-to-r from-[#001fcc]/80 to-[#2dd4bf]/60 mb-2" />
                              <div className="flex gap-1 md:gap-2">
                                {[0, 1, 2].map((dot) => (
                                  <span
                                    key={dot}
                                    className={`h-1.5 md:h-2 rounded-full ${
                                      dot === idx
                                        ? "w-5 md:w-7 bg-[#e8edff]"
                                        : "w-2 md:w-3 bg-blue-200/40"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>

                            <div className="relative z-10 space-y-2 mt-auto">
                              {panel.bars.map((bar, barIdx) => (
                                <div key={`${panel.key}-${barIdx}`} className="space-y-1">
                                  <div className="h-1.5 md:h-2 w-full bg-blue-900/40 rounded-full overflow-hidden">
                                    <div
                                      className="h-full bg-gradient-to-r from-[#93c5fd] to-[#2dd4bf] rounded-full"
                                      style={{ width: bar }}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>

                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-blue-100/30 rounded-full" />
                          </div>
                        ))}
                      </div>
                      <div className="absolute right-0 bottom-0 md:bottom-[-20px] w-16 h-16 rounded-full border border-white/10 text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 17l10-10M7 7h10v10" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="mt-20 text-center">
                    <button
                      onClick={() => navigate(ROUTES.caseStudies)}
                      className="inline-block relative text-[#001fcc] hover:text-black font-bold text-[19px] group transition-colors duration-300"
                    >
                      <span className="relative z-10">
                        View All IT Case Studies
                      </span>
                      <span className="absolute -bottom-1 left-0 w-full h-[6px] bg-[#e8edff] group-hover:bg-black group-hover:h-[6px] -z-0 transition-all duration-300"></span>
                    </button>
                  </div>
                </div>
              </section>

              <section className="bg-white py-8 md:py-12 px-6">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-5xl lg:text-[64px] font-black text-[#1a1b1f] mb-12 tracking-tighter">
                      Solutions we deliver
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                      {["Workflow Automation", "Security", "Cloud & DevOps"].map(
                        (tab) => (
                          <button
                            key={tab}
                            onClick={() => {
                              if (tab === "Workflow Automation")
                                navigate(ROUTES.digitalTransformation);
                              if (tab === "Security") navigate(ROUTES.security);
                              if (tab === "Cloud & DevOps") navigate(ROUTES.cloudDevops);
                            }}
                            className="px-8 py-2.5 rounded-full border border-gray-200 text-[14px] font-bold text-gray-500 hover:border-[#001fcc] hover:text-[#001fcc] transition-all bg-white shadow-sm"
                          >
                            {tab}
                          </button>
                        ),
                      )}
                    </div>
                  </div>

                  <div className="relative mt-20 pb-24 md:pb-32">
                    <IndustryCard
                      tag="INDUSTRIES WE SERVE"
                      title="Cloud & DevOps"
                      description="Cloud migration, CI/CD pipelines, container orchestration, and monitoring for stable and scalable software delivery."
                      bgColor="bg-[#f0f4ff]"
                      stackIndex={0}
                      onClick={() => navigate(ROUTES.cloudDevops)}
                    >
                      <div className="relative w-full h-full flex items-center justify-center">
                        <div className="w-[300px] h-[300px] bg-[#93c5fd] rounded-full absolute -z-10 blur-3xl opacity-30 animate-pulse"></div>
                        <div className="w-[350px] h-[350px] bg-[#dbeafe] rounded-full flex items-center justify-center relative shadow-inner overflow-hidden">
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="flex flex-col gap-4 animate-bounce duration-1000">
                              {[1, 2, 3].map((i) => (
                                <div
                                  key={i}
                                  className="w-40 h-10 bg-white rounded-xl border-2 border-blue-300 flex items-center justify-between px-4 text-blue-800 font-bold shadow-lg"
                                >
                                  <span className="text-xs uppercase tracking-widest">Node {i}</span>
                                  <span className="w-2 h-2 rounded-full bg-green-500" />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </IndustryCard>

                    <IndustryCard
                      tag="INDUSTRIES WE SERVE"
                      title="Workflow Automation"
                      description="Modernize your entire workflow. We implement digital strategies that eliminate legacy friction and drive technical efficiency."
                      bgColor="bg-[#f9f7ff]"
                      stackIndex={1}
                      onClick={() => navigate(ROUTES.digitalTransformation)}
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <div className="w-[320px] h-[500px] bg-white rounded-[2rem] shadow-2xl border border-gray-100 p-8 flex flex-col relative overflow-hidden group">
                          <div className="flex justify-between items-center mb-8">
                            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                              <RefreshCw width={16} height={16} />
                            </div>
                            <div className="text-gray-300">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <circle cx="12" cy="12" r="1" />
                                <circle cx="12" cy="5" r="1" />
                                <circle cx="12" cy="19" r="1" />
                              </svg>
                            </div>
                          </div>
                          <h4 className="text-4xl font-black text-[#1a1b1f] mb-6">
                            automation
                          </h4>
                          <div className="flex gap-4 mb-8">
                            <div className="flex-1 p-4 bg-gray-50 rounded-xl border border-gray-100">
                              <span className="text-3xl font-black block">
                                98%
                              </span>
                              <span className="text-[10px] text-gray-600 font-bold uppercase">
                                Efficiency
                              </span>
                            </div>
                            <div className="flex-1 p-4 bg-gray-50 rounded-xl border border-gray-100">
                              <span className="text-3xl font-black block">
                                0
                              </span>
                              <span className="text-[10px] text-gray-600 font-bold uppercase">
                                Tech Debt
                              </span>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                              <div className="h-full w-[85%] bg-blue-500 rounded-full"></div>
                            </div>
                            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                              <div className="h-full w-[65%] bg-teal-400 rounded-full"></div>
                            </div>
                          </div>
                          <div className="absolute top-10 right-[-20px] bg-white p-4 rounded-xl shadow-xl flex gap-3 text-[10px] font-bold text-gray-700 uppercase tracking-widest border border-gray-50 transform group-hover:-translate-x-4 transition-transform duration-500">
                            <span className="text-[#001fcc]">cloud</span>
                            <span>scale</span>
                            <span>agility</span>
                          </div>
                        </div>
                      </div>
                    </IndustryCard>

                    <IndustryCard
                      tag="INDUSTRIES WE SERVE"
                      title="Data Security"
                      description="Protecting your most valuable digital assets with proactive monitoring and multi-layered threat mitigation systems."
                      bgColor="bg-[#fff9f0]"
                      stackIndex={2}
                      onClick={() => navigate(ROUTES.security)}
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <div className="relative w-full max-w-[500px] h-[400px]">
                          <div className="absolute left-0 bottom-0 w-[240px] h-[350px] bg-white rounded-[2rem] shadow-2xl border border-4 border-[#1a1b1f] p-4 transform -rotate-6 z-10 overflow-hidden flex flex-col items-center justify-center">
                            <Shield
                              size={120}
                              className="text-[#001fcc] mb-6 animate-pulse"
                              strokeWidth={1}
                            />
                            <div className="text-[#1a1b1f] font-black text-xl tracking-tighter uppercase">
                              Security Hardened
                            </div>
                          </div>
                          <div className="absolute right-0 bottom-0 w-[240px] h-[350px] bg-[#1a1b1f] rounded-[2rem] shadow-2xl border border-4 border-[#1a1b1f] p-4 transform rotate(6deg) z-0 overflow-hidden flex flex-col items-center justify-center">
                            <div className="w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)] bg-[length:20px_20px] absolute inset-0"></div>
                            <div className="relative z-10 text-white font-mono text-xs opacity-60 leading-loose">
                              01101010 11010101 <br />
                              10101111 00101010 <br />
                              ENCRYPTED_LAYER_07 <br />
                              STATUS_ACTIVE <br />
                              NO_THREATS_DETECTED
                            </div>
                          </div>
                        </div>
                      </div>
                    </IndustryCard>
                  </div>
                </div>
              </section>

              <Reviews />
              <RecognitionGrid />
              <StatsBanner
                onGetInTouchClick={commonNavProps.onGetInTouchClick}
              />
              <LatestInsights
                onLearnMoreClick={(id) => navigate(getBlogDetailPath(id))}
                onViewAllClick={() => navigate(ROUTES.blog)}
              />
              <FAQSection />
              <ContactSection />
              <JourneySection />
            </>
          }
        />
        <Route
          path="*"
          element={
            <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-600 mb-4">
                404
              </p>
              <h1 className="text-3xl md:text-4xl font-black text-[#1a1b1f] mb-4">
                Page Not Found
              </h1>
              <p className="text-gray-500 max-w-lg mb-8">
                The page you are looking for doesn't exist. You can go back to
                the homepage.
              </p>
              <button
                onClick={() => navigate(ROUTES.home)}
                className="bg-[#e8edff] text-[#001fcc] px-6 py-3 rounded-md font-bold text-[15px] hover:bg-[#d9e2ff] transition-all"
              >
                Back to Home
              </button>
            </div>
          }
        />
      </Routes>
    </Suspense>
  );

  return (
    <div className="min-h-screen bg-white">
      <SEO seo={getSEO(currentView, blogId)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getSchema(currentView, blogId)),
        }}
      />

      <Navbar {...commonNavProps} />
      <main>{renderRoutes()}</main>
      <Footer
        onAboutUsClick={() => navigate(ROUTES.about)}
        onServicesClick={() => navigate(ROUTES.services)}
        onPortfolioClick={() => navigate(ROUTES.portfolio)}
        onBlogClick={() => navigate(ROUTES.blog)}
        onContactClick={() => navigate(ROUTES.contact)}
      />
    </div>
  );
};

export default App;





