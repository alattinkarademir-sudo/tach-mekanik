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


        <div className="grid gap-6 md:grid-cols-2">

          {services.map((service) => (
            <div
              key={service.key}
              className="
                flex
                items-start
                gap-5
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-6
                min-h-[220px]
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                hover:border-cyan-400
              "
            >

              <div className="text-4xl shrink-0 pt-1">
                {service.icon}
              </div>

              <div className="flex-1">

                <h3 className="text-lg font-bold text-gray-900 leading-6">
                  {t(`items.${service.key}.title`)}
                </h3>

                <p className="mt-3 text-sm text-gray-600 leading-6">
                  {t(`items.${service.key}.description`)}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}