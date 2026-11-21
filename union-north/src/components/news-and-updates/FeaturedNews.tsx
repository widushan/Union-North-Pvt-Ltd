import { newsUpdatesData } from "@/data/newsUpdates";

export default function FeaturedNews() {
  const { featuredStory } = newsUpdatesData;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Information */}
        <div className="lg:col-span-6 space-y-5">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-accent tracking-widest uppercase">
              {featuredStory.date}
            </span>
            <span className="text-tint/40">·</span>
            <span className="text-xs font-bold text-blue tracking-wider uppercase">
              {featuredStory.tag}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
            {featuredStory.headline}
          </h2>

          <p className="text-muted text-base leading-relaxed">
            {featuredStory.summary}
          </p>

          <div className="pt-2">
            <span className="text-sm font-bold text-blue inline-flex items-center gap-1.5 hover:underline cursor-pointer">
              <span>Read press release</span>
              <span>→</span>
            </span>
          </div>
        </div>

        {/* Right Photo */}
        <div className="lg:col-span-6">
          <div className="w-full aspect-[4/3] rounded-3xl bg-tint border border-line flex flex-col items-center justify-center p-8 text-center shadow-inner relative overflow-hidden">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-navy font-black text-2xl shadow-sm mb-3">
              ☀️
            </div>
            <span className="font-heading font-bold text-navy text-lg">
              500kW Solar Installation
            </span>
            <span className="text-xs text-muted mt-2 max-w-xs">
              Clean photovoltaic energy powering our Dankotuwa apparel plant.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
