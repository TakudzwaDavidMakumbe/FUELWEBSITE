import React, { useState } from 'react';
import { Check, CheckCircle2, Info } from 'lucide-react';
import { REWARDS_DATA } from '../data/rewards';
import { RewardsCardVisual } from '../components/RewardsCardVisual';
import { SeoHead } from '../components/SeoHead';

export const RewardsPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [enrolledMember, setEnrolledMember] = useState<string | null>(null);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!fullName.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    if (phone.replace(/\D/g, '').length < 10) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    setEnrolledMember(fullName.trim().toUpperCase());
  };

  return (
    <div className="bg-[#F6F6F6]">
      <SeoHead
        title="FUELMAX Rewards – Earn Points on Every Purchase"
        description="Join FUELMAX Rewards to earn points on fuel, convenience store purchases, and car washes. Redeem for instant pump savings."
      />

      {/* Black & Yellow Rewards Hero */}
      <section className="bg-gradient-to-br from-[#FFC21A] via-[#FFB900] to-[#F3AE00] text-[#111318] py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="font-display text-[12px] font-bold tracking-[0.14em] uppercase text-[#111318]/80">
              LOYALTY PROGRAM
            </div>
            <h1 className="mt-2 font-display font-extrabold text-[38px] sm:text-[48px] lg:text-[54px] leading-[1.02] uppercase text-[#111318]">
              FUELMAX REWARDS
            </h1>
            <p className="mt-4 text-[17px] font-medium text-[#111318]/90 max-w-xl">
              {REWARDS_DATA.tagline} Earn points on every gallon pumped, fresh coffee
              poured, and express car wash selected.
            </p>

            <ul className="mt-6 space-y-2.5">
              {REWARDS_DATA.homepageBullets.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[15px] font-semibold text-[#111318]"
                >
                  <span className="w-5 h-5 rounded-full bg-[#111318] text-[#FFB900] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" aria-hidden="true" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href="#rewards-register"
                className="inline-flex items-center justify-center bg-[#101318] hover:bg-[#20242B] text-white font-display font-bold text-[12px] tracking-[0.06em] uppercase px-7 py-3.5 rounded-[6px] transition-colors"
              >
                JOIN NOW
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <RewardsCardVisual
              memberName={enrolledMember || REWARDS_DATA.cardSample.memberName}
              className="w-full max-w-[350px]"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="mb-10">
          <div className="font-display text-[12px] font-bold tracking-[0.14em] uppercase text-[#FFB900]">
            SIMPLE &amp; AUTOMATIC
          </div>
          <h2 className="mt-1 font-display font-extrabold text-[30px] sm:text-[34px] uppercase text-[#111318]">
            HOW FUELMAX REWARDS WORKS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REWARDS_DATA.howItWorks.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-[10px] border border-[#E8E8E8] p-7 shadow-sm"
            >
              <div className="font-mono text-[22px] font-bold text-[#FFB900]">
                {step.step}
              </div>
              <h3 className="mt-3 font-display font-bold text-[18px] uppercase text-[#111318]">
                {step.title}
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-[#656565]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Earning & Redeeming Breakdown */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#101318] text-white rounded-[12px] p-8">
            <h3 className="font-display font-extrabold text-[22px] uppercase text-[#FFB900]">
              EARNING POINTS
            </h3>
            <p className="mt-2 text-[14px] text-[#D5D5D5]/80">
              Sample points schedule across FUELMAX services:
            </p>
            <ul className="mt-6 divide-y divide-white/10">
              {REWARDS_DATA.earningRates.map((item) => (
                <li
                  key={item.label}
                  className="py-3.5 flex items-center justify-between gap-4 text-[14.5px]"
                >
                  <span className="text-white/90">{item.label}</span>
                  <span className="font-mono font-semibold text-[#FFB900] tabular-nums">
                    {item.rate}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-[12px] border border-[#E8E8E8] p-8">
            <h3 className="font-display font-extrabold text-[22px] uppercase text-[#111318]">
              REDEEMING REWARDS
            </h3>
            <p className="mt-2 text-[14px] text-[#656565]">
              Convert accumulated points at the pump or register:
            </p>
            <ul className="mt-6 divide-y divide-[#E8E8E8]">
              {REWARDS_DATA.redemptionTiers.map((tier) => (
                <li
                  key={tier.points}
                  className="py-3.5 flex items-center justify-between gap-4 text-[14.5px]"
                >
                  <span className="font-mono font-bold text-[#111318] shrink-0 tabular-nums">
                    {tier.points}
                  </span>
                  <span className="text-[#656565] text-right">{tier.reward}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Registration Form */}
        <div
          id="rewards-register"
          className="scroll-mt-24 mt-14 bg-white rounded-[12px] border border-[#E8E8E8] p-8 sm:p-10 shadow-sm max-w-2xl mx-auto"
        >
          {enrolledMember ? (
            <div className="text-center py-4">
              <CheckCircle2
                className="w-12 h-12 text-[#279B54] mx-auto mb-3"
                aria-hidden="true"
              />
              <h3 className="font-display font-extrabold text-[22px] uppercase text-[#111318]">
                SAMPLE DIGITAL CARD PREVIEW READY
              </h3>
              <p className="mt-2 text-[14.5px] text-[#656565]">
                Your name ({enrolledMember}) is now previewed on the FUELMAX Rewards
                card above. This is a frontend registration demonstration.
              </p>
              <button
                type="button"
                onClick={() => {
                  setEnrolledMember(null);
                  setFullName('');
                  setEmail('');
                  setPhone('');
                }}
                className="mt-6 bg-[#101318] text-white font-display font-bold text-[12px] uppercase px-6 py-3 rounded-[6px] cursor-pointer"
              >
                Reset Preview
              </button>
            </div>
          ) : (
            <form onSubmit={handleJoin} noValidate className="space-y-5">
              <div>
                <h2 className="font-display font-extrabold text-[24px] uppercase text-[#111318]">
                  REGISTER FOR FUELMAX REWARDS
                </h2>
                <p className="mt-1 text-[14px] text-[#656565]">
                  Complete the quick form below to preview your FUELMAX Rewards
                  membership card.
                </p>
              </div>

              {error && (
                <div className="p-3.5 rounded-[6px] bg-red-50 border border-red-200 text-red-700 text-[13.5px]">
                  {error}
                </div>
              )}

              <div>
                <label
                  htmlFor="rewards-name"
                  className="block font-display text-[12px] font-bold uppercase text-[#111318] mb-2"
                >
                  Full Name *
                </label>
                <input
                  id="rewards-name"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Jane Driver"
                  className="w-full px-4 py-3 rounded-[6px] bg-[#F6F6F6] border border-[#E8E8E8] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#FFB900]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="rewards-email"
                    className="block font-display text-[12px] font-bold uppercase text-[#111318] mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    id="rewards-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-[6px] bg-[#F6F6F6] border border-[#E8E8E8] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#FFB900]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="rewards-phone"
                    className="block font-display text-[12px] font-bold uppercase text-[#111318] mb-2"
                  >
                    Mobile Number (Pump ID) *
                  </label>
                  <input
                    id="rewards-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(123) 456-7890"
                    className="w-full px-4 py-3 rounded-[6px] bg-[#F6F6F6] border border-[#E8E8E8] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#FFB900]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FFB900] hover:bg-[#FFC21A] text-[#080B0F] font-display font-bold text-[12.5px] tracking-[0.06em] uppercase px-6 py-3.5 rounded-[6px] transition-colors cursor-pointer"
              >
                JOIN NOW
              </button>

              <div className="flex items-start gap-2 text-[12px] text-[#656565]">
                <Info className="w-4 h-4 text-[#FFB900] shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  Demo preview form: does not transmit personal data to an external
                  loyalty server.
                </span>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
