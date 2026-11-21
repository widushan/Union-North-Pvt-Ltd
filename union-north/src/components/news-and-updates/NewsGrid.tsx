import { newsUpdatesData } from "@/data/newsUpdates";

export default function NewsGrid() {
  const { newsList } = newsUpdatesData;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {newsList.map((news) => (
          <div
            key={news.id}
            className="bg-white rounded-3xl p-6 border border-line shadow-sm hover:shadow-md hover:border-blue transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-full aspect-[16/10] rounded-2xl bg-tint border border-line/60 flex items-center justify-center p-4 mb-5 relative overflow-hidden group-hover:bg-tint/70 transition-colors">
                <span className="text-xs font-bold text-navy uppercase tracking-widest bg-white/90 px-3 py-1 rounded-full shadow-sm">
                  {news.category}
                </span>
              </div>

              <span className="text-xs font-bold text-accent tracking-widest uppercase block mb-2">
                {news.date}
              </span>

              <h3 className="text-lg font-bold text-navy group-hover:text-blue transition-colors mb-2">
                {news.title}
              </h3>

              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {news.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
