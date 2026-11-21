"use client";

import { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import PageHeader from "@/components/shared/PageHeader";
import ProductionOverview from "@/components/manufacturing-capabilities/ProductionOverview";
import CapacityStatsBar from "@/components/manufacturing-capabilities/CapacityStatsBar";
import StagesGrid from "@/components/manufacturing-capabilities/StagesGrid";
import FloatingCta from "@/components/shared/FloatingCta";
import Footer from "@/components/shared/Footer";
import QuoteModal from "@/components/shared/QuoteModal";
import { manufacturingCapabilitiesData } from "@/data/manufacturingCapabilities";

export default function ManufacturingCapabilitiesPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const { header } = manufacturingCapabilitiesData;

  return (
    <div className="min-h-screen bg-bg flex flex-col justify-between">
      <Navbar onOpenQuoteModal={() => setQuoteOpen(true)} />

      <main className="flex-1 pb-12">
        <PageHeader
          breadcrumbs={header.breadcrumbs}
          title={header.title}
          subtitle={header.subtitle}
        />
        <ProductionOverview />
        <CapacityStatsBar />
        <StagesGrid />
        <FloatingCta onOpenQuote={() => setQuoteOpen(true)} />
      </main>

      <Footer />
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
