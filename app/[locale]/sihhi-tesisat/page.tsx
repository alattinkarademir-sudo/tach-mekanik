"use client";

export default function SihhiTesisatPage() {
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
            SIHHİ TESİSAT
          </h1>

          <div className="mt-6 h-1 w-24 bg-cyan-400" />
        </header>

        {/* Ana açıklama */}
        <section>
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Profesyonel Sıhhi Tesisat Sistemleri
          </h2>

          <p className="mt-8 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            TACH MEKANİK olarak, yapıların temiz su, sıcak su, atık su ve
            yağmur suyu ihtiyaçlarına yönelik güvenilir ve uzun ömürlü sıhhi
            tesisat sistemleri tasarlıyor ve uyguluyoruz. Konutlardan ticari
            yapılara, endüstriyel tesislerden büyük ölçekli projelere kadar
            farklı yapı tiplerine uygun çözümler sunuyoruz.
          </p>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            Sistem tasarımından uygulamaya kadar tüm süreçleri mühendislik
            prensipleri doğrultusunda ele alıyor; doğru boru çapı, uygun
            malzeme seçimi, yeterli basınç ve debi değerleri ile güvenli ve
            verimli çalışan tesisatlar oluşturuyoruz.
          </p>
        </section>

        {/* Sıhhi tesisat kapsamı */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Sıhhi Tesisat Kapsamımız
          </h2>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            Her projeyi kendi teknik ihtiyaçları doğrultusunda değerlendiriyor,
            yapı içerisinde güvenli, hijyenik ve verimli çalışan sıhhi tesisat
            sistemleri için kapsamlı çözümler geliştiriyoruz.
          </p>

          <div className="mt-10 space-y-7">
            {[
              "Temiz su tesisatı sistemleri",
              "Sıcak kullanım suyu sistemleri",
              "Soğuk su tesisatı sistemleri",
              "Atık su tesisatı sistemleri",
              "Yağmur suyu tesisatı sistemleri",
              "Pis su ve gider sistemleri",
              "Drenaj sistemleri",
              "Pompa ve hidrofor sistemleri",
              "Su depolama ve dağıtım sistemleri",
              "Basınçlandırma sistemleri",
              "Boru çapı, debi ve basınç hesaplamaları",
              "Sıhhi tesisat uygulama ve detay projeleri",
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

        {/* Güvenli ve hijyenik sistemler */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Güvenli ve Hijyenik Tesisat Sistemleri
          </h2>

          <p className="mt-8 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            Sıhhi tesisat sistemleri, yapıların günlük kullanımında doğrudan
            ihtiyaç duyulan temel mekanik sistemlerin başında gelir. Bu nedenle
            tesisatın doğru projelendirilmesi ve kaliteli malzemelerle
            uygulanması büyük önem taşır.
          </p>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            TACH MEKANİK, sistemlerin uzun yıllar güvenilir şekilde çalışmasını
            hedefleyerek uygun malzeme ve ekipman seçimi yapar. Su kayıplarını,
            basınç problemlerini ve uygulama sırasında oluşabilecek teknik
            sorunları önceden değerlendirerek sürdürülebilir çözümler sunar.
          </p>
        </section>

        {/* Son bölüm */}
        <section className="mt-24 border-t border-white/10 pb-16 pt-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            TACH MEKANİK
          </p>

          <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Sağlıklı Yapılar İçin Güvenilir Tesisat
          </h2>

          <p className="mt-5 max-w-[1300px] text-lg leading-9 text-gray-300 md:text-xl">
            Doğru mühendislik, kaliteli malzeme ve profesyonel uygulama ile
            uzun ömürlü sıhhi tesisat sistemleri oluşturuyoruz.
          </p>
        </section>

      </div>
    </main>
  );
}