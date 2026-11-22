"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { homeData } from "@/data/home";

const STAT_SHAPES = [
  // 1. Years of experience: Coral / Rose Heart (Passion, commitment & heritage)
  <svg
    key="heart"
    viewBox="0 0 40 40"
    className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-[#FF6B81]"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 34C20 34 5 24 5 13C5 8 9 4 14 4C16.8 4 19.3 5.5 20 7.8C20.7 5.5 23.2 4 26 4C31 4 35 8 35 13C35 24 20 34 20 34Z" />
  </svg>,

  // 2. Team members: Sky Blue Team Silhouette (500+ Dedicated Workforce)
  <svg
    key="team"
    viewBox="0 0 40 40"
    className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-[#38BDF8]"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Center Member */}
    <circle cx="20" cy="11" r="5" />
    <path d="M12 28 C12 22.8 15.6 19.5 20 19.5 C24.4 19.5 28 22.8 28 28 Z" />
    {/* Left Member */}
    <circle cx="9.5" cy="14" r="3.8" opacity="0.85" />
    <path
      d="M3.5 29 C3.5 25 6.4 22 10.2 22 C11.8 22 13.2 22.6 14.3 23.6 C13 25.2 12.3 27 12.3 29 Z"
      opacity="0.85"
    />
    {/* Right Member */}
    <circle cx="30.5" cy="14" r="3.8" opacity="0.85" />
    <path
      d="M36.5 29 C36.5 25 33.6 22 29.8 22 C28.2 22 26.8 22.6 25.7 23.6 C27 25.2 27.7 27 27.7 29 Z"
      opacity="0.85"
    />
  </svg>,

  // 3. Pieces per month: Sunny Yellow Apparel T-Shirt Silhouette (350k Garment Output)
  <svg
    key="tshirt"
    viewBox="0 0 40 40"
    className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-[#FCD34D]"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14 6 C16 8.5 24 8.5 26 6 L35 11.5 L31.5 17.5 L28 15.5 L28 34 C28 35.1 27.1 36 26 36 L14 36 C12.9 36 12 35.1 12 34 L12 15.5 L8.5 17.5 L5 11.5 Z" />
  </svg>,

  // 4. Export markets: Mint Green Worldwide Globe (18+ International Markets)
  <svg
    key="globe"
    viewBox="0 0 40 40"
    className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-[#34D399]"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 4C11.163 4 4 11.163 4 20C4 28.837 11.163 36 20 36C28.837 36 36 28.837 36 20C36 11.163 28.837 4 20 4ZM6.2 18.5H13.6C13.8 15.5 14.7 12.7 16.1 10.3C11.9 11.8 8.6 14.8 6.2 18.5ZM6.2 21.5C8.6 25.2 11.9 28.2 16.1 29.7C14.7 27.3 13.8 24.5 13.6 21.5H6.2ZM16.6 21.5H23.4C23.2 24.8 22.1 27.9 20 30.6C17.9 27.9 16.8 24.8 16.6 21.5ZM16.6 18.5C16.8 15.2 17.9 12.1 20 9.4C22.1 12.1 23.2 15.2 23.4 18.5H16.6ZM26.4 18.5H33.8C31.4 14.8 28.1 11.8 23.9 10.3C25.3 12.7 26.2 15.5 26.4 18.5ZM26.4 21.5C26.2 24.5 25.3 27.3 23.9 29.7C28.1 28.2 31.4 25.2 33.8 21.5H26.4Z"
    />
  </svg>,
];

export default function StatsBar() {
  const { stats } = homeData;
  const sectionRef = useRef<HTMLElement | null>(null);

  // Parse numeric targets and suffixes
  const targets = useMemo(() => {
    return stats.map((s) => {
      const match = s.value.match(/^(\d+(?:\.\d+)?)(.*)$/);
      if (!match) return { numeric: 0, suffix: s.value };
      return { numeric: parseFloat(match[1]), suffix: match[2] };
    });
  }, [stats]);

  const [currentValues, setCurrentValues] = useState<number[]>(() =>
    targets.map(() => 0)
  );
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let hasStarted = false;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          hasStarted = true;
          observer.disconnect();

          const duration = 2800; // ms (smooth, relaxed count-up speed)
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Smooth natural deceleration (ease-out)
            const ease = 1 - Math.pow(1 - progress, 2.4);

            setCurrentValues(
              targets.map((t) => Math.round(t.numeric * ease))
            );

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setIsCompleted(true);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [targets]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white border-y border-line/70 py-12 sm:py-16 my-8 sm:my-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Topic: Values That Define Us */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-navy/60 font-heading">
            Values That Define Us
          </p>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 sm:gap-8 lg:gap-12 text-center">
          {stats.map((stat, idx) => {
            const target = targets[idx];
            const displayVal = isCompleted
              ? stat.value
              : `${currentValues[idx]}${target.suffix}`;

            return (
              <div key={idx} className="flex flex-col items-center">
                {/* Number with Vector Shape in upper-right */}
                <div className="relative inline-flex items-center justify-center">
                  <span className="relative z-10 font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-navy tracking-tight tabular-nums">
                    {displayVal}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute -top-2 -right-3 sm:-top-3 sm:-right-4 lg:-top-3.5 lg:-right-4.5 pointer-events-none select-none z-0"
                  >
                    {STAT_SHAPES[idx % STAT_SHAPES.length]}
                  </span>
                </div>

                {/* Label in Sentence Case */}
                <p className="text-xs sm:text-sm font-medium text-muted mt-2 sm:mt-2.5 max-w-[160px] mx-auto text-center leading-snug">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
