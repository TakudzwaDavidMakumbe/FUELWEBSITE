export type FuelCategoryId = 'petrol' | 'diesel' | 'premium' | 'ethanol';

export interface FuelPriceItem {
  id: FuelCategoryId;
  name: string;
  price: number;
  accentColor: string;
  badgeBg: string;
  octane: string;
  summary: string;
  recommendedFor: string;
}

export interface FuelPricingConfig {
  currencySymbol: string;
  unitLabel: string;
  lastUpdatedLabel: string;
  disclaimer: string;
  sampleNotice: string;
}

export const FUEL_PRICING_CONFIG: FuelPricingConfig = {
  currencySymbol: '$',
  unitLabel: '/ Gallon',
  lastUpdatedLabel: 'May 26, 2024 – 7:00 AM',
  disclaimer: 'Prices may vary by location.',
  sampleNotice:
    'Displayed fuel rates are illustrative reference prices configurable per station.',
};

export const REFERENCE_FUEL_PRICES: FuelPriceItem[] = [
  {
    id: 'petrol',
    name: 'PETROL',
    price: 3.59,
    accentColor: '#279B54',
    badgeBg: '#279B54',
    octane: '87 Regular Unleaded',
    summary:
      'Clean-burning everyday unleaded fuel formulated with detergent additives to protect intake valves and keep engines running smoothly.',
    recommendedFor: 'Daily commuters, sedans, and standard gasoline engines',
  },
  {
    id: 'diesel',
    name: 'DIESEL',
    price: 3.89,
    accentColor: '#2879C7',
    badgeBg: '#2879C7',
    octane: 'Ultra-Low Sulfur (ULSD)',
    summary:
      'High-cetane ultra-low sulfur diesel engineered for strong torque, cold-start reliability, and clean commercial fleet efficiency.',
    recommendedFor: 'Pickup trucks, commercial vans, SUVs, and heavy-duty fleets',
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    price: 4.29,
    accentColor: '#E9AF25',
    badgeBg: '#F0B429',
    octane: '93 High-Octane Performance',
    summary:
      'Maximum knock protection and concentrated deposit-control detergents built for turbocharged, supercharged, and high-compression engines.',
    recommendedFor: 'Performance vehicles, luxury cars, and towing workloads',
  },
  {
    id: 'ethanol',
    name: 'E85 ETHANOL',
    price: 2.99,
    accentColor: '#8751C7',
    badgeBg: '#8751C7',
    octane: 'Flex-Fuel Blend (51–83%)',
    summary:
      'High-octane renewable flex-fuel blend designed for compatible Flex-Fuel vehicles seeking cooler combustion and lower tailpipe emissions.',
    recommendedFor: 'E85 / Flex-Fuel (FFV) certified cars, SUVs, and trucks',
  },
];

export async function fetchStationFuelPrices(
  stationOffset = 0,
  simulateError = false
): Promise<{ items: FuelPriceItem[]; fetchedAt: string }> {
  await new Promise((resolve) => setTimeout(resolve, 260));
  if (simulateError) {
    throw new Error('Unable to refresh illustrative station price board right now.');
  }
  const items = REFERENCE_FUEL_PRICES.map((item) => ({
    ...item,
    price: Number((item.price + stationOffset).toFixed(2)),
  }));
  return {
    items,
    fetchedAt: FUEL_PRICING_CONFIG.lastUpdatedLabel,
  };
}
