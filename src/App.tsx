import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { FuelPricesPage } from './pages/FuelPricesPage';
import { LocationsPage } from './pages/LocationsPage';
import { ContactPage } from './pages/ContactPage';
import { StorePage } from './pages/StorePage';
import { RewardsPage } from './pages/RewardsPage';
import { CarWashPage } from './pages/CarWashPage';
import { FleetCardsPage } from './pages/FleetCardsPage';
import { LegalPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#080B0F]">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/fuel-prices" element={<FuelPricesPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/rewards" element={<RewardsPage />} />
            <Route path="/car-wash" element={<CarWashPage />} />
            <Route path="/fleet-cards" element={<FleetCardsPage />} />
            <Route path="/privacy-policy" element={<LegalPage mode="privacy" />} />
            <Route path="/terms-of-service" element={<LegalPage mode="terms" />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
