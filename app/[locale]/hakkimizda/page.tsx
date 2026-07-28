"use client";

import { useTranslations } from "next-intl";

export default function Hakkimizda() {
  const t = useTranslations("AboutPage");

  const expertise = [
    "project",
    "survey",
    "plumbing",
    "fire",
    "hvac",
    "heating",
    "ventilation",
    "gas",
    "consulting",
  ];

  return (
    <main className="bg-gray-50 pt-24">

      {/* HERO */}
      <section className="bg-gradient-to-r from-slate-900 via-cyan-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t("hero.title")}
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-8">
            {t("hero.subtitle")}
          </p>

        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-7xl mx-auto py-20 px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="text-orange-500 uppercase tracking-[0.30em] font-bold">
              {t("intro.year")}
            </span>

            <h2 className="text-4xl font-bold text-slate-800 mt-5 mb-8 leading-tight">
              {t("intro.title")}
            </h2>

            <p className="text-gray-700 leading-9 mb-6">
              {t("intro.text1")}
            </p>

            <p className="text-gray-700 leading-9 mb-6">
              {t("intro.text2")}
            </p>

            <p className="text-gray-700 leading-9">
              {t("intro.text3")}
            </p>

          </div>

          <div>

            <img
              src="/about.jpg"
              alt="TACH Mekanik"
              className="rounded-3xl shadow-2xl object-cover w-full"
            />

          </div>

        </div>

      </section>

      {/* STATISTICS */}

      <section className="bg-cyan-700 text-white py-20">

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          <div>

            <h3 className="text-5xl font-bold">
              39+
            </h3>

            <p className="mt-3 text-lg">
              {t("stats.experience")}
            </p>

          </div>

          <div>

            <h3 className="text-5xl font-bold">
              500+
            </h3>

            <p className="mt-3 text-lg">
              {t("stats.projects")}
            </p>

          </div>

          <div>

            <h3 className="text-5xl font-bold">
              %100
            </h3>

            <p className="mt-3 text-lg">
              {t("stats.satisfaction")}
            </p>

          </div>

          <div>

            <h3 className="text-5xl font-bold">
              7/24
            </h3>

            <p className="mt-3 text-lg">
              {t("stats.support")}
            </p>

          </div>

        </div>

      </section>

      {/* MISSION & VISION */}

      <section className="max-w-7xl mx-auto py-20 px-6">

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-2xl shadow-lg p-10 border-t-4 border-cyan-600">

            <h3 className="text-3xl font-bold mb-6 text-cyan-700">
              {t("mission.title")}
            </h3>

            <p className="text-gray-700 leading-9">
              {t("mission.text")}
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-10 border-t-4 border-orange-500">

            <h3 className="text-3xl font-bold mb-6 text-orange-500">
              {t("vision.title")}
            </h3>

            <p className="text-gray-700 leading-9">
              {t("vision.text")}
            </p>

          </div>

        </div>

      </section>
            {/* EXPERTISE */}

      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-slate-800 mb-14">
            {t("expertise.title")}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {expertise.map((item) => (

              <div
                key={item}
                className="bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition duration-300 p-8 border-l-4 border-cyan-600"
              >

                <h3 className="text-xl font-semibold text-slate-800">
                  {t(`expertise.items.${item}`)}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* WHY US */}

      <section className="bg-slate-900 text-white py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-8">
            {t("why.title")}
          </h2>

          <p className="text-lg leading-9 text-gray-300">
            {t("why.text")}
          </p>

        </div>

      </section>

    </main>
  );
}