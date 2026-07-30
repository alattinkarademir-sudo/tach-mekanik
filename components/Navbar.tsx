"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("menu");
  const locale = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur-md border-b border-cyan-500/20">

      {/* Üst Menü */}
      <div className="w-full max-w-screen-2xl mx-auto flex items-center justify-between px-3 sm:px-4 md:px-8 lg:px-10 h-20 md:h-26">

        {/* LOGO */}
        <Link href={`/${locale}`} className="flex items-center">
          <img
            src="/logo.png"
            alt="TACH MEKANİK"
            className="h-16 md:h-20 lg:h-24 w-auto max-w-full object-contain"
            draggable={false}
          />
        </Link>

        {/* Masaüstü Menü */}
        <nav className="hidden lg:flex items-center gap-8 text-white font-medium">

          <Link href={`/${locale}`} className="hover:text-cyan-400 transition">
            {t("home")}
          </Link>

          <Link href={`/${locale}/hakkimizda`} className="hover:text-cyan-400 transition">
            {t("about")}
          </Link>

          <Link href={`/${locale}/hizmetler`} className="hover:text-cyan-400 transition">
            {t("services")}
          </Link>

          <Link href={`/${locale}/#gallery`} className="hover:text-cyan-400 transition">
            {t("gallery")}
          </Link>

          <Link href={`/${locale}/projeler`} className="hover:text-cyan-400 transition">
            {t("projects")}
          </Link>

          <Link href={`/${locale}/#contact`} className="hover:text-cyan-400 transition">
            {t("contact")}
          </Link>

        </nav>

        {/* Sağ Bölüm */}
        <div className="flex items-center gap-3">

          {/* Mobil Menü Butonu */}
          <button
  onClick={() => {
    console.log("Tiklandi");
    setMobileMenuOpen((prev) => !prev);
  }}
  className="block lg:hidden p-2 text-white text-4xl z-50"
>
  {mobileMenuOpen ? "✕" : "☰"}
</button>

          {/* Dil */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">

            <Link href="/tr" className="flex items-center gap-1 hover:opacity-80 transition">
              <img
                src="/flags/tr.png"
                alt="Türkçe"
                className="w-4 h-4 sm:w-5 sm:h-5 rounded-full"
              />
              <span className="hidden sm:inline text-white text-sm">TR</span>
            </Link>

            <Link href="/en" className="flex items-center gap-1 hover:opacity-80 transition">
              <img
                src="/flags/en.png"
                alt="English"
                className="w-4 h-4 sm:w-5 sm:h-5 rounded-full"
              />
              <span className="hidden sm:inline text-white text-sm">EN</span>
            </Link>

            <Link href="/ru" className="flex items-center gap-1 hover:opacity-80 transition">
              <img
                src="/flags/ru.png"
                alt="Русский"
                className="w-4 h-4 sm:w-5 sm:h-5 rounded-full"
              />
              <span className="hidden sm:inline text-white text-sm">RU</span>
            </Link>

          </div>

        </div>

      </div>
            {/* Mobil Menü */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black border-t border-cyan-500/20 shadow-xl">
          <nav className="flex flex-col">

            <Link
              href={`/${locale}`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-4 text-white hover:bg-cyan-500/20 transition"
            >
              {t("home")}
            </Link>

            <Link
              href={`/${locale}/hakkimizda`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-4 text-white hover:bg-cyan-500/20 transition"
            >
              {t("about")}
            </Link>

            <Link
              href={`/${locale}/hizmetler`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-4 text-white hover:bg-cyan-500/20 transition"
            >
              {t("services")}
            </Link>

            <Link
              href={`/${locale}/#gallery`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-4 text-white hover:bg-cyan-500/20 transition"
            >
              {t("gallery")}
            </Link>

            <Link
              href={`/${locale}/projeler`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-4 text-white hover:bg-cyan-500/20 transition"
            >
              {t("projects")}
            </Link>

            <Link
              href={`/${locale}/#contact`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-4 text-white hover:bg-cyan-500/20 transition"
            >
              {t("contact")}
            </Link>

          </nav>
        </div>
      )}

    </header>
  );
}