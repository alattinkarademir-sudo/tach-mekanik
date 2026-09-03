"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const projeGorselleri = [
  "/projeler/gokdere1.png",
  "/projeler/gokdere2.png",
  "/projeler/gokdere3.png",
  "/projeler/gokdere4.png",
  "/projeler/gokdere5.png",
  "/projeler/gokdere6.png",
  "/projeler/gokdere7.png",
  "/projeler/gokdere8.png",
  "/projeler/gokdere9.png",
  "/projeler/gokdere10.png",
  "/projeler/gokdere11.png",
  "/projeler/gokdere12.png",
];

export default function TamamlananProjeler() {
  const t = useTranslations("Projects");

  const [secilenGorsel, setSecilenGorsel] = useState(
    projeGorselleri[0]
  );

  return (
    <main className="min-h-screen bg-[#DCDCDC] px-6 pt-36 pb-20">
      <div className="mx-auto max-w-7xl">

        {/* SAYFA BAŞLIĞI */}
        <div className="mb-14 text-center">
          <h1 className="text-4xl font-bold text-[#242424] md:text-5xl">
            {t("completedTitle")}
          </h1>

          <p className="mt-5 text-lg text-gray-700">
            {t("completedDescription")}
          </p>
        </div>

        {/* PROJE DETAY KARTI */}
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-[#242424] shadow-2xl">
          <div className="flex flex-col lg:flex-row">

            {/* SOL TARAF - PROJE FOTOĞRAFLARI */}
            <div className="w-full p-5 md:p-6 lg:w-[42%]">

              {/* ANA FOTOĞRAF */}
              <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-black md:h-[420px]">
                <Image
                  src={secilenGorsel}
                  alt={t("gokdere.title")}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* KÜÇÜK FOTOĞRAFLAR */}
              <div className="mt-4 grid grid-cols-4 gap-2">
                {projeGorselleri.map((gorsel, index) => (
                  <button
                    key={gorsel}
                    type="button"
                    onClick={() => setSecilenGorsel(gorsel)}
                    className={`relative h-20 overflow-hidden rounded-lg border-2 transition-all md:h-24 ${
                      secilenGorsel === gorsel
                        ? "scale-[1.02] border-white"
                        : "border-transparent hover:border-gray-400"
                    }`}
                  >
                    <Image
                      src={gorsel}
                      alt={`${t("gokdere.title")} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>

            </div>

            {/* SAĞ TARAF - PROJE BİLGİLERİ */}
            <div className="w-full p-7 md:p-10 lg:w-[58%]">

              {/* PROJE ADI */}
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                {t("gokdere.title")}
              </h2>

              {/* LOKASYON VE TARİHLER */}
              <div className="mt-6 space-y-3 text-gray-300">

                <p>
                  <span className="font-semibold text-white">
                    {t("labels.location")}:
                  </span>{" "}
                  {t("gokdere.location")}
                </p>

                <p>
                  <span className="font-semibold text-white">
                    {t("labels.startDate")}:
                  </span>{" "}
                  {t("gokdere.startDate")}
                </p>

                <p>
                  <span className="font-semibold text-white">
                    {t("labels.endDate")}:
                  </span>{" "}
                  {t("gokdere.endDate")}
                </p>

              </div>

              {/* PROJE AÇIKLAMASI */}
              <div className="mt-8 text-base leading-7 text-gray-300 md:text-lg">

                <p>
                  {t("gokdere.desc1")}
                </p>

                <p className="mt-5">
                  {t("gokdere.desc2")}
                </p>

              </div>

              {/* PROJE KAPSAMI */}
              <div className="mt-8 border-t border-gray-600 pt-6">

                <h3 className="mb-5 text-xl font-semibold text-white">
                  {t("labels.scope")}
                </h3>

                <div className="grid grid-cols-1 gap-x-6 gap-y-3 text-gray-300 sm:grid-cols-2">

                  <div>
                    • {t("gokdere.scopeItems.indoorPool")}
                  </div>

                  <div>
                    • {t("gokdere.scopeItems.outdoorPool")}
                  </div>

                  <div>
                    • {t("gokdere.scopeItems.dormitories")}
                  </div>

                  <div>
                    • {t("gokdere.scopeItems.theater")}
                  </div>

                  <div>
                    • {t("gokdere.scopeItems.adminBuilding")}
                  </div>

                  <div>
                    • {t("gokdere.scopeItems.diningHall")}
                  </div>

                  <div>
                    • {t("gokdere.scopeItems.amphitheater")}
                  </div>

                  <div>
                    • {t("gokdere.scopeItems.allMechanical")}
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </main>
  );
}