import { technologyEquipmentData } from "@/data/technologyEquipment";

export default function MachinesGrid() {
  const { technology } = technologyEquipmentData;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8">
        <span className="eyebrow block">{technology.eyebrow}</span>
        <h2 className="text-3xl font-extrabold text-navy tracking-tight mt-1">
          {technology.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {technology.systems.map((sys, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-6 border border-line shadow-sm hover:shadow-md hover:border-blue transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-full aspect-[4/3] rounded-2xl bg-tint border border-line/60 flex items-center justify-center p-4 mb-6 relative overflow-hidden group-hover:bg-tint/70 transition-colors">
                <span className="text-xs font-bold text-navy uppercase tracking-widest bg-white/90 px-3.5 py-1.5 rounded-full shadow-sm">
                  {sys.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-navy group-hover:text-blue transition-colors mb-2">
                {sys.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {sys.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
