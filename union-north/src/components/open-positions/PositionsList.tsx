"use client";

import { useState } from "react";
import { openPositionsData } from "@/data/openPositions";

export default function PositionsList() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [appliedRole, setAppliedRole] = useState<string | null>(null);
  const { categories, positions, footerNote } = openPositionsData;

  const filtered = activeCategory === "all"
    ? positions
    : positions.filter(p => p.category === activeCategory);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <span className="eyebrow block">Open Positions</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mt-1">
          Join our team
        </h2>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
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

      {/* Jobs List */}
      <div className="space-y-4">
        {filtered.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-line shadow-sm hover:shadow-md hover:border-blue transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div>
              <h3 className="text-xl font-bold text-navy">
                {job.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted font-medium mt-1">
                {job.department} · {job.location} · {job.type}
              </p>
              <p className="text-xs sm:text-sm text-muted mt-2 max-w-xl">
                {job.description}
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={() => setAppliedRole(job.title)}
                className="btn-quote text-xs sm:text-sm py-2.5 px-6 shadow-sm hover:shadow cursor-pointer"
              >
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Applied Notification Modal */}
      {appliedRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center space-y-4 border border-line shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-tint flex items-center justify-center text-blue text-2xl font-bold mx-auto">
              ✉️
            </div>
            <h3 className="text-2xl font-bold text-navy">
              Apply for {appliedRole}
            </h3>
            <p className="text-xs sm:text-sm text-muted">
              Please email your updated CV, mentioning <span className="font-semibold text-ink">&ldquo;{appliedRole}&rdquo;</span> in the subject line, to:
            </p>
            <div className="p-3 bg-tint/60 rounded-xl text-navy font-bold text-sm">
              careers@unionnorth.lk
            </div>
            <button
              onClick={() => setAppliedRole(null)}
              className="btn-primary w-full py-2.5 mt-2"
            >
              Got it
            </button>
          </div>
        </div>
      )}

      {/* Bottom CV Submission Note */}
      <div className="mt-8 pt-6 border-t border-line text-xs sm:text-sm text-muted">
        {footerNote.text}{" "}
        <a href={`mailto:${footerNote.email}`} className="text-blue font-bold hover:underline">
          {footerNote.contactText}
        </a>
      </div>
    </section>
  );
}
