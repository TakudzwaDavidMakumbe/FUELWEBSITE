import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MapPin, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { SITE_CONFIG } from '../data/siteConfig';
import { FuelMaxLogo } from './FuelMaxLogo';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#080B0F]/95 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 h-[62px] lg:h-[68px] flex items-center justify-between gap-6">
        {/* Left: FUELMAX Brand */}
        <Link
          to="/"
          aria-label="FUELMAX Gas Station Home"
          className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB900] rounded-[4px]"
        >
          <FuelMaxLogo compact />
        </Link>

        {/* Center/Right: Desktop Navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-7 xl:gap-8"
        >
          {SITE_CONFIG.navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `relative py-2 font-display text-[12px] font-semibold tracking-[0.06em] uppercase whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB900] rounded-[3px] ${
                  isActive
                    ? 'text-white'
                    : 'text-white/80 hover:text-[#FFB900]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="fuelmax-nav-underline"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#FFB900] rounded-full"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right: Primary CTA + Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/locations"
            className="hidden sm:inline-flex items-center gap-2 bg-[#FFB900] hover:bg-[#FFC21A] text-[#080B0F] font-display font-bold text-[11px] sm:text-[12px] tracking-[0.05em] uppercase px-4 sm:px-5 py-2.5 rounded-[6px] whitespace-nowrap shrink-0 transition-all duration-200 hover:scale-[1.02] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <MapPin className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
            <span>FIND A STATION</span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-[6px] border border-white/15 bg-[#101318] text-white hover:text-[#FFB900] hover:border-[#FFB900]/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB900]"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-[#080B0F] border-t border-white/10 shadow-2xl"
          >
            <nav
              aria-label="Mobile navigation"
              className="max-w-[1280px] mx-auto px-5 py-5 flex flex-col gap-1"
            >
              {SITE_CONFIG.navLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3.5 rounded-[6px] font-display text-[13px] font-bold tracking-[0.06em] uppercase transition-colors ${
                      isActive
                        ? 'bg-[#101318] text-[#FFB900] border border-[#FFB900]/30'
                        : 'text-white/85 hover:bg-[#101318] hover:text-[#FFB900]'
                    }`
                  }
                >
                  <span>{item.label}</span>
                </NavLink>
              ))}

              <div className="pt-4 mt-2 border-t border-white/10">
                <Link
                  to="/locations"
                  onClick={() => setMobileOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#FFB900] hover:bg-[#FFC21A] text-[#080B0F] font-display font-bold text-[13px] tracking-[0.05em] uppercase px-5 py-3.5 rounded-[6px] transition-colors"
                >
                  <MapPin className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                  <span>FIND A STATION</span>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
