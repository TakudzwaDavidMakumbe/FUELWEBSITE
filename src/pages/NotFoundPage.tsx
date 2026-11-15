import React from 'react';
import { Link } from 'react-router-dom';
import { Home, MapPin } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-[#080B0F] text-white min-h-[70vh] flex items-center justify-center py-20 px-5">
      <SeoHead
        title="Page Not Found – FUELMAX Gas Station"
        description="The requested FUELMAX page could not be found."
      />

      <div className="max-w-lg text-center">
        <div className="font-display font-extrabold text-[72px] sm:text-[92px] leading-none text-[#FFB900]">
          404
        </div>
        <h1 className="mt-3 font-display font-extrabold text-[28px] sm:text-[34px] uppercase text-white">
          WRONG TURN ON THE CORRIDOR
        </h1>
        <p className="mt-4 text-[15px] text-[#D5D5D5]/80">
          The page you are looking for doesn&apos;t exist or may have moved. Head
          back to the main station hub or locate a FUELMAX near you.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#FFB900] hover:bg-[#FFC21A] text-[#080B0F] font-display font-bold text-[12px] tracking-[0.06em] uppercase px-6 py-3.5 rounded-[6px] transition-colors"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            <span>BACK TO HOME</span>
          </Link>
          <Link
            to="/locations"
            className="inline-flex items-center gap-2 border border-white/60 hover:border-[#FFB900] text-white hover:text-[#FFB900] font-display font-bold text-[12px] tracking-[0.06em] uppercase px-6 py-3.5 rounded-[6px] transition-colors"
          >
            <MapPin className="w-4 h-4" aria-hidden="true" />
            <span>FIND A STATION</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
