"use client";

import { useLocale } from "next-intl";

export default function WhatsAppButton() {
  const locale = useLocale();

  // Telefon numaranız buraya işlendi
  const phoneNumber = "905532359333";

  const config: Record<string, { label: string; message: string }> = {
    tr: {
      label: "Hızlı Teklif / WhatsApp",
      message: "Merhaba TACH MEKANİK, web siteniz üzerinden ulaşıyorum. Projemiz için teklif / bilgi almak istiyorum.",
    },
    en: {
      label: "Quick Quote / WhatsApp",
      message: "Hello TACH MEKANİK, I am contacting you via your website. I would like to get a quote/information for our project.",
    },
    ru: {
      label: "Быстрый расчет / WhatsApp",
      message: "Здравствуйте, TACH MEKANİK! Я пишу с вашего сайта и хотел бы получить коммерческое предложение по нашему проекту.",
    },
  };

  const current = config[locale] || config.tr;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(current.message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={current.label}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-[#20bd5a]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6 shrink-0"
      >
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z" />
      </svg>
      <span className="hidden sm:inline">{current.label}</span>
    </a>
  );
}