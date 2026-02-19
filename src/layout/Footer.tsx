import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../config/siteConfig';
import { CONTENT_CONFIG, getCopyrightYears } from '../config/contentConfig';
import { ROUTES } from '../routes/routes';
import logo from '/assets/images/mindmanthan.svg';

const MindManthanLogoFooter = () => (
  <div className="flex items-center gap-4 group cursor-pointer flex-wrap">
    <div className="relative w-16 h-16 flex items-center justify-center">
      {/* Animated Orbiting Ring Layers */}
      <img src={logo} alt={`${CONTENT_CONFIG.company.shortName} logo`} className="w-full h-full object-contain" />
    </div>

    <div className="flex flex-col leading-tight">
      <span className="text-[#001fcc] text-2xl font-black tracking-tight uppercase break-words">
        {CONTENT_CONFIG.company.shortName}
      </span>
      <div className="flex items-center gap-2">
        <div className="h-[1px] w-5 bg-gradient-to-r from-[#2dd4bf] to-transparent"></div>
        <span className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.4em]">
          Software Solutions
        </span>
      </div>
    </div>
  </div>
);

interface FooterProps {
  onServicesClick?: () => void;
  onAboutUsClick?: () => void;
  onPortfolioClick?: () => void;
  onBlogClick?: () => void;
  onContactClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onServicesClick, onAboutUsClick, onPortfolioClick, onBlogClick, onContactClick }) => {
  return (
    <footer className="bg-[#f4f7ff] md:py-12 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
          <div className="md:col-span-2">
            <div className="mb-8">
              <MindManthanLogoFooter />
            </div>
            <p className="text-gray-700 max-w-md leading-relaxed text-base md:text-lg">
              We are a team of passionate developers and strategists committed to transforming businesses through innovative digital solutions and strategic software engineering.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href={SITE_CONFIG.linkedinPage}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn"
                className="w-10 h-10 rounded-full border border-blue-200 bg-white text-[#001fcc] hover:bg-[#001fcc] hover:text-white transition-colors flex items-center justify-center"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={SITE_CONFIG.xPage}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our X profile"
                className="w-10 h-10 rounded-full border border-blue-200 bg-white text-[#001fcc] hover:bg-[#001fcc] hover:text-white transition-colors flex items-center justify-center"
              >
                <span className="text-sm font-black leading-none">X</span>
              </a>
              <a
                href={SITE_CONFIG.facebookPage}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook"
                className="w-10 h-10 rounded-full border border-blue-200 bg-white text-[#001fcc] hover:bg-[#001fcc] hover:text-white transition-colors flex items-center justify-center"
              >
                <Facebook size={18} />
              </a>
              <a
                href={SITE_CONFIG.instagramPage}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram"
                className="w-10 h-10 rounded-full border border-blue-200 bg-white text-[#001fcc] hover:bg-[#001fcc] hover:text-white transition-colors flex items-center justify-center"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-black text-[#010417] text-base md:text-lg uppercase tracking-widest mb-6 md:mb-8">Explore</h4>
            <ul className="space-y-4 text-gray-700 font-medium">
              <li><button onClick={onAboutUsClick} className="hover:text-[#001fcc] transition-colors cursor-pointer bg-none border-none p-0 text-left">About Us</button></li>
              <li><button onClick={onServicesClick} className="hover:text-[#001fcc] transition-colors cursor-pointer bg-none border-none p-0 text-left">Services</button></li>
              <li><button onClick={onPortfolioClick} className="hover:text-[#001fcc] transition-colors cursor-pointer bg-none border-none p-0 text-left">Portfolio</button></li>
              <li><button onClick={onBlogClick} className="hover:text-[#001fcc] transition-colors cursor-pointer bg-none border-none p-0 text-left">Blog</button></li>
              <li><button onClick={onContactClick} className="hover:text-[#001fcc] transition-colors cursor-pointer bg-none border-none p-0 text-left">Contact</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-[#010417] text-base md:text-lg uppercase tracking-widest mb-6 md:mb-8">Contact</h4>
            <ul className="space-y-4 text-gray-700 font-medium break-words">
              <li className="break-words flex items-start gap-3">
                <Mail size={18} className="text-[#001fcc] mt-0.5 shrink-0" />
                <span>{SITE_CONFIG.business.email}</span>
              </li>
              <li className="break-words flex items-start gap-3">
                <Phone size={18} className="text-[#001fcc] mt-0.5 shrink-0" />
                <span>{SITE_CONFIG.business.phone}</span>
              </li>
              <li className="break-words flex items-start gap-3">
                <MapPin size={18} className="text-[#001fcc] mt-0.5 shrink-0" />
                <span>{SITE_CONFIG.business.addressLine}</span>
              </li>
              <li>
                <button
                  onClick={onContactClick}
                  className="text-[#001fcc] font-bold underline cursor-pointer"
                >
                  Schedule a Call
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 md:mt-24 pt-8 md:pt-10 border-t border-blue-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-gray-600 text-sm font-medium">
          <p className="break-words">&copy; {getCopyrightYears()} {CONTENT_CONFIG.company.legalName}. All Rights Reserved.</p>
          <div className="w-full md:w-auto flex flex-wrap justify-center md:justify-end gap-6">
            <Link to={ROUTES.privacyPolicy} className="hover:text-[#001fcc]">Privacy Policy</Link>
            <Link to={ROUTES.termsOfService} className="hover:text-[#001fcc]">Terms of Service</Link>
            <a href="/sitemap.xml" className="hover:text-[#001fcc]">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


