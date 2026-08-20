"use client";

import { useTranslations } from "next-intl";
import medikalGazImage from "./medikal-gaz.png";

export default function MedikalGazSistemleriPage() {
  const t = useTranslations("MedicalGasPage");

  const systems = [
    t("systems.1"),
    t("systems.2"),
    t("systems.3"),
    t("systems.4"),
    t("systems.5"),
    t("systems.6"),
    t("systems.7"),
    t("systems.8"),
    t("systems.9"),
    t("systems.10"),
    t("systems.11"),
    t("systems.12"),
  ];

  return (
    <main
      className="min-h-screen px-6 py-32 md:px-10 lg:px-16"
      style={{ backgroundColor: "#333333" }}
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Başlık */}
        <header className="mb-20">
          <p className="font-semibold uppercase tracking-[0.35em] text-cyan-400">
            TACH MEKANİK
          </p>

          <h1 className="mt-5 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {t("title")}
          </h1>

          <div className="mt-6 h-1 w-24 bg-cyan-400" />
        </header>

        {/* Ana açıklama */}
        <section>
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {t("mainTitle")}
          </h2>

          <p className="mt-8 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            {t("mainDescription1")}
          </p>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            {t("mainDescription2")}
          </p>

          {/* Medikal Gaz görseli */}
          <div className="mt-12 overflow-hidden rounded-2xl">
            <img
              src={medikalGazImage.src}
              alt="TACH MEKANİK Medikal Gaz Sistemleri"
              className="h-auto w-full object-cover"
            />
          </div>
        </section>

        {/* Kapsam */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {t("scopeTitle")}
          </h2>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            {t("scopeDescription")}
          </p>

          <div className="mt-10 space-y-7">
            {systems.map((item, index) => (
              <article
                key={index}
                className="border-b border-white/10 pb-7"
              >
                <div className="flex items-start gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 font-bold text-cyan-400">
                    {index + 1}
                  </span>

                  <p className="text-xl leading-8 text-white md:text-2xl">
                    {item}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Güvenlik */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {t("safetyTitle")}
          </h2>

          <p className="mt-8 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            {t("safetyDescription1")}
          </p>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            {t("safetyDescription2")}
          </p>
        </section>

        {/* Son bölüm */}
        <section className="mt-24 border-t border-white/10 pb-16 pt-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            TACH MEKANİK
          </p>

          <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {t("footerTitle")}
          </h2>

          <p className="mt-5 max-w-[1300px] text-lg leading-9 text-gray-300 md:text-xl">
            {t("footerDescription")}
          </p>
        </section>

      </div>
    </main>
  );
}