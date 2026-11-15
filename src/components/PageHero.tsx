import React from 'react';
import { SafeImage } from './SafeImage';

interface PageHeroProps {
  eyebrow: string;
  titleWhite: string;
  titleGold: string;
  description: string;
  image: string;
  imageAlt: string;
  children?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  titleWhite,
  titleGold,
  description,
  image,
  imageAlt,
  children,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#080B0F] min-h-[340px] lg:min-h-[400px] flex items-center">
      <SafeImage
        src={image}
        alt={imageAlt}
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#080B0F] via-[#080B0F]/85 to-[#080B0F]/40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#080B0F] via-transparent to-[#080B0F]/50"
      />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="max-w-2xl">
          <div className="font-display text-[12px] font-bold tracking-[0.16em] uppercase text-[#FFB900] mb-3">
            {eyebrow}
          </div>
          <h1 className="font-display font-extrabold uppercase tracking-tight leading-[1.02] text-[34px] sm:text-[44px] lg:text-[52px]">
            <span className="block text-white">{titleWhite}</span>
            <span className="block text-[#FFB900]">{titleGold}</span>
          </h1>
          <p className="mt-5 text-[15px] sm:text-[16px] leading-relaxed text-[#D5D5D5] max-w-xl">
            {description}
          </p>
          {children && <div className="mt-7 flex flex-wrap gap-3.5">{children}</div>}
        </div>
      </div>
    </section>
  );
};
