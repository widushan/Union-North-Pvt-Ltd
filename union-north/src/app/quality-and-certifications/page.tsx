"use client";

import { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import PageHeader from "@/components/shared/PageHeader";
import CertificationsGrid from "@/components/quality-and-certifications/CertificationsGrid";
import QualityProcessSteps from "@/components/quality-and-certifications/QualityProcessSteps";
import FloatingCta from "@/components/shared/FloatingCta";
import Footer from "@/components/shared/Footer";
import QuoteModal from "@/components/shared/QuoteModal";
import { qualityCertificationsData } from "@/data/qualityCertifications";

export default function QualityCertificationsPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const { header } = qualityCertificationsData;

  return (
    <div className="min-h-screen bg-bg flex flex-col justify-between">
      <Navbar onOpenQuoteModal={() => setQuoteOpen(true)} />

      <main className="flex-1 pb-12">
        <PageHeader
          breadcrumbs={header.breadcrumbs}
          title={header.title}
          subtitle={header.subtitle}
        />
        <CertificationsGrid />
        <QualityProcessSteps />
        <FloatingCta onOpenQuote={() => setQuoteOpen(true)} />
      </main>

      <Footer />
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
