"use client";

import { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import PageHeader from "@/components/shared/PageHeader";
import InternshipOverview from "@/components/internships-and-training/InternshipOverview";
import ThreeStepsGrid from "@/components/internships-and-training/ThreeStepsGrid";
import FloatingCta from "@/components/shared/FloatingCta";
import Footer from "@/components/shared/Footer";
import QuoteModal from "@/components/shared/QuoteModal";
import { internshipsTrainingData } from "@/data/internshipsTraining";

export default function InternshipsTrainingPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const { header } = internshipsTrainingData;

  return (
    <div className="min-h-screen bg-bg flex flex-col justify-between">
      <Navbar onOpenQuoteModal={() => setQuoteOpen(true)} />

      <main className="flex-1 pb-12">
        <PageHeader
          breadcrumbs={header.breadcrumbs}
          title={header.title}
          subtitle={header.subtitle}
        />
        <InternshipOverview />
        <ThreeStepsGrid />
        <FloatingCta onOpenQuote={() => setQuoteOpen(true)} />
      </main>

      <Footer />
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
