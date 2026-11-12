"use client";

import HeroSlider from "@/components/HeroSlider";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  const ctaLabels: Record<string, { quote: string; projects: string }> = {
    tr: { quote: "Hemen Teklif Al", projects: "Projelerimizi İncele" },
    en: { quote: "Get a Quote Now", projects: "Explore Our Projects" },
    ru: { quote: "Получить расчет", projects: "Наши проекты" },
  };

  const currentCta = ctaLabels[locale] || ctaLabels.tr;

  return (
    <>
      <HeroSlider />

      <section className="bg-[#DCDCDC] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          {/* Üst Kurumsal Etiket */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-400/60 bg-white/70 px-4 py-1.5 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-orange-600" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-900">
              TACH MEKANİK
            </p>
          </div>

          {/* Ana Başlık */}
          <h2 className="mb-8 text-3xl font-extrabold leading-tight tracking-tight text-neutral-950 sm:text-4xl md:text-5xl">
            {t("title")}
          </h2>

          {/* Açıklama Paragrafları */}
          <div className="mx-auto max-w-3xl space-y-5 text-base font-medium leading-8 text-neutral-900 sm:text-lg">
            <p>{t("paragraph1")}</p>
            <p>{t("paragraph2")}</p>
            <p>{t("paragraph3")}</p>
          </div>

          {/* Dikkat Çekici Eylem Butonları */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={`/${locale}/iletisim`}
              className="rounded-xl bg-neutral-950 px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-600"
            >
              {currentCta.quote}
            </Link>
            <Link
              href={`/${locale}/projeler`}
              className="rounded-xl border-2 border-neutral-900 bg-white/80 px-7 py-3.5 text-sm font-bold text-neutral-950 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-900 hover:text-white"
            >
              {currentCta.projects}
            </Link>
          </div>

          {/* 3'lü Güçlü Bilgi Kartları */}
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="group rounded-2xl border border-neutral-300/90 bg-white/90 px-6 py-9 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-xl">
              <div className="text-4xl font-black text-neutral-950 transition-colors group-hover:text-orange-600">
                39+
              </div>
              <div className="mt-2.5 text-sm font-semibold text-neutral-800">
                {t("experience")}
              </div>
            </div>

            <div className="group rounded-2xl border border-neutral-300/90 bg-white/90 px-6 py-9 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-xl">
              <div className="text-2xl font-extrabold text-neutral-950 transition-colors group-hover:text-orange-600">
                {t("professional")}
              </div>
              <div className="mt-2.5 text-sm font-semibold text-neutral-800">
                {t("engineering")}
              </div>
            </div>

            <div className="group rounded-2xl border border-neutral-300/90 bg-white/90 px-6 py-9 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-xl">
              <div className="text-2xl font-extrabold text-neutral-950 transition-colors group-hover:text-orange-600">
                {t("reliable")}
              </div>
              <div className="mt-2.5 text-sm font-semibold text-neutral-800">
                {t("mechanicalSolutions")}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}