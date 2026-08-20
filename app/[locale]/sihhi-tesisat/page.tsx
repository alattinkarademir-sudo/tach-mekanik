"use client";

import { useTranslations } from "next-intl";
import sihhiTesisatImage from "./sihhi-tesisat.png";

export default function SihhiTesisatPage() {
  const t = useTranslations("PlumbingPage");

  const items = [
    t("items.cleanWater"),
    t("items.hotWater"),
    t("items.coldWater"),
    t("items.wastewater"),
    t("items.rainwater"),
    t("items.sewer"),
    t("items.drainage"),
    t("items.pump"),
    t("items.storage"),
    t("items.pressurization"),
    t("items.calculations"),
    t("items.application"),
  ];

  return (
    <main
      className="min-h-screen px-6 py-32 md:px-10 lg:px-16"
      style={{ backgroundColor: "#666666" }}
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Başlık */}
        <header className="mb-20">
          <p className="font-semibold uppercase tracking-[0.35em] text-black">
            {t("brand")}
          </p>

          <h1 className="mt-5 text-3xl font-bold text-black md:text-4xl lg:text-5xl">
            {t("title")}
          </h1>

          <div className="mt-6 h-1 w-24 bg-black" />
        </header>

        {/* Ana açıklama */}
        <section>
          <h2 className="text-3xl font-bold text-black md:text-4xl lg:text-5xl">
            {t("heading")}
          </h2>

          <p className="mt-8 max-w-[1350px] text-lg leading-9 text-black md:text-xl">
            {t("intro1")}
          </p>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-black md:text-xl">
            {t("intro2")}
          </p>

          {/* Sıhhi tesisat görseli */}
          <div className="mt-12 overflow-hidden rounded-2xl">
            <img
              src={sihhiTesisatImage.src}
              alt="TACH MEKANİK Sıhhi Tesisat Sistemleri"
              className="h-auto w-full object-cover"
            />
          </div>
        </section>

        {/* Sıhhi tesisat kapsamı */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-black md:text-4xl lg:text-5xl">
            {t("scopeTitle")}
          </h2>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-black md:text-xl">
            {t("scopeText")}
          </p>

          <div className="mt-10 space-y-7">
            {items.map((item, index) => (
              <article
                key={index}
                className="border-b border-black/10 pb-7"
              >
                <div className="flex items-start gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/10 font-bold text-black">
                    {index + 1}
                  </span>

                  <p className="text-xl leading-8 text-black md:text-2xl">
                    {item}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Güvenli ve hijyenik sistemler */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-black md:text-4xl lg:text-5xl">
            {t("reliableTitle")}
          </h2>

          <p className="mt-8 max-w-[1350px] text-lg leading-9 text-black md:text-xl">
            {t("reliableText1")}
          </p>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-black md:text-xl">
            {t("reliableText2")}
          </p>
        </section>

        {/* Son bölüm */}
        <section className="mt-24 border-t border-black/10 pb-16 pt-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-black">
            {t("brand")}
          </p>

          <h2 className="mt-5 text-3xl font-bold text-black md:text-4xl lg:text-5xl">
            {t("finalTitle")}
          </h2>

          <p className="mt-5 max-w-[1300px] text-lg leading-9 text-black md:text-xl">
            {t("finalText")}
          </p>
        </section>

      </div>
    </main>
  );
}