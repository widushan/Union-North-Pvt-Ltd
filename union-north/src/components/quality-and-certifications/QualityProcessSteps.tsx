import { qualityCertificationsData } from "@/data/qualityCertifications";

export default function QualityProcessSteps() {
  const { process } = qualityCertificationsData;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <span className="eyebrow block">{process.eyebrow}</span>
        <h2 className="text-3xl font-extrabold text-navy tracking-tight mt-1">
          {process.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {process.steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-8 border border-line shadow-sm hover:border-blue transition-all"
          >
            <span className="text-xs font-bold text-accent tracking-widest uppercase block mb-3">
              {step.step}
            </span>
            <h3 className="text-2xl font-bold text-navy mb-3">
              {step.title}
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
