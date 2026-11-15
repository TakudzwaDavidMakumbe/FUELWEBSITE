import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Info, MapPin, Tag } from 'lucide-react';
import { SITE_ASSETS } from '../data/siteConfig';
import { HOME_CORE_SERVICES } from '../data/services';
import { FUEL_PRICING_CONFIG, REFERENCE_FUEL_PRICES } from '../data/fuelPrices';
import { REWARDS_DATA } from '../data/rewards';
import {
  CarWashGoldIcon,
  FuelPumpGoldIcon,
  LoyaltyCardGoldIcon,
  StorefrontGoldIcon,
} from '../components/ServiceIcons';
import { FuelPriceCard } from '../components/FuelPriceCard';
import { RewardsCardVisual } from '../components/RewardsCardVisual';
import { SafeImage } from '../components/SafeImage';
import { SeoHead } from '../components/SeoHead';

gsap.registerPlugin(ScrollTrigger);

const renderCoreIcon = (key: string) => {
  switch (key) {
    case 'fuel':
      return <FuelPumpGoldIcon className="w-12 h-12" />;
    case 'store':
      return <StorefrontGoldIcon className="w-12 h-12" />;
    case 'car-wash':
      return <CarWashGoldIcon className="w-12 h-12" />;
    default:
      return <LoyaltyCardGoldIcon className="w-12 h-12" />;
  }
};

