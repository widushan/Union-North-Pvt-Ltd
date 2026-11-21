import Link from "next/link";
import { ourStoryData } from "@/data/ourStory";

export default function VisionMissionBlock() {
  const { visionMissionTeaser } = ourStoryData;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Vision Card */}
        <div className="bg-white rounded-3xl p-8 border border-line shadow-sm hover:border-blue transition-all">
          <span className="eyebrow block mb-2">{visionMissionTeaser.vision.eyebrow}</span>
          <h3 className="text-2xl font-bold text-navy mb-3">
            {visionMissionTeaser.vision.title}
          </h3>
          <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
            {visionMissionTeaser.vision.statement}
          </p>
          <Link
            href={visionMissionTeaser.vision.link}
            className="text-xs font-bold text-blue hover:underline uppercase tracking-wider inline-flex items-center gap-1"
          >
            Read Our Full Vision →
          </Link>
        </div>

        {/* Mission Card */}
        <div className="bg-white rounded-3xl p-8 border border-line shadow-sm hover:border-blue transition-all">
          <span className="eyebrow block mb-2">{visionMissionTeaser.mission.eyebrow}</span>
          <h3 className="text-2xl font-bold text-navy mb-3">
            {visionMissionTeaser.mission.title}
          </h3>
          <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
            {visionMissionTeaser.mission.statement}
          </p>
          <Link
            href={visionMissionTeaser.mission.link}
            className="text-xs font-bold text-blue hover:underline uppercase tracking-wider inline-flex items-center gap-1"
          >
            Explore Our Mission →
          </Link>
        </div>
      </div>
    </section>
  );
}
