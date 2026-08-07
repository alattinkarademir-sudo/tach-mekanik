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
  <section className="pt-0 pb-24 bg-[#242424]">

    <div className="text-center mb-16">
      

        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.35em] font-semibold">
            {t("brand")}
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            {t("title")}
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-lg md:text-xl leading-2">
            {t("subtitle")}
          </p>
        </div>


        <div className="grid grid-cols-2 gap-6 max-w-[1950px] mx-auto">

          {services.map((service) => (
            <div
              key={service.key}
              className="
                flexs
                items-start
                gap-5
                rounded-2xl
                border
                border-gray-200
                bg-white
                px-10
                py-7
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

                <h3 className="text-xl font-bold text-gray-900 leading-7">
                  {t(`items.${service.key}.title`)}
                </h3>

                <p className="mt-3 text-base text-gray-600 leading-7">
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