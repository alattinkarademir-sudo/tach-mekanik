"use client";

import { useTranslations } from "next-intl";

export default function KesifPage() {
  const t = useTranslations("ExplorationPage");

  const kesifler = [
    t("items.existing"),
    t("items.architectural"),
    t("items.heatingCooling"),
    t("items.plumbing"),
    t("items.fire"),
    t("items.ventilation"),
    t("items.vrf"),
    t("items.medical"),
    t("items.equipment"),
    t("items.piping"),
    t("items.capacity"),
    t("items.materials"),
  ];

  return (
    <main
      className="min-h-screen px-6 py-32 md:px-10 lg:px-16"
      style={{ backgroundColor: "#DCDCDC" }}
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Başlık */}
        <header className="mb-20">
          <p className="text-black uppercase tracking-[0.35em] font-semibold">
            {t("brand")}
          </p>

          <h1 className="mt-5 text-2xl font-bold text-black md:text-3xl lg:text-4xl">
            {t("title")}
          </h1>

          <div className="mt-6 h-1 w-24 bg-black" />
        </header>

        {/* Ana açıklama */}
        <section>
          <h2 className="text-3xl font-bold text-black md:text-4xl lg:text-5xl">
            {t("heading")}
          </h2>

          <p className="mx-auto mt-8 max-w-[1400px] text-lg leading-9 text-black md:text-xl">
            {t("intro1")}
          </p>

          <p className="mx-auto mt-6 max-w-[1400px] text-lg leading-9 text-black md:text-xl">
            {t("intro2")}
          </p>
        </section>

        {/* Keşif çalışmaları */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-black md:text-4xl lg:text-5xl">
            {t("scopeTitle")}
          </h2>

          <p className="mx-auto mt-6 max-w-[1400px] text-lg leading-9 text-black md:text-xl">
            {t("scopeText")}
          </p>

          <div className="mx-auto mt-12 grid max-w-[1400px] grid-cols-1 gap-6 md:grid-cols-2">
            {kesifler.map((item, index) => (
              <article
                key={item}
                className="border border-black/10 bg-black/[0.02] p-6 text-left transition-all duration-300 hover:border-black/30 hover:bg-black/[0.05]"
              >
                <div className="flex items-center gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black/10 font-bold text-black">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-lg leading-8 text-black md:text-xl">
                    {item}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Doğru keşif */}
        <section className="mx-auto mt-28 max-w-[1400px] text-center">
          <div className="border-l-2 border-black pl-6 md:pl-10">
            <h2 className="text-3xl font-bold text-black md:text-4xl lg:text-5xl">
              {t("correctTitle")}
            </h2>

            <p className="mt-8 text-lg leading-9 text-black md:text-xl">
              {t("correctText1")}
            </p>

            <p className="mt-6 text-lg leading-9 text-black md:text-xl">
              {t("correctText2")}
            </p>
          </div>
        </section>

        {/* Son bölüm */}
        <section className="mt-28 border-t border-black/10 pb-20 pt-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-black">
            {t("brand")}
          </p>

          <h2 className="mt-5 text-3xl font-bold text-black md:text-4xl lg:text-5xl">
            {t("finalTitle")}
          </h2>

          <p className="mx-auto mt-6 max-w-[1400px] text-lg leading-9 text-black md:text-xl">
            {t("finalText")}
          </p>
        </section>

      </div>
    </main>
  );
}