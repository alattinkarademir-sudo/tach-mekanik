"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("menu");
  const locale = useLocale();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-cyan-400/20 bg-black/80 backdrop-blur-xl">
      {/* ÜST NAVBAR */}
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:h-20 sm:px-5 lg:h-24 lg:px-10">
        {/* LOGO */}
        <Link
          href={`/${locale}`}
          onClick={closeMobileMenu}
          className="flex shrink-0 items-center"
        >
          <img
            src="/logo.png"
            alt="TACH MEKANİK"
            className="h-11 w-auto object-contain sm:h-14 lg:h-[76px]"
            draggable={false}
          />
        </Link>

        {/* MASAÜSTÜ MENÜ */}
        <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
          <Link
            href={`/${locale}`}
            className="whitespace-nowrap py-3 text-sm font-semibold text-white transition hover:text-cyan-400"
          >
            {t("home")}
          </Link>

          <Link
            href={`/${locale}/hakkimizda`}
            className="whitespace-nowrap py-3 text-sm font-semibold text-white transition hover:text-cyan-400"
          >
            {t("about")}
          </Link>

          {/* HİZMETLER */}
          <div className="group relative">
            <div className="flex cursor-default items-center gap-1 whitespace-nowrap py-3 text-sm font-semibold text-white transition hover:text-cyan-400">
              {t("services")}

              <span className="text-xs transition-transform duration-300 group-hover:rotate-180">
                ▾
              </span>
            </div>

            {/* HİZMETLER ALT MENÜSÜ */}
            <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-80 -translate-x-1/2 translate-y-2 rounded-xl border border-cyan-400/20 bg-black/95 p-2 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <Link
                href={`/${locale}/projelendirme`}
                className="block rounded-lg px-4 py-1 text-sm text-white transition hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {t("projelendirme")}
              </Link>

              <Link
                href={`/${locale}/kesif`}
                className="block rounded-lg px-4 py-1 text-sm text-white transition hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {t("kesif")}
              </Link>

              <Link
                href={`/${locale}/sihhi-tesisat`}
                className="block rounded-lg px-4 py-1 text-sm text-white transition hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {t("sihhiTesisat")}
              </Link>

              <Link
                href={`/${locale}/yangin-tesisat`}
                className="block rounded-lg px-4 py-1 text-sm text-white transition hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {t("yanginTesisat")}
              </Link>

              <Link
                href={`/${locale}/havalandirma-sistemleri`}
                className="block rounded-lg px-4 py-1 text-sm text-white transition hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {t("havalandirma")}
              </Link>

              <Link
                href={`/${locale}/isitma-sogutma-sistemleri`}
                className="block rounded-lg px-4 py-1 text-sm text-white transition hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {t("isitmaSogutma")}
              </Link>

              <Link
                href={`/${locale}/vrf-sistemleri`}
                className="block rounded-lg px-4 py-1 text-sm text-white transition hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {t("vrfSistemleri")}
              </Link>

              <Link
                href={`/${locale}/medikal-gaz-sistemleri`}
                className="block rounded-lg px-4 py-1 text-sm text-white transition hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {t("medikalGaz")}
              </Link>

              <Link
                href={`/${locale}/yuzme-havuz-sistemleri`}
                className="block rounded-lg px-4 py-1 text-sm text-white transition hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {t("havuzSistemleri")}
              </Link>

              <Link
                href={`/${locale}/peyzaj-sulama-sistemleri`}
                className="block rounded-lg px-4 py-1 text-sm text-white transition hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {t("peyzaj")}
              </Link>

              <Link
                href={`/${locale}/aritma-sistemleri`}
                className="block rounded-lg px-4 py-1 text-sm text-white transition hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {t("aritma")}
              </Link>

              <Link
                href={`/${locale}/altyapi-sistemleri`}
                className="block rounded-lg px-4 py-1 text-sm text-white transition hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {t("altyapi")}
              </Link>
            </div>
          </div>

          <Link
            href={`/${locale}/galeri`}
            className="whitespace-nowrap py-2 text-sm font-semibold text-white transition hover:text-cyan-400"
          >
            {t("gallery")}
          </Link>

          <Link
            href={`/${locale}/projeler`}
            className="whitespace-nowrap py-2 text-sm font-semibold text-white transition hover:text-cyan-400"
          >
            {t("projects")}
          </Link>

          <Link
            href={`/${locale}/iletisim`}
            className="whitespace-nowrap rounded-lg border border-cyan-400/40 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
          >
            {t("contact")}
          </Link>
        </nav>

        {/* SAĞ TARAF */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-5">
          {/* DİLLER */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Link
              href="/tr"
              className={`flex items-center gap-1 rounded-md px-1 py-1 transition sm:px-1.5 ${
                locale === "tr"
                  ? "bg-white/10 opacity-100"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src="/flags/tr.png"
                alt="Türkçe"
                className="h-5 w-5 rounded-full object-cover"
              />

              <span className="hidden text-xs font-semibold text-white sm:inline">
                TR
              </span>
            </Link>

            <Link
              href="/en"
              className={`flex items-center gap-1 rounded-md px-1 py-1 transition sm:px-1.5 ${
                locale === "en"
                  ? "bg-white/10 opacity-100"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src="/flags/en.png"
                alt="English"
                className="h-5 w-5 rounded-full object-cover"
              />

              <span className="hidden text-xs font-semibold text-white sm:inline">
                EN
              </span>
            </Link>

            <Link
              href="/ru"
              className={`flex items-center gap-1 rounded-md px-1 py-1 transition sm:px-1.5 ${
                locale === "ru"
                  ? "bg-white/10 opacity-100"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src="/flags/ru.png"
                alt="Русский"
                className="h-5 w-5 rounded-full object-cover"
              />

              <span className="hidden text-xs font-semibold text-white sm:inline">
                RU
              </span>
            </Link>
          </div>

          {/* MOBİL BUTON */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-xl text-white transition hover:border-cyan-400/50 hover:bg-cyan-400/10 lg:hidden"
            aria-label="Mobil menüyü aç/kapat"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBİL MENÜ */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-black/95 transition-all duration-300 lg:hidden ${
          mobileMenuOpen
            ? "max-h-[calc(100vh-4rem)] overflow-y-auto opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-screen-2xl flex-col px-3 py-1 sm:px-5">
          <Link
            href={`/${locale}`}
            onClick={closeMobileMenu}
            className="rounded-lg px-3 py-3 font-medium text-white transition hover:bg-cyan-400/10 hover:text-cyan-300"
          >
            {t("home")}
          </Link>

          <Link
            href={`/${locale}/hakkimizda`}
            onClick={closeMobileMenu}
            className="rounded-lg px-3 py-3 font-medium text-white transition hover:bg-cyan-400/10 hover:text-cyan-300"
          >
            {t("about")}
          </Link>

          {/* MOBİL HİZMETLER */}
          <div className="border-t border-white/5 pt-1">
            <div className="block rounded-lg px-3 py-2 font-medium text-white">
              {t("services")}
            </div>

            <div className="ml-3 grid grid-cols-2 border-l border-cyan-400/20 pl-2">
              <Link
                href={`/${locale}/projelendirme`}
                onClick={closeMobileMenu}
                className="block rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {t("projelendirme")}
              </Link>

              <Link
                href={`/${locale}/kesif`}
                onClick={closeMobileMenu}
                className="block rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {t("kesif")}
              </Link>

              <Link
                href={`/${locale}/sihhi-tesisat`}
                onClick={closeMobileMenu}
                className="block rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {t("sihhiTesisat")}
              </Link>

              <Link
                href={`/${locale}/yangin-tesisat`}
                onClick={closeMobileMenu}
                className="block rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {t("yanginTesisat")}
              </Link>

              <Link
                href={`/${locale}/havalandirma-sistemleri`}
                onClick={closeMobileMenu}
                className="block rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {t("havalandirma")}
              </Link>

              <Link
                href={`/${locale}/isitma-sogutma-sistemleri`}
                onClick={closeMobileMenu}
                className="block rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {t("isitmaSogutma")}
              </Link>

              <Link
                href={`/${locale}/vrf-sistemleri`}
                onClick={closeMobileMenu}
                className="block rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {t("vrfSistemleri")}
              </Link>

              <Link
                href={`/${locale}/medikal-gaz-sistemleri`}
                onClick={closeMobileMenu}
                className="block rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {t("medikalGaz")}
              </Link>

              <Link
                href={`/${locale}/yuzme-havuz-sistemleri`}
                onClick={closeMobileMenu}
                className="block rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {t("havuzSistemleri")}
              </Link>

              <Link
                href={`/${locale}/peyzaj-sulama-sistemleri`}
                onClick={closeMobileMenu}
                className="block rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {t("peyzaj")}
              </Link>

              <Link
                href={`/${locale}/aritma-sistemleri`}
                onClick={closeMobileMenu}
                className="block rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {t("aritma")}
              </Link>

              <Link
                href={`/${locale}/altyapi-sistemleri`}
                onClick={closeMobileMenu}
                className="block rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {t("altyapi")}
              </Link>
            </div>
          </div>

          <Link
            href={`/${locale}/galeri`}
            onClick={closeMobileMenu}
            className="rounded-lg px-3 py-3 font-medium text-white transition hover:bg-cyan-400/10 hover:text-cyan-300"
          >
            {t("gallery")}
          </Link>

          <Link
            href={`/${locale}/projeler`}
            onClick={closeMobileMenu}
            className="rounded-lg px-3 py-3 font-medium text-white transition hover:bg-cyan-400/10 hover:text-cyan-300"
          >
            {t("projects")}
          </Link>

          <Link
            href={`/${locale}/iletisim`}
            onClick={closeMobileMenu}
            className="mt-0.5 rounded-lg border border-cyan-400/30 px-3 py-2.5 font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
          >
            {t("contact")}
          </Link>
        </nav>
      </div>
    </header>
  );
}