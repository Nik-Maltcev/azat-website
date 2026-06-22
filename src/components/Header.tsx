"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-surface border-b border-outline-variant w-full sticky top-0 z-50">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-content mx-auto py-4 md:h-20 gap-4 md:gap-0">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-primary">
          <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            agriculture
          </span>
          <span className="text-headline-md font-headline text-primary tracking-tight">
            ARD-AGRO
          </span>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 w-full md:max-w-md mx-0 md:mx-8 relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">
            search
          </span>
          <input
            className="w-full pl-10 pr-4 py-2 border border-outline-variant rounded bg-surface-container-lowest text-body-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
            placeholder="Поиск по артикулу или названию"
            type="text"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-6 mr-6">
          <Link href="/" className="text-on-surface-variant hover:text-primary transition-colors text-body-sm font-semibold">
            Главная
          </Link>
          <Link href="/catalog" className="text-on-surface-variant hover:text-primary transition-colors text-body-sm font-semibold">
            Каталог
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-2 text-on-surface-variant">
            <span className="material-symbols-outlined">local_shipping</span>
            <span className="text-technical-label font-body text-primary">Доставка по РФ</span>
          </div>
          <div className="flex flex-col items-end">
            <a
              className="text-headline-md font-headline text-on-surface hover:text-primary transition-colors"
              href="tel:88005513590"
            >
              8 (800) 551-35-90
            </a>
            <button className="text-technical-label font-body text-primary hover:text-secondary transition-colors underline decoration-dashed underline-offset-4">
              Заказать звонок
            </button>
          </div>

          {/* Cart */}
          <button className="text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined">shopping_cart</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-on-surface-variant"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden border-t border-outline-variant bg-surface px-margin-mobile py-4 flex flex-col gap-3">
          <Link href="/" className="text-on-surface hover:text-primary py-2" onClick={() => setMobileMenuOpen(false)}>
            Главная
          </Link>
          <Link href="/catalog" className="text-on-surface hover:text-primary py-2" onClick={() => setMobileMenuOpen(false)}>
            Каталог
          </Link>
        </nav>
      )}
    </header>
  );
}
