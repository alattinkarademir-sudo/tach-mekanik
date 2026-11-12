import type { Metadata } from "next";
import HomePage from "../HomePage";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    tr: "Endüstriyel Mekanik ve Taahhüt Çözümleri | 1987’den Beri - TACH MEKANİK",
    en: "Industrial Mechanical & Contracting Solutions | Since 1987 - TACH MEKANİK",
    ru: "Промышленные механические и подрядные решения | С 1987 года - TACH MEKANİK",
  };

  const descriptions: Record<string, string> = {
    tr: "Yangın koruma, endüstriyel havalandırma, VRF klima ve altyapı tesisatında anahtar teslim mühendislik çözümleri. Gökdere ve büyük ölçekli projelerimizi inceleyin.",
    en: "Turnkey engineering solutions in fire protection, industrial ventilation, VRF air conditioning, and infrastructure piping. Explore our projects.",
    ru: "Комплексные инженерные решения в области пожарной безопасности, промышленной вентиляции, систем VRF и трубопроводов. Ознакомьтесь с нашими проектами.",
  };

  return {
    title: titles[locale] || titles.tr,
    description: descriptions[locale] || descriptions.tr,
  };
}

export default function LocalePage() {
  return <HomePage />;
}