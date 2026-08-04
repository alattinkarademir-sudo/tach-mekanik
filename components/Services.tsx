"use client";

import { useTranslations } from "next-intl";

export default function Services() {
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
    { icon: "🚧", key: "infrastructure" },
  ];

  return (
    <section
      id="services"
      className="bg-[#05070D] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Başlık */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.35em] font-semibold">
            {t("brand")}
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            {t("title")}
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">
            {t("subtitle")}
          </p>
        </div>

        {/* Kartlar */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.key}
              className="
                flex flex-col
                rounded-2xl
                border border-cyan-500/20
                bg-white
                p-8
                min-h-[320px]
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-400
                hover:bg-cyan-500/10
                hover:shadow-xl
              "
            >
              <div className="text-5xl mb-6">
                {service.icon}
              </div>

              <h3 className="text-lg font-bold text-gray-900 leading-6 min-h-[60px]">
                {t(`items.${service.key}.title`)}
              </h3>

              <p className="mt-4 text-sm text-gray-600 leading-6 flex-1">
                {t(`items.${service.key}.description`)}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}