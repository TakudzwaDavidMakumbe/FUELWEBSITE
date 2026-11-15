import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Info, MapPin, RefreshCw } from 'lucide-react';
import {
  FUEL_PRICING_CONFIG,
  FuelPriceItem,
  REFERENCE_FUEL_PRICES,
  fetchStationFuelPrices,
} from '../data/fuelPrices';
import { SAMPLE_STATIONS } from '../data/stations';
import { SITE_ASSETS } from '../data/siteConfig';
import { FuelPriceCard } from '../components/FuelPriceCard';
import { PageHero } from '../components/PageHero';
import { SeoHead } from '../components/SeoHead';

export const FuelPricesPage: React.FC = () => {
  const [selectedStationId, setSelectedStationId] = useState<string>(SAMPLE_STATIONS[0].id);
  const [prices, setPrices] = useState<FuelPriceItem[]>(REFERENCE_FUEL_PRICES);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState(FUEL_PRICING_CONFIG.lastUpdatedLabel);

  const selectedStation =
    SAMPLE_STATIONS.find((s) => s.id === selectedStationId) || SAMPLE_STATIONS[0];

  const loadStationPrices = async (stationId: string, simulateErr = false) => {
    const station = SAMPLE_STATIONS.find((s) => s.id === stationId) || SAMPLE_STATIONS[0];
    setLoading(true);
    setError(null);
    try {
      const result = await fetchStationFuelPrices(station.priceOffset, simulateErr);
      const filtered = result.items.filter((item) =>
        station.availableFuels.includes(item.id)
      );
      setPrices(filtered);
      setLastUpdated(result.fetchedAt);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load fuel prices.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStationPrices(selectedStationId);
  }, [selectedStationId]);

  return (
    <div className="bg-[#F6F6F6]">
      <SeoHead
        title="Fuel Prices – FUELMAX Gas Station"
        description="View sample Petrol, Diesel, Premium, and E85 Ethanol fuel pricing by FUELMAX station location."
      />

      <PageHero
        eyebrow="TRANSPARENT VALUE"
        titleWhite="TODAY'S"
        titleGold="FUEL PRICES"
        description="Compare illustrative sample fuel rates across FUELMAX stations and learn which formulation is engineered best for your vehicle."
        image={SITE_ASSETS.fuelDispensers}
        imageAlt="Digital fuel price screen on modern FUELMAX dispenser"
      />

      <section className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-14 lg:py-20">
        {/* Station Selector Toolbar */}
        <div className="bg-white rounded-[10px] border border-[#E8E8E8] p-6 sm:p-8 shadow-sm mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <h2 className="font-display font-extrabold text-[22px] uppercase text-[#111318]">
                SELECT A SAMPLE STATION LOCATION
              </h2>
              <p className="mt-1 text-[14px] text-[#656565]">
                {selectedStation.address} · {selectedStation.hours}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <label htmlFor="station-price-select" className="sr-only">
                Select station location
              </label>
              <select
                id="station-price-select"
                value={selectedStationId}
                onChange={(e) => setSelectedStationId(e.target.value)}
                className="bg-[#F6F6F6] border border-[#E8E8E8] rounded-[6px] px-4 py-2.5 text-[14px] font-medium text-[#111318] focus:outline-none focus:ring-2 focus:ring-[#FFB900]"
              >
                {SAMPLE_STATIONS.map((station) => (
                  <option key={station.id} value={station.id}>
                    {station.name} ({station.zipCode})
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={() => loadStationPrices(selectedStationId)}
                disabled={loading}
                className="inline-flex items-center gap-2 bg-[#101318] hover:bg-[#20242B] disabled:opacity-60 text-white font-display font-bold text-[11px] tracking-[0.06em] uppercase px-4 py-2.5 rounded-[6px] transition-colors cursor-pointer"
              >
                <RefreshCw
                  className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`}
                  aria-hidden="true"
                />
                <span>Refresh Board</span>
              </button>
            </div>
          </div>

          {/* Sample Data Notice */}
          <div className="mt-5 pt-4 border-t border-[#E8E8E8] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[13px] text-[#656565]">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-[#FFB900] shrink-0" aria-hidden="true" />
              <span>{FUEL_PRICING_CONFIG.sampleNotice}</span>
            </div>
            <div className="tabular-nums">Reference timestamp: {lastUpdated}</div>
          </div>
        </div>

        {/* Loading / Error / Pricing Cards */}
        {error ? (
          <div className="bg-white border border-red-200 rounded-[10px] p-8 text-center">
            <AlertCircle className="w-10 h-10 text-red-600 mx-auto mb-3" aria-hidden="true" />
            <h3 className="font-display font-bold text-[18px] text-[#111318]">
              Price Board Unavailable
            </h3>
            <p className="mt-1 text-[14px] text-[#656565]">{error}</p>
            <button
              type="button"
              onClick={() => loadStationPrices(selectedStationId)}
              className="mt-5 inline-flex items-center gap-2 bg-[#FFB900] text-[#080B0F] font-display font-bold text-[12px] uppercase px-5 py-2.5 rounded-[6px] cursor-pointer"
            >
              Try Again
            </button>
          </div>
        ) : loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[1, 2, 3, 4].map((skeleton) => (
              <div
                key={skeleton}
                className="h-[230px] rounded-[6px] bg-white border border-[#E8E8E8] animate-pulse p-6 flex flex-col items-center justify-center gap-4"
              >
                <div className="w-20 h-3 bg-[#E8E8E8] rounded" />
                <div className="w-16 h-16 rounded-full bg-[#E8E8E8]" />
                <div className="w-24 h-8 bg-[#E8E8E8] rounded" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {prices.map((item) => (
              <FuelPriceCard key={item.id} item={item} />
            ))}
          </div>
        )}

        {/* Fuel Category Explanations */}
        <div className="mt-16">
          <div className="mb-8">
            <div className="font-display text-[12px] font-bold tracking-[0.14em] uppercase text-[#FFB900]">
              FUEL GRADE GUIDE
            </div>
            <h2 className="mt-1 font-display font-extrabold text-[28px] sm:text-[32px] uppercase text-[#111318]">
              UNDERSTANDING OUR FUEL GRADES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REFERENCE_FUEL_PRICES.map((grade) => (
              <article
                key={grade.id}
                className="bg-white rounded-[10px] border border-[#E8E8E8] p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className="font-display font-extrabold text-[18px] uppercase"
                      style={{ color: grade.accentColor }}
                    >
                      {grade.name}
                    </span>
                    <span className="font-mono text-[13px] font-semibold text-[#656565]">
                      {grade.octane}
                    </span>
                  </div>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-[#656565]">
                    {grade.summary}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-[#E8E8E8] text-[13px] text-[#111318]">
                  <span className="font-semibold">Recommended for: </span>
                  <span className="text-[#656565]">{grade.recommendedFor}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-[#101318] text-white rounded-[12px] p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-extrabold text-[22px] uppercase">
              READY TO FILL UP AT {selectedStation.name}?
            </h3>
            <p className="mt-1.5 text-[14.5px] text-[#D5D5D5]/85">
              Check station hours, available wash bays, and directions on our Station
              Locator.
            </p>
          </div>
          <Link
            to="/locations"
            className="inline-flex items-center gap-2 bg-[#FFB900] hover:bg-[#FFC21A] text-[#080B0F] font-display font-bold text-[12px] tracking-[0.06em] uppercase px-6 py-3.5 rounded-[6px] shrink-0 transition-colors"
          >
            <MapPin className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
            <span>VIEW ON STATION MAP</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
