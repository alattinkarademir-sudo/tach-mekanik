
"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("menu");
  const locale = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const services = [
    ["projelendirme", "projelendirme"],
    ["kesif", "kesif"],
    ["sihhi-tesisat", "sihhiTesisat"],
    ["gunes-enerjisi-sistemleri", "gunesEnerjisi"],
    ["yangin-tesisat", "yanginTesisat"],
    ["havalandirma-sistemleri", "havalandirma"],
    ["isitma-sogutma-sistemleri", "isitmaSogutma"],
    ["vrf-sistemleri", "vrfSistemleri"],
    ["medikal-gaz-sistemleri", "medikalGaz"],
    ["yuzme-havuz-sistemleri", "havuzSistemleri"],
    ["peyzaj-sulama-sistemleri", "peyzaj"],
    ["aritma-sistemleri", "aritma"],
    ["altyapi-sistemleri", "altyapi"],
  ];

  const projects = [
    ["devam-eden-projeler", "ongoingProjects"],
    ["tamamlanan-projeler", "completedProjects"],
  ];

  const linkClass =
    "whitespace-nowrap py-3 text-sm font-semibold text-black transition hover:text-cyan-700";

  const dropdownLinkClass =
    "block rounded-lg px-4 py-1.5 text-sm text-black transition hover:bg-black/5 hover:text-cyan-700";

  const mobileLinkClass =
    "block rounded-lg px-3 py-2 text-sm text-gray-800 transition hover:bg-black/5 hover:text-cyan-700";

  return (
    <header
      style={{ backgroundColor: "#DCDCDC" }}
      className="fixed top-0 z-50 w-full border-b border-gray-400/30 backdrop-blur-xl"
    >
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
          <Link href={`/${locale}`} className={linkClass}>
            {t("home")}
          </Link>

          <Link href={`/${locale}/hakkimizda`} className={linkClass}>
            {t("about")}
          </Link>

          {/* HİZMETLER */}
          <div className="group relative">
            <div className="flex cursor-default items-center gap-1 whitespace-nowrap py-3 text-sm font-semibold text-black transition hover:text-cyan-700">
              {t("services")}
              <span className="text-xs transition-transform duration-300 group-hover:rotate-180">
                ▾
              </span>
            </div>

            <div
              style={{ backgroundColor: "#DCDCDC" }}
              className="invisible absolute left-1/2 top-full z-50 mt-3 w-56 -translate-x-1/2 translate-y-2 rounded-xl border border-gray-400/30 p-2 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
            >
              {services.map(([path, key]) => (
                <Link
                  key={path}
                  href={`/${locale}/${path}`}
                  className={dropdownLinkClass}
                >
                  {t(key)}
                </Link>
              ))}
            </div>
          </div>

          <Link href={`/${locale}/galeri`} className={linkClass}>
            {t("gallery")}
          </Link>

          {/* PROJELER */}
          <div className="group relative">
            <div className="flex cursor-default items-center gap-1 whitespace-nowrap py-3 text-sm font-semibold text-black transition hover:text-cyan-700">
              {t("projects")}
              <span className="text-xs transition-transform duration-300 group-hover:rotate-180">
                ▾
              </span>
            </div>

            <div
              style={{ backgroundColor: "#DCDCDC" }}
              className="invisible absolute left-1/2 top-full z-50 mt-3 w-52 -translate-x-1/2 translate-y-2 rounded-xl border border-gray-400/30 p-2 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
            >
              {projects.map(([path, key]) => (
                <Link
                  key={path}
                  href={`/${locale}/${path}`}
                  className="block rounded-lg px-4 py-2 text-sm text-black transition hover:bg-black/5 hover:text-cyan-700"
                >
                  {t(key)}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href={`/${locale}/iletisim`}
            className="whitespace-nowrap rounded-lg border border-black/30 px-4 py-2 text-sm font-semibold text-black transition hover:border-cyan-700 hover:bg-black/5 hover:text-cyan-800"
          >
            {t("contact")}
          </Link>

          <Link
            href={`/${locale}/teklif-al`}
            className="whitespace-nowrap rounded-lg bg-cyan-600 px-4 py-2 text-sm font-bold text-white transition hover:scale-105 hover:bg-cyan-700"
          >
            {t("quote")}
          </Link>
        </nav>

        {/* SAĞ TARAF */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-5">
          {/* DİL SEÇİMİ */}
          <div className="flex items-center gap-1 sm:gap-2">
            {[
              ["tr", "tr.png", "Türkçe", "TR"],
              ["en", "en.png", "English", "EN"],
              ["ru", "ru.png", "Русский", "RU"],
            ].map(([code, flag, alt, label]) => (
              <Link
                key={code}
                href={`/${code}`}
                className={`flex items-center gap-1 rounded-md px-1 py-1 transition sm:px-1.5 ${
                  locale === code
                    ? "bg-black/10 opacity-100"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={`/flags/${flag}`}
                  alt={alt}
                  className="h-5 w-5 rounded-full object-cover"
                />
                <span className="hidden text-xs font-semibold text-black sm:inline">
                  {label}
                </span>
              </Link>
            ))}
          </div>

          {/* MOBİL MENÜ BUTONU */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-black/10 bg-black/5 text-xl text-black transition hover:border-cyan-700/50 hover:bg-black/10 lg:hidden"
            aria-label="Mobil menüyü aç/kapat"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBİL MENÜ */}
      <div
        style={{ backgroundColor: "#DCDCDC" }}
        className={`overflow-hidden border-t border-black/10 transition-all duration-300 lg:hidden ${
          mobileMenuOpen
            ? "max-h-[calc(100vh-4rem)] overflow-y-auto opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-screen-2xl flex-col px-3 py-2 sm:px-5">
          <Link
            href={`/${locale}`}
            onClick={closeMobileMenu}
            className="rounded-lg px-3 py-3 font-medium text-black transition hover:bg-black/5 hover:text-cyan-700"
          >
            {t("home")}
          </Link>

          <Link
            href={`/${locale}/hakkimizda`}
            onClick={closeMobileMenu}
            className="rounded-lg px-3 py-3 font-medium text-black transition hover:bg-black/5 hover:text-cyan-700"
          >
            {t("about")}
          </Link>

          {/* MOBİL HİZMETLER */}
          <div className="border-t border-black/10 pt-1">
            <div className="rounded-lg px-3 py-2 font-medium text-black">
              {t("services")}
            </div>

            <div className="ml-3 grid grid-cols-1 border-l border-cyan-700/30 pl-2 sm:grid-cols-2">
              {services.map(([path, key]) => (
                <Link
                  key={path}
                  href={`/${locale}/${path}`}
                  onClick={closeMobileMenu}
                  className={mobileLinkClass}
                >
                  {t(key)}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href={`/${locale}/galeri`}
            onClick={closeMobileMenu}
            className="rounded-lg px-3 py-3 font-medium text-black transition hover:bg-black/5 hover:text-cyan-700"
          >
            {t("gallery")}
          </Link>

          {/* MOBİL PROJELER */}
          <div className="border-t border-black/10 pt-1">
            <div className="rounded-lg px-3 py-2 font-medium text-black">
              {t("projects")}
            </div>

            <div className="ml-3 border-l border-cyan-700/30 pl-2">
              {projects.map(([path, key]) => (
                <Link
                  key={path}
                  href={`/${locale}/${path}`}
                  onClick={closeMobileMenu}
                  className={mobileLinkClass}
                >
                  {t(key)}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href={`/${locale}/iletisim`}
            onClick={closeMobileMenu}
            className="mt-2 rounded-lg border border-black/30 px-3 py-2.5 text-center font-semibold text-black transition hover:bg-black/5 hover:text-cyan-800"
          >
            {t("contact")}
          </Link>

          <Link
            href={`/${locale}/teklif-al`}
            onClick={closeMobileMenu}
            className="mt-2 rounded-lg bg-cyan-600 px-3 py-3 text-center font-bold text-white transition hover:bg-cyan-700"
          >
            {t("quote")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
