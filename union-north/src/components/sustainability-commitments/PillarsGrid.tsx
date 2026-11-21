import { sustainabilityCommitmentsData } from "@/data/sustainabilityCommitments";

export default function PillarsGrid() {
  const { pillars } = sustainabilityCommitmentsData;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <span className="eyebrow block">{pillars.eyebrow}</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mt-1">
          {pillars.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.list.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-8 border border-line shadow-sm hover:shadow-md hover:border-blue transition-all"
          >
            <span className="text-xs font-bold text-accent tracking-widest uppercase block mb-3">
              {item.pillar}
            </span>
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
