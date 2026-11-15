import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Search, X } from 'lucide-react';
import {
  STORE_CATEGORIES,
  STORE_PRODUCTS,
  StoreCategory,
} from '../data/storeProducts';
import { SITE_ASSETS } from '../data/siteConfig';
import { PageHero } from '../components/PageHero';
import { SafeImage } from '../components/SafeImage';
import { SeoHead } from '../components/SeoHead';

export const StorePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<StoreCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return STORE_PRODUCTS.filter((product) => {
      const matchesCat =
        selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-[#F6F6F6]">
      <SeoHead
        title="Convenience Store – FUELMAX Gas Station"
        description="Browse fresh coffee, snacks, cold beverages, travel essentials, and automotive supplies stocked inside FUELMAX convenience stores."
      />

      <PageHero
        eyebrow="FUEL UP & STOCK UP"
        titleWhite="CONVENIENCE"
        titleGold="STORE"
        description="From freshly brewed coffee and chilled sports beverages to roadside automotive supplies, everything you need for the miles ahead."
        image={SITE_ASSETS.storeInterior}
        imageAlt="Modern FUELMAX convenience store interior with stocked aisles"
      />

      <section className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-12 lg:py-16">
        {/* Category Filter Tabs & Product Search */}
        <div className="bg-white rounded-[10px] border border-[#E8E8E8] p-5 sm:p-6 shadow-sm mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {STORE_CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-[6px] font-display text-[11px] font-bold tracking-[0.05em] uppercase whitespace-nowrap transition-colors cursor-pointer ${
                    selectedCategory === category
                      ? 'bg-[#101318] text-[#FFB900]'
                      : 'bg-[#F6F6F6] text-[#656565] hover:text-[#111318] hover:bg-[#E8E8E8]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-72 shrink-0">
              <label htmlFor="store-product-search" className="sr-only">
                Search convenience store items
              </label>
              <Search
                className="w-4 h-4 text-[#656565] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="store-product-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search coffee, snacks, oil..."
                className="w-full pl-10 pr-9 py-2.5 rounded-[6px] bg-[#F6F6F6] border border-[#E8E8E8] text-[13.5px] text-[#111318] focus:outline-none focus:ring-2 focus:ring-[#FFB900]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear product search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#656565] hover:text-[#111318]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-[10px] border border-[#E8E8E8] p-10 text-center">
            <p className="font-display font-bold text-[17px] text-[#111318]">
              No store items match your current filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 bg-[#FFB900] text-[#080B0F] font-display font-bold text-[11px] uppercase px-5 py-2.5 rounded-[6px] cursor-pointer"
            >
              Show All Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="bg-white rounded-[10px] border border-[#E8E8E8] overflow-hidden shadow-sm flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div>
                  <div className="aspect-[16/10] bg-[#101318] overflow-hidden">
                    <SafeImage
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 text-[11.5px] font-semibold text-[#656565]">
                      <span className="font-display uppercase tracking-wider text-[#FFB900]">
                        {product.category}
                      </span>
                      <span>{product.unitNote}</span>
                    </div>
                    <h2 className="mt-2 font-display font-bold text-[18px] text-[#111318]">
                      {product.name}
                    </h2>
                    <p className="mt-2 text-[14px] leading-relaxed text-[#656565]">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-4 bg-[#F6F6F6]/70 border-t border-[#E8E8E8] flex items-center justify-between">
                  <span className="font-display font-extrabold text-[22px] text-[#111318] tabular-nums">
                    ${product.price.toFixed(2)}
                  </span>
                  <Link
                    to="/locations"
                    className="inline-flex items-center gap-1.5 text-[12px] font-display font-bold uppercase text-[#111318] hover:text-[#FFB900] transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Available In-Store</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
