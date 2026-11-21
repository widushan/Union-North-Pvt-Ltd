import Link from "next/link";
import { ourStoryData } from "@/data/ourStory";

export default function CertificationsBlock() {
  const { certificationsPreview } = ourStoryData;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <span className="eyebrow block">Trust & Compliance</span>
          <h2 className="text-3xl font-extrabold text-navy tracking-tight mt-1">
            Quality & Certifications
          </h2>
        </div>
        <Link
          href="/quality-and-certifications"
          className="text-sm font-bold text-blue hover:underline hidden sm:inline-block"
        >
          View Standards & Audit Reports →
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {certificationsPreview.map((cert, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 border border-line shadow-sm text-center hover:border-blue transition-all"
          >
            <div className="font-heading font-extrabold text-xl sm:text-2xl text-navy mb-2">
              {cert.code}
            </div>
            <p className="text-xs text-muted font-medium">
              {cert.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
