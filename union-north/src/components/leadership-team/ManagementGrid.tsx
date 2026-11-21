import { leadershipTeamData } from "@/data/leadershipTeam";

export default function ManagementGrid() {
  const { leadership } = leadershipTeamData;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <span className="eyebrow block">{leadership.eyebrow}</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mt-1">
          {leadership.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {leadership.members.map((member, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-6 border border-line shadow-sm hover:shadow-md hover:border-blue transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-full aspect-square rounded-2xl bg-tint border border-line/60 flex flex-col items-center justify-center p-4 mb-5 text-center relative overflow-hidden group-hover:bg-tint/70 transition-colors">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-navy font-black text-xl shadow-sm mb-2">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <span className="text-[11px] font-bold text-muted uppercase tracking-wider">
                  {member.experience}
                </span>
              </div>

              <h3 className="text-xl font-bold text-navy group-hover:text-blue transition-colors">
                {member.name}
              </h3>
              <p className="text-xs font-semibold text-blue mt-1 uppercase tracking-wider">
                {member.title}
              </p>
              <p className="text-xs text-muted mt-3 leading-relaxed">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
