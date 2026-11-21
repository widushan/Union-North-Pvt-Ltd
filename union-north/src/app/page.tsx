"use client";

import { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import ProductGroups from "@/components/home/ProductGroups";
import ResponsibleSection from "@/components/home/ResponsibleSection";
import FloatingCta from "@/components/shared/FloatingCta";
import Footer from "@/components/shared/Footer";
import QuoteModal from "@/components/shared/QuoteModal";

export default function HomePage() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg flex flex-col justify-between">
      <Navbar onOpenQuoteModal={() => setQuoteOpen(true)} />

      <main className="flex-1 pb-10">
        <HeroSection onOpenQuote={() => setQuoteOpen(true)} />
        <StatsBar />
        <ProductGroups />
        <ResponsibleSection />
        <FloatingCta onOpenQuote={() => setQuoteOpen(true)} />
      </main>

      <Footer />

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
