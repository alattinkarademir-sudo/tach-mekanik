import { useTranslations } from "next-intl";

type HeroProps = {
  locale?: "tr" | "en" | "ru";
};

export default function Hero({ locale = "tr" }: HeroProps) {
  const t = useTranslations("Hero");

  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-[#242424] px-6 pt-24 pb-16">
      <div className="mx-auto w-full max-w-7xl grid md:grid-cols-12 gap-12 items-center">
        
        {/* Sol Taraf: Mevcut Metinler ve Kanca (7 Kolon) */}
        <div className="md:col-span-7 text-center md:text-left">
          <p className="mb-4 text-sm md:text-base font-semibold uppercase tracking-[0.25em] text-orange-400">
            {t("year")} (1987 - Mühendislik Güvencesi)
          </p>

          <h1 className="mb-6 text-3xl font-extrabold leading-tight sm:text-4xl md:text-6xl">
            <span className="block text-white">
              {t("title")}
            </span>
            <span className="block text-cyan-300 mt-2">
              {t("highlight")}
            </span>
          </h1>

          <p className="mb-8 text-base leading-7 text-gray-300 sm:text-lg md:leading-8">
            {t("description")}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
            <a
              href={`/${locale}/hizmetler`}
              className="w-full sm:w-auto rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400 text-center shadow-lg"
            >
              {t("services")}
            </a>

            <a
              href={`/${locale}/iletisim`}
              className="w-full sm:w-auto rounded-xl border border-white/70 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black text-center"
            >
              {t("contact")}
            </a>
          </div>
        </div>

        {/* Sağ Taraf: Ziyaretçiyi Sitede Tutan Hızlı Keşif Kancası (5 Kolon) */}
        <div className="md:col-span-5 bg-[#1e1e1e] p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl">
          <h3 className="text-xl font-bold text-white mb-2">
            {locale === "en" ? "Quick Project Inquiry" : locale === "ru" ? "Быстрый запрос проекта" : "Hızlı Proje Teklifi"}
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            {locale === "en" ? "Get a response from our engineers within 24 hours." : locale === "ru" ? "Получите ответ от наших инженеров в течение 24 часов." : "Mühendislerimiz 24 saat içinde projenizi incelesin."}
          </p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder={locale === "en" ? "Your Name / Company" : locale === "ru" ? "Ваше имя / Компания" : "Adınız / Firma Adınız"}
              className="w-full bg-[#2a2a2a] border border-gray-700 rounded-xl p-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
            />
            <input
              type="tel"
              placeholder={locale === "en" ? "Phone Number" : locale === "ru" ? "Номер телефона" : "Telefon Numaranız"}
              className="w-full bg-[#2a2a2a] border border-gray-700 rounded-xl p-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
            />
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-400 text-black font-bold py-3.5 rounded-xl text-sm transition shadow-md"
            >
              {locale === "en" ? "Request Free Consultation" : locale === "ru" ? "Запросить бесплатную консультацию" : "🚀 Ücretsiz Keşif Talep Et"}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}