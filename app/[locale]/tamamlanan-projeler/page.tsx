
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
    <main className="min-h-screen bg-[#DCDCDC] text-white px-6 pt-36 pb-20">
      <div className="mx-auto max-w-7xl">

        {/* Sayfa Başlığı */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#242424]">
            {t("completedTitle")}
          </h1>

          <p className="mt-6 text-gray-700 text-lg">
            {t("completedDescription")}
          </p>
        </div>

        {/* Proje Kartı */}
        <div className="mx-auto max-w-6xl bg-[#242424] rounded-2xl overflow-hidden shadow-xl">

          <div className="flex flex-col md:flex-row">

            {/* Sol - Fotoğraflar */}
            <div className="md:w-[38%] p-5">

              {/* Büyük Fotoğraf */}
              <div className="w-full h-72 md:h-[420px] rounded-xl overflow-hidden">
                <img
                  src={selectedImage}
                  alt="Gökdere Çocuk Yaşam Merkezi"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Küçük Fotoğraflar */}
              <div className="grid grid-cols-4 gap-2 mt-4">
                {projectImages.map((image, index) => (
                  <button
                    key={image}
                    onClick={() => setSelectedImage(image)}
                    className={`h-20 rounded-lg overflow-hidden border-2 transition ${
                      selectedImage === image
                        ? "border-white"
                        : "border-transparent"
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

            {/* Sağ - Proje Bilgileri */}
            <div className="flex-1 p-8 md:p-10">

              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Gökdere Çocuk Yaşam Merkezi
              </h2>

              <div className="mt-5 space-y-2 text-gray-300">

                <p>
                  <span className="font-semibold text-white">
                    Lokasyon:
                  </span>{" "}
                  Gökdere, Aşkabat, Türkmenistan
                </p>

                <p>
                  <span className="font-semibold text-white">
                    Başlangıç:
                  </span>{" "}
                  2012
                </p>

                <p>
                  <span className="font-semibold text-white">
                    Bitiş:
                  </span>{" "}
                  2023
                </p>

              </div>

              <div className="mt-7 text-gray-300 leading-7">

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
                  çalışmaları titizlikle yürütülerek, kompleksin ihtiyaç
                  duyduğu mekanik sistemlerin güvenilir ve bütünleşik şekilde
                  çalışması sağlanmıştır.
                </p>

              </div>

              {/* Proje Özeti */}
              <div className="mt-8 pt-6 border-t border-gray-600">

                <h3 className="text-lg font-semibold text-white mb-4">
                  Proje Kapsamı
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300">

                  <div>• Kapalı yüzme havuzu</div>
                  <div>• Açık yüzme havuzu</div>
                  <div>• Yatakhaneler</div>
                  <div>• Tiyatro salonu</div>
                  <div>• İdari bina</div>
                  <div>• Yemekhane</div>
                  <div>• Amfi tiyatro</div>
                  <div>• Mekanik tesisat sistemleri</div>

                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </main>
  );
}

