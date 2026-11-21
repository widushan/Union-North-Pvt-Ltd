import { manufacturingCapabilitiesData } from "@/data/manufacturingCapabilities";

export default function CapacityStatsBar() {
  const { stats } = manufacturingCapabilitiesData;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 my-10">
      <div className="bg-navy-dark rounded-3xl sm:rounded-[32px] px-8 py-10 sm:py-12 border border-navy shadow-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <div key={idx} className={`${idx > 0 ? "pt-6 md:pt-0" : ""}`}>
              <div className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
                {stat.value}
              </div>
              <p className="text-xs sm:text-sm font-medium text-tint/80 mt-2 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
