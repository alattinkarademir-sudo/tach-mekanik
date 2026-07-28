"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("menu");
  const locale = useLocale();

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black backdrop-blur-md border-b border-cyan-200/20">
      <div className="max-w-7xl mx-auto flex items-center px-2 py-1">

        {/* Logo */}
        <Link href={`/${locale}`} className="flex flex-col items-center -ml-20">
          <img
            src="/logo.png"
            alt="TACH MEKANİK"
            width={800}
            height={250}
            className="h-20 w-auto object-contain"
          />

          <span
            className="
              -mt-1
              text-sm
              md:text-sm
              font-bold
              tracking-[0.2em]
              uppercase
              bg-gradient-to-r
              from-orange-300
              via-orange-500
              to-amber-300
              bg-clip-text
              text-transparent
              drop-shadow-[2px_2px_3px_rgba(0,0,0,0.8)]
              whitespace-nowrap
            "
          >
            MEKANİK TESİSAT SİSTEMLERİ
          </span>
        </Link>

        {/* Menü */}
        <nav className="hidden md:flex items-center gap-8 text-white font-medium ml-50">

          <Link href={`/${locale}`} className="hover:text-cyan-400 transition">
            {t("home")}
          </Link>

          <Link
            href={`/${locale}/hakkimizda`}
            className="hover:text-cyan-400 transition"
          >
            {t("about")}
          </Link>

          <Link
            href={`/${locale}/hizmetler`}
            className="hover:text-cyan-400 transition"
          >
            {t("services")}
          </Link>

          <Link
            href={`/${locale}/#gallery`}
            className="hover:text-cyan-400 transition"
          >
            {t("gallery")}
          </Link>

          <Link
            href={`/${locale}/projeler`}
            className="hover:text-cyan-400 transition"
          >
            {t("projects")}
          </Link>

          <Link
            href={`/${locale}/#contact`}
            className="hover:text-cyan-400 transition"
          >
            {t("contact")}
          </Link>

          {/* Dil Seçimi */}
          <div className="flex items-center gap-3 ml-4 text-sm">

            <Link
              href="/tr"
              className="flex items-center gap-1 hover:text-orange-400 transition"
            >
              <img
                src="/flags/tr.png"
                alt="Türkçe"
                className="w-5 h-5 object-cover"
              />
              TR
            </Link>

            <span className="text-gray-500">|</span>

            <Link
              href="/en"
              className="flex items-center gap-1 hover:text-orange-400 transition"
            >
              <img
                src="/flags/en.png"
                alt="English"
                className="w-5 h-5 object-cover"
              />
              EN
            </Link>

            <span className="text-gray-500">|</span>

            <Link
              href="/ru"
              className="flex items-center gap-1 hover:text-orange-400 transition"
            >
              <img
                src="/flags/ru.png"
                alt="Русский"
                className="w-5 h-5 object-cover"
              />
              RU
            </Link>

          </div>

        </nav>

      </div>
    </header>
  );
}