import React from 'react';

interface IconProps {
  className?: string;
}

export const FuelPumpGoldIcon: React.FC<IconProps> = ({ className = 'w-11 h-11' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M10 10C10 7.79086 11.7909 6 14 6H26C28.2091 6 30 7.79086 30 10V40H10V10Z"
      stroke="#FFB900"
      strokeWidth="2.8"
      strokeLinejoin="round"
    />
    <rect x="14" y="10" width="12" height="9" rx="1.5" fill="#FFB900" />
    <path d="M7 40H33" stroke="#FFB900" strokeWidth="3" strokeLinecap="round" />
    <path
      d="M30 16H34C35.6569 16 37 17.3431 37 19V30.5C37 32.433 38.567 34 40.5 34C42.433 34 44 32.433 44 30.5V16.5L39.5 11.5"
      stroke="#FFB900"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="41" y="11" width="3.5" height="6" rx="1" fill="#FFB900" />
    <path
      d="M20 25C20 25 16.5 29.2 16.5 31.8C16.5 33.7 18.067 35.2 20 35.2C21.933 35.2 23.5 33.7 23.5 31.8C23.5 29.2 20 25 20 25Z"
      fill="#FFB900"
    />
  </svg>
);

export const StorefrontGoldIcon: React.FC<IconProps> = ({ className = 'w-11 h-11' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M8 10H40L43 19C43 21.7614 40.7614 24 38 24C35.2386 24 33 21.7614 33 19C33 21.7614 30.7614 24 28 24C25.2386 24 23 21.7614 23 19C23 21.7614 20.7614 24 18 24C15.2386 24 13 21.7614 13 19C13 21.7614 10.7614 24 8 24C5.23858 24 5 21.7614 5 19L8 10Z"
      stroke="#FFB900"
      strokeWidth="2.8"
      strokeLinejoin="round"
    />
    <path d="M16 10V19M24 10V19M32 10V19" stroke="#FFB900" strokeWidth="2.4" />
    <path
      d="M9 24V39H39V24"
      stroke="#FFB900"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="14" y="28" width="9" height="11" fill="#FFB900" rx="1" />
    <rect x="27" y="28" width="8" height="6" stroke="#FFB900" strokeWidth="2.2" rx="1" />
    <path d="M6 39H42" stroke="#FFB900" strokeWidth="2.8" strokeLinecap="round" />
  </svg>
);

export const CarWashGoldIcon: React.FC<IconProps> = ({ className = 'w-11 h-11' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M12 8C14 8 15 10 17 10C19 10 20 8 22 8C24 8 25 10 27 10C29 10 30 8 32 8C34 8 35 10 37 10"
      stroke="#FFB900"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
    <circle cx="15" cy="14" r="1.7" fill="#FFB900" />
    <circle cx="24" cy="13.5" r="1.7" fill="#FFB900" />
    <circle cx="33" cy="14" r="1.7" fill="#FFB900" />
    <circle cx="19.5" cy="17.5" r="1.5" fill="#FFB900" />
    <circle cx="28.5" cy="17.5" r="1.5" fill="#FFB900" />
    <path
      d="M12 29L15.5 21H32.5L36 29H12Z"
      stroke="#FFB900"
      strokeWidth="2.8"
      strokeLinejoin="round"
    />
    <rect x="9" y="29" width="30" height="8" rx="3" fill="#FFB900" />
    <circle cx="15.5" cy="33" r="2.2" fill="#101318" />
    <circle cx="32.5" cy="33" r="2.2" fill="#101318" />
    <path d="M12 37V40.5H16V37M32 37V40.5H36V37" stroke="#FFB900" strokeWidth="2.8" strokeLinecap="round" />
  </svg>
);

export const LoyaltyCardGoldIcon: React.FC<IconProps> = ({ className = 'w-11 h-11' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect x="6" y="11" width="36" height="26" rx="4" fill="#FFB900" />
    <rect x="6" y="16" width="36" height="4.5" fill="#101318" />
    <rect x="11" y="25" width="11" height="2.6" rx="1.3" fill="#101318" />
    <rect x="11" y="30" width="7" height="2.6" rx="1.3" fill="#101318" />
    <path
      d="M32.5 24L34.1 27.3L37.8 27.8L35.1 30.4L35.8 34.1L32.5 32.3L29.2 34.1L29.9 30.4L27.2 27.8L30.9 27.3L32.5 24Z"
      fill="#101318"
    />
  </svg>
);

export const WhiteFuelNozzleIcon: React.FC<IconProps> = ({ className = 'w-7 h-7' }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M7 7.5C7 6.11929 8.11929 5 9.5 5H17.5C18.8807 5 20 6.11929 20 7.5V26H7V7.5Z"
      fill="currentColor"
    />
    <rect x="9.5" y="8" width="8" height="5" rx="0.8" fill="#111318" fillOpacity="0.28" />
    <path d="M5 26H22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <path
      d="M20 11H22.5C23.6046 11 24.5 11.8954 24.5 13V20.5C24.5 21.8807 25.6193 23 27 23C28.3807 23 29.5 21.8807 29.5 20.5V10.5L26 7"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
