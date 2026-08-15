"use client";

import { useTranslations } from "next-intl";

export default function DevamEdenProjeler() {
  const t = useTranslations("Projects");

  return (
    <main className="min-h-screen bg-[#242424] text-white px-6 pt-36 pb-20">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          {t("ongoingTitle")}
        </h1>

        <p className="mt-6 text-gray-300 text-lg">
          {t("ongoingDescription")}
        </p>
      </div>
    </main>
  );
}