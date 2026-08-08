"use client";

export default function MedikalGazSistemleriPage() {
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
            MEDİKAL GAZ SİSTEMLERİ
          </h1>

          <div className="mt-6 h-1 w-24 bg-cyan-400" />
        </header>

        {/* Ana açıklama */}
        <section>
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Profesyonel Medikal Gaz Sistemleri
          </h2>

          <p className="mt-8 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            TACH MEKANİK olarak, sağlık yapılarında ihtiyaç duyulan medikal
            gaz sistemlerinin tasarım, projelendirme ve uygulama süreçlerini
            mühendislik prensipleri doğrultusunda gerçekleştiriyoruz.
          </p>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            Hastaneler, sağlık merkezleri, ameliyathaneler, yoğun bakım
            üniteleri ve diğer sağlık yapılarının teknik ihtiyaçlarını
            değerlendirerek güvenilir, kontrollü ve uzun ömürlü medikal gaz
            tesisatları oluşturuyoruz.
          </p>
        </section>

        {/* Kapsam */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Medikal Gaz Sistemleri Kapsamımız
          </h2>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            Projenin kullanım amacı ve sağlık tesisinin teknik ihtiyaçlarına
            göre medikal gaz altyapısını bütüncül şekilde ele alıyor,
            güvenli ve düzenli çalışan sistemler tasarlıyoruz.
          </p>

          <div className="mt-10 space-y-7">
            {[
              "Medikal oksijen sistemleri",
              "Medikal vakum sistemleri",
              "Medikal basınçlı hava sistemleri",
              "Azot ve diğer medikal gaz sistemleri",
              "Medikal gaz borulama sistemleri",
              "Medikal gaz priz ve terminal üniteleri",
              "Ameliyathane medikal gaz sistemleri",
              "Yoğun bakım medikal gaz sistemleri",
              "Hasta odası medikal gaz sistemleri",
              "Medikal gaz alarm ve kontrol sistemleri",
              "Medikal gaz uygulama ve detay projeleri",
              "Sistem testleri ve devreye alma çalışmaları",
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

        {/* Güvenlik */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Güvenli ve Kontrollü Sistemler
          </h2>

          <p className="mt-8 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            Medikal gaz sistemlerinde güvenilirlik ve süreklilik büyük önem
            taşır. Sistemlerin doğru tasarlanması, uygun malzemelerin
            kullanılması ve uygulamanın teknik standartlara uygun şekilde
            gerçekleştirilmesi sağlık tesislerinin güvenli işletilmesi
            açısından temel unsurlardır.
          </p>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            TACH MEKANİK, medikal gaz altyapısının tüm bileşenlerini birlikte
            değerlendirerek kontrollü, düzenli ve güvenilir çalışan sistemler
            oluşturmayı hedefler.
          </p>
        </section>

        {/* Son bölüm */}
        <section className="mt-24 border-t border-white/10 pb-16 pt-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            TACH MEKANİK
          </p>

          <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Sağlık Yapıları İçin Güvenilir Medikal Gaz
          </h2>

          <p className="mt-5 max-w-[1300px] text-lg leading-9 text-gray-300 md:text-xl">
            Doğru mühendislik, uygun malzeme ve profesyonel uygulama ile
            sağlık yapılarının ihtiyaçlarına uygun güvenilir medikal gaz
            sistemleri oluşturuyoruz.
          </p>
        </section>

      </div>
    </main>
  );
}