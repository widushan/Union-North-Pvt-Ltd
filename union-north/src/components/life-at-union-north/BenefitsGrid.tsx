import { lifeAtUnionNorthData } from "@/data/lifeAtUnionNorth";

export default function BenefitsGrid() {
  const { benefits } = lifeAtUnionNorthData;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8">
        <span className="eyebrow block">{benefits.eyebrow}</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mt-1">
          {benefits.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {benefits.list.map((ben, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-8 border border-line shadow-sm hover:border-blue transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-tint flex items-center justify-center text-blue font-bold text-sm mb-4">
              0{idx + 1}
            </div>
            <h3 className="text-2xl font-bold text-navy mb-3">
              {ben.title}
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              {ben.description}
            </p>
          </div>
        ))}
      </div>

      {/* 3 Photo Placeholders Strip matching wireframe */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className="w-full aspect-[16/10] rounded-2xl bg-tint border border-line flex items-center justify-center p-4 text-center"
          >
            <span className="text-xs font-bold text-muted uppercase tracking-wider">
              [Life at UN Photo 0{num}]
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
