"use client";

import Link from "next/link";
import { T } from "gt-next";
import { useGT } from "gt-next/client";
import LocaleSelector from "./LocaleSelector";
import { useState } from "react";

function GitHubIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Header() {
  const gt = useGT();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-dark text-cream border-b border-orange-brand/20 no-print">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-orange-brand tracking-tight">
          <T>Recipe Blog</T>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <T>
            <Link href="/recipes/classic-margherita-pizza" className="text-cream/80 hover:text-orange-brand transition-colors">
              Recipes
            </Link>
            <Link href="/categories" className="text-cream/80 hover:text-orange-brand transition-colors">
              Categories
            </Link>
            <Link href="/meal-planner" className="text-cream/80 hover:text-orange-brand transition-colors">
              Meal Planner
            </Link>
            <Link href="/tips" className="text-cream/80 hover:text-orange-brand transition-colors">
              Kitchen Tips
            </Link>
          </T>
          <a
            href="https://github.com/gt-examples/recipe-blog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/60 hover:text-cream transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <LocaleSelector />
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-cream"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={gt("Toggle menu")}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-orange-brand/20 px-4 py-4 flex flex-col gap-3 text-sm">
          <T>
            <Link href="/recipes/classic-margherita-pizza" className="text-cream/80 hover:text-orange-brand" onClick={() => setMobileOpen(false)}>
              Recipes
            </Link>
            <Link href="/categories" className="text-cream/80 hover:text-orange-brand" onClick={() => setMobileOpen(false)}>
              Categories
            </Link>
            <Link href="/meal-planner" className="text-cream/80 hover:text-orange-brand" onClick={() => setMobileOpen(false)}>
              Meal Planner
            </Link>
            <Link href="/tips" className="text-cream/80 hover:text-orange-brand" onClick={() => setMobileOpen(false)}>
              Kitchen Tips
            </Link>
          </T>
          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://github.com/gt-examples/recipe-blog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-cream"
            >
              <GitHubIcon />
            </a>
            <LocaleSelector />
          </div>
        </nav>
      )}
    </header>
  );
}
