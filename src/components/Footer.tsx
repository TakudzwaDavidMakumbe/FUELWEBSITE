import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { FuelMaxLogo } from './FuelMaxLogo';

const SocialIconSvg: React.FC<{ id: string }> = ({ id }) => {
  switch (id) {
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
          <path d="M13.5 9H16V5.5H13.5C10.9 5.5 9.5 7 9.5 9.4V11H7.5V14.5H9.5V21H13V14.5H15.6L16 11H13V9.7C13 9.2 13.2 9 13.5 9Z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none" strokeWidth="2" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'twitter':
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
          <path d="M18.9 4H21.7L15.6 11L22.8 20H17.1L12.7 14.3L7.7 20H4.9L11.4 12.5L4.5 4H10.3L14.3 9.2L18.9 4ZM17.9 18.3H19.4L9.4 5.6H7.8L17.9 18.3Z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
          <path d="M21.6 7.2C21.4 6.3 20.7 5.6 19.8 5.4C18.2 5 12 5 12 5C12 5 5.8 5 4.2 5.4C3.3 5.6 2.6 6.3 2.4 7.2C2 8.8 2 12 2 12C2 12 2 15.2 2.4 16.8C2.6 17.7 3.3 18.4 4.2 18.6C5.8 19 12 19 12 19C12 19 18.2 19 19.8 18.6C20.7 18.4 21.4 17.7 21.6 16.8C22 15.2 22 12 22 12C22 12 22 8.8 21.6 7.2ZM10 15V9L15.2 12L10 15Z" />
        </svg>
      );
  }
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080B0F] text-[#D5D5D5] border-t border-white/[0.08]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Brand & Socials */}
          <div>
            <Link to="/" aria-label="FUELMAX Home" className="inline-block">
              <FuelMaxLogo />
            </Link>
            <p className="mt-4 text-[14px] leading-relaxed text-[#D5D5D5]/80 max-w-[260px]">
              {SITE_CONFIG.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SITE_CONFIG.socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  aria-label={`FUELMAX on ${social.label}`}
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-9 h-9 rounded-full border border-white/15 bg-[#101318] flex items-center justify-center text-[#D5D5D5] hover:border-[#FFB900] hover:text-[#FFB900] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB900]"
                >
                  <SocialIconSvg id={social.id} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h2 className="font-display text-[13px] font-bold tracking-[0.08em] uppercase text-[#FFB900] mb-5">
              QUICK LINKS
            </h2>
            <ul className="space-y-3">
              {SITE_CONFIG.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-[14px] text-[#D5D5D5]/85 hover:text-[#FFB900] transition-colors duration-200 focus-visible:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h2 className="font-display text-[13px] font-bold tracking-[0.08em] uppercase text-[#FFB900] mb-5">
              SERVICES
            </h2>
            <ul className="space-y-3">
              {SITE_CONFIG.serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-[14px] text-[#D5D5D5]/85 hover:text-[#FFB900] transition-colors duration-200 focus-visible:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h2 className="font-display text-[13px] font-bold tracking-[0.08em] uppercase text-[#FFB900] mb-5">
              CONTACT US
            </h2>
            <ul className="space-y-3.5 text-[14px] text-[#D5D5D5]/85">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D5D5D5]/70 shrink-0 mt-1" aria-hidden="true" />
                <span>
                  {SITE_CONFIG.contact.addressLine1}
                  <br />
                  {SITE_CONFIG.contact.addressLine2}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D5D5D5]/70 shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${SITE_CONFIG.contact.phone.replace(/\D/g, '')}`}
                  className="hover:text-[#FFB900] transition-colors"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D5D5D5]/70 shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="hover:text-[#FFB900] transition-colors"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#D5D5D5]/70 shrink-0" aria-hidden="true" />
                <span>{SITE_CONFIG.contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#D5D5D5]/65">
          <p>{SITE_CONFIG.copyright}</p>
          <div className="flex items-center gap-4">
            <Link
              to="/privacy-policy"
              className="hover:text-[#FFB900] transition-colors"
            >
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="text-white/25">
              |
            </span>
            <Link
              to="/terms-of-service"
              className="hover:text-[#FFB900] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
