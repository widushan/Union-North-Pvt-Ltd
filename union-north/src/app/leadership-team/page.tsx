"use client";

import { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import PageHeader from "@/components/shared/PageHeader";
import ManagementGrid from "@/components/leadership-team/ManagementGrid";
import FloatingCta from "@/components/shared/FloatingCta";
import Footer from "@/components/shared/Footer";
import QuoteModal from "@/components/shared/QuoteModal";
import { leadershipTeamData } from "@/data/leadershipTeam";

export default function LeadershipTeamPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const { header } = leadershipTeamData;

  return (
    <div className="min-h-screen bg-bg flex flex-col justify-between">
      <Navbar onOpenQuoteModal={() => setQuoteOpen(true)} />

      <main className="flex-1 pb-12">
        <PageHeader
          breadcrumbs={header.breadcrumbs}
          title={header.title}
          subtitle={header.subtitle}
        />
        <ManagementGrid />
        <FloatingCta onOpenQuote={() => setQuoteOpen(true)} />
      </main>

      <Footer />
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
