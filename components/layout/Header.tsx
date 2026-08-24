"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "IT Services", href: "/services" },
  { label: "Training & E-Learning", href: "/training" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setMobileOpen(false)}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-700 text-lg font-black text-white shadow-sm">
              M
            </div>

            <div className="hidden sm:block">
              <div className="text-base font-extrabold tracking-tight text-slate-950">
                MICT
              </div>

              <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                Technology Solutions
              </div>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-5 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-slate-600 transition-colors hover:text-blue-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="https://wa.me/2348038721296?text=Hello%20MICT%2C%20I%20would%20like%20to%20discuss%20a%20technology%20solution."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-green-600 px-4 py-2.5 text-sm font-bold text-green-700 transition-colors hover:bg-green-50"
            >
              WhatsApp
            </Link>

            <Link
              href="/contact"
              className="rounded-full bg-blue-700 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-blue-600"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
          >
            {mobileOpen ? (
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileOpen && (
          <div className="border-t border-slate-200 py-4 lg:hidden">
            <nav className="flex flex-col">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-slate-100 px-2 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:text-blue-700"
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-4 grid grid-cols-2 gap-3">
                <Link
                  href="https://wa.me/2348038721296?text=Hello%20MICT%2C%20I%20would%20like%20to%20discuss%20a%20technology%20solution."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-green-600 px-4 py-3 text-center text-sm font-bold text-green-700"
                >
                  WhatsApp
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full bg-blue-700 px-4 py-3 text-center text-sm font-bold text-white"
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}