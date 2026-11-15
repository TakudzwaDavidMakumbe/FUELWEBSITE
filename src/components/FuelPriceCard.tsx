import React from 'react';
import { FUEL_PRICING_CONFIG, FuelPriceItem } from '../data/fuelPrices';
import { WhiteFuelNozzleIcon } from './ServiceIcons';

interface FuelPriceCardProps {
  item: FuelPriceItem;
  currencySymbol?: string;
  unitLabel?: string;
  className?: string;
  onSelect?: () => void;
}

export const FuelPriceCard: React.FC<FuelPriceCardProps> = ({
  item,
  currencySymbol = FUEL_PRICING_CONFIG.currencySymbol,
  unitLabel = FUEL_PRICING_CONFIG.unitLabel,
  className = '',
  onSelect,
}) => {
  const formattedPrice = item.price.toFixed(2);
  const CardTag = onSelect ? 'button' : 'article';

  return (
    <CardTag
      {...(onSelect ? { type: 'button', onClick: onSelect } : {})}
      className={`fuel-price-card group relative flex flex-col items-center justify-center bg-white rounded-[6px] border border-[#E8E8E8] shadow-[0_6px_22px_rgba(17,19,24,0.05)] px-5 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(17,19,24,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB900] ${
        onSelect ? 'cursor-pointer w-full' : ''
      } ${className}`}
    >
      <span
        className="font-display text-[13px] font-bold tracking-[0.06em] uppercase mb-4"
        style={{ color: item.accentColor }}
      >
        {item.name}
      </span>

      <div
        className="w-16 h-16 rounded-full flex items-center justify-center text-white mb-5 shadow-sm transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundColor: item.badgeBg }}
      >
        <WhiteFuelNozzleIcon className="w-8 h-8" />
      </div>

      <div className="font-display font-extrabold text-[34px] leading-none text-[#111318] tabular-nums tracking-tight">
        {currencySymbol}
        {formattedPrice}
      </div>

      <div className="mt-2 text-[13px] font-medium text-[#656565]">
        {unitLabel}
      </div>
    </CardTag>
  );
};
