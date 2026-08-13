import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section
      id="contact"
      className="bg-[#242424] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] font-semibold">
            {t("brand")}
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            {t("title")}
          </h2>

          <p className="mt-6 text-gray-200 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="rounded-2xl border border-cyan-500/20 bg-[#F5F5F5] p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              📞 {t("phone")}
            </h3>

            <p className="text-gray-700 text-lg break-all">
              +90 553 235 93 33
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-[#F5F5F5] p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              ✉️ {t("email")}
            </h3>

            <a
              href="mailto:info@tachmekanik.com"
              className="text-gray-700 text-lg break-all hover:text-cyan-600 transition-colors"
            >
              info@tachmekanik.com
            </a>
          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-[#F5F5F5] p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              📍 {t("address")}
            </h3>

            <p className="text-gray-700 text-lg break-all">
              Yenşehir / Mersin / TÜRKİYE
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-[#F5F5F5] p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              🌐 {t("website")}
            </h3>

            <a
              href="https://www.tachmekanik.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 text-lg hover:text-cyan-600 transition"
            >
              www.tachmekanik.com
            </a>
          </div>

        </div>

        {/* TEKLİF AL */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold">
            {t("quoteTitle")}
          </h3>

          <p className="mt-4 text-gray-300">
            {t("quoteDescription")}
          </p>

          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center mt-8 rounded-xl bg-cyan-500 px-10 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-cyan-400 hover:scale-105 shadow-lg shadow-cyan-500/20"
          >
            {t("quoteButton")}
          </Link>
        </div>

      </div>
    </section>
  );
}

