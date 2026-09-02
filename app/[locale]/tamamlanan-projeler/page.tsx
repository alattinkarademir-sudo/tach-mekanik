
"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const projectImages = [
  "/projeler/gokdere1.png",
  "/projeler/gokdere2.png",
  "/projeler/gokdere3.png",
  "/projeler/gokdere4.png",
  "/projeler/gokdere5.png",
  "/projeler/gokdere6.png",
  "/projeler/gokdere7.png",
  "/projeler/gokdere8.png",
  "/projeler/gokdere9.png",
  "/projeler/gokdere10.png",
  "/projeler/gokdere11.png",
  "/projeler/gokdere12.png",
];

export default function TamamlananProjeler() {
  const t = useTranslations("Projects");

  const [selectedImage, setSelectedImage] = useState(projectImages[0]);

  return (
    <main className="min-h-screen bg-[#DCDCDC] px-6 pt-36 pb-20">
      <div className="mx-auto max-w-7xl">

        {/* SAYFA BAŞLIĞI */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-[#242424]">
            {t("completedTitle")}
          </h1>

          <p className="mt-5 text-gray-700 text-lg">
            {t("completedDescription")}
          </p>
        </div>

        {/* PROJE */}
        <div className="mx-auto max-w-6xl bg-[#242424] rounded-2xl shadow-2xl overflow-hidden">

          <div className="flex flex-col lg:flex-row">

            {/* SOL TARAF - FOTOĞRAFLAR */}
            <div className="w-full lg:w-[42%] p-5 md:p-6">

              {/* ANA FOTOĞRAF */}
              <div className="w-full h-[300px] md:h-[420px] rounded-xl overflow-hidden bg-black">
                <img
                  src={selectedImage}
                  alt="Gökdere Çocuk Yaşam Merkezi"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* KÜÇÜK FOTOĞRAFLAR */}
              <div className="grid grid-cols-4 gap-2 mt-4">
                {projectImages.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setSelectedImage(image)}
                    className={`h-20 md:h-24 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === image
                        ? "border-white scale-[1.02]"
                        : "border-transparent hover:border-gray-400"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Gökdere Çocuk Yaşam Merkezi ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

            </div>

            {/* SAĞ TARAF - PROJE BİLGİLERİ */}
            <div className="w-full lg:w-[58%] p-7 md:p-10">

              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Gökdere Çocuk Yaşam Merkezi
              </h2>

              {/* TARİH VE LOKASYON */}
              <div className="mt-6 space-y-3 text-gray-300">

                <p>
                  <span className="font-semibold text-white">
                    Lokasyon:
                  </span>{" "}
                  Gökdere, Aşkabat, Türkmenistan
                </p>

                <p>
                  <span className="font-semibold text-white">
                    Proje Başlangıcı:
                  </span>{" "}
                  2012
                </p>

                <p>
                  <span className="font-semibold text-white">
                    Proje Bitişi:
                  </span>{" "}
                  2023
                </p>

              </div>

              {/* AÇIKLAMA */}
              <div className="mt-8 text-gray-300 leading-7 text-base md:text-lg">

                <p>
                  Türkmenistan’ın Aşkabat şehrinde, Gökdere mevkiinde
                  gerçekleştirilen 300 öğrenci kapasiteli Çocuk Yaşam Merkezi
                  projesinde; kapalı ve açık yüzme havuzları, yatakhaneler,
                  tiyatro salonu, idari bina, yemekhane ve amfi tiyatro gibi
                  farklı kullanım alanlarının tüm mekanik tesisat sistemleri
                  tarafımızca gerçekleştirilmiştir.
                </p>

                <p className="mt-5">
                  Proje kapsamında mekanik tesisat uygulamaları ve saha
                  çalışmaları titizlikle yürütülmüş, kompleksin ihtiyaç
                  duyduğu mekanik sistemlerin güvenilir ve bütünleşik şekilde
                  çalışması sağlanmıştır.
                </p>

              </div>

              {/* PROJE KAPSAMI */}
              <div className="mt-8 pt-6 border-t border-gray-600">

                <h3 className="text-xl font-semibold text-white mb-5">
                  Proje Kapsamı
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-gray-300">

                  <div>• Kapalı yüzme havuzu</div>
                  <div>• Açık yüzme havuzu</div>
                  <div>• Yatakhaneler</div>
                  <div>• Tiyatro salonu</div>
                  <div>• İdari bina</div>
                  <div>• Yemekhane</div>
                  <div>• Amfi tiyatro</div>
                  <div>• Tüm mekanik tesisat sistemleri</div>

                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </main>
  );
}

