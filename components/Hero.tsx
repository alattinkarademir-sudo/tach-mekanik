import { useTranslations } from "next-intl";

type HeroProps = {
  locale?: "tr" | "en" | "ru";
};

export default function Hero({ locale = "tr" }: HeroProps) {
  const t = useTranslations("Hero");

  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-[#242424] px-6 pt-24">
      <div className="mx-auto w-full max-w-6xl text-center">

        <p className="mb-6 text-lg font-semibold uppercase tracking-[0.25em] text-orange-400 md:text-xl">
          {t("year")}
        </p>

        <h1 className="mb-8 text-4xl font-extrabold leading-tight sm:text-5xl md:text-7xl">
          <span className="block text-white">
            {t("title")}
          </span>

          <span className="block text-cyan-300">
            {t("highlight")}
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-3xl text-base leading-7 text-gray-300 sm:text-lg md:text-xl md:leading-8">
          {t("description")}
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">

          <a
            href={`/${locale}/hizmetler`}
            className="w-full rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400 sm:w-auto"
          >
            {t("services")}
          </a>

          <a
            href={`/${locale}/iletisim`}
            className="w-full rounded-xl border border-white/70 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black sm:w-auto"
          >
            {t("contact")}
          </a>

        </div>

      </div>
    </section>
  );
}