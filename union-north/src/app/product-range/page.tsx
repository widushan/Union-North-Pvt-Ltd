"use client";

import { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import PageHeader from "@/components/shared/PageHeader";
import ProductCatalog from "@/components/product-range/ProductCatalog";
import ProcessSteps from "@/components/product-range/ProcessSteps";
import FloatingCta from "@/components/shared/FloatingCta";
import Footer from "@/components/shared/Footer";
import QuoteModal from "@/components/shared/QuoteModal";
import { productRangeData } from "@/data/productRange";

export default function ProductRangePage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const { header } = productRangeData;

  return (
    <div className="min-h-screen bg-bg flex flex-col justify-between">
      <Navbar onOpenQuoteModal={() => setQuoteOpen(true)} />

      <main className="flex-1 pb-12">
        <PageHeader
          breadcrumbs={header.breadcrumbs}
          title={header.title}
          subtitle={header.subtitle}
        />
        <ProductCatalog onOpenQuote={() => setQuoteOpen(true)} />
        <ProcessSteps />
        <FloatingCta
          title="Tell us what you need made"
          buttonText="Request a Quote →"
          onOpenQuote={() => setQuoteOpen(true)}
        />
      </main>

      <Footer />
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
