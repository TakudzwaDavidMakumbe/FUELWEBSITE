import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Droplets, MapPin, Shield, Sparkles } from 'lucide-react';
import { CAR_WASH_PACKAGES } from '../data/services';
import { SITE_ASSETS } from '../data/siteConfig';
import { PageHero } from '../components/PageHero';
import { SeoHead } from '../components/SeoHead';

export const CarWashPage: React.FC = () => {
  return (
    <div className="bg-[#F6F6F6]">
      <SeoHead
        title="Express Car Wash – FUELMAX Gas Station"
        description="Explore FUELMAX Express Car Wash packages with triple-foam conditioning, ceramic protectant, and spot-free rinse."
      />

      <PageHero
        eyebrow="EXPRESS CAR CARE"
        titleWhite="FAST, SPOT-FREE"
        titleGold="CAR WASH"
        description="Keep your vehicle spotless with modern soft-foam and touchless wash tunnels, reverse-osmosis purified rinse, and high-velocity dryers."
        image={SITE_ASSETS.carWash}
        imageAlt="Modern vehicle entering illuminated FUELMAX express car wash arches"
      >
        <Link
          to="/locations"
          className="inline-flex items-center gap-2 bg-[#FFB900] hover:bg-[#FFC21A] text-[#080B0F] font-display font-bold text-[12px] tracking-[0.06em] uppercase px-6 py-3.5 rounded-[6px] transition-colors"
        >
          <MapPin className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
          <span>FIND A CAR WASH STATION</span>
        </Link>
      </PageHero>

      <section className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
        <div className="max-w-2xl mb-12">
          <div className="font-display text-[12px] font-bold tracking-[0.14em] uppercase text-[#FFB900]">
            WASH PACKAGES
          </div>
          <h2 className="mt-2 font-display font-extrabold text-[30px] sm:text-[36px] uppercase text-[#111318]">
            CHOOSE YOUR SHINE LEVEL
          </h2>
          <p className="mt-3 text-[15px] text-[#656565]">
            Select any wash tier right at the fuel pump or tunnel kiosk. Sample
            prices shown below may vary by participating station.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {CAR_WASH_PACKAGES.map((pkg) => (
            <article
              key={pkg.id}
              className={`rounded-[12px] p-8 flex flex-col justify-between border ${
                pkg.recommended
                  ? 'bg-[#101318] text-white border-[#FFB900] shadow-[0_20px_45px_rgba(8,11,15,0.22)]'
                  : 'bg-white text-[#111318] border-[#E8E8E8] shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`font-display text-[11px] font-bold uppercase tracking-widest ${
                      pkg.recommended ? 'text-[#FFB900]' : 'text-[#656565]'
                    }`}
                  >
                    {pkg.recommended ? 'MOST POPULAR' : 'WASH PACKAGE'}
                  </span>
                </div>

                <h3 className="mt-2 font-display font-extrabold text-[22px] uppercase">
                  {pkg.name}
                </h3>

                <div
                  className={`mt-4 font-display font-extrabold text-[30px] tabular-nums ${
                    pkg.recommended ? 'text-[#FFB900]' : 'text-[#111318]'
                  }`}
                >
                  {pkg.priceLabel}
                </div>

                <p
                  className={`mt-3 text-[14px] leading-relaxed ${
                    pkg.recommended ? 'text-[#D5D5D5]/85' : 'text-[#656565]'
                  }`}
                >
                  {pkg.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-[14px]">
                      <Check
                        className="w-4 h-4 text-[#FFB900] shrink-0 mt-1 stroke-[2.8]"
                        aria-hidden="true"
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-current/10">
                <Link
                  to="/locations"
                  className={`w-full inline-flex items-center justify-center gap-2 font-display font-bold text-[12px] tracking-[0.06em] uppercase px-5 py-3.5 rounded-[6px] transition-colors ${
                    pkg.recommended
                      ? 'bg-[#FFB900] hover:bg-[#FFC21A] text-[#080B0F]'
                      : 'bg-[#101318] hover:bg-[#20242B] text-white'
                  }`}
                >
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  <span>FIND A STATION</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Benefits Strip */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Droplets,
              title: 'Recycled & Filtered Water',
              text: 'Closed-loop reclamation plus reverse-osmosis spot-free final rinse.',
            },
            {
              icon: Shield,
              title: 'Clear-Coat Safe',
              text: 'pH-balanced detergents and soft closed-cell foam brushes protect paint.',
            },
            {
              icon: Sparkles,
              title: 'Under 4 Minutes',
              text: 'Express conveyor and automated arches get your car gleaming fast.',
            },
          ].map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="bg-white rounded-[10px] border border-[#E8E8E8] p-6 flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-[8px] bg-[#101318] text-[#FFB900] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-[15px] uppercase text-[#111318]">
                    {b.title}
                  </h3>
                  <p className="mt-1 text-[13.5px] text-[#656565]">{b.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
