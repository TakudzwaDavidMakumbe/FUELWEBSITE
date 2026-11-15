import { FuelCategoryId } from './fuelPrices';

export type StationServiceTag =
  | 'Quality Fuel'
  | 'Convenience Store'
  | 'Car Wash'
  | 'Loyalty Rewards'
  | 'Fleet Cards';

export interface StationLocation {
  id: string;
  name: string;
  code: string;
  city: string;
  area: string;
  zipCode: string;
  address: string;
  phone: string;
  hours: string;
  is24Hours: boolean;
  priceOffset: number;
  availableFuels: FuelCategoryId[];
  services: StationServiceTag[];
  mapPosition: { x: number; y: number };
  directionsNote: string;
}

export const SAMPLE_STATIONS: StationLocation[] = [
  {
    id: 'houston-central',
    name: 'FUELMAX Downtown Flagship',
    code: 'STN-01 (Sample)',
    city: 'Houston',
    area: 'Downtown Corridor',
    zipCode: '77001',
    address: '123 Fuelmax Way, Houston, TX 77001',
    phone: '(123) 456-7890',
    hours: 'Mon - Sun: 6:00 AM - 11:00 PM',
    is24Hours: false,
    priceOffset: 0,
    availableFuels: ['petrol', 'diesel', 'premium', 'ethanol'],
    services: [
      'Quality Fuel',
      'Convenience Store',
      'Car Wash',
      'Loyalty Rewards',
      'Fleet Cards',
    ],
    mapPosition: { x: 48, y: 52 },
    directionsNote: 'Located 2 blocks east of I-45 Exit 47B near Main Street.',
  },
  {
    id: 'north-corridor',
    name: 'FUELMAX North Corridor Express',
    code: 'STN-02 (Sample)',
    city: 'Houston',
    area: 'Northside / Greenspoint',
    zipCode: '77032',
    address: '4820 North Freeway Service Rd, Houston, TX 77032',
    phone: '(123) 456-7891',
    hours: 'Open 24 Hours Daily',
    is24Hours: true,
    priceOffset: -0.06,
    availableFuels: ['petrol', 'diesel', 'premium', 'ethanol'],
    services: ['Quality Fuel', 'Convenience Store', 'Loyalty Rewards', 'Fleet Cards'],
    mapPosition: { x: 54, y: 22 },
    directionsNote: 'Direct northbound access off I-45 North Beltway interchange.',
  },
  {
    id: 'westpark-hub',
    name: 'FUELMAX Westpark Wash & Fuel',
    code: 'STN-03 (Sample)',
    city: 'Houston',
    area: 'Westchase / Galleria',
    zipCode: '77063',
    address: '8910 Westheimer Commons, Houston, TX 77063',
    phone: '(123) 456-7892',
    hours: 'Mon - Sun: 5:30 AM - 11:30 PM',
    is24Hours: false,
    priceOffset: 0.04,
    availableFuels: ['petrol', 'diesel', 'premium'],
    services: ['Quality Fuel', 'Convenience Store', 'Car Wash', 'Loyalty Rewards'],
    mapPosition: { x: 24, y: 58 },
    directionsNote: 'Corner of Westheimer & Fondren with dual express wash lanes.',
  },
  {
    id: 'baytown-logistics',
    name: 'FUELMAX Baytown Fleet Terminal',
    code: 'STN-04 (Sample)',
    city: 'Baytown',
    area: 'East I-10 Industrial',
    zipCode: '77521',
    address: '2150 East Freeway Access, Baytown, TX 77521',
    phone: '(123) 456-7893',
    hours: 'Open 24 Hours Daily',
    is24Hours: true,
    priceOffset: -0.08,
    availableFuels: ['petrol', 'diesel', 'premium', 'ethanol'],
    services: ['Quality Fuel', 'Convenience Store', 'Loyalty Rewards', 'Fleet Cards'],
    mapPosition: { x: 80, y: 46 },
    directionsNote: 'High-clearance 16ft diesel canopy directly off I-10 East Exit 792.',
  },
  {
    id: 'sugarland-parkway',
    name: 'FUELMAX Southwest Parkway',
    code: 'STN-05 (Sample)',
    city: 'Sugar Land',
    area: 'Southwest Corridor',
    zipCode: '77478',
    address: '3340 Highway 6 South, Sugar Land, TX 77478',
    phone: '(123) 456-7894',
    hours: 'Mon - Sun: 6:00 AM - 11:00 PM',
    is24Hours: false,
    priceOffset: -0.03,
    availableFuels: ['petrol', 'diesel', 'premium', 'ethanol'],
    services: ['Quality Fuel', 'Convenience Store', 'Car Wash', 'Loyalty Rewards'],
    mapPosition: { x: 29, y: 79 },
    directionsNote: 'Accessible from US-59 South at Highway 6 interchange.',
  },
];