export const HomePage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !pageRef.current) return;

    const ctx = gsap.context(() => {
      // Hero staggered entrance
      gsap.from('.hero-stagger', {
        y: 22,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
      });

      // Core services panel reveal
      gsap.from('.service-feature-item', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '.services-panel-trigger',
          start: 'top 88%',
          once: true,
        },
      });

      // Fuel price cards staggered reveal
      gsap.from('.fuel-price-card', {
        y: 24,
        opacity: 0,
        duration: 0.55,
        stagger: 0.09,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '#fuel-prices',
          start: 'top 82%',
          once: true,
        },
      });

      // Promo split reveal
      gsap.from('.promo-reveal', {
        y: 22,
        opacity: 0,
        duration: 0.65,
        stagger: 0.12,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '.promo-split-section',
          start: 'top 84%',
          once: true,
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const scrollToFuelPrices = () => {
    const el = document.getElementById('fuel-prices');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div ref={pageRef} className="w-full overflow-x-hidden">
      <SeoHead
        title="FUELMAX Gas Station – Powering Every Journey"
        description="Quality fuel, fresh convenience store essentials, express car washes, and FUELMAX Rewards. Find your nearest station and explore daily sample rates."
      />

      {/* SECTION 01: CINEMATIC HERO */}
      <section className="relative bg-[#080B0F] min-h-[540px] sm:min-h-[580px] lg:min-h-[640px] flex items-center pb-24 lg:pb-32">
        <SafeImage
          src={SITE_ASSETS.heroCanopy}
          alt="Modern FUELMAX gas station canopy illuminated in golden yellow at dusk"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-right md:object-center"
        />

        {/* Left-heavy dark gradient overlay for crisp text contrast while keeping station visible on right */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#080B0F] via-[#080B0F]/85 md:via-[#080B0F]/65 to-[#080B0F]/15"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#080B0F] to-transparent"
        />

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 pt-16 lg:pt-20">
          <div className="max-w-[540px]">
            <h1 className="hero-stagger font-display font-extrabold uppercase tracking-tight leading-[0.98] text-[40px] sm:text-[50px] lg:text-[56px]">
              <span className="block text-white">POWERING</span>
              <span className="block text-[#FFB900]">EVERY JOURNEY</span>
            </h1>

            <p className="hero-stagger mt-5 text-[15px] sm:text-[17px] leading-[1.6] text-[#D5D5D5] max-w-[460px]">
              Quality fuel, great service, and unbeatable convenience. That&apos;s the
              FUELMAX promise.
            </p>

            <div className="hero-stagger mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                to="/locations"
                className="inline-flex items-center justify-center gap-2.5 bg-[#FFB900] hover:bg-[#FFC21A] text-[#080B0F] font-display font-bold text-[12px] sm:text-[13px] tracking-[0.06em] uppercase px-6 py-3.5 rounded-[6px] whitespace-nowrap transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MapPin className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                <span>FIND A STATION</span>
              </Link>

              <button
                type="button"
                onClick={scrollToFuelPrices}
                className="inline-flex items-center justify-center gap-2.5 bg-[#080B0F]/65 hover:bg-white/10 text-white border border-white/75 hover:border-[#FFB900] hover:text-[#FFB900] font-display font-bold text-[12px] sm:text-[13px] tracking-[0.06em] uppercase px-6 py-3.5 rounded-[6px] whitespace-nowrap transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB900]"
              >
                <Tag className="w-4 h-4" aria-hidden="true" />
                <span>CHECK FUEL PRICES</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 + 03: OVERLAPPING CORE SERVICES PANEL & FUEL PRICES */}
      <section className="bg-[#F6F6F6] pb-20 lg:pb-28">
        {/* Overlapping 4-Column Charcoal Service Panel */}
        <div className="services-panel-trigger relative z-20 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 -mt-16 sm:-mt-20 lg:-mt-24">
          <div className="bg-[#101318] rounded-[14px] border border-white/[0.08] shadow-[0_24px_60px_rgba(8,11,15,0.35)] overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-white/[0.08]">
              {HOME_CORE_SERVICES.map((service) => (
                <Link
                  key={service.id}
                  to={service.to}
                  className="service-feature-item group flex flex-col items-center text-center px-7 py-9 lg:py-10 hover:bg-white/[0.03] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#FFB900]"
                >
                  <div className="mb-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:drop-shadow-[0_0_12px_rgba(255,185,0,0.45)]">
                    {renderCoreIcon(service.iconKey)}
                  </div>
                  <h2 className="font-display font-bold text-[15px] tracking-[0.05em] uppercase text-white group-hover:text-[#FFB900] transition-colors">
                    {service.title}
                  </h2>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-[#D5D5D5]/80 max-w-[230px]">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 03: TODAY'S FUEL PRICES */}
        <div
          id="fuel-prices"
          className="scroll-mt-20 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 pt-16 sm:pt-20 lg:pt-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
            {/* Left Intro Column */}
            <div className="lg:col-span-4">
              <div className="font-display text-[13px] font-bold tracking-[0.08em] uppercase text-[#FFB900]">
                TODAY&apos;S
              </div>
              <h2 className="mt-1 font-display font-extrabold text-[32px] sm:text-[36px] leading-[1.08] tracking-tight uppercase text-[#111318]">
                FUEL PRICES
              </h2>
              <p className="mt-4 text-[15px] leading-[1.65] text-[#656565] max-w-[340px]">
                We update our fuel prices daily to ensure transparency and the best
                value.
              </p>

              <div className="mt-7">
                <Link
                  to="/fuel-prices"
                  className="inline-flex items-center justify-center bg-[#101318] hover:bg-[#20242B] text-white font-display font-bold text-[12px] tracking-[0.06em] uppercase px-6 py-3.5 rounded-[6px] transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB900]"
                >
                  VIEW ALL PRICES
                </Link>
              </div>
            </div>

            {/* Right 4-Card Fuel Grid + Bottom Info Row */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-5">
                {REFERENCE_FUEL_PRICES.map((fuel) => (
                  <FuelPriceCard key={fuel.id} item={fuel} />
                ))}
              </div>

              <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[12.5px] text-[#656565]">
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-[#656565] shrink-0" aria-hidden="true" />
                  <span>
                    {FUEL_PRICING_CONFIG.disclaimer} (Illustrative reference rates)
                  </span>
                </div>
                <div className="tabular-nums">
                  Last updated: {FUEL_PRICING_CONFIG.lastUpdatedLabel}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04: 50/50 SPLIT PROMOTIONAL SECTION */}
      <section className="promo-split-section grid grid-cols-1 lg:grid-cols-2 items-stretch">
        {/* Left Half: Convenience Store */}
        <div className="promo-reveal relative min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] flex items-center overflow-hidden bg-[#101318]">
          <SafeImage
            src={SITE_ASSETS.storeInterior}
            alt="Modern FUELMAX convenience store shelves with snacks and refrigerated beverages"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#080B0F]/95 via-[#080B0F]/80 to-[#080B0F]/25"
          />

          <div className="relative z-10 w-full max-w-[640px] ml-auto px-6 sm:px-10 lg:px-14 py-14">
            <div className="max-w-[340px]">
              <div className="font-display text-[13px] font-bold tracking-[0.1em] uppercase text-[#FFB900]">
                FUEL UP &amp;
              </div>
              <h2 className="mt-1 font-display font-extrabold text-[32px] sm:text-[38px] leading-[1.05] tracking-tight uppercase text-white">
                STOCK UP
              </h2>
              <p className="mt-4 text-[15px] leading-[1.65] text-[#D5D5D5]">
                From fresh coffee to travel essentials, our convenience store has
                you covered.
              </p>
              <div className="mt-7">
                <Link
                  to="/store"
                  className="inline-flex items-center justify-center bg-[#FFB900] hover:bg-[#FFC21A] text-[#080B0F] font-display font-bold text-[12px] tracking-[0.06em] uppercase px-6 py-3.5 rounded-[6px] transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  EXPLORE STORE
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Half: Golden-Yellow FUELMAX Rewards */}
        <div className="promo-reveal bg-gradient-to-br from-[#FFC21A] via-[#FFB900] to-[#F3AE00] text-[#111318] min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] flex items-center">
          <div className="w-full max-w-[640px] mr-auto px-6 sm:px-10 lg:px-14 py-14">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
              <div className="sm:col-span-6">
                <h2 className="font-display font-extrabold text-[30px] sm:text-[34px] leading-[1.04] tracking-tight uppercase text-[#111318]">
                  FUELMAX
                  <br />
                  REWARDS
                </h2>
                <p className="mt-3 text-[15px] font-medium leading-snug text-[#111318]/90">
                  {REWARDS_DATA.tagline}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {REWARDS_DATA.homepageBullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-2.5 text-[14px] font-medium text-[#111318]"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#111318] text-[#FFB900] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" aria-hidden="true" />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <Link
                    to="/rewards"
                    className="inline-flex items-center justify-center bg-[#101318] hover:bg-[#20242B] text-white font-display font-bold text-[12px] tracking-[0.06em] uppercase px-7 py-3.5 rounded-[6px] transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111318]"
                  >
                    JOIN NOW
                  </Link>
                </div>
              </div>

              <div className="sm:col-span-6 flex justify-center sm:justify-end">
                <RewardsCardVisual className="w-full max-w-[310px] sm:rotate-[-2deg]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
