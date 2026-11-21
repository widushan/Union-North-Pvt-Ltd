import { productRangeData } from "@/data/productRange";

export default function ProcessSteps() {
  const { manufacturingProcess } = productRangeData;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <span className="eyebrow block">{manufacturingProcess.eyebrow}</span>
        <h2 className="text-3xl font-extrabold text-navy tracking-tight mt-1">
          {manufacturingProcess.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {manufacturingProcess.steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-line shadow-sm hover:border-blue transition-all"
          >
            <span className="text-xs font-bold text-accent tracking-widest uppercase block mb-3">
              {step.step}
            </span>
            <h3 className="text-xl font-bold text-navy mb-2">
              {step.title}
            </h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
