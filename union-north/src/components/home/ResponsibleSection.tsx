import Link from "next/link";
import { homeData } from "@/data/home";

export default function ResponsibleSection() {
  const { responsibleBusiness } = homeData;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 my-10 sm:my-14">
      <div className="bg-navy rounded-3xl sm:rounded-[36px] p-8 sm:p-14 text-white shadow-xl relative overflow-hidden border border-navy-dark">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold tracking-[0.16em] uppercase text-accent block">
              {responsibleBusiness.eyebrow}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {responsibleBusiness.title}
            </h2>

            <p className="text-tint/80 text-sm sm:text-base leading-relaxed max-w-xl">
              {responsibleBusiness.description}
            </p>

            <div className="pt-2">
              <Link
                href={responsibleBusiness.cta.href}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white hover:text-navy transition-all"
              >
                {responsibleBusiness.cta.text}
              </Link>
            </div>
          </div>

          {/* Right Visual Box */}
          <div className="lg:col-span-5">
            <div className="w-full aspect-[4/3] rounded-2xl bg-navy-dark/60 border border-white/10 flex flex-col items-center justify-center p-6 text-center shadow-inner">
              <div className="w-16 h-16 rounded-full bg-blue/20 flex items-center justify-center text-accent text-2xl font-bold mb-3">
                🌿
              </div>
              <span className="font-heading font-bold text-white text-base">
                Community & Eco-Conscious Factory
              </span>
              <span className="text-xs text-tint/70 mt-1 max-w-xs">
                Zero harmful chemicals, solar-ready facility, local community development in Dankotuwa.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
