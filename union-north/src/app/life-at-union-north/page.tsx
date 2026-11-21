"use client";

import { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import PageHeader from "@/components/shared/PageHeader";
import CultureSection from "@/components/life-at-union-north/CultureSection";
import BenefitsGrid from "@/components/life-at-union-north/BenefitsGrid";
import FloatingCta from "@/components/shared/FloatingCta";
import Footer from "@/components/shared/Footer";
import QuoteModal from "@/components/shared/QuoteModal";
import { lifeAtUnionNorthData } from "@/data/lifeAtUnionNorth";

export default function LifeAtUnionNorthPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const { header } = lifeAtUnionNorthData;

  return (
    <div className="min-h-screen bg-bg flex flex-col justify-between">
      <Navbar onOpenQuoteModal={() => setQuoteOpen(true)} />

      <main className="flex-1 pb-12">
        <PageHeader
          breadcrumbs={header.breadcrumbs}
          title={header.title}
          subtitle={header.subtitle}
        />
        <CultureSection />
        <BenefitsGrid />
        <FloatingCta onOpenQuote={() => setQuoteOpen(true)} />
      </main>

      <Footer />
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
