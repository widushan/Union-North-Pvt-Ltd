import Link from "next/link";

interface PageHeaderProps {
  breadcrumbs: { label: string; href?: string }[];
  title: string;
  subtitle: string;
}

export default function PageHeader({ breadcrumbs, title, subtitle }: PageHeaderProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-8 md:pt-10 md:pb-12">
      <div className="bg-navy-dark text-white rounded-3xl sm:rounded-[32px] px-6 py-10 sm:px-12 sm:py-16 shadow-lg border border-navy/50 relative overflow-hidden">
        {/* Subtle decorative gradient */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          {/* Breadcrumb (Amber accent) */}
          <nav className="flex items-center gap-2 text-xs font-bold tracking-widest text-accent uppercase">
            {breadcrumbs.map((crumb, idx) => (
              <span key={idx} className="flex items-center gap-2">
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:underline">
                    {crumb.label}
                  </Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
                {idx < breadcrumbs.length - 1 && <span className="text-tint/40">/</span>}
              </span>
            ))}
          </nav>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-tint/80 text-sm sm:text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
