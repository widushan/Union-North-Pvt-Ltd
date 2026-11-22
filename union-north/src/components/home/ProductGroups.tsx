"use client";

import Image from "next/image";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { categories } from "@/data/categories";
import { homeData } from "@/data/home";

const INTERVAL_MS = 4500;
const N = categories.length;
const HALF = Math.floor(N / 2);

// Position of card i relative to the active card: -HALF ... +HALF
const offsetOf = (i: number, active: number) =>
  ((i - active + N + HALF) % N) - HALF;

export default function ProductGroups() {
  const { whatWeMake } = homeData;
  const [{ active, prev }, setPos] = useState({ active: 0, prev: 0 });
  const [paused, setPaused] = useState(false);
  const [touchX, setTouchX] = useState<number | null>(null);

  const go = (next: number) =>
    setPos((s) => ({ active: (next + N) % N, prev: s.active }));

  // Auto-scroll (pauses on hover/focus, respects reduced motion)
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => go(active + 1), INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, active]);

  const current = categories[active];

  return (
    <section
      className="relative w-full overflow-hidden py-10 sm:py-12 lg:py-14 my-6 sm:my-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* 1. Base Rich Brand Gradient (Navy-Dark to Royal Navy) */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-[#131F4E]" />

      {/* 2. Background Image with controlled visibility (Subtle watermark texture) */}
      <Image
        src="/images/home/categories/categories-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-20 mix-blend-luminosity brightness-75 contrast-90"
      />

      {/* 3. Color Palette Multi-stop Gradient Overlays to smoothly control image visibility */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/60 to-navy-dark/95"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-dark/85 via-transparent to-navy-dark/85"
        aria-hidden
      />

      {/* Subtle brand ambient color glows */}
      <div
        className="absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-blue/20 blur-3xl pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute -bottom-24 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8 space-y-1.5 text-center sm:text-left">
          <span className="block text-xs font-semibold tracking-[0.14em] uppercase text-white/70">
            {whatWeMake.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            {whatWeMake.title}
          </h2>
          <p className="text-sm sm:text-base text-white/75 max-w-xl">
            {whatWeMake.subtitle}
          </p>
        </div>

        {/* Coverflow stage */}
        <div
          className="relative mx-auto h-[390px] sm:h-[420px] lg:h-[450px] [perspective:1400px] [--step:110px] sm:[--step:190px] lg:[--step:250px]"
          onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX === null) return;
            const dx = e.changedTouches[0].clientX - touchX;
            if (Math.abs(dx) > 50) go(active + (dx < 0 ? 1 : -1));
            setTouchX(null);
          }}
        >
          {categories.map((cat, i) => {
            const o = offsetOf(i, active);
            const abs = Math.abs(o);
            const isCenter = o === 0;
            // A card wrapping from one end to the other should jump, not fly across
            const jumped = Math.abs(o - offsetOf(i, prev)) > 2;

            return (
              <div
                key={cat.id}
                onClick={() => !isCenter && go(i)}
                aria-hidden={!isCenter}
                className={`absolute left-1/2 top-0 w-[240px] sm:w-[290px] lg:w-[340px] h-[360px] sm:h-[390px] lg:h-[420px] rounded-3xl overflow-hidden border border-white/25 shadow-2xl ${
                  isCenter ? "" : "cursor-pointer"
                }`}
                style={{
                  transform: `translateX(calc(-50% + var(--step) * ${o})) rotateY(${
                    o * -28
                  }deg) scale(${1 - abs * 0.14})`,
                  opacity: abs === 0 ? 1 : abs === 1 ? 0.92 : 0.5,
                  zIndex: 30 - abs * 10,
                  transition: jumped
                    ? "none"
                    : "transform 700ms cubic-bezier(.2,.7,.2,1), opacity 700ms",
                }}
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(min-width:1024px) 340px, 290px"
                  className="object-cover"
                  style={{ objectPosition: cat.focus }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Counter, centre card only */}
                <span
                  className={`absolute top-4 right-4 rounded-full bg-black/35 backdrop-blur-md px-3 py-1 text-xs font-medium text-white transition-opacity duration-500 ${
                    isCenter ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {i + 1} / {N}
                </span>

                {/* Glass info panel */}
                <div className="absolute inset-x-0 bottom-0 bg-black/40 backdrop-blur-md border-t border-white/15 p-4 sm:p-5 text-white">
                  <h3 className="font-heading font-bold text-base sm:text-lg lg:text-xl leading-tight !text-white drop-shadow-sm">
                    {cat.title}
                  </h3>
                  {/* <p className="text-xs lg:text-sm text-white/75 mt-1">
                    {cat.tagline}
                  </p> */}

                  {/* Details expand only on the centre card */}
                  <div
                    className={`grid transition-all duration-500 ${
                      isCenter
                        ? "grid-rows-[1fr] opacity-100 mt-2 sm:mt-2.5"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden space-y-2.5">
                      <p className="text-xs sm:text-sm leading-relaxed text-white/90 line-clamp-3">
                        {cat.description}
                      </p>
                      {/* <ul className="flex flex-wrap gap-1.5">
                        {cat.items.map((item) => (
                          <li
                            key={item}
                            className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-medium"
                          >
                            {item}
                          </li>
                        ))}
                      </ul> */}
                      {/* <Link
                        href={cat.link}
                        tabIndex={isCenter ? 0 : -1}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-white/80 transition-colors"
                      >
                        Explore
                        <span aria-hidden>→</span>
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Control pill */}
        <div className="relative z-40 mt-5 flex justify-center">
          <div className="flex items-center gap-3 rounded-full border border-white/25 bg-white/10 backdrop-blur-xl p-2 pr-3 sm:gap-4">
            <button
              onClick={() => go(active - 1)}
              aria-label="Previous category"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-3 min-w-[170px] sm:min-w-[220px]">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-white/30">
                <Image
                  src={current.image}
                  alt=""
                  fill
                  sizes="44px"
                  className="object-cover"
                  style={{ objectPosition: current.focus }}
                />
              </div>
              <div className="text-white leading-tight">
                <p className="text-sm font-semibold">{current.title}</p>
                <p className="text-xs text-white/70">{current.tagline}</p>
              </div>
            </div>

            <button
              onClick={() => go(active + 1)}
              aria-label="Next category"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Dots */}
        <div
          className="mt-4 flex items-center justify-center gap-2"
          role="tablist"
          aria-label="Categories"
        >
          {categories.map((c, i) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={i === active}
              aria-label={`Show ${c.title}`}
              onClick={() => go(i)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === active ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
