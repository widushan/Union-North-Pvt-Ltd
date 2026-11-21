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
  Sparkles,
  Timer,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { heroSlides, type HeroIcon } from "@/data/heroSlides";

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

export default function HeroSection({ }: HeroSectionProps = {}) {
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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
      <div
        className="bg-white rounded-3xl sm:rounded-[36px] p-4 sm:p-8 lg:px-10 lg:pt-6 lg:pb-8 border border-line shadow-sm relative group"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {/* Manual Navigation Arrow Buttons (Floating on left/right edges) */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute -left-3 sm:-left-4 lg:-left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-navy shadow-lg hover:shadow-xl border border-line flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
        >
          <svg className="w-5 h-5 text-navy stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute -right-3 sm:-right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-navy shadow-lg hover:shadow-xl border border-line flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
        >
          <svg className="w-5 h-5 text-navy stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className={`col-start-1 row-start-1 relative lg:h-[680px] transition-all duration-700 ease-out ${isActive
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-6 pointer-events-none"
                  }`}
              >
                {/* Top headlines */}
                <div className="flex justify-between gap-4 px-2 pb-4 lg:pb-0">
                  <Headline {...s.left} accent={s.accentClass} className="lg:absolute lg:top-4 lg:left-4" />
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

                {/* Centre image – scaled & grounded to reach high up into the white area */}
                <div
                  className={`relative z-10 mx-auto h-72 w-72 -mb-8 sm:h-84 sm:w-84 lg:mb-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:bottom-0 ${s.imageWrapperClass || "lg:h-[640px] lg:w-[560px]"
                    } transition-transform duration-700 ${isActive ? "scale-100" : "scale-95"
                    }`}
                >
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    priority={i === 0}
                    sizes="(min-width:1024px) 640px, 320px"
                    className="object-contain object-bottom"
                  />
                </div>

                {/* Coloured panel */}
                <div
                  className={`relative overflow-hidden rounded-3xl lg:rounded-[32px] p-6 pt-12 sm:p-8 sm:pt-14 lg:px-10 lg:pt-7 lg:pb-7 lg:absolute lg:inset-x-0 lg:bottom-0 lg:h-[465px] transition-colors duration-700 ${s.panelClass}`}
                >
                  {/* Soft background decorative shapes */}
                  <span aria-hidden className="absolute -left-10 bottom-6 w-64 h-24 rounded-[50%] bg-white/10 pointer-events-none" />
                  <span aria-hidden className="hidden lg:block absolute left-[40%] top-10 w-60 h-20 rounded-[50%] bg-white/15 pointer-events-none" />
                  <span aria-hidden className="hidden lg:block absolute left-[44%] top-44 w-72 h-24 rounded-[50%] bg-white/10 pointer-events-none" />
                  <span aria-hidden className="hidden lg:block absolute right-[38%] bottom-10 w-52 h-16 rounded-[50%] bg-white/15 pointer-events-none" />

                  <div className="relative h-full flex flex-col gap-6 lg:grid lg:grid-cols-[1fr_420px_1fr] lg:gap-0 items-stretch">

                    {/* LEFT COLUMN */}
                    <div className="flex flex-col justify-between lg:pr-6 h-full">
                      <div className="space-y-2.5">
                        <span className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider ${dark ? "text-white/90" : "text-navy"}`}>
                          {/* <Sparkles className="w-3.5 h-3.5 text-accent" /> */}
                          {s.eyebrow}
                        </span>

                        {/* Title explicitly styled to never be overridden by globals.css */}
                        <h2 className={`font-heading text-2xl sm:text-3xl lg:text-[2rem] font-extrabold leading-[1.15] max-w-sm ${textClass}`}>
                          {s.title}
                        </h2>

                        <p className={`text-xs sm:text-sm leading-relaxed max-w-xs ${textSoftClass}`}>
                          {s.description}
                        </p>

                        {/* CTA Button */}
                        <div className="pt-1">
                          <Link
                            href="/life-at-union-north"
                            tabIndex={isActive ? 0 : -1}
                            className="btn-quote inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold shadow-sm hover:shadow cursor-pointer transition-all"
                          >
                            <span>Explore Now</span>
                            <span aria-hidden="true">&rarr;</span>
                          </Link>
                        </div>
                      </div>

                      {/* Proof Chip at bottom of left column */}
                      <div className={`mt-4 inline-flex items-center gap-3 self-start rounded-2xl px-4 py-2.5 ${chipClass} shadow-sm backdrop-blur-xs`}>
                        <span className="font-heading text-2xl font-extrabold leading-none">
                          {s.proof.value}
                        </span>
                        <span className={`text-[11px] sm:text-xs max-w-[9.5rem] leading-snug font-medium ${textSoftClass}`}>
                          {s.proof.label}
                        </span>
                      </div>
                    </div>

                    {/* CENTRE spacer (hero model sits here) */}
                    <div className="hidden lg:block" />

                    {/* RIGHT COLUMN - Balanced spacing between icons and card */}
                    <div className="flex flex-col justify-start gap-8 sm:gap-10 lg:items-end lg:pl-6 h-full">
                      {/* Feature Icons */}
                      <ul className="flex flex-wrap gap-x-5 gap-y-2 lg:justify-end">
                        {s.features.map((f) => {
                          const Icon = ICONS[f.icon];
                          return (
                            <li key={f.title} className="flex flex-col items-center gap-1 text-center w-20">
                              <Icon className="w-5 h-5" strokeWidth={1.75} />
                              <span className={`text-[11px] leading-tight font-medium ${textSoftClass}`}>
                                {f.title}
                              </span>
                            </li>
                          );
                        })}
                      </ul>

                      {/* Quality Apparel Product Card */}
                      <div className="w-full max-w-[210px] lg:self-end">
                        <p className={`text-center text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1 ${dark ? "text-white/90" : "text-navy/90"}`}>
                          Quality Apparel
                        </p>
                        <div className="bg-white rounded-2xl p-2.5 shadow-md text-navy">
                          <div className="relative h-22 sm:h-24 rounded-xl bg-tint overflow-hidden">
                            <Image
                              src={s.card.image}
                              alt={s.card.title}
                              fill
                              sizes="210px"
                              className="object-contain object-bottom"
                            />
                          </div>
                          <div className="text-center pt-2 pb-1">
                            <p className="font-heading font-bold text-xs sm:text-sm text-navy">
                              {s.card.title}
                            </p>
                            <p className="text-[11px] text-muted">
                              {s.card.subtitle}
                            </p>
                            <p className="mt-1.5 text-[10px] sm:text-[11px] font-semibold rounded-full bg-tint py-1 px-2.5 text-navy">
                              {s.card.text}
                            </p>
                          </div>
                        </div>
                      </div>

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
    <div className={`font-heading leading-none ${className}`}>
      <span className="block text-xl sm:text-3xl lg:text-4xl font-bold italic text-navy">
        {line}
      </span>
      <span className={`block text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight ${accent}`}>
        {word}
      </span>
    </div>
  );
}
