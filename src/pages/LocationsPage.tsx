import React, { useMemo, useState } from 'react';
import {
  CheckCircle2,
  Clock,
  Info,
  MapPin,
  Navigation,
  Phone,
  Search,
  X,
} from 'lucide-react';
import { SAMPLE_STATIONS, StationLocation } from '../data/stations';
import { FUEL_PRICING_CONFIG, REFERENCE_FUEL_PRICES } from '../data/fuelPrices';
import { SITE_ASSETS } from '../data/siteConfig';
import { PageHero } from '../components/PageHero';
import { SeoHead } from '../components/SeoHead';

type ServiceFilter = 'All' | '24 Hours' | 'Car Wash' | 'Fleet Cards';

export const LocationsPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [serviceFilter, setServiceFilter] = useState<ServiceFilter>('All');
  const [selectedId, setSelectedId] = useState<string>(SAMPLE_STATIONS[0].id);
  const [showDirectionsModal, setShowDirectionsModal] = useState(false);

  const filteredStations = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SAMPLE_STATIONS.filter((station) => {
      const matchesQuery =
        !q ||
        station.name.toLowerCase().includes(q) ||
        station.city.toLowerCase().includes(q) ||
        station.area.toLowerCase().includes(q) ||
        station.zipCode.toLowerCase().includes(q) ||
        station.address.toLowerCase().includes(q);

      const matchesFilter =
        serviceFilter === 'All' ||
        (serviceFilter === '24 Hours' && station.is24Hours) ||
        (serviceFilter === 'Car Wash' && station.services.includes('Car Wash')) ||
        (serviceFilter === 'Fleet Cards' && station.services.includes('Fleet Cards'));

      return matchesQuery && matchesFilter;
    });
  }, [query, serviceFilter]);

  const activeStation: StationLocation =
    filteredStations.find((s) => s.id === selectedId) ||
    filteredStations[0] ||
    SAMPLE_STATIONS[0];

  const stationPrices = useMemo(() => {
    return REFERENCE_FUEL_PRICES.filter((fuel) =>
      activeStation.availableFuels.includes(fuel.id)
    ).map((fuel) => ({
      ...fuel,
      price: Number((fuel.price + activeStation.priceOffset).toFixed(2)),
    }));
  }, [activeStation]);

  return (
    <div className="bg-[#F6F6F6]">
      <SeoHead
        title="Find a Station – FUELMAX Gas Station Locations"
        description="Search sample FUELMAX Gas Station locations by city, area, or ZIP code. View station hours, services, and sample fuel rates."
      />

      <PageHero
        eyebrow="STATION LOCATOR"
        titleWhite="FIND A FUELMAX"
        titleGold="STATION"
        description="Search by city, neighborhood, or ZIP code to inspect station amenities, operating hours, and sample fuel pricing."
        image={SITE_ASSETS.heroCanopy}
        imageAlt="FUELMAX gas station canopy illuminated at dusk"
      />

      <section className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-12 lg:py-16">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-[10px] border border-[#E8E8E8] p-5 sm:p-6 shadow-sm mb-8">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
            <div className="relative flex-1 max-w-xl">
              <label htmlFor="station-search-input" className="sr-only">
                Search by city, area, or ZIP code
              </label>
              <Search
                className="w-4 h-4 text-[#656565] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="station-search-input"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by city, area, or ZIP (e.g., Houston, Baytown, 77001)..."
                className="w-full pl-11 pr-10 py-3 rounded-[6px] bg-[#F6F6F6] border border-[#E8E8E8] text-[14px] text-[#111318] placeholder:text-[#656565] focus:outline-none focus:ring-2 focus:ring-[#FFB900]"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#656565] hover:text-[#111318]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {(['All', '24 Hours', 'Car Wash', 'Fleet Cards'] as ServiceFilter[]).map(
                (tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setServiceFilter(tab)}
                    className={`px-4 py-2 rounded-[6px] font-display text-[11px] font-bold tracking-[0.05em] uppercase whitespace-nowrap transition-colors cursor-pointer ${
                      serviceFilter === tab
                        ? 'bg-[#FFB900] text-[#080B0F]'
                        : 'bg-[#F6F6F6] text-[#656565] hover:text-[#111318] hover:bg-[#E8E8E8]'
                    }`}
                  >
                    {tab}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-[12.5px] text-[#656565]">
            <Info className="w-4 h-4 text-[#FFB900] shrink-0" aria-hidden="true" />
            <span>
              Sample station directory for demonstration. Select any pin or station
              card to inspect full station details.
            </span>
          </div>
        </div>

        {/* Main Locator Grid: Left Station List + Right Interactive Map & Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Station List */}
          <div className="lg:col-span-5 space-y-4">
            {filteredStations.length === 0 ? (
              <div className="bg-white rounded-[10px] border border-[#E8E8E8] p-8 text-center">
                <p className="font-display font-bold text-[16px] text-[#111318]">
                  No sample stations match &ldquo;{query}&rdquo;
                </p>
                <p className="mt-2 text-[14px] text-[#656565]">
                  Try searching for Houston, Baytown, Sugar Land, or reset filters.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery('');
                    setServiceFilter('All');
                  }}
                  className="mt-4 bg-[#101318] text-white font-display font-bold text-[11px] uppercase px-5 py-2.5 rounded-[6px] cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              filteredStations.map((station) => {
                const isSelected = station.id === activeStation.id;
                return (
                  <button
                    key={station.id}
                    type="button"
                    onClick={() => {
                      setSelectedId(station.id);
                      setShowDirectionsModal(false);
                    }}
                    className={`w-full text-left rounded-[10px] p-6 border transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB900] ${
                      isSelected
                        ? 'bg-[#101318] text-white border-[#FFB900] shadow-[0_14px_34px_rgba(8,11,15,0.2)]'
                        : 'bg-white text-[#111318] border-[#E8E8E8] hover:border-[#FFB900]/70'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div
                          className={`font-mono text-[11px] font-semibold uppercase tracking-wider ${
                            isSelected ? 'text-[#FFB900]' : 'text-[#656565]'
                          }`}
                        >
                          {station.code} · {station.area}
                        </div>
                        <h2 className="mt-1 font-display font-bold text-[17px] uppercase">
                          {station.name}
                        </h2>
                      </div>
                      <MapPin
                        className={`w-5 h-5 shrink-0 ${
                          isSelected ? 'text-[#FFB900]' : 'text-[#656565]'
                        }`}
                        aria-hidden="true"
                      />
                    </div>

                    <p
                      className={`mt-2.5 text-[13.5px] ${
                        isSelected ? 'text-[#D5D5D5]' : 'text-[#656565]'
                      }`}
                    >
                      {station.address}
                    </p>

                    <div
                      className={`mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12.5px] ${
                        isSelected ? 'text-[#D5D5D5]/90' : 'text-[#656565]'
                      }`}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#FFB900]" aria-hidden="true" />
                        {station.hours}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-[#FFB900]" aria-hidden="true" />
                        {station.phone}
                      </span>
                    </div>

                    <div
                      className={`mt-3 pt-3 border-t text-[12px] ${
                        isSelected
                          ? 'border-white/10 text-[#D5D5D5]/80'
                          : 'border-[#E8E8E8] text-[#656565]'
                      }`}
                    >
                      {station.services.join(' · ')}
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Right Column: Interactive Corridor Map + Active Station Detail View */}
          <div className="lg:col-span-7 space-y-6">
            {/* Interactive Stylized Station Network Map */}
            <div className="bg-[#101318] rounded-[12px] border border-white/10 overflow-hidden shadow-lg">
              <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
                <div>
                  <span className="font-display text-[11px] font-bold tracking-[0.12em] uppercase text-[#FFB900]">
                    INTERACTIVE STATION NETWORK MAP
                  </span>
                  <h3 className="font-display font-bold text-[15px] text-white">
                    Greater Houston Sample Corridor ({filteredStations.length}{' '}
                    {filteredStations.length === 1 ? 'Station' : 'Stations'})
                  </h3>
                </div>
                <span className="font-mono text-[11px] text-[#D5D5D5]/70">
                  Click any pin
                </span>
              </div>

              <div className="relative h-[300px] sm:h-[340px] w-full bg-[#0A0E14] overflow-hidden">
                {/* Stylized Highway / Corridor Grid SVG */}
                <svg
                  viewBox="0 0 800 400"
                  className="absolute inset-0 w-full h-full"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="corridor-grid"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="rgba(255,255,255,0.04)"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <rect width="800" height="400" fill="url(#corridor-grid)" />
                  {/* Ring Beltway */}
                  <ellipse
                    cx="400"
                    cy="205"
                    rx="230"
                    ry="130"
                    fill="none"
                    stroke="rgba(255,185,0,0.18)"
                    strokeWidth="2.5"
                    strokeDasharray="6 6"
                  />
                  {/* East-West I-10 Highway */}
                  <path
                    d="M 20 205 Q 380 185 780 195"
                    fill="none"
                    stroke="rgba(255,255,255,0.16)"
                    strokeWidth="4"
                  />
                  {/* North-South I-45 Highway */}
                  <path
                    d="M 435 15 L 385 210 L 455 385"
                    fill="none"
                    stroke="rgba(255,255,255,0.16)"
                    strokeWidth="4"
                  />
                  {/* Southwest US-59 */}
                  <path
                    d="M 110 385 L 385 210 L 660 25"
                    fill="none"
                    stroke="rgba(255,255,255,0.11)"
                    strokeWidth="3"
                  />
                  <text
                    x="130"
                    y="192"
                    fill="rgba(255,255,255,0.35)"
                    fontSize="11"
                    fontFamily="monospace"
                  >
                    I-10 CORRIDOR
                  </text>
                  <text
                    x="445"
                    y="45"
                    fill="rgba(255,255,255,0.35)"
                    fontSize="11"
                    fontFamily="monospace"
                  >
                    I-45 NORTH
                  </text>
                </svg>

                {/* Clickable Station Pins */}
                {filteredStations.map((station) => {
                  const isActive = station.id === activeStation.id;
                  return (
                    <button
                      key={station.id}
                      type="button"
                      onClick={() => {
                        setSelectedId(station.id);
                        setShowDirectionsModal(false);
                      }}
                      aria-label={`Select ${station.name}`}
                      style={{
                        left: `${station.mapPosition.x}%`,
                        top: `${station.mapPosition.y}%`,
                      }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none"
                    >
                      <span
                        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-[6px] font-display text-[11px] font-bold uppercase shadow-lg transition-all duration-200 ${
                          isActive
                            ? 'bg-[#FFB900] text-[#080B0F] scale-110 ring-4 ring-[#FFB900]/30 z-20'
                            : 'bg-[#20242B] text-white border border-white/20 hover:border-[#FFB900] hover:text-[#FFB900]'
                        }`}
                      >
                        <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span className="hidden sm:inline whitespace-nowrap">
                          {station.area.split('/')[0].trim()}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Station Detail View */}
            <div className="bg-white rounded-[12px] border border-[#E8E8E8] p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-[#E8E8E8]">
                <div>
                  <span className="font-mono text-[12px] font-semibold text-[#FFB900] uppercase">
                    {activeStation.code}
                  </span>
                  <h2 className="mt-1 font-display font-extrabold text-[24px] uppercase text-[#111318]">
                    {activeStation.name}
                  </h2>
                  <p className="mt-1.5 text-[14.5px] text-[#656565]">
                    {activeStation.address}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowDirectionsModal((v) => !v)}
                  className="inline-flex items-center justify-center gap-2 bg-[#FFB900] hover:bg-[#FFC21A] text-[#080B0F] font-display font-bold text-[12px] tracking-[0.06em] uppercase px-5 py-3 rounded-[6px] shrink-0 transition-colors cursor-pointer"
                >
                  <Navigation className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                  <span>{showDirectionsModal ? 'HIDE DIRECTIONS' : 'GET DIRECTIONS'}</span>
                </button>
              </div>

              {showDirectionsModal && (
                <div className="my-5 bg-[#101318] text-white rounded-[8px] p-5">
                  <div className="font-display text-[12px] font-bold uppercase tracking-wider text-[#FFB900]">
                    CORRIDOR ACCESS DIRECTIONS
                  </div>
                  <p className="mt-2 text-[14px] text-[#D5D5D5]">
                    {activeStation.directionsNote}
                  </p>
                  <p className="mt-2 text-[12.5px] text-[#D5D5D5]/70">
                    Destination: {activeStation.address} · Contact Desk:{' '}
                    {activeStation.phone}
                  </p>
                </div>
              )}

              {/* Hours, Phone, Services */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-b border-[#E8E8E8]">
                <div>
                  <div className="font-display text-[11px] font-bold uppercase tracking-wider text-[#656565] mb-2">
                    STATION HOURS &amp; PHONE
                  </div>
                  <p className="text-[14px] font-medium text-[#111318] flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#FFB900]" aria-hidden="true" />
                    {activeStation.hours}
                  </p>
                  <p className="mt-2 text-[14px] font-medium text-[#111318] flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#FFB900]" aria-hidden="true" />
                    {activeStation.phone}
                  </p>
                </div>

                <div>
                  <div className="font-display text-[11px] font-bold uppercase tracking-wider text-[#656565] mb-2">
                    AVAILABLE SERVICES
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {activeStation.services.map((svc) => (
                      <li
                        key={svc}
                        className="flex items-center gap-2 text-[13.5px] text-[#111318]"
                      >
                        <CheckCircle2
                          className="w-4 h-4 text-[#279B54] shrink-0"
                          aria-hidden="true"
                        />
                        <span>{svc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Station Sample Fuel Prices */}
              <div className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-bold text-[14px] uppercase text-[#111318]">
                    SAMPLE FUEL RATES AT THIS STATION
                  </h3>
                  <span className="text-[12px] text-[#656565]">
                    {FUEL_PRICING_CONFIG.unitLabel}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {stationPrices.map((fuel) => (
                    <div
                      key={fuel.id}
                      className="rounded-[6px] bg-[#F6F6F6] border border-[#E8E8E8] p-4 text-center"
                    >
                      <div
                        className="font-display text-[11px] font-bold uppercase tracking-wide"
                        style={{ color: fuel.accentColor }}
                      >
                        {fuel.name}
                      </div>
                      <div className="mt-1.5 font-display font-extrabold text-[22px] text-[#111318] tabular-nums">
                        ${fuel.price.toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
