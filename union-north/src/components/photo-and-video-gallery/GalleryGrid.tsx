"use client";

import { useState } from "react";
import { photoVideoGalleryData } from "@/data/photoVideoGallery";

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<{ title: string; tag: string } | null>(null);
  const { categories, items } = photoVideoGalleryData;

  const filtered = activeCategory === "all"
    ? items
    : items.filter(it => it.category === activeCategory);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
              activeCategory === cat.id
                ? "bg-navy text-white shadow-sm"
                : "bg-white text-muted hover:text-navy border border-line"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Media Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="bg-white rounded-3xl p-4 border border-line shadow-sm hover:shadow-md hover:border-blue transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-full aspect-[4/3] rounded-2xl bg-tint border border-line/60 flex flex-col items-center justify-center p-4 relative overflow-hidden group-hover:bg-tint/70 transition-colors">
                <span className="text-xs font-bold text-navy uppercase tracking-widest bg-white/90 px-3 py-1 rounded-full shadow-sm mb-2">
                  {item.type === "video" ? "▶ Video" : "📷 Photo"}
                </span>
                <span className="text-[11px] font-semibold text-muted">
                  {item.tag}
                </span>
              </div>

              <div className="mt-4">
                <h3 className="text-base font-bold text-navy group-hover:text-blue transition-colors line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-line/50 text-xs font-semibold text-blue flex items-center justify-between">
              <span>View Media</span>
              <span>↗</span>
            </div>
          </div>
        ))}
      </div>

      {/* Media Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full text-center space-y-4 border border-line shadow-2xl relative">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-tint text-navy flex items-center justify-center hover:bg-line transition-colors"
            >
              ✕
            </button>
            <div className="w-full aspect-[16/10] rounded-2xl bg-tint flex flex-col items-center justify-center p-6 text-center">
              <span className="text-3xl mb-2">📷</span>
              <span className="font-heading font-bold text-navy text-lg">{selectedItem.title}</span>
              <span className="text-xs text-muted mt-1">{selectedItem.tag} · Dankotuwa Plant</span>
            </div>
            <p className="text-xs text-muted">
              High-resolution media asset from Union North&apos;s media archive.
            </p>
            <button
              onClick={() => setSelectedItem(null)}
              className="btn-primary w-full py-2.5"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
