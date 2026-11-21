"use client";

import { useState } from "react";
import { productRangeData } from "@/data/productRange";

interface ProductCatalogProps {
  onOpenQuote: () => void;
}

export default function ProductCatalog({ onOpenQuote }: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { categories, products } = productRangeData;

  const filtered = selectedCategory === "all"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? "bg-navy text-white shadow-sm"
                : "bg-white text-muted hover:text-navy border border-line"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((prod) => (
          <div
            key={prod.id}
            className="bg-white rounded-3xl p-5 border border-line shadow-sm hover:shadow-md hover:border-blue transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-full aspect-square rounded-2xl bg-tint border border-line/60 flex items-center justify-center p-4 relative overflow-hidden group-hover:bg-tint/70 transition-colors">
                <span className="text-xs font-bold text-navy/70 uppercase tracking-widest bg-white/80 px-3 py-1 rounded-full shadow-sm">
                  {prod.tag}
                </span>
              </div>

              <div className="mt-5 space-y-1.5">
                <h3 className="text-lg font-bold text-navy group-hover:text-blue transition-colors">
                  {prod.name}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {prod.specs}
                </p>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-line/50">
              <button
                onClick={onOpenQuote}
                className="w-full py-2 px-3 rounded-xl bg-tint/60 hover:bg-navy hover:text-white text-navy font-semibold text-xs transition-colors cursor-pointer"
              >
                Inquire Specifications →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
