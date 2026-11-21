import { visionMissionData } from "@/data/visionMission";

export default function ValuesGrid() {
  const { values } = visionMissionData;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <span className="eyebrow block">{values.eyebrow}</span>
        <h2 className="text-3xl font-extrabold text-navy tracking-tight mt-1">
          {values.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.list.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-line shadow-sm hover:shadow-md hover:border-blue transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-tint flex items-center justify-center text-blue font-extrabold text-base mb-4">
              0{idx + 1}
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
