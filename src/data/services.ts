import { SITE_ASSETS } from './siteConfig';

export interface CoreServiceFeature {
  id: string;
  title: string;
  description: string;
  to: string;
  iconKey: 'fuel' | 'store' | 'car-wash' | 'rewards';
}

export interface FullServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  ctaLabel: string;
  to: string;
  iconKey: 'fuel' | 'store' | 'car-wash' | 'rewards' | 'fleet';
}

export interface CarWashPackage {
  id: string;
  name: string;
  priceLabel: string;
  recommended?: boolean;
  description: string;
  features: string[];
}

export const HOME_CORE_SERVICES: CoreServiceFeature[] = [
  {
    id: 'quality-fuel',
    title: 'QUALITY FUEL',
    description: 'High-performance fuel for a smoother, longer drive.',
    to: '/services',
    iconKey: 'fuel',
  },
  {
    id: 'convenience-store',
    title: 'CONVENIENCE STORE',
    description: 'Snacks, drinks & more — everything you need on the go.',
    to: '/store',
    iconKey: 'store',
  },
  {
    id: 'car-wash',
    title: 'CAR WASH',
    description: 'Keep your car fresh and clean with our fast car wash.',
    to: '/car-wash',
    iconKey: 'car-wash',
  },
  {
    id: 'loyalty-rewards',
    title: 'LOYALTY REWARDS',
    description: 'Earn points every time you fuel up and enjoy exclusive rewards.',
    to: '/rewards',
    iconKey: 'rewards',
  },
];

export const ALL_SERVICES: FullServiceItem[] = [
  {
    id: 'quality-fuel',
    title: 'Quality Fuel',
    subtitle: 'Top-Tier Grade Formulations',
    description:
      'Every FUELMAX dispenser delivers multi-stage filtered Petrol, Ultra-Low Sulfur Diesel, 93-Octane Premium, and E85 Ethanol engineered for peak engine cleanliness and consistent mileage.',
    highlights: [
      'Double-filtered underground storage & calibrated meters',
      'Detergent additives that reduce carbon buildup',
      'High-speed contactless tap-to-pay pumps',
    ],
    image: SITE_ASSETS.fuelDispensers,
    imageAlt: 'Modern FUELMAX matte black and golden-yellow fuel pump dispenser at dusk',
    ctaLabel: 'View Fuel Prices',
    to: '/fuel-prices',
    iconKey: 'fuel',
  },
  {
    id: 'convenience-store',
    title: 'Convenience Store',
    subtitle: 'Fresh Coffee, Snacks & Travel Goods',
    description:
      'Bright, spotless aisles stocked daily with freshly brewed coffee, chilled craft and sports beverages, hot grab-and-go snacks, phone chargers, and roadside essentials.',
    highlights: [
      'Freshly ground bean-to-cup coffee bar',
      'Temperature-controlled beverage coolers',
      '24/7 availability at express corridor hubs',
    ],
    image: SITE_ASSETS.storeInterior,
    imageAlt: 'Bright FUELMAX convenience store interior with stocked snack shelves and cold drink coolers',
    ctaLabel: 'Explore Store',
    to: '/store',
    iconKey: 'store',
  },
  {
    id: 'car-wash',
    title: 'Express Car Wash',
    subtitle: 'Soft-Touch & Touchless Tunnels',
    description:
      'Modern express car wash tunnels utilizing pH-balanced triple foam detergents, spot-free reverse-osmosis rinse, and high-velocity heated air dryers in under four minutes.',
    highlights: [
      'Scratch-free soft-foam & touchless bay options',
      'Ceramic shine & undercarriage salt-flush packages',
      'Complimentary high-power vacuum bays at select hubs',
    ],
    image: SITE_ASSETS.carWash,
    imageAlt: 'Vehicle driving through illuminated FUELMAX express car wash tunnel arches',
    ctaLabel: 'Explore Car Wash',
    to: '/car-wash',
    iconKey: 'car-wash',
  },
  {
    id: 'loyalty-rewards',
    title: 'Loyalty Rewards',
    subtitle: 'Points on Every Gallon & Store Item',
    description:
      'Turn every fill-up and morning coffee into instant pump cents-off discounts, free car washes, and member-exclusive seasonal offers across participating FUELMAX locations.',
    highlights: [
      'Earn points automatically at the pump or register',
      'Redeem rewards for fuel cents-off or store favorites',
      'Birthday bonus credits and double-point weekends',
    ],
    image: SITE_ASSETS.freshCoffee,
    imageAlt: 'Fresh coffee and pastry served in a FUELMAX convenience store',
    ctaLabel: 'Join Rewards',
    to: '/rewards',
    iconKey: 'rewards',
  },
  {
    id: 'fleet-services',
    title: 'Fleet Cards & Business Accounts',
    subtitle: 'Centralized Control for Commercial Fleets',
    description:
      'Built for delivery vans, logistics contractors, and corporate vehicles with driver PIN controls, consolidated monthly invoicing, and dedicated high-clearance diesel lanes.',
    highlights: [
      'Per-driver spend limits and fuel-only restrictions',
      'Itemized tax-ready monthly statements',
      'Dedicated high-flow diesel lanes at key hubs',
    ],
    image: SITE_ASSETS.fleetRefueling,
    imageAlt: 'Commercial delivery vans refueling under a wide FUELMAX fleet canopy',
    ctaLabel: 'Explore Fleet Cards',
    to: '/fleet-cards',
    iconKey: 'fleet',
  },
];

export const CAR_WASH_PACKAGES: CarWashPackage[] = [
  {
    id: 'express',
    name: 'Express Shine',
    priceLabel: '$9.99 (Sample)',
    description: 'Fast everyday exterior refresh to remove road dust and light grime.',
    features: [
      'High-pressure pre-soak & wheel rinse',
      'Soft-foam wash cycle',
      'Spot-free purified rinse',
      'High-velocity air dry',
    ],
  },
  {
    id: 'deluxe',
    name: 'Turbo Triple-Foam',
    priceLabel: '$14.99 (Sample)',
    recommended: true,
    description: 'Deep clean with undercarriage flush and glossy clear-coat protectant.',
    features: [
      'Everything in Express Shine',
      'Tri-color conditioning foam bath',
      'High-pressure undercarriage wash',
      'Clear-coat shine seal & tire gloss',
    ],
  },
  {
    id: 'ultimate',
    name: 'Ultimate Ceramic Shield',
    priceLabel: '$19.99 (Sample)',
    description: 'Maximum hydrophobic protection against UV rays, rain, and road film.',
    features: [
      'Everything in Turbo Triple-Foam',
      'Hydrophobic ceramic polymer shield',
      'Rain-repellent windshield treatment',
      'Double heated blower dry + free vacuum bay',
    ],
  },
];
