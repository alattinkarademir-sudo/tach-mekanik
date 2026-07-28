import { useTranslations } from "next-intl";


type HeroProps = {
  locale?: "tr" | "en" | "ru";
};

export default function Hero({ locale = "tr" }: HeroProps) {
  const t = useTranslations("Hero");
  
  

  return (
    <section className="bg-black text-white py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">

        <p className="text-orange-400 text-lg md:text-xl font-semibold tracking-[0.3em] uppercase mb-8">
          {t("year")}
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
          {t("title")}
          <span className="text-cyan-300">
            {t("highlight")}
          </span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-8 mb-12">
          {t("description")}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5">

          <a
            href="#services"
            className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold transition hover:bg-cyan-400"
          >
            {t("services")}
          </a>

          <a
            href="#contact"
            className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-black"
          >
            {t("contact")}
          </a>

        </div>

      </div>
    </section>
  );
}