"use client";

import { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import PageHeader from "@/components/shared/PageHeader";
import StoryContent from "@/components/our-story/StoryContent";
import VisionMissionBlock from "@/components/our-story/VisionMissionBlock";
import LeadershipTeaser from "@/components/our-story/LeadershipTeaser";
import CertificationsBlock from "@/components/our-story/CertificationsBlock";
import FloatingCta from "@/components/shared/FloatingCta";
import Footer from "@/components/shared/Footer";
import QuoteModal from "@/components/shared/QuoteModal";
import { ourStoryData } from "@/data/ourStory";

export default function OurStoryPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const { header } = ourStoryData;

  return (
    <div className="min-h-screen bg-bg flex flex-col justify-between">
      <Navbar onOpenQuoteModal={() => setQuoteOpen(true)} />

      <main className="flex-1 pb-12">
        <PageHeader
          breadcrumbs={header.breadcrumbs}
          title={header.title}
          subtitle={header.subtitle}
        />
        <StoryContent />
        <VisionMissionBlock />
        <LeadershipTeaser />
        <CertificationsBlock />
        <FloatingCta onOpenQuote={() => setQuoteOpen(true)} />
      </main>

      <Footer />
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
