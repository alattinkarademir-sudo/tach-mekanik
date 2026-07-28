"use client";

import { useTranslations } from "next-intl";

export default function HizmetlerPage() {
  const t = useTranslations("Services");

  const services = [
    { icon: "📐", key: "project" },
    { icon: "📋", key: "exploration" },
    { icon: "🚿", key: "plumbing" },
    { icon: "🔥", key: "fire" },
    { icon: "🌬️", key: "ventilation" },
    { icon: "❄️", key: "hvac" },
    { icon: "🏢", key: "vrf" },
    { icon: "🏥", key: "medical" },
    { icon: "🏊", key: "pool" },
    { icon: "🌿", key: "landscape" },
    { icon: "💧", key: "treatment" },
    { icon: "🚧", key: "infrastructure" }
  ];

  return (
    <main className="pt-36 bg-[#05070D] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-cyan-400 uppercase tracking-[0.35em] font-semibold">
            {t("brand")}
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            {t("title")}
          </h1>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto leading-8">
            {t("subtitle")}
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.key}
              className="rounded-2xl border border-cyan-500/20 bg-white/5 p-8 hover:border-orange-400 hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl mb-6">
                {service.icon}
              </div>

              <h2 className="text-2xl font-bold mb-4">
                {t(`items.${service.key}.title`)}
              </h2>

              <p className="text-gray-400 leading-7">
                {t(`items.${service.key}.description`)}
              </p>
            </div>
          ))}
                  </div>

      </div>
    </main>
  );
}