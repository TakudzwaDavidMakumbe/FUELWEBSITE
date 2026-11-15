import React from 'react';

interface FuelMaxLogoProps {
  compact?: boolean;
  className?: string;
}

export const FuelMaxLogo: React.FC<FuelMaxLogoProps> = ({
  compact = false,
  className = '',
}) => {
  return (
    <span className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <svg
        width={compact ? 26 : 32}
        height={compact ? 30 : 36}
        viewBox="0 0 36 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M18 2C18 2 5 16.5 5 26.5C5 33.9558 10.8203 40 18 40C25.1797 40 31 33.9558 31 26.5C31 16.5 18 2 18 2Z"
          fill="#FFB900"
        />
        <path
          d="M18 14C18 14 12.2 21.4 12.2 26.6C12.2 30.1 14.8 32.8 18 32.8C21.2 32.8 23.8 30.1 23.8 26.6C23.8 21.4 18 14 18 14Z"
          fill="#080B0F"
        />
        <path
          d="M18 19.5C18 19.5 15.2 23.4 15.2 26.2C15.2 28.0 16.45 29.4 18 29.4C19.55 29.4 20.8 28.0 20.8 26.2C20.8 23.4 18 19.5 18 19.5Z"
          fill="#FFB900"
        />
      </svg>

      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-extrabold tracking-tight whitespace-nowrap ${
            compact ? 'text-[17px]' : 'text-[20px]'
          }`}
        >
          <span className="text-white">FUEL</span>
          <span className="text-[#FFB900]">MAX</span>
        </span>
        <span className="font-display text-[8px] font-semibold tracking-[0.26em] text-white/80 uppercase mt-0.5 whitespace-nowrap">
          GAS STATION
        </span>
      </span>
    </span>
  );
};
