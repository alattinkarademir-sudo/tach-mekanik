import { useTranslations } from "next-intl";
export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section
      id="contact"
      className="bg-black py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] font-semibold">
            {t("brand")}
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            {t("title")}
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900 p-8">
            <h3 className="text-2xl font-bold mb-6">
              📞 {t("phone")}
            </h3>

            <p className="text-gray-300 text-lg">
              +90 553 235 93 33
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900 p-8">
            <h3 className="text-2xl font-bold mb-6">
              ✉️ {t("email")}
            </h3>

            <p className="text-gray-300 text-lg break-all">
              info@tachmekanik.com
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900 p-8">
            <h3 className="text-2xl font-bold mb-6">
              📍 {t("address")}
            </h3>

            <p className="text-gray-300 text-lg">
              Yenşehir / Mersin / TÜRKİYE
            </p>
          </div>
          <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900 p-8">
  <h3 className="text-2xl font-bold mb-6">
    🌐 {t("website")}
  </h3>

  <a
    href="https://www.tachmekanik.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 text-lg hover:text-cyan-400 transition"
  >
    www.tachmekanik.com
  </a>
</div>

        </div>

      </div>
    </section>
  );
}