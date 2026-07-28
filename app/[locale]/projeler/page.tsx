import { useTranslations } from "next-intl";

export default function ProjectsPage() {
  const t = useTranslations("ProjectsPage");

  const projects = [
    { icon: "🏭", key: "industrial" },
    { icon: "🏥", key: "hospital" },
    { icon: "🏨", key: "hotel" },
    { icon: "🏢", key: "business" },
    { icon: "🛍️", key: "shopping" },
    { icon: "✈️", key: "airport" },
    { icon: "🏫", key: "education" },
    { icon: "🏘️", key: "housing" },
  ];

  return (
    <main className="pt-32 min-h-screen bg-[#05070D] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.35em] font-semibold">
            TACH MEKANİK
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold">
            {t("title")}
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.key}
              className="rounded-2xl border border-cyan-500/20 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-orange-400 hover:bg-white/10"
            >
              <div className="text-5xl mb-6">
                {project.icon}
              </div>

              <h2 className="text-xl font-bold mb-4">
                {t(`items.${project.key}.title`)}
              </h2>

              <p className="text-gray-400 leading-7">
                {t(`items.${project.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}