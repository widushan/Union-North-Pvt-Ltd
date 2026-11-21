import { visionMissionData } from "@/data/visionMission";

export default function VisionMissionCards() {
  const { vision, mission } = visionMissionData;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-line shadow-sm hover:border-blue transition-all">
          <span className="eyebrow block mb-3">{vision.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mb-4">
            {vision.title}
          </h2>
          <p className="text-muted text-base leading-relaxed">
            {vision.description}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-line shadow-sm hover:border-blue transition-all">
          <span className="eyebrow block mb-3">{mission.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mb-4">
            {mission.title}
          </h2>
          <p className="text-muted text-base leading-relaxed">
            {mission.description}
          </p>
        </div>
      </div>
    </section>
  );
}
