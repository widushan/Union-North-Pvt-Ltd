import { ourServicesData } from "@/data/ourServices";

export default function ServicesGrid() {
  const { services } = ourServicesData;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <span className="eyebrow block">{services.eyebrow}</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mt-1">
          {services.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.list.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-line shadow-sm hover:shadow-md hover:border-blue transition-all flex flex-col justify-between group"
          >
            <div>
              <span className="text-sm font-extrabold text-blue mb-4 block tracking-wider">
                {service.number}
              </span>
              <h3 className="text-xl font-bold text-navy group-hover:text-blue transition-colors mb-3">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
