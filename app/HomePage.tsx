"use client";

import HeroSlider from "@/components/HeroSlider";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <>
      <HeroSlider />

      <section className="bg-[#242424] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
            TACH MEKANİK
          </p>

          <h2 className="mb-8 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            {t("title")}
          </h2>

          <p className="mx-auto max-w-3xl text-base leading-8 text-white sm:text-lg">
            {t("paragraph1")}
          </p>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white sm:text-lg">
            {t("paragraph2")}
          </p>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white sm:text-lg">
            {t("paragraph3")}
          </p>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-8">
              <div className="text-3xl font-bold text-cyan-300">
                39+
              </div>
              <div className="mt-2 text-sm text-gray-200">
                {t("experience")}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-8">
              <div className="text-xl font-bold text-cyan-300">
                {t("professional")}
              </div>
              <div className="mt-2 text-sm text-gray-200">
                {t("engineering")}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-8">
              <div className="text-xl font-bold text-cyan-300">
                {t("reliable")}
              </div>
              <div className="mt-2 text-sm text-gray-200">
                {t("mechanicalSolutions")}
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}