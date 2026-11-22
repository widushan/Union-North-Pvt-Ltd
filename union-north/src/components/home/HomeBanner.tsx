import Image from "next/image";

export default function HomeBanner() {
  return (
    <section className="w-full relative overflow-hidden my-8 sm:my-12 border-y border-line/60 shadow-sm">
      <div className="relative w-full aspect-[960/356] bg-slate-900">
        <Image
          src="/images/home/home-banner.png"
          alt="Union North Apparel Factory and Manufacturing Facility"
          fill
          sizes="100vw"
          className="object-cover w-full h-full"
          priority={false}
        />
      </div>
    </section>
  );
}
