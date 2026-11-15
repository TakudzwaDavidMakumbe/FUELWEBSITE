import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { ALL_SERVICES } from '../data/services';
import { SITE_ASSETS } from '../data/siteConfig';
import { PageHero } from '../components/PageHero';
import { SafeImage } from '../components/SafeImage';
import { SeoHead } from '../components/SeoHead';

export const ServicesPage: React.FC = () => {
  return (
    <div className="bg-[#F6F6F6]">
      <SeoHead
        title="Services – FUELMAX Gas Station"
        description="Explore FUELMAX services including Quality Fuel, Convenience Stores, Express Car Wash, Loyalty Rewards, and Commercial Fleet Cards."
      />

      <PageHero
        eyebrow="FUELMAX SERVICES"
        titleWhite="EVERYTHING YOU NEED"
        titleGold="AT ONE STOP"
        description="From high-octane performance fuel and spotless convenience stores to express car washes and commercial fleet fueling, every FUELMAX hub is built around your journey."
        image={SITE_ASSETS.fuelDispensers}
        imageAlt="Modern FUELMAX fuel dispensers illuminated at twilight"
      />

      <section className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
        <div className="space-y-10">
          {ALL_SERVICES.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <article
                key={service.id}
                className="bg-white rounded-[12px] border border-[#E8E8E8] shadow-[0_10px_30px_rgba(17,19,24,0.04)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch"
              >
                <div
                  className={`lg:col-span-5 min-h-[260px] lg:min-h-[340px] ${
                    isReversed ? 'lg:order-2' : ''
                  }`}
                >
                  <SafeImage
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div
                  className={`lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-center ${
                    isReversed ? 'lg:order-1' : ''
                  }`}
                >
                  <div className="font-display text-[12px] font-bold tracking-[0.14em] uppercase text-[#FFB900]">
                    0{index + 1}. {service.subtitle}
                  </div>
                  <h2 className="mt-2 font-display font-extrabold text-[26px] sm:text-[32px] uppercase text-[#111318]">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-[15px] leading-[1.7] text-[#656565]">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {service.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-[14px] font-medium text-[#111318]"
                      >
                        <span className="w-5 h-5 rounded-full bg-[#FFB900]/20 text-[#111318] flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" aria-hidden="true" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Link
                      to={service.to}
                      className="inline-flex items-center gap-2 bg-[#101318] hover:bg-[#FFB900] text-white hover:text-[#080B0F] font-display font-bold text-[12px] tracking-[0.06em] uppercase px-6 py-3.5 rounded-[6px] transition-colors duration-200"
                    >
                      <span>{service.ctaLabel}</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};
