import { ourLocationData } from "@/data/ourLocation";

export default function LocationDetails() {
  const { location } = ourLocationData;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Information Card */}
        <div className="lg:col-span-5 space-y-6">
          <span className="eyebrow block">{location.eyebrow}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            {location.title}
          </h2>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-line shadow-sm space-y-5">
            <div>
              <span className="text-xs font-bold text-muted uppercase tracking-wider block mb-1">
                Factory Address
              </span>
              <p className="text-ink text-sm sm:text-base font-medium">
                {location.address}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-line/60">
              <div>
                <span className="text-xs font-bold text-muted uppercase tracking-wider block mb-1">
                  Telephone
                </span>
                <p className="text-navy font-bold text-sm">
                  {location.phone}
                </p>
              </div>
              <div>
                <span className="text-xs font-bold text-muted uppercase tracking-wider block mb-1">
                  Email
                </span>
                <p className="text-navy font-bold text-sm">
                  {location.email}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-line/60 space-y-2">
              <span className="text-xs font-bold text-muted uppercase tracking-wider block">
                Strategic Logistics Advantage
              </span>
              <p className="text-xs text-muted">
                ✈️ {location.airportDistance}
              </p>
              <p className="text-xs text-muted">
                🚢 {location.portDistance}
              </p>
            </div>
          </div>

          <div>
            <a
              href={location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-quote inline-flex items-center gap-2 shadow-sm hover:shadow"
            >
              <span>Get directions</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Right Map Placeholder */}
        <div className="lg:col-span-7">
          <div className="w-full aspect-[4/3] rounded-3xl bg-tint border border-line flex flex-col items-center justify-center p-8 text-center relative overflow-hidden shadow-inner">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-navy text-2xl font-black mb-3 shadow-sm">
              📍
            </div>
            <h3 className="font-heading font-bold text-navy text-xl">
              Union North Facility Map
            </h3>
            <p className="text-xs sm:text-sm text-muted mt-2 max-w-sm">
              Industrial Zone, Dankotuwa, Sri Lanka. Easily accessible via the Central & Coastal highway networks.
            </p>
            <a
              href={location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-xs font-bold text-blue hover:underline uppercase tracking-wider"
            >
              Open in Google Maps ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
