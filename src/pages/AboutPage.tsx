import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MapPin, ShieldCheck, Sparkles, Timer } from 'lucide-react';
import { SITE_ASSETS } from '../data/siteConfig';
import { PageHero } from '../components/PageHero';
import { SafeImage } from '../components/SafeImage';
import { SeoHead } from '../components/SeoHead';

const BRAND_VALUES = [
  {
    icon: ShieldCheck,
    title: 'Certified Fuel Purity',
    description:
      'Multi-stage tank filtration and scheduled dispenser calibration ensure every gallon meets strict quality benchmarks.',
  },
  {
    icon: Timer,
    title: 'Speed Without Compromise',
    description:
      'Wide pump lanes, tap-to-pay terminals, and intuitive store layouts get drivers fueled and back on the road quickly.',
  },
  {
    icon: Sparkles,
    title: 'Clean, Welcoming Stations',
    description:
      'Brightly illuminated canopies, spotless restrooms, and freshly stocked aisles elevate every roadside stop.',
  },
];

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#F6F6F6]">
      <SeoHead
        title="About FUELMAX – Reliable Fuel & Roadside Convenience"
        description="Learn about FUELMAX Gas Station, our fuel quality standards, mission, and commitment to powering every journey."
      />

      <PageHero
        eyebrow="ABOUT FUELMAX"
        titleWhite="DRIVEN BY QUALITY."
        titleGold="BUILT FOR THE ROAD."
        description="FUELMAX combines high-performance fuel formulations, bright modern canopies, and well-stocked convenience stores to deliver a dependable stop on every highway and neighborhood corridor."
        image={SITE_ASSETS.heroCanopy}
        imageAlt="FUELMAX modern illuminated fuel station exterior at twilight"
      >
        <Link
          to="/locations"
          className="inline-flex items-center gap-2 bg-[#FFB900] hover:bg-[#FFC21A] text-[#080B0F] font-display font-bold text-[12px] tracking-[0.06em] uppercase px-6 py-3.5 rounded-[6px] transition-colors"
        >
          <MapPin className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
          <span>FIND A STATION</span>
        </Link>
      </PageHero>

      {/* Introduction + Station Photography */}
      <section className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <div className="font-display text-[12px] font-bold tracking-[0.14em] uppercase text-[#FFB900]">
              OUR STORY &amp; PURPOSE
            </div>
            <h2 className="mt-2 font-display font-extrabold text-[30px] sm:text-[36px] leading-[1.1] uppercase text-[#111318]">
              REDEFINING THE EVERYDAY FUEL STOP
            </h2>
            <p className="mt-5 text-[15px] leading-[1.7] text-[#656565]">
              Refueling shouldn&apos;t mean dim lighting, cluttered aisles, or
              guessing what&apos;s going into your tank. FUELMAX was built around a
              straightforward promise: transparent daily fuel pricing, clean
              high-detergent fuel blends, and welcoming stores stocked with real
              travel essentials.
            </p>
            <p className="mt-4 text-[15px] leading-[1.7] text-[#656565]">
              Whether you&apos;re a daily commuter grabbing morning coffee, a family
              heading across state lines, or a commercial delivery fleet keeping
              tight schedules, our stations are engineered for dependability from
              dawn through late evening.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-[12px] overflow-hidden shadow-[0_20px_50px_rgba(17,19,24,0.12)] border border-[#E8E8E8] aspect-[4/3]">
              <SafeImage
                src={SITE_ASSETS.fuelDispensers}
                alt="High-tech FUELMAX fuel dispenser under golden canopy lighting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#101318] text-white py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-[#080B0F] border border-white/10 rounded-[12px] p-8 sm:p-10">
              <span className="font-display text-[12px] font-bold tracking-[0.14em] uppercase text-[#FFB900]">
                OUR MISSION
              </span>
              <h3 className="mt-2 font-display font-extrabold text-[24px] uppercase text-white">
                FUELING CONFIDENCE ON EVERY MILE
              </h3>
              <p className="mt-4 text-[15px] leading-[1.7] text-[#D5D5D5]/85">
                To deliver clean, high-efficiency fuels alongside fast convenience
                retail, express car care, and straightforward rewards — all backed
                by courteous on-site teams and transparent value.
              </p>
            </div>

            <div className="bg-[#080B0F] border border-white/10 rounded-[12px] p-8 sm:p-10">
              <span className="font-display text-[12px] font-bold tracking-[0.14em] uppercase text-[#FFB900]">
                OUR VISION
              </span>
              <h3 className="mt-2 font-display font-extrabold text-[24px] uppercase text-white">
                THE BENCHMARK FOR MODERN STATIONS
              </h3>
              <p className="mt-4 text-[15px] leading-[1.7] text-[#D5D5D5]/85">
                To set the standard for neighborhood and highway fueling hubs by
                pairing dependable infrastructure, cleaner flex-fuel options, and
                thoughtfully designed retail spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values + Why Drivers Choose FUELMAX */}
      <section className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
        <div className="max-w-2xl mb-12">
          <div className="font-display text-[12px] font-bold tracking-[0.14em] uppercase text-[#FFB900]">
            OUR CORE VALUES
          </div>
          <h2 className="mt-2 font-display font-extrabold text-[30px] sm:text-[36px] uppercase text-[#111318]">
            WHY DRIVERS CHOOSE FUELMAX
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {BRAND_VALUES.map((val) => {
            const Icon = val.icon;
            return (
              <article
                key={val.title}
                className="bg-white rounded-[10px] border border-[#E8E8E8] p-8 shadow-sm"
              >
                <div className="w-12 h-12 rounded-[8px] bg-[#101318] text-[#FFB900] flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-[18px] uppercase text-[#111318]">
                  {val.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-[#656565]">
                  {val.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Quality & Reliability Split */}
        <div className="mt-16 bg-white rounded-[12px] border border-[#E8E8E8] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
            <div className="font-display text-[12px] font-bold tracking-[0.14em] uppercase text-[#FFB900]">
              QUALITY &amp; RELIABILITY
            </div>
            <h3 className="mt-2 font-display font-extrabold text-[26px] sm:text-[30px] uppercase text-[#111318]">
              ENGINEERED FOR CLEANER COMBUSTION
            </h3>
            <ul className="mt-6 space-y-3.5 text-[14.5px] text-[#111318]">
              {[
                '10-micron particulate & water-absorbing dispenser filtration',
                'Daily automated underground tank monitoring & leak prevention',
                'Dedicated high-flow diesel and E85 flex-fuel lanes at flagship hubs',
                'Well-lit 24-hour security canopies at express highway corridors',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-[#279B54] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                to="/locations"
                className="inline-flex items-center gap-2 bg-[#FFB900] hover:bg-[#FFC21A] text-[#080B0F] font-display font-bold text-[12px] tracking-[0.06em] uppercase px-6 py-3.5 rounded-[6px] transition-colors"
              >
                <MapPin className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                <span>FIND NEAREST STATION</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 min-h-[280px]">
            <SafeImage
              src={SITE_ASSETS.fleetRefueling}
              alt="Commercial vehicles refueling cleanly under FUELMAX canopy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
