"use client";

import { useState } from "react";
import { internshipsTrainingData } from "@/data/internshipsTraining";

export default function InternshipOverview() {
  const [modalOpen, setModalOpen] = useState(false);
  const { internships } = internshipsTrainingData;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Information */}
        <div className="lg:col-span-6 space-y-6">
          <span className="eyebrow block">{internships.eyebrow}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            {internships.title}
          </h2>
          <p className="text-muted text-base leading-relaxed">
            {internships.description}
          </p>

          <ul className="space-y-3 pt-2">
            {internships.benefits.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm text-ink font-medium">
                <span className="w-5 h-5 rounded-full bg-tint flex items-center justify-center text-blue text-xs font-bold shrink-0">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="pt-2">
            <button
              onClick={() => setModalOpen(true)}
              className="btn-quote cursor-pointer shadow-sm hover:shadow"
            >
              {internships.ctaText}
            </button>
          </div>
        </div>

        {/* Right Photo */}
        <div className="lg:col-span-6">
          <div className="w-full aspect-[4/3] rounded-3xl bg-tint border border-line flex flex-col items-center justify-center p-8 text-center shadow-inner relative overflow-hidden">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-navy font-black text-2xl shadow-sm mb-3">
              🎓
            </div>
            <span className="font-heading font-bold text-navy text-lg">
              Union North Apprentice Academy
            </span>
            <span className="text-xs text-muted mt-2 max-w-xs">
              Vocational training, CAD learning, and industrial garment engineering in Dankotuwa.
            </span>
          </div>
        </div>
      </div>

      {/* Internship Application Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center space-y-4 border border-line shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-tint flex items-center justify-center text-blue text-2xl font-bold mx-auto">
              🎓
            </div>
            <h3 className="text-2xl font-bold text-navy">
              Internship Application
            </h3>
            <p className="text-xs sm:text-sm text-muted">
              Send your university or vocational institute recommendation letter and CV to:
            </p>
            <div className="p-3 bg-tint/60 rounded-xl text-navy font-bold text-sm">
              internships@unionnorth.lk
            </div>
            <button
              onClick={() => setModalOpen(false)}
              className="btn-primary w-full py-2.5 mt-2"
            >
              Understood
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
