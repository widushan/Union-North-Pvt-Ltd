"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import {
  Award,
  Factory,
  Gem,
  Globe,
  Leaf,
  Ruler,
  Scissors,
  Shield,
  Shirt,
  Timer,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { heroSlides, type HeroIcon } from "@/data/heroSlides";
import HeroFloralOrnaments from "@/components/home/HeroFloralOrnaments";

const ICONS: Record<HeroIcon, LucideIcon> = {
  ruler: Ruler,
  scissors: Scissors,
  timer: Timer,
  shirt: Shirt,
  gem: Gem,
  leaf: Leaf,
  factory: Factory,
  globe: Globe,
  truck: Truck,
  shield: Shield,
  award: Award,
  users: Users,
};

const INTERVAL_MS = 5000;

interface HeroSectionProps {
  onOpenQuote?: () => void;
}

export default function HeroSection({}: HeroSectionProps = {}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const handlePrev = useCallback(() => {
    setActive((i) => (i - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  const handleNext = useCallback(() => {
    setActive((i) => (i + 1) % heroSlides.length);
  }, []);

  // Auto-advance (pauses on hover / focus, respects reduced motion)
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(handleNext, INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, handleNext]);

  // Keyboard navigation (ArrowLeft & ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-6 pt-4 sm:pt-10">
      <div
        className="bg-white rounded-3xl sm:rounded-[36px] p-3 sm:p-8 lg:px-10 lg:pt-6 lg:pb-8 border border-line shadow-sm relative group overflow-hidden sm:overflow-visible"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {/* Manual Navigation Arrow Buttons */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute left-1 sm:left-2 lg:-left-5 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-white text-navy shadow-lg hover:shadow-xl border border-line flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-navy stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute right-1 sm:right-2 lg:-right-5 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-white text-navy shadow-lg hover:shadow-xl border border-line flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-navy stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* All slides share one grid cell, so height = tallest slide */}
        <div className="grid">
          {heroSlides.map((s, i) => {
            const isActive = i === active;
            const dark = s.tone === "dark";
            const textClass = dark ? "!text-white" : "!text-navy";
            const textSoftClass = dark ? "text-white/85" : "text-navy/75";
            const chipClass = dark ? "bg-white/20 text-white" : "bg-white/80 text-navy";

            return (
              <div
                key={i}
                aria-hidden={!isActive}
                className={`col-start-1 row-start-1 relative lg:h-[720px] xl:h-[680px] transition-all duration-700 ease-out ${
                  isActive
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-6 pointer-events-none invisible lg:visible"
                }`}
              >
                {/* Dynamic Vector Floral Ornaments in Background (tuned per slide) */}
                <HeroFloralOrnaments slideIndex={i} />

                {/* Top headlines */}
                <div className="flex items-center justify-between gap-3 px-2 pb-4 sm:pb-6 lg:pb-0 relative z-20">
                  <Headline {...s.left} accent={s.accentClass} className="lg:absolute lg:top-4 lg:left-4 text-left" />
                  <Headline
                    {...s.right}
                    accent={s.accentClass}
                    className="text-right lg:absolute lg:top-4 lg:right-4"
                  />
                </div>

                {/* Orbit ring behind the model (desktop) */}
                <div
                  aria-hidden
                  className="hidden lg:block absolute left-1/2 top-20 w-[480px] h-[155px] -translate-x-1/2 -rotate-6 rounded-[50%] border border-navy/20 pointer-events-none"
                />

                {/* Centre image */}
                <div
                  className={`relative z-10 mx-auto h-72 w-72 sm:h-84 sm:w-84 -mb-10 sm:-mb-12 lg:mb-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:bottom-0 ${
                    s.imageWrapperClass || "lg:h-[670px] lg:w-[460px] xl:h-[640px] xl:w-[540px]"
                  } transition-transform duration-700 ${
                    isActive ? "scale-100" : "scale-95"
                  }`}
                >
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    priority={i === 0}
                    sizes="(min-width:1280px) 540px, (min-width:1024px) 460px, (min-width:640px) 336px, 288px"
                    className="object-contain object-bottom"
                  />
                </div>

                {/* Coloured panel */}
                <div
                  className={`relative overflow-hidden rounded-3xl lg:rounded-[32px] p-5 pt-14 sm:p-8 sm:pt-16 lg:px-8 xl:px-10 lg:pt-6 lg:pb-6 xl:pt-7 xl:pb-7 lg:absolute lg:inset-x-0 lg:bottom-0 lg:h-[520px] xl:h-[475px] transition-colors duration-700 ${s.panelClass}`}
                >
                  {/* Soft background decorative shapes */}
                  <span aria-hidden className="absolute -left-10 bottom-6 w-64 h-24 rounded-[50%] bg-white/10 pointer-events-none" />
                  <span aria-hidden className="hidden lg:block absolute left-[40%] top-10 w-60 h-20 rounded-[50%] bg-white/15 pointer-events-none" />
                  <span aria-hidden className="hidden lg:block absolute left-[44%] top-44 w-72 h-24 rounded-[50%] bg-white/10 pointer-events-none" />
                  <span aria-hidden className="hidden lg:block absolute right-[38%] bottom-10 w-52 h-16 rounded-[50%] bg-white/15 pointer-events-none" />

                  {/* Panel content container: properly centered & width-managed below 1024px, 3-col grid on desktop */}
                  <div className="relative h-full flex flex-col gap-7 sm:gap-8 lg:grid lg:grid-cols-[1fr_330px_1fr] xl:grid-cols-[1fr_420px_1fr] lg:gap-0 items-stretch max-w-xl sm:max-w-2xl lg:max-w-none mx-auto w-full">

                    {/* LEFT COLUMN - Balanced vertical distribution matching right column */}
                    <div className="flex flex-col justify-between lg:pr-4 xl:pr-6 h-full items-center text-center lg:items-start lg:text-left">
                      {/* 1. Header Group (Top) */}
                      <div className="space-y-1.5 xl:space-y-2 flex flex-col items-center lg:items-start w-full">
                        <span className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider ${dark ? "text-white/90" : "text-navy"}`}>
                          {s.eyebrow}
                        </span>

                        {/* Title explicitly styled to never be overridden by globals.css */}
                        <h2 className={`font-heading text-2xl sm:text-3xl lg:text-[1.65rem] xl:text-[2rem] font-extrabold leading-[1.15] max-w-sm sm:max-w-md ${textClass}`}>
                          {s.title}
                        </h2>
                      </div>

                      {/* 2. Description + Action CTA (Middle) - lg:my-auto ensures 100% equal vertical balance */}
                      <div className="space-y-3 xl:space-y-4 flex flex-col items-center lg:items-start w-full my-6 lg:my-auto">
                        <p className={`text-xs xl:text-sm leading-relaxed max-w-xs sm:max-w-sm ${textSoftClass}`}>
                          {s.description}
                        </p>

                        <div className="pt-0.5 flex justify-center lg:justify-start w-full">
                          <Link
                            href="/life-at-union-north"
                            tabIndex={isActive ? 0 : -1}
                            className="btn-quote inline-flex items-center gap-2 px-5 py-2 xl:px-6 xl:py-2.5 text-xs xl:text-sm font-semibold shadow-sm hover:shadow cursor-pointer transition-all"
                          >
                            <span>Explore Now</span>
                            <span aria-hidden="true">&rarr;</span>
                          </Link>
                        </div>
                      </div>

                      {/* 3. Proof Chip (Bottom of left column) */}
                      <div className={`hidden lg:inline-flex items-center gap-2.5 xl:gap-3 self-start rounded-2xl px-3.5 py-2 xl:px-4 xl:py-2.5 ${chipClass} shadow-sm backdrop-blur-xs`}>
                        <span className="font-heading text-xl xl:text-2xl font-extrabold leading-none">
                          {s.proof.value}
                        </span>
                        <span className={`text-[10px] xl:text-[11px] max-w-[8.5rem] xl:max-w-[9.5rem] leading-snug font-medium ${textSoftClass}`}>
                          {s.proof.label}
                        </span>
                      </div>
                    </div>

                    {/* CENTRE spacer (hero model sits here on desktop) */}
                    <div className="hidden lg:block" />

                    {/* RIGHT COLUMN */}
                    <div className="flex flex-col justify-between lg:items-end lg:pl-4 xl:pl-6 h-full items-center text-center lg:text-right">
                      {/* 1. Feature Icons (Top) */}
                      <ul className="flex flex-wrap justify-center lg:justify-end gap-x-3.5 xl:gap-x-5 gap-y-2 w-full">
                        {s.features.map((f) => {
                          const Icon = ICONS[f.icon];
                          return (
                            <li key={f.title} className="flex flex-col items-center gap-1 text-center w-18 xl:w-20">
                              <Icon className="w-4.5 h-4.5 xl:w-5 xl:h-5" strokeWidth={1.75} />
                              <span className={`text-[10px] xl:text-[11px] leading-tight font-medium ${textSoftClass}`}>
                                {f.title}
                              </span>
                            </li>
                          );
                        })}
                      </ul>

                      {/* 2. Quality Apparel Product Card - lg:my-auto ensures 100% equal vertical balance */}
                      <div className="w-full max-w-[200px] xl:max-w-[220px] mx-auto lg:mr-0 lg:ml-auto my-6 lg:my-auto">
                        <p className={`text-center text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1.5 ${dark ? "text-white/90" : "text-navy/90"}`}>
                          Quality Apparel
                        </p>
                        <div className="bg-white rounded-2xl p-2.5 xl:p-3 shadow-md text-navy">
                          {/* Product Card Image: Guaranteed explicit height across all screens */}
                          <div className="relative h-20 xl:h-24 rounded-xl bg-tint overflow-hidden">
                            <Image
                              src={s.card.image}
                              alt={s.card.title}
                              fill
                              sizes="(min-width:1280px) 220px, 200px"
                              className="object-contain object-bottom"
                            />
                          </div>
                          <div className="text-center pt-2 pb-1">
                            <p className="font-heading font-bold text-xs sm:text-sm text-navy">
                              {s.card.title}
                            </p>
                            <p className="text-[10px] xl:text-[11px] text-muted">
                              {s.card.subtitle}
                            </p>
                            <p className="mt-1 text-[10px] xl:text-[11px] font-semibold rounded-full bg-tint py-0.5 xl:py-1 px-2.5 text-navy">
                              {s.card.text}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* 3. Proof Chip (Desktop: bottom of right column) */}
                      <div className={`hidden lg:inline-flex items-center gap-2.5 xl:gap-3 self-end rounded-2xl px-3.5 py-2 xl:px-4 xl:py-2.5 ${chipClass} shadow-sm backdrop-blur-xs`}>
                        <span className="font-heading text-xl xl:text-2xl font-extrabold leading-none">
                          {s.rightProof?.value || s.proof.value}
                        </span>
                        <span className={`text-[10px] xl:text-[11px] max-w-[8.5rem] xl:max-w-[9.5rem] leading-snug font-medium ${textSoftClass}`}>
                          {s.rightProof?.label || s.proof.label}
                        </span>
                      </div>
                    </div>

                    {/* Proof Chips Container for Mobile & Tablet (<1024px) */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 lg:hidden w-full">
                      <div className={`inline-flex items-center gap-3 rounded-2xl px-4 py-2.5 ${chipClass} shadow-sm backdrop-blur-xs w-full sm:w-auto justify-center`}>
                        <span className="font-heading text-2xl font-extrabold leading-none">
                          {s.proof.value}
                        </span>
                        <span className={`text-[11px] sm:text-xs max-w-[10rem] leading-snug font-medium ${textSoftClass}`}>
                          {s.proof.label}
                        </span>
                      </div>

                      {s.rightProof && (
                        <div className={`inline-flex items-center gap-3 rounded-2xl px-4 py-2.5 ${chipClass} shadow-sm backdrop-blur-xs w-full sm:w-auto justify-center`}>
                          <span className="font-heading text-2xl font-extrabold leading-none">
                            {s.rightProof.value}
                          </span>
                          <span className={`text-[11px] sm:text-xs max-w-[10rem] leading-snug font-medium ${textSoftClass}`}>
                            {s.rightProof.label}
                          </span>
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Headline({
  line,
  word,
  accent,
  className = "",
}: {
  line: string;
  word: string;
  accent: string;
  className?: string;
}) {
  return (
    <div className={`font-heading leading-tight ${className}`}>
      <span className="block text-base sm:text-2xl lg:text-2xl xl:text-3xl font-bold italic text-navy">
        {line}
      </span>
      <span className={`block text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight ${accent}`}>
        {word}
      </span>
    </div>
  );
}
