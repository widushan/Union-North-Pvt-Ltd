"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  storySections,
  videoStoryData,
  type StorySection,
  type VideoStorySectionData,
} from "@/data/storySections";

export { storySections, videoStoryData, type StorySection, type VideoStorySectionData };

export function StorySections() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="w-full space-y-16 sm:space-y-24 my-12 sm:my-20">
      {/* 1 & 2: Who We Are & What We Do (with Creative 3-Image Bento Grids) */}
      {storySections.map((section, idx) => {
        const isImageLeft = idx % 2 === 1;

        return (
          <section
            key={section.id}
            id={section.id}
            className="w-full scroll-mt-24"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
                {/* Visual / Image Column */}
                <div
                  className={`lg:col-span-6 ${
                    isImageLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  {section.images && section.images.length >= 3 ? (
                    /* Creative 3-Image Grid */
                    <div className="grid grid-cols-12 gap-3 sm:gap-4 h-[380px] sm:h-[440px] lg:h-[480px]">
                      {/* Main Large Photo */}
                      <div
                        className={`${
                          isImageLeft
                            ? "col-span-7 order-2"
                            : "col-span-7 order-1"
                        } h-full relative rounded-2xl sm:rounded-3xl overflow-hidden border border-line shadow-md group bg-slate-900`}
                      >
                        <Image
                          src={section.images[0].src}
                          alt={section.images[0].alt}
                          fill
                          sizes="(min-width: 1024px) 340px, 60vw"
                          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>

                      {/* Stacked 2 Photos Column (5 cols) */}
                      <div
                        className={`${
                          isImageLeft
                            ? "col-span-5 order-1"
                            : "col-span-5 order-2"
                        } h-full flex flex-col gap-3 sm:gap-4`}
                      >
                        {/* Top Sub-card */}
                        <div className="flex-1 relative rounded-2xl sm:rounded-3xl overflow-hidden border border-line shadow-md group bg-slate-900">
                          <Image
                            src={section.images[1].src}
                            alt={section.images[1].alt}
                            fill
                            sizes="(min-width: 1024px) 240px, 40vw"
                            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>

                        {/* Bottom Sub-card */}
                        <div className="h-[43%] relative rounded-2xl sm:rounded-3xl overflow-hidden border border-line shadow-md group bg-navy/5">
                          <Image
                            src={section.images[2].src}
                            alt={section.images[2].alt}
                            fill
                            sizes="(min-width: 1024px) 240px, 40vw"
                            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-3xl sm:rounded-[36px] overflow-hidden border border-line shadow-lg ${
                        section.fit === "contain"
                          ? "bg-gradient-to-br from-tint/50 via-white to-tint/30 flex items-center justify-center p-6 sm:p-10"
                          : "bg-slate-900"
                      }`}
                    >
                      <Image
                        src={section.image}
                        alt={section.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 580px, 100vw"
                        className={`transition-transform duration-700 hover:scale-105 ${
                          section.fit === "contain"
                            ? "object-contain p-4"
                            : "object-cover"
                        }`}
                      />
                    </div>
                  )}
                </div>

                {/* Text Content Column */}
                <div
                  className={`lg:col-span-6 space-y-5 sm:space-y-6 ${
                    isImageLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="space-y-2">
                    <span className="inline-block text-xs font-bold tracking-[0.16em] uppercase text-blue font-heading">
                      {section.eyebrow}
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-extrabold text-navy tracking-tight leading-tight">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-3.5 sm:space-y-4">
                    {section.paragraphs.map((p, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-muted text-sm sm:text-base leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      href={section.cta.href}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-navy text-white text-sm font-semibold hover:bg-blue transition-all duration-300 shadow-md hover:shadow-lg group"
                    >
                      <span>{section.cta.text}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* 3: Full-Width Video Feature Section (Our People | Innovation) */}
      <section className="w-full relative overflow-hidden py-16 sm:py-20 lg:py-24 my-14 sm:my-20 border-y border-line/40 shadow-2xl">
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        >
          <source src={videoStoryData.videoSrc} type="video/mp4" />
        </video>

        {/* Lightweight Translucent Tint - Video stays clearly visible & bright */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-navy-dark/40 via-black/25 to-navy-dark/50"
          aria-hidden
        />

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-stretch gap-8 lg:gap-6 xl:gap-10">
            {/* Left Column: Our People (Frosted Glass Card) */}
            <div
              id={videoStoryData.left.id}
              className="flex flex-col justify-between space-y-6 scroll-mt-24 bg-[#0a112c]/65 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/20 shadow-2xl hover:border-white/30 transition-colors"
            >
              <div className="space-y-4">
                <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-accent font-heading">
                  {videoStoryData.left.eyebrow}
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold !text-white tracking-tight leading-tight drop-shadow-md">
                  {videoStoryData.left.title}
                </h3>
                <div className="space-y-3.5 pt-1">
                  {videoStoryData.left.paragraphs.map((p, idx) => (
                    <p
                      key={idx}
                      className="text-white/90 text-sm sm:text-base leading-relaxed drop-shadow-sm"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={videoStoryData.left.cta.href}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-navy font-semibold text-sm hover:bg-accent hover:text-navy transition-all duration-300 shadow-lg group"
                >
                  <span>{videoStoryData.left.cta.text}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Desktop Center Vertical Divider Line */}
            <div
              className="hidden lg:flex flex-col items-center justify-center px-1"
              aria-hidden
            >
              <div className="w-[1.5px] h-full min-h-[300px] bg-gradient-to-b from-white/10 via-white/50 to-white/10" />
            </div>

            {/* Mobile / Tablet Horizontal Divider Line */}
            <div
              className="lg:hidden w-full h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent"
              aria-hidden
            />

            {/* Right Column: Innovation (Frosted Glass Card) */}
            <div
              id={videoStoryData.right.id}
              className="flex flex-col justify-between space-y-6 scroll-mt-24 bg-[#0a112c]/65 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/20 shadow-2xl hover:border-white/30 transition-colors"
            >
              <div className="space-y-4">
                <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-accent font-heading">
                  {videoStoryData.right.eyebrow}
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold !text-white tracking-tight leading-tight drop-shadow-md">
                  {videoStoryData.right.title}
                </h3>
                <div className="space-y-3.5 pt-1">
                  {videoStoryData.right.paragraphs.map((p, idx) => (
                    <p
                      key={idx}
                      className="text-white/90 text-sm sm:text-base leading-relaxed drop-shadow-sm"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={videoStoryData.right.cta.href}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/40 text-white font-semibold text-sm hover:bg-white hover:text-navy transition-all duration-300 backdrop-blur-md shadow-lg group"
                >
                  <span>{videoStoryData.right.cta.text}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StorySections;
