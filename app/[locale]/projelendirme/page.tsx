"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import projeGorseli from "./mekanik-proje.png";

export default function ProjelendirmePage() {
  const t = useTranslations("ProjectPage");

  return (
    <main className="min-h-screen bg-[#333333] px-5 py-24 md:px-10 lg:px-20">
      <div className="mx-auto max-w-[1400px]">

        {/* Başlık */}
        <header className="mb-20">
          <p className="text-cyan-400 uppercase tracking-[0.35em] font-semibold">
            {t("brand")}
          </p>

          <h1 className="mt-5 text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            {t("title")}
          </h1>

          <div className="mt-6 h-1 w-24 bg-cyan-400" />
        </header>

        {/* Ana açıklama */}
        <section>
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white">
            {t("heading")}
          </h2>

          <p className="mt-8 text-lg md:text-xl text-gray-300 leading-9 max-w-[1250px]">
            {t("intro1")}
          </p>

          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-9 max-w-[1250px]">
            {t("intro2")}
          </p>
        </section>

        {/* Projelendirme görseli */}
        <section className="mt-16">
          <div className="overflow-hidden rounded-xl border border-white/10">
            <Image
              src={projeGorseli}
              alt="Mekanik Tesisat Uygulama Projesi"
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, 1400px"
            />
          </div>

          <p className="mt-4 text-center text-sm md:text-base text-gray-400">
            Mekanik Tesisat Uygulama Projesi
          </p>
        </section>

        {/* Projelendirme kapsamı */}
        <section className="mt-20">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white">
            {t("scopeTitle")}
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-9 max-w-[1250px]">
            {t("scopeText")}
          </p>

          <div className="mt-10 space-y-7">
            {[
              t("scope.heatingCooling"),
              t("scope.plumbing"),
              t("scope.fire"),
              t("scope.ventilation"),
              t("scope.vrf"),
              t("scope.medical"),
              t("scope.infrastructure"),
              t("scope.pump"),
              t("scope.technical"),
              t("scope.piping"),
              t("scope.calculations"),
              t("scope.application"),
            ].map((item, index) => (
              <article
                key={index}
                className="border-b border-white/10 pb-7"
              >
                <div className="flex items-start gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400 font-bold">
                    {index + 1}
                  </span>

                  <p className="text-xl md:text-2xl text-white leading-8">
                    {item}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Nerelerde Uygulanır */}
        <section className="mt-24">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white">
            {t("applicationsTitle")}
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-9 max-w-[1250px]">
            {t("applicationsText")}
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              t("applications.residential"),
              t("applications.hotel"),
              t("applications.hospital"),
              t("applications.industrial"),
              t("applications.commercial"),
              t("applications.education"),
              t("applications.infrastructure"),
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-5"
              >
                <p className="text-lg md:text-xl text-white">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Doğru proje */}
        <section className="mt-24">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white">
            {t("correctTitle")}
          </h2>

          <p className="mt-8 text-lg md:text-xl text-gray-300 leading-9 max-w-[1250px]">
            {t("correctText1")}
          </p>

          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-9 max-w-[1250px]">
            Amacımız yalnızca çalışan sistemler oluşturmak değil; uzun yıllar
            güvenilir şekilde hizmet verecek, işletme maliyetlerini azaltacak
            ve enerji verimliliğini destekleyecek mekanik tesisat çözümleri
            sunmaktır.
          </p>
        </section>

        {/* Son bölüm */}
        <section className="mt-24 border-t border-white/10 pt-12 pb-16">
          <p className="text-cyan-400 text-sm uppercase tracking-[0.3em] font-semibold">
            {t("brand")}
          </p>

          <h2 className="mt-5 text-3xl md:text-4xl font-bold text-white">
            {t("finalTitle")}
          </h2>

          <p className="mt-5 max-w-[1200px] text-lg md:text-xl text-gray-300 leading-9">
            {t("finalText")}
          </p>
        </section>

      </div>
    </main>
  );
}