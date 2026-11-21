"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navigationData, NavItem } from "@/data/navigation";
import SearchModal from "./SearchModal";

interface NavbarProps {
  onOpenQuoteModal?: () => void;
}

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const { leftNav, rightNav } = navigationData;

  const renderNavGroup = (items: NavItem[], alignRight: boolean = false) => {
    return items.map((item) => {
      const hasDropdown = item.dropdown && item.dropdown.length > 0;
      const isOpen = activeDropdown === item.title;

      if (!hasDropdown && item.href) {
        return (
          <Link
            key={item.title}
            href={item.href}
            className="text-[14px] lg:text-[15px] font-semibold text-navy hover:text-blue transition-colors px-2 py-1 whitespace-nowrap"
          >
            {item.title}
          </Link>
        );
      }

      return (
        <div
          key={item.title}
          className="relative"
          onMouseEnter={() => setActiveDropdown(item.title)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <button
            onClick={() => setActiveDropdown(isOpen ? null : item.title)}
            className={`flex items-center gap-1.5 text-[14px] lg:text-[15px] font-semibold transition-colors px-2 py-1 whitespace-nowrap cursor-pointer ${isOpen ? "text-blue" : "text-navy hover:text-blue"
              }`}
          >
            <span>{item.title}</span>
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180 text-blue" : "text-muted"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isOpen && item.dropdown && (
            <div className={`absolute top-full ${alignRight ? "right-0" : "left-0"} pt-2 w-72 z-50 animate-fadeIn`}>
              <div className="bg-white rounded-2xl shadow-xl border border-line p-2 space-y-1">
                {item.dropdown.map((subItem) => (
                  <Link
                    key={subItem.title}
                    href={subItem.href}
                    onClick={() => setActiveDropdown(null)}
                    className="block px-3.5 py-2.5 rounded-xl hover:bg-tint transition-colors group"
                  >
                    <div className="text-sm font-semibold text-navy group-hover:text-blue transition-colors">
                      {subItem.title}
                    </div>
                    {subItem.description && (
                      <div className="text-xs text-muted line-clamp-1 mt-0.5">
                        {subItem.description}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-line w-full">
        {/* Desktop View: Grid layout with [1fr_auto_1fr] guarantees Logo is 100% centered */}
        <div className="hidden xl:grid grid-cols-[1fr_auto_1fr] items-center h-20 max-w-7xl mx-auto px-4 lg:px-6">
          {/* Left Navigation Group (Right-aligned towards center logo) */}
          <nav className="flex items-center justify-end gap-3 lg:gap-5 pr-2">
            {renderNavGroup(leftNav, false)}
          </nav>

          {/* Center Logo (Exact Mathematical Center of Navbar) */}
          <div className="flex items-center justify-center px-4 lg:px-6 shrink-0">
            <Link href="/" className="group flex items-center justify-center">
              <div className="w-16 h-16 relative transition-transform group-hover:scale-105">
                <Image
                  src="/images/navbar/logo.png"
                  alt="Union North Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Right Navigation Group & Search Box (Left-aligned from center logo outward) */}
          <div className="flex items-center justify-start gap-3 lg:gap-5 pl-2">
            {renderNavGroup(rightNav, true)}

            {/* Search Pill */}
            {/* <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 bg-tint/60 hover:bg-tint text-muted hover:text-ink px-3.5 py-1.5 rounded-full border border-line/60 text-xs font-medium transition-all cursor-pointer shrink-0 ml-1"
              title="Search pages & products (Ctrl+K)"
            >
              <svg className="w-3.5 h-3.5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Search</span>
            </button> */}
          </div>
        </div>

        {/* Tablet & Mobile Header View */}
        <div className="flex xl:hidden items-center justify-between h-20 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Mobile Logo & Brand Name */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-12 h-12 relative transition-transform group-hover:scale-105">
              <Image
                src="/images/navbar/logo.png"
                alt="Union North Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-heading font-extrabold text-navy text-lg tracking-tight">
              UNION NORTH
            </span>
          </Link>

          {/* Mobile Action Buttons */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-full bg-tint text-navy hover:bg-line transition-colors cursor-pointer"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {onOpenQuoteModal && (
              <button
                onClick={onOpenQuoteModal}
                className="btn-quote text-xs py-2 px-3.5 shadow-sm cursor-pointer"
              >
                Quote
              </button>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-navy hover:bg-tint transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-line px-6 py-6 max-h-[80vh] overflow-y-auto space-y-4 shadow-lg animate-fadeIn">
            {/* Search within mobile drawer */}
            <div
              onClick={() => {
                setMobileMenuOpen(false);
                setSearchOpen(true);
              }}
              className="flex items-center gap-3 bg-tint px-4 py-2.5 rounded-full text-muted text-sm cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Search pages & products...</span>
            </div>

            {/* Navigation Sections */}
            <div className="space-y-2">
              {[...leftNav, ...rightNav].map((item) => {
                const hasDropdown = item.dropdown && item.dropdown.length > 0;
                const isExpanded = mobileExpanded === item.title;

                if (!hasDropdown && item.href) {
                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-base font-semibold text-navy hover:text-blue"
                    >
                      {item.title}
                    </Link>
                  );
                }

                return (
                  <div key={item.title} className="border-b border-line/60 pb-2">
                    <button
                      onClick={() => setMobileExpanded(isExpanded ? null : item.title)}
                      className="w-full flex items-center justify-between py-2 text-base font-semibold text-navy hover:text-blue cursor-pointer"
                    >
                      <span>{item.title}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180 text-blue" : "text-muted"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isExpanded && item.dropdown && (
                      <div className="pl-4 pt-1 pb-2 space-y-2 bg-tint/40 rounded-xl mt-1">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1.5 text-sm font-medium text-ink hover:text-blue"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Global Interactive Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
