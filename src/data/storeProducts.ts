import { SITE_ASSETS } from './siteConfig';

export type StoreCategory =
  | 'All'
  | 'Snacks'
  | 'Beverages'
  | 'Coffee'
  | 'Travel Essentials'
  | 'Automotive Essentials';

export interface StoreProduct {
  id: string;
  name: string;
  category: Exclude<StoreCategory, 'All'>;
  price: number;
  description: string;
  image: string;
  unitNote: string;
}

export const STORE_CATEGORIES: StoreCategory[] = [
  'All',
  'Snacks',
  'Beverages',
  'Coffee',
  'Travel Essentials',
  'Automotive Essentials',
];

export const STORE_PRODUCTS: StoreProduct[] = [
  {
    id: 'artisan-roast-coffee',
    name: 'FUELMAX House Roast Coffee',
    category: 'Coffee',
    price: 2.49,
    description:
      'Freshly ground medium-dark Colombian blend brewed hourly with complimentary creamers and flavored syrups.',
    image: SITE_ASSETS.freshCoffee,
    unitNote: '16 oz Cup (Sample Price)',
  },
  {
    id: 'iced-espresso-latte',
    name: 'Chilled Espresso Caramel Latte',
    category: 'Coffee',
    price: 3.79,
    description:
      'Double-shot espresso poured over cold filtered milk and rich caramel drizzle for early highway starts.',
    image: SITE_ASSETS.freshCoffee,
    unitNote: '20 oz Cup (Sample Price)',
  },
  {
    id: 'kettle-sea-salt-chips',
    name: 'Crisp Sea Salt Kettle Chips',
    category: 'Snacks',
    price: 2.79,
    description:
      'Thick-cut golden potatoes cooked in small batches with coarse Pacific sea salt.',
    image: SITE_ASSETS.storeInterior,
    unitNote: '5 oz Bag (Sample Price)',
  },
  {
    id: 'roasted-almond-trail-mix',
    name: 'Protein Trail & Roasted Nut Mix',
    category: 'Snacks',
    price: 3.49,
    description:
      'Dry-roasted almonds, cashews, pepitas, and dark chocolate bites packed for long drives.',
    image: SITE_ASSETS.storeInterior,
    unitNote: '4.5 oz Pack (Sample Price)',
  },
  {
    id: 'electrolyte-hydration',
    name: 'Citrus Electrolyte Hydration Drink',
    category: 'Beverages',
    price: 2.99,
    description:
      'Zero-sugar crisp citrus sports hydration served ice-cold from our 34°F cooler wall.',
    image: SITE_ASSETS.storeInterior,
    unitNote: '20 oz Bottle (Sample Price)',
  },
  {
    id: 'sparkling-mineral-water',
    name: 'Alpine Sparkling Spring Water',
    category: 'Beverages',
    price: 1.99,
    description:
      'Crisp naturally carbonated spring water chilled for instant roadside refreshment.',
    image: SITE_ASSETS.storeInterior,
    unitNote: '16.9 oz Bottle (Sample Price)',
  },
  {
    id: 'usb-c-fast-car-charger',
    name: 'Dual-Port USB-C Fast Car Charger',
    category: 'Travel Essentials',
    price: 14.99,
    description:
      'Compact 36W aluminum 12V adapter compatible with modern phones, tablets, and dashcams.',
    image: SITE_ASSETS.storeInterior,
    unitNote: 'Single Unit (Sample Price)',
  },
  {
    id: 'road-trip-first-aid',
    name: 'Compact Travel First-Aid Kit',
    category: 'Travel Essentials',
    price: 8.99,
    description:
      'Glovebox-sized kit containing bandages, antiseptic wipes, pain relief packets, and tweezers.',
    image: SITE_ASSETS.storeInterior,
    unitNote: '32-Piece Kit (Sample Price)',
  },
  {
    id: 'synthetic-motor-oil',
    name: '5W-30 Full Synthetic Motor Oil',
    category: 'Automotive Essentials',
    price: 9.99,
    description:
      'API SP certified synthetic motor oil formulated for wear protection in modern gasoline engines.',
    image: SITE_ASSETS.fuelDispensers,
    unitNote: '1 Quart (Sample Price)',
  },
  {
    id: 'all-season-washer-fluid',
    name: 'All-Season Bug & Frost Washer Fluid',
    category: 'Automotive Essentials',
    price: 4.99,
    description:
      'Streak-free windshield cleaner formulated to clear highway bug splatter and light frost.',
    image: SITE_ASSETS.carWash,
    unitNote: '1 Gallon Jug (Sample Price)',
  },
];
