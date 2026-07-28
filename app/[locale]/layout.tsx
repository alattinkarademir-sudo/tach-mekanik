import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundMusic from "@/components/BackgroundMusic";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!["tr", "en", "ru"].includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Navbar />
      <BackgroundMusic />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}