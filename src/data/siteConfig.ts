import heroCanopyImg from '../assets/images/hero_fuelmax_canopy_1794734113317.jpg';
import storeInteriorImg from '../assets/images/store_interior_clean_1794734112659.jpg';
import carWashImg from '../assets/images/service_car_wash_1794734093610.jpg';
import fuelDispensersImg from '../assets/images/service_fuel_dispensers_1794734114704.jpg';
import fleetRefuelingImg from '../assets/images/service_fleet_trucks_1794734095146.jpg';
import freshCoffeeImg from '../assets/images/store_fresh_coffee_1794734095135.jpg';

export interface NavLinkItem {
  label: string;
  to: string;
}

export interface FooterLinkItem {
  label: string;
  to: string;
}

export const SITE_ASSETS = {
  heroCanopy: heroCanopyImg,
  storeInterior: storeInteriorImg,
  carWash: carWashImg,
  fuelDispensers: fuelDispensersImg,
  fleetRefueling: fleetRefuelingImg,
  freshCoffee: freshCoffeeImg,
} as const;

export const SITE_CONFIG = {
  brandName: 'FUELMAX',
  brandSubtitle: 'GAS STATION',
  tagline: 'Fueling your journey with quality, convenience, and care.',
  copyright: '© 2024 Fuelmax Gas Station. All rights reserved.',
  contact: {
    addressLine1: '123 Fuelmax Way,',
    addressLine2: 'Houston, TX 77001',
    fullAddress: '123 Fuelmax Way, Houston, TX 77001',
    phone: '(123) 456-7890',
    email: 'info@fuelmax.com',
    hours: 'Mon - Sun: 6:00 AM - 11:00 PM',
    note: 'Sample corporate contact details for demonstration.',
  },
  navLinks: [
    { label: 'HOME', to: '/' },
    { label: 'ABOUT US', to: '/about' },
    { label: 'SERVICES', to: '/services' },
    { label: 'FUEL PRICES', to: '/fuel-prices' },
    { label: 'LOCATIONS', to: '/locations' },
    { label: 'CONTACT', to: '/contact' },
  ] as NavLinkItem[],
  quickLinks: [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Fuel Prices', to: '/fuel-prices' },
    { label: 'Locations', to: '/locations' },
    { label: 'Contact Us', to: '/contact' },
  ] as FooterLinkItem[],
  serviceLinks: [
    { label: 'Quality Fuel', to: '/services' },
    { label: 'Convenience Store', to: '/store' },
    { label: 'Car Wash', to: '/car-wash' },
    { label: 'Loyalty Rewards', to: '/rewards' },
    { label: 'Fleet Cards', to: '/fleet-cards' },
  ] as FooterLinkItem[],
  socialLinks: [
    { id: 'facebook', label: 'Facebook', href: '#facebook' },
    { id: 'instagram', label: 'Instagram', href: '#instagram' },
    { id: 'twitter', label: 'X (Twitter)', href: '#twitter' },
    { id: 'youtube', label: 'YouTube', href: '#youtube' },
  ],
};
