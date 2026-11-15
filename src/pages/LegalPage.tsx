import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../data/siteConfig';
import { SeoHead } from '../components/SeoHead';

interface LegalPageProps {
  mode: 'privacy' | 'terms';
}

export const LegalPage: React.FC<LegalPageProps> = ({ mode }) => {
  const isPrivacy = mode === 'privacy';

  return (
    <div className="bg-[#F6F6F6]">
      <SeoHead
        title={`${isPrivacy ? 'Privacy Policy' : 'Terms of Service'} – FUELMAX Gas Station`}
        description={`Review FUELMAX Gas Station ${
          isPrivacy ? 'Privacy Policy' : 'Terms of Service'
        } guidelines and sample demonstration disclaimers.`}
      />

      <section className="bg-[#101318] text-white py-14 lg:py-18">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="font-display text-[12px] font-bold tracking-[0.14em] uppercase text-[#FFB900]">
            LEGAL INFORMATION
          </div>
          <h1 className="mt-2 font-display font-extrabold text-[34px] sm:text-[42px] uppercase">
            {isPrivacy ? 'PRIVACY POLICY' : 'TERMS OF SERVICE'}
          </h1>
          <p className="mt-2 text-[14px] text-[#D5D5D5]/75">
            Effective Reference Date: May 2024 · {SITE_CONFIG.brandName} Gas Station
          </p>
        </div>
      </section>

      <section className="max-w-[1000px] mx-auto px-5 sm:px-8 lg:px-12 py-14 lg:py-20">
        <div className="bg-white rounded-[12px] border border-[#E8E8E8] p-8 sm:p-12 space-y-8 text-[15px] leading-[1.75] text-[#656565]">
          {isPrivacy ? (
            <>
              <div>
                <h2 className="font-display font-bold text-[19px] uppercase text-[#111318] mb-2">
                  1. Information Overview
                </h2>
                <p>
                  This FUELMAX Gas Station web application is a demonstration website.
                  Form fields across Contact, Rewards Registration, and Fleet Enquiries
                  validate input strictly inside your browser and do not transmit data
                  to external third-party servers.
                </p>
              </div>
              <div>
                <h2 className="font-display font-bold text-[19px] uppercase text-[#111318] mb-2">
                  2. Sample Location &amp; Price Data
                </h2>
                <p>
                  All station addresses, contact numbers, and per-gallon fuel prices
                  displayed on this website are illustrative reference values. Actual
                  station rates and operating hours vary by physical retail location.
                </p>
              </div>
              <div>
                <h2 className="font-display font-bold text-[19px] uppercase text-[#111318] mb-2">
                  3. Questions &amp; Contact
                </h2>
                <p>
                  For inquiries regarding this website design or corporate details,
                  visit our{' '}
                  <Link to="/contact" className="text-[#111318] font-semibold underline">
                    Contact page
                  </Link>
                  .
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h2 className="font-display font-bold text-[19px] uppercase text-[#111318] mb-2">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing the FUELMAX Gas Station website, you agree to use this
                  demonstration interface for informational browsing of fuel grades,
                  convenience store categories, car wash packages, and sample station
                  locations.
                </p>
              </div>
              <div>
                <h2 className="font-display font-bold text-[19px] uppercase text-[#111318] mb-2">
                  2. Illustrative Pricing &amp; Offers
                </h2>
                <p>
                  Fuel prices, convenience store catalog prices, car wash tier rates,
                  and FUELMAX Rewards point schedules shown throughout this site are
                  illustrative samples and do not constitute a binding retail offer.
                </p>
              </div>
              <div>
                <h2 className="font-display font-bold text-[19px] uppercase text-[#111318] mb-2">
                  3. Intellectual Property
                </h2>
                <p>
                  The FUELMAX brand mark, layout architecture, and custom visual
                  assets are presented exclusively for the FUELMAX Gas Station
                  showcase. Return to the{' '}
                  <Link to="/" className="text-[#111318] font-semibold underline">
                    Homepage
                  </Link>
                  .
                </p>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};
