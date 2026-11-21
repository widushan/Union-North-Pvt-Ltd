import { digitalProcessImprovementData } from "@/data/digitalProcessImprovement";

export default function DigitalCards() {
  const { initiatives } = digitalProcessImprovementData;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {initiatives.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-8 border border-line shadow-sm hover:border-blue transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-tint flex items-center justify-center text-blue font-bold text-sm mb-4">
              0{idx + 1}
            </div>
            <h3 className="text-2xl font-bold text-navy mb-3">
              {item.title}
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
