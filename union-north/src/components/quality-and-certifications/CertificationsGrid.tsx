import { qualityCertificationsData } from "@/data/qualityCertifications";

export default function CertificationsGrid() {
  const { certifications } = qualityCertificationsData;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8">
        <span className="eyebrow block">{certifications.eyebrow}</span>
        <h2 className="text-3xl font-extrabold text-navy tracking-tight mt-1">
          {certifications.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.list.map((cert, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-line shadow-sm hover:shadow-md hover:border-blue transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-tint flex items-center justify-center text-navy font-extrabold text-base mb-4">
              ✓
            </div>
            <div className="font-heading font-extrabold text-2xl text-navy mb-1">
              {cert.code}
            </div>
            <h3 className="text-sm font-bold text-blue uppercase tracking-wider mb-3">
              {cert.name}
            </h3>
            <p className="text-xs text-muted leading-relaxed">
              {cert.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
