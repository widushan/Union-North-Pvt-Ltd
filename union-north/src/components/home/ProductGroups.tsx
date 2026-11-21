import Link from "next/link";
import { homeData } from "@/data/home";

export default function ProductGroups() {
  const { whatWeMake } = homeData;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Section Header */}
      <div className="mb-10 space-y-2">
        <span className="eyebrow block">
          {whatWeMake.eyebrow}
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
          {whatWeMake.title}
        </h2>
        <p className="text-base text-muted max-w-xl">
          {whatWeMake.subtitle}
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {whatWeMake.groups.map((group) => (
          <div
            key={group.id}
            className="bg-white rounded-2xl sm:rounded-3xl p-5 border border-line shadow-sm hover:shadow-md hover:border-blue/50 transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Photo placeholder with tint */}
              <div className="w-full aspect-[4/3] rounded-xl bg-tint border border-line/60 flex items-center justify-center p-4 relative overflow-hidden group-hover:bg-tint/70 transition-colors">
                <span className="text-xs font-bold text-navy/60 uppercase tracking-widest bg-white/80 px-3 py-1 rounded-full shadow-sm">
                  {group.tag}
                </span>
              </div>

              <div className="mt-5 space-y-2">
                <h3 className="text-xl font-bold text-navy group-hover:text-blue transition-colors">
                  {group.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted line-clamp-3 leading-relaxed">
                  {group.description}
                </p>
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-line/50">
              <Link
                href={group.link}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-navy group-hover:text-blue transition-colors"
              >
                <span>Explore</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
