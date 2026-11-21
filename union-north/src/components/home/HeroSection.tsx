"use client";

import Link from "next/link";
import { homeData } from "@/data/home";

interface HeroSectionProps {
  onOpenQuote: () => void;
}

export default function HeroSection({ onOpenQuote }: HeroSectionProps) {
  const { hero } = homeData;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
      <div className="bg-white rounded-3xl sm:rounded-[36px] p-6 sm:p-12 lg:p-14 border border-line shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="eyebrow block tracking-[0.14em]">
              {hero.eyebrow}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight leading-[1.1]">
              {hero.title}{" "}
              <span className="text-blue">{hero.titleHighlight}</span>
            </h1>

            <p className="text-base sm:text-lg text-muted max-w-lg leading-relaxed">
              {hero.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenQuote}
                className="btn-quote cursor-pointer px-6 py-3.5 shadow-sm hover:shadow"
              >
                {hero.primaryCta.text}
              </button>

              <Link
                href={hero.secondaryCta.href}
                className="px-6 py-3.5 rounded-full border border-navy/30 text-navy font-semibold text-sm hover:bg-tint transition-colors"
              >
                {hero.secondaryCta.text}
              </Link>
            </div>
          </div>

          {/* Right Column Photo / Hero Visual */}
          <div className="lg:col-span-6">
            <div className="w-full aspect-[4/3] rounded-2xl bg-tint border border-line flex flex-col items-center justify-center p-8 text-center relative overflow-hidden group shadow-inner">
              <div className="w-20 h-20 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-navy font-extrabold text-2xl shadow-sm mb-4 group-hover:scale-105 transition-transform">
                UN
              </div>
              <span className="font-heading font-bold text-navy text-lg sm:text-xl">
                Advanced Factory Floor & Sewing Lines
              </span>
              <span className="text-xs text-muted mt-2 max-w-xs">
                Dankotuwa, Sri Lanka · ISO 9001 & WRAP Certified
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/5 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* 3-Point Horizontal Strip */}
        <div className="mt-12 pt-8 border-t border-line grid grid-cols-1 md:grid-cols-3 gap-6">
          {hero.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-tint flex items-center justify-center text-navy font-bold text-sm shrink-0">
                0{idx + 1}
              </div>
              <div>
                <h4 className="font-heading font-bold text-navy text-base">
                  {feature.title}
                </h4>
                <p className="text-xs sm:text-sm text-muted mt-0.5">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
