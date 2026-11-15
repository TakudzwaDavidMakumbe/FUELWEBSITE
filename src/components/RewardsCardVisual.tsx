import React, { useState } from 'react';
import { REWARDS_DATA } from '../data/rewards';

interface RewardsCardVisualProps {
  memberName?: string;
  cardNumber?: string;
  className?: string;
}

export const RewardsCardVisual: React.FC<RewardsCardVisualProps> = ({
  memberName = REWARDS_DATA.cardSample.memberName,
  cardNumber = REWARDS_DATA.cardSample.number,
  className = '',
}) => {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      rotateX: Number((-y * 8).toFixed(2)),
      rotateY: Number((x * 10).toFixed(2)),
    });
  };

  const resetTilt = () => setTilt({ rotateX: 0, rotateY: 0 });

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      className={`relative select-none [perspective:900px] ${className}`}
    >
      <div
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        }}
        className="relative overflow-hidden w-full max-w-[340px] aspect-[1.58/1] rounded-[12px] bg-[#14171D] text-white p-6 flex flex-col justify-between shadow-[0_22px_45px_rgba(8,11,15,0.34)] border border-white/10 transition-transform duration-300 ease-out"
      >
        {/* Diagonal Gold Accent Corner */}
        <div
          aria-hidden="true"
          className="absolute -bottom-8 -right-8 w-44 h-44 bg-[#FFB900] rotate-[-28deg] opacity-95 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-10 -right-14 w-44 h-44 bg-[#FFC21A]/50 rotate-[-28deg] pointer-events-none"
        />

        {/* Card Top: Brand & Subtitle */}
        <div className="relative z-10 flex items-center gap-3">
          <svg
            width="28"
            height="32"
            viewBox="0 0 36 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M18 2C18 2 5 16.5 5 26.5C5 33.9558 10.8203 40 18 40C25.1797 40 31 33.9558 31 26.5C31 16.5 18 2 18 2Z"
              fill="#FFB900"
            />
            <path
              d="M18 14C18 14 12.2 21.4 12.2 26.6C12.2 30.1 14.8 32.8 18 32.8C21.2 32.8 23.8 30.1 23.8 26.6C23.8 21.4 18 14 18 14Z"
              fill="#14171D"
            />
          </svg>
          <div className="leading-none">
            <div className="font-display font-extrabold text-[19px] tracking-tight">
              <span className="text-white">FUEL</span>
              <span className="text-[#FFB900]">MAX</span>
            </div>
            <div className="font-display text-[10px] font-semibold tracking-[0.26em] text-white/75 uppercase mt-1">
              {REWARDS_DATA.cardSample.subtitle}
            </div>
          </div>
        </div>

        {/* Card Bottom: Sample Card Number & Member Name */}
        <div className="relative z-10 pt-4">
          <div className="font-mono text-[14px] sm:text-[15px] tracking-[0.16em] text-white/90 tabular-nums">
            {cardNumber}
          </div>
          <div className="mt-2 font-mono text-[11px] font-semibold tracking-[0.18em] text-white/75 uppercase">
            {memberName}
          </div>
        </div>
      </div>
    </div>
  );
};
