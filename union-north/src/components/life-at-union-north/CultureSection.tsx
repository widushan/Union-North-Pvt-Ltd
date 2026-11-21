import { lifeAtUnionNorthData } from "@/data/lifeAtUnionNorth";

export default function CultureSection() {
  const { culture } = lifeAtUnionNorthData;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Information */}
        <div className="lg:col-span-6 space-y-6">
          <span className="eyebrow block">{culture.eyebrow}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            {culture.title}
          </h2>
          <p className="text-muted text-base leading-relaxed">
            {culture.description}
          </p>

          <ul className="space-y-3 pt-2">
            {culture.values.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm text-ink font-medium">
                <span className="w-5 h-5 rounded-full bg-tint flex items-center justify-center text-blue text-xs font-bold shrink-0">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Photo */}
        <div className="lg:col-span-6">
          <div className="w-full aspect-[4/3] rounded-3xl bg-tint border border-line flex flex-col items-center justify-center p-8 text-center shadow-inner relative overflow-hidden">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-navy font-black text-2xl shadow-sm mb-3">
              😊
            </div>
            <span className="font-heading font-bold text-navy text-lg">
              Union North Team Culture
            </span>
            <span className="text-xs text-muted mt-2 max-w-xs">
              Over 500 passionate craftspeople thriving together in Dankotuwa.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
