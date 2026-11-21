import { ourStoryData } from "@/data/ourStory";

export default function StoryContent() {
  const { story } = ourStoryData;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left narrative */}
        <div className="lg:col-span-7 space-y-6">
          <span className="eyebrow block">{story.eyebrow}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            {story.headline}
          </h2>
          <div className="space-y-4 text-muted text-base leading-relaxed">
            {story.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Timeline Milestones */}
          <div className="pt-6 border-t border-line grid grid-cols-1 sm:grid-cols-2 gap-4">
            {story.milestones.map((m, idx) => (
              <div key={idx} className="bg-tint/50 p-4 rounded-xl border border-line/60">
                <span className="font-heading font-extrabold text-blue text-lg block">
                  {m.year}
                </span>
                <span className="text-xs text-ink font-medium mt-1 block">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Photo Placeholder */}
        <div className="lg:col-span-5">
          <div className="w-full aspect-[4/5] rounded-3xl bg-tint border border-line flex flex-col items-center justify-center p-8 text-center shadow-inner relative overflow-hidden">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-navy font-black text-2xl shadow-sm mb-4">
              UN
            </div>
            <span className="font-heading font-bold text-navy text-lg">
              Union North Manufacturing Plant
            </span>
            <span className="text-xs text-muted mt-2 max-w-xs">
              Dankotuwa, North Western Province, Sri Lanka.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
