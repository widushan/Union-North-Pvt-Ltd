import { sustainabilityCommitmentsData } from "@/data/sustainabilityCommitments";

export default function TargetsBar() {
  const { targets } = sustainabilityCommitmentsData;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 my-10">
      <div className="bg-navy-dark rounded-3xl sm:rounded-[32px] px-8 py-10 sm:py-12 border border-navy shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          {targets.map((tgt, idx) => (
            <div key={idx} className={`${idx > 0 ? "pt-6 md:pt-0" : ""}`}>
              <div className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
                {tgt.value}
              </div>
              <p className="text-xs sm:text-sm font-medium text-tint/80 mt-2 uppercase tracking-wider">
                {tgt.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
