"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navigationData } from "@/data/navigation";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const filtered = query.trim() === ""
    ? navigationData.searchablePages.slice(0, 8)
    : navigationData.searchablePages.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.keywords.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-navy-dark/60 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-line overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-line bg-bg">
          <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages, products, capabilities, or topics..."
            className="flex-1 bg-transparent text-ink text-base placeholder-muted focus:outline-none"
          />
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-semibold text-muted bg-white border border-line rounded hover:bg-tint"
          >
            ESC
          </button>
        </div>

        {/* Search Results List */}
        <div className="max-h-80 overflow-y-auto p-3 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-muted text-sm">
              No matching pages found for &ldquo;{query}&rdquo;.
            </div>
          ) : (
            filtered.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-tint transition-colors group"
              >
                <div>
                  <span className="block font-heading font-semibold text-navy group-hover:text-blue transition-colors">
                    {item.title}
                  </span>
                  <span className="text-xs text-muted">
                    {item.category}
                  </span>
                </div>
                <span className="text-xs text-muted font-medium group-hover:text-blue">
                  Visit →
                </span>
              </Link>
            ))
          )}
        </div>

        <div className="px-5 py-3 bg-bg border-t border-line text-xs text-muted flex items-center justify-between">
          <span>Union North Global Navigation</span>
          <span>Tip: Press ESC to close</span>
        </div>
      </div>
    </div>
  );
}
