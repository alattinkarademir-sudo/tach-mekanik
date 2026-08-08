"use client";

export default function AltyapiSistemleriPage() {
  return (
    <main
      className="min-h-screen px-6 py-32 md:px-10 lg:px-16"
      style={{ backgroundColor: "#242424" }}
    >
      <div className="mx-auto max-w-[1500px]">

        {/* Başlık */}
        <header className="mb-20">
          <p className="font-semibold uppercase tracking-[0.35em] text-cyan-400">
            TACH MEKANİK
          </p>

          <h1 className="mt-5 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            ALTYAPI SİSTEMLERİ
          </h1>

          <div className="mt-6 h-1 w-24 bg-cyan-400" />
        </header>

        {/* Ana açıklama */}
        <section>
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Profesyonel Altyapı Sistemleri
          </h2>

          <p className="mt-8 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            TACH MEKANİK olarak, yapıların ve projelerin altyapı ihtiyaçlarına
            yönelik güvenilir, dayanıklı ve uzun ömürlü mekanik altyapı
            sistemleri tasarlıyor ve uyguluyoruz. Konutlardan ticari
            yapılara, sanayi tesislerinden büyük ölçekli projelere kadar
            farklı ihtiyaçlara uygun çözümler sunuyoruz.
          </p>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            Projenin mevcut şartlarını, arazi yapısını ve kullanım
            ihtiyaçlarını değerlendirerek altyapı sistemlerini bir bütün
            olarak ele alıyor; doğru kapasite, uygun malzeme ve profesyonel
            uygulama ile güvenilir çözümler oluşturuyoruz.
          </p>
        </section>

        {/* Kapsam */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Altyapı Sistemleri Kapsamımız
          </h2>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            Projenin teknik gereksinimlerine göre altyapının tüm
            bileşenlerini değerlendiriyor, güvenli ve verimli çalışan
            sistemler geliştiriyoruz.
          </p>

          <div className="mt-10 space-y-7">
            {[
              "Temiz su altyapı sistemleri",
              "Atık su altyapı sistemleri",
              "Yağmur suyu altyapı sistemleri",
              "Drenaj sistemleri",
              "Pis su ve kanalizasyon sistemleri",
              "Su dağıtım ve isale hatları",
              "Pompa ve terfi sistemleri",
              "Su depolama sistemleri",
              "Altyapı borulama sistemleri",
              "Rögar ve bağlantı sistemleri",
              "Altyapı mekanik tesisat uygulamaları",
              "Altyapı uygulama ve detay projeleri",
            ].map((item, index) => (
              <article
                key={index}
                className="border-b border-white/10 pb-7"
              >
                <div className="flex items-start gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 font-bold text-cyan-400">
                    {index + 1}
                  </span>

                  <p className="text-xl leading-8 text-white md:text-2xl">
                    {item}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Güvenilir altyapı */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Dayanıklı ve Güvenilir Altyapı
          </h2>

          <p className="mt-8 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            Altyapı sistemleri, yapıların uzun yıllar güvenli ve kesintisiz
            şekilde kullanılabilmesi açısından temel öneme sahiptir. Bu
            nedenle doğru projelendirme, uygun malzeme seçimi ve kaliteli
            uygulama büyük önem taşır.
          </p>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            TACH MEKANİK, altyapı sistemlerinin kapasite ve kullanım
            ihtiyaçlarını değerlendirerek sürdürülebilir, güvenilir ve uzun
            ömürlü mekanik çözümler sunar.
          </p>
        </section>

        {/* Son bölüm */}
        <section className="mt-24 border-t border-white/10 pb-16 pt-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            TACH MEKANİK
          </p>

          <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Güçlü Yapılar İçin Sağlam Altyapı
          </h2>

          <p className="mt-5 max-w-[1300px] text-lg leading-9 text-gray-300 md:text-xl">
            Doğru mühendislik, kaliteli malzeme ve profesyonel uygulama ile
            güvenilir ve uzun ömürlü altyapı sistemleri oluşturuyoruz.
          </p>
        </section>

      </div>
    </main>
  );
}