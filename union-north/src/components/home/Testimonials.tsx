"use client";

import { testimonials, type Testimonial } from "@/data/testimonials";

const pad = (n: number) => String(n).padStart(2, "0");

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`h-4 w-4 ${
            i < rating ? "fill-amber-300 text-amber-300" : "fill-white/25 text-white/25"
          }`}
          aria-hidden="true"
        >
          <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.2l7.1-.6L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Card({ item, total }: { item: Testimonial; total: number }) {
  return (
    <article className="group/card relative h-[360px] sm:h-[370px] w-[340px] sm:w-[500px] lg:w-[560px] xl:w-[600px] shrink-0 overflow-hidden rounded-3xl bg-gradient-to-br from-[#687CBB] via-[#7B8EC8] to-[#9CB0E0] text-white shadow-lg hover:shadow-2xl hover:shadow-[#182962]/40 border border-white/20 hover:border-white/50 select-none cursor-pointer transition-all duration-300 ease-out hover:-translate-y-3 hover:scale-[1.03] hover:z-30 hover:brightness-105">
      {/* Big quote mark behind avatar on the right */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-[12%] select-none font-serif text-[16rem] leading-none text-[#182962]/30 font-bold transition-transform duration-300 ease-out group-hover/card:scale-110"
      >
        &rdquo;
      </span>

      {/* Avatar (background removed transparent PNG) */}
      <div className="pointer-events-none absolute bottom-0 right-[10%] sm:right-[14%] h-[92%] w-auto max-w-[55%] flex items-end justify-center z-10 transition-transform duration-300 ease-out group-hover/card:scale-105 group-hover/card:-translate-y-1">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.avatar}
          alt={item.name}
          className="h-full w-auto object-contain object-bottom drop-shadow-[0_10px_20px_rgba(0,0,0,0.25)] group-hover/card:drop-shadow-[0_15px_30px_rgba(0,0,0,0.35)] transition-all duration-300"
          loading="lazy"
          onError={(e) => {
            // Hide image if custom file is not found yet
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      {/* Message + Stars + Counter (Left Side) */}
      <div className="absolute inset-y-0 left-0 flex w-[60%] sm:w-[55%] flex-col justify-between p-6 sm:p-8 z-20">
        <div>
          <span aria-hidden="true" className="font-serif text-3xl sm:text-4xl leading-none text-white/90">
            &ldquo;
          </span>
          <p className="mt-2 text-xs sm:text-[13px] lg:text-[14px] leading-relaxed text-white/95 font-medium">
            {item.message}
          </p>

          {/* Stars rating added beneath the message */}
          <div className="mt-3 sm:mt-4">
            <Stars rating={item.rating} />
          </div>
        </div>

        {/* Counter: 01 / 06 (Arrow buttons removed) */}
        <p className="pt-2 text-2xl sm:text-3xl font-light tabular-nums tracking-tight font-heading text-white">
          {pad(item.id)}
          <span className="ml-1 text-xs font-normal text-white/70">/ {pad(total)}</span>
        </p>
      </div>

      {/* Name + Position (Right Side) */}
      <div className="absolute right-6 top-8 sm:right-8 sm:top-10 text-right z-20 max-w-[42%]">
        <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-white tracking-tight leading-tight drop-shadow-sm">
          {item.name}
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-white/80 font-medium">
          {item.position}
        </p>
        <div className="ml-auto mt-2 h-[1.5px] w-20 sm:w-24 bg-white/50" />
      </div>
    </article>
  );
}

export default function Testimonials() {
  const total = testimonials.length;
  // Duplicate for seamless infinite loop
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="w-full relative overflow-hidden py-12 sm:py-16 my-8 sm:my-12">
      {/* Title: Our Reviews */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <p className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-navy/60 font-heading">
          Our Reviews
        </p>
      </div>

      {/* Carousel Track with smooth continuous horizontal scroll (2 cards visible on desktop) */}
      <div className="relative w-full overflow-hidden group py-4">
        {/* Soft edge gradient fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-20 bg-gradient-to-r from-bg via-bg/60 to-transparent z-30" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-20 bg-gradient-to-l from-bg via-bg/60 to-transparent z-30" />

        <div className="flex w-max gap-6 sm:gap-8 animate-marquee group-hover:[animation-play-state:paused] px-4 sm:px-6 py-4 items-center">
          {loop.map((item, i) => (
            <Card key={`${item.id}-${i}`} item={item} total={total} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-marquee {
            animation: marquee 28s linear infinite;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
            overflow-x: auto;
          }
        }
      `}</style>
    </section>
  );
}
