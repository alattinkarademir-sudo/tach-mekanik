import { useTranslations } from "next-intl";
export default function About() {
  const t = useTranslations("About");


  return (
    <section id="about" className="bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] font-semibold">
            {t("brand")}
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            {t("title")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div>
            <img
              src="/about/about.jpg"
              alt="TACH Mekanik"
              className="rounded-2xl w-full h-[500px] object-cover"
            />
          </div>

          <div>

            <h3 className="text-3xl font-bold mb-8">
              {t("heading")}
            </h3>

            <p className="text-gray-300 leading-8 mb-6">
              {t("text1")}
            </p>

            <p className="text-gray-300 leading-8 mb-10">
              {t("text2")}
            </p>

            <div className="grid grid-cols-2 gap-6">

              <div className="rounded-xl bg-zinc-900 border border-cyan-500/20 p-6">
                <h4 className="text-4xl font-bold text-cyan-400">
                  38+
                </h4>
                <p className="mt-2 text-gray-400">
                  {t("experience")}
                </p>
              </div>

              <div className="rounded-xl bg-zinc-900 border border-cyan-500/20 p-6">
                <h4 className="text-4xl font-bold text-orange-400">
                  500+
                </h4>
                <p className="mt-2 text-gray-400">
                  {t("projects")}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}