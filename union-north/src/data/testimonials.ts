export interface Testimonial {
  id: number;
  message: string;
  /** 1 - 5 */
  rating: number;
  name: string;
  position: string;
  company?: string;
  /** Background-removed (transparent) PNG/WebP in /public/testimonials */
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    message:
      "Union North has been our primary manufacturing partner in Sri Lanka for five consecutive seasons. Their sample turnaround speed and stitching precision across our activewear collections are second to none.",
    rating: 5,
    name: "Ryan Wyman",
    position: "Lead Markets Architect",
    company: "Vantage Global",
    avatar: "/testimonials/avatar-1.png",
  },
  {
    id: 2,
    message:
      "From initial pattern adjustments to final shipment, their team delivers transparency at every step. Meeting our strict EU ethical compliance and organic fabric standards has been completely seamless.",
    rating: 5,
    name: "Elena Rostova",
    position: "Sourcing Director",
    company: "Nordic Fitwear",
    avatar: "/testimonials/avatar-2.png",
  },
  {
    id: 3,
    message:
      "The high-volume capacity in Dankotuwa combined with direct communication made scaling our performance swimwear lines entirely hassle-free. Truly dependable partners.",
    rating: 4,
    name: "Marcus Chen",
    position: "VP Product Development",
    company: "Solstice Athletic",
    avatar: "/testimonials/avatar-3.png",
  },
  {
    id: 4,
    message:
      "Finding a manufacturer that balances sustainable production with reliable lead times is rare. Union North consistently exceeds our expectations on fabric finish and packaging details.",
    rating: 5,
    name: "Sarah Jenkins",
    position: "Head of Procurement",
    company: "Aurelia Apparel",
    avatar: "/testimonials/avatar-4.png",
  },
  {
    id: 5,
    message:
      "Their attention to collar structure and fabric weight in our polo shirts and chino lines has been remarkable. On-time delivery into our UK distribution hubs has never slipped.",
    rating: 4,
    name: "David Miller",
    position: "Production Director",
    company: "Crestview Menswear",
    avatar: "/testimonials/avatar-5.png",
  },
  {
    id: 6,
    message:
      "The delicate finishing on our seamless shapewear requires extreme skill. Union North's craftspeople treat every garment with meticulous care. Our customer return rates dropped to record lows.",
    rating: 5,
    name: "Amara Al-Mansoor",
    position: "Creative Director",
    company: "Zephyr Intimates",
    avatar: "/testimonials/avatar-6.png",
  },
];
