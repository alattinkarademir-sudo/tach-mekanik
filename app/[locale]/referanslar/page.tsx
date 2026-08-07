"use client";

import { useTranslations } from "next-intl";

export default function Referanslar() {
  const t = useTranslations("ReferencesPage");

  return (
    <main>
      <section className="max-w-7xl mx-auto py-20 px-6">

        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-10">
          {t("title")}
        </h1>

        <p className="text-center text-gray-300 text-lg">
          {t("description")}
        </p>

      </section>
    </main>
  );
}