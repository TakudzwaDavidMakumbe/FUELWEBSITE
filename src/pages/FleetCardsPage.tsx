import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  CheckCircle2,
  CreditCard,
  Info,
  ShieldCheck,
  Truck,
} from 'lucide-react';
import { SITE_ASSETS } from '../data/siteConfig';
import { PageHero } from '../components/PageHero';
import { SeoHead } from '../components/SeoHead';

export const FleetCardsPage: React.FC = () => {
  const [company, setCompany] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [fleetSize, setFleetSize] = useState('5 - 20 Vehicles');
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!company.trim() || !contactName.trim()) {
      setError('Company name and primary contact are required.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid business email address.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F6F6F6]">
      <SeoHead
        title="Fleet Cards – FUELMAX Business Fuel Management"
        description="Control commercial fuel expenses with FUELMAX Fleet Cards, driver PIN controls, high-clearance diesel lanes, and consolidated billing."
      />

      <PageHero
        eyebrow="COMMERCIAL SOLUTIONS"
        titleWhite="FUELMAX"
        titleGold="FLEET CARDS"
        description="Built for local delivery vans, service contractors, and regional logistics fleets. Streamline driver fueling with unified controls and clear reporting."
        image={SITE_ASSETS.fleetRefueling}
        imageAlt="Commercial delivery vans refueling under FUELMAX fleet canopy"
      >
        <a
          href="#fleet-enquiry"
          className="inline-flex items-center gap-2 bg-[#FFB900] hover:bg-[#FFC21A] text-[#080B0F] font-display font-bold text-[12px] tracking-[0.06em] uppercase px-6 py-3.5 rounded-[6px] transition-colors"
        >
          <span>REQUEST FLEET ACCOUNT</span>
        </a>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 border border-white/75 hover:border-[#FFB900] text-white hover:text-[#FFB900] font-display font-bold text-[12px] tracking-[0.06em] uppercase px-6 py-3.5 rounded-[6px] transition-colors"
        >
          <span>CONTACT SALES</span>
        </Link>
      </PageHero>

      <section className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {[
            {
              icon: CreditCard,
              title: 'Driver PIN Security',
              text: 'Assign individual driver PINs and odometer prompts at every pump.',
            },
            {
              icon: ShieldCheck,
              title: 'Purchase Controls',
              text: 'Restrict cards to fuel-only, specific grades, or daily gallon caps.',
            },
            {
              icon: BarChart3,
              title: 'Consolidated Statements',
              text: 'Single itemized monthly invoice broken down by vehicle and driver.',
            },
            {
              icon: Truck,
              title: 'High-Clearance Lanes',
              text: 'Wide commercial diesel lanes engineered for box trucks and vans.',
            },
          ].map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="bg-white rounded-[10px] border border-[#E8E8E8] p-7 shadow-sm"
              >
                <div className="w-11 h-11 rounded-[8px] bg-[#101318] text-[#FFB900] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h2 className="font-display font-bold text-[16px] uppercase text-[#111318]">
                  {feat.title}
                </h2>
                <p className="mt-2 text-[14px] leading-relaxed text-[#656565]">
                  {feat.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Fleet Account Registration Enquiry Form */}
        <div
          id="fleet-enquiry"
          className="scroll-mt-24 bg-white rounded-[12px] border border-[#E8E8E8] p-8 sm:p-10 shadow-sm max-w-2xl mx-auto"
        >
          {submitted ? (
            <div className="text-center py-6">
              <CheckCircle2
                className="w-12 h-12 text-[#279B54] mx-auto mb-3"
                aria-hidden="true"
              />
              <h3 className="font-display font-extrabold text-[22px] uppercase text-[#111318]">
                FLEET ENQUIRY VALIDATED (DEMO)
              </h3>
              <p className="mt-2 text-[14.5px] text-[#656565]">
                Thank you, {contactName}. Your sample fleet enquiry for{' '}
                <strong className="text-[#111318]">{company}</strong> ({fleetSize})
                has been validated in this frontend preview.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setCompany('');
                  setContactName('');
                  setEmail('');
                }}
                className="mt-6 bg-[#101318] text-white font-display font-bold text-[12px] uppercase px-6 py-3 rounded-[6px] cursor-pointer"
              >
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <div className="font-display text-[11px] font-bold tracking-[0.14em] uppercase text-[#FFB900]">
                  BUSINESS ACCOUNTS
                </div>
                <h2 className="mt-1 font-display font-extrabold text-[26px] uppercase text-[#111318]">
                  FLEET CARD ENQUIRY FORM
                </h2>
              </div>

              {error && (
                <div className="p-3.5 rounded-[6px] bg-red-50 border border-red-200 text-red-700 text-[13.5px]">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="fleet-company"
                    className="block font-display text-[12px] font-bold uppercase text-[#111318] mb-2"
                  >
                    Company Name *
                  </label>
                  <input
                    id="fleet-company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Metro Courier Services LLC"
                    className="w-full px-4 py-3 rounded-[6px] bg-[#F6F6F6] border border-[#E8E8E8] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#FFB900]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="fleet-contact"
                    className="block font-display text-[12px] font-bold uppercase text-[#111318] mb-2"
                  >
                    Contact Person *
                  </label>
                  <input
                    id="fleet-contact"
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Jordan Hayes"
                    className="w-full px-4 py-3 rounded-[6px] bg-[#F6F6F6] border border-[#E8E8E8] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#FFB900]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="fleet-email"
                    className="block font-display text-[12px] font-bold uppercase text-[#111318] mb-2"
                  >
                    Business Email *
                  </label>
                  <input
                    id="fleet-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="fleet@company.com"
                    className="w-full px-4 py-3 rounded-[6px] bg-[#F6F6F6] border border-[#E8E8E8] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#FFB900]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="fleet-size"
                    className="block font-display text-[12px] font-bold uppercase text-[#111318] mb-2"
                  >
                    Estimated Fleet Size
                  </label>
                  <select
                    id="fleet-size"
                    value={fleetSize}
                    onChange={(e) => setFleetSize(e.target.value)}
                    className="w-full px-4 py-3 rounded-[6px] bg-[#F6F6F6] border border-[#E8E8E8] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#FFB900]"
                  >
                    <option>1 - 4 Vehicles</option>
                    <option>5 - 20 Vehicles</option>
                    <option>21 - 75 Vehicles</option>
                    <option>75+ Commercial Fleet</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FFB900] hover:bg-[#FFC21A] text-[#080B0F] font-display font-bold text-[12.5px] tracking-[0.06em] uppercase px-6 py-3.5 rounded-[6px] transition-colors cursor-pointer"
              >
                SUBMIT FLEET ENQUIRY
              </button>

              <div className="flex items-start gap-2 text-[12px] text-[#656565]">
                <Info className="w-4 h-4 text-[#FFB900] shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  Demo frontend form: validates input locally without creating a live
                  credit account.
                </span>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
