import Link from "next/link";
import { ourStoryData } from "@/data/ourStory";

export default function LeadershipTeaser() {
  const { leadershipPreview } = ourStoryData;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <span className="eyebrow block">Leadership</span>
          <h2 className="text-3xl font-extrabold text-navy tracking-tight mt-1">
            Leadership Team
          </h2>
        </div>
        <Link
          href="/leadership-team"
          className="text-sm font-bold text-blue hover:underline hidden sm:inline-block"
        >
          View All Members →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {leadershipPreview.map((member, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-5 border border-line shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-full aspect-square rounded-2xl bg-tint border border-line/60 flex items-center justify-center p-4 mb-4 text-center">
              <span className="text-xs font-bold text-muted uppercase tracking-wider">
                [Photo]
              </span>
            </div>
            <h3 className="text-lg font-bold text-navy group-hover:text-blue transition-colors">
              {member.name}
            </h3>
            <p className="text-xs text-muted mt-1 font-medium">
              {member.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
