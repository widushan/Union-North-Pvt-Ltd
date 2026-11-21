"use client";

import { navigationData } from "@/data/navigation";

interface FloatingCtaProps {
  title?: string;
  buttonText?: string;
  onOpenQuote?: () => void;
}

export default function FloatingCta({
  title = navigationData.floatingCta.title,
  buttonText = navigationData.floatingCta.buttonText,
  onOpenQuote,
}: FloatingCtaProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 my-12 md:my-16">
      <div className="bg-accent rounded-3xl sm:rounded-[32px] px-8 py-10 sm:px-14 sm:py-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-dark tracking-tight text-center md:text-left">
          {title}
        </h2>
        <button
          onClick={onOpenQuote}
          className="btn-primary bg-navy-dark text-white hover:bg-navy px-8 py-4 rounded-full text-base font-semibold shadow-md whitespace-nowrap cursor-pointer transition-transform hover:scale-105"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
