import Image from "next/image";
import Link from "next/link";
import { navigationData } from "@/data/navigation";

export default function Footer() {
  const { company } = navigationData;

  return (
    <footer className="bg-navy-dark text-white border-t border-navy/40">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          {/* Brand info */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <div className="w-14 h-14 relative rounded-full overflow-hidden shadow-md">
                <Image
                  src="/logo-un.svg"
                  alt="Union North Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-tint/80 max-w-xs leading-relaxed">
              {company.name}. {company.tagline}
            </p>
          </div>

          {/* Company Column */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-base text-white">Company</h4>
            <ul className="space-y-2 text-sm text-tint/70">
              <li>
                <Link href="/our-story" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/sustainability-commitments" className="hover:text-white transition-colors">
                  Responsible Business
                </Link>
              </li>
              <li>
                <Link href="/product-development" className="hover:text-white transition-colors">
                  Innovation
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-base text-white">Explore</h4>
            <ul className="space-y-2 text-sm text-tint/70">
              <li>
                <Link href="/product-range" className="hover:text-white transition-colors">
                  What We Make
                </Link>
              </li>
              <li>
                <Link href="/life-at-union-north" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/news-and-updates" className="hover:text-white transition-colors">
                  Media
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-base text-white">Contact</h4>
            <div className="space-y-2 text-sm text-tint/70">
              <p>{company.address}</p>
              <p className="hover:text-white transition-colors">
                <a href={`tel:${company.phone}`}>{company.phone}</a>
              </p>
              <p className="hover:text-white transition-colors">
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-16 pt-8 border-t border-navy/60 text-xs text-tint/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>{company.copyright}</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
