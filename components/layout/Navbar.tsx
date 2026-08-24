"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "IT Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Training", href: "/training" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-700"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-800 hover:shadow-lg"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-800 transition hover:bg-slate-100 lg:hidden"
        >
          <span className="sr-only">
            {mobileOpen ? "Close menu" : "Open menu"}
          </span>

          <span className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-6 bg-current transition-transform ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-current transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-current transition-transform ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-slate-100 px-2 py-3.5 text-sm font-medium text-slate-700 transition-colors hover:text-blue-700"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 rounded-full bg-blue-700 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-800"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}