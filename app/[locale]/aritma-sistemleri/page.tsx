"use client";

export default function AritmaSistemleriPage() {
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
            ARITMA SİSTEMLERİ
          </h1>

          <div className="mt-6 h-1 w-24 bg-cyan-400" />
        </header>

        {/* Ana açıklama */}
        <section>
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Profesyonel Arıtma Sistemleri
          </h2>

          <p className="mt-8 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            TACH MEKANİK olarak, yapıların ve işletmelerin su ihtiyaçlarına
            yönelik güvenilir ve verimli su arıtma sistemleri tasarlıyor ve
            uyguluyoruz. Kullanım amacına ve su kalitesine uygun çözümler
            geliştirerek sürdürülebilir sistemler oluşturuyoruz.
          </p>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            Konutlardan ticari yapılara, otellerden endüstriyel tesislere
            kadar farklı kullanım alanlarının ihtiyaçlarını değerlendiriyor;
            doğru kapasite, ekipman ve sistem tasarımı ile uzun ömürlü
            çözümler sunuyoruz.
          </p>
        </section>

        {/* Arıtma kapsamı */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Arıtma Sistemleri Kapsamımız
          </h2>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            Su kalitesi ve kullanım ihtiyacını birlikte değerlendirerek
            uygun arıtma yöntemlerini belirliyor, sistemin tüm mekanik
            bileşenlerini bir bütün olarak ele alıyoruz.
          </p>

          <div className="mt-10 space-y-7">
            {[
              "Su arıtma sistemleri",
              "İçme ve kullanma suyu arıtma sistemleri",
              "Filtrasyon sistemleri",
              "Kum ve karbon filtre sistemleri",
              "Yumuşatma sistemleri",
              "Ters ozmoz sistemleri",
              "Ultrafiltrasyon sistemleri",
              "Su depolama ve dağıtım sistemleri",
              "Arıtma pompa sistemleri",
              "Kimyasal dozaj sistemleri",
              "Arıtma tesisatı ve borulama sistemleri",
              "Arıtma sistemi uygulama ve detay projeleri",
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

        {/* Su kalitesi */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Temiz ve Güvenilir Su İçin
          </h2>

          <p className="mt-8 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            Arıtma sistemlerinde doğru proses seçimi ve uygun ekipman
            kullanımı, elde edilen suyun kalitesi ve sistemin işletme
            verimliliği açısından büyük önem taşır.
          </p>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            TACH MEKANİK, suyun kullanım amacını ve mevcut su özelliklerini
            değerlendirerek ihtiyaca uygun arıtma çözümleri geliştirir.
            Sistemlerin güvenilir, kontrollü ve sürdürülebilir şekilde
            çalışmasını hedefler.
          </p>
        </section>

        {/* Son bölüm */}
        <section className="mt-24 border-t border-white/10 pb-16 pt-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            TACH MEKANİK
          </p>

          <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Su Kalitesi İçin Güvenilir Çözümler
          </h2>

          <p className="mt-5 max-w-[1300px] text-lg leading-9 text-gray-300 md:text-xl">
            Doğru mühendislik, uygun ekipman ve profesyonel uygulama ile
            verimli, güvenilir ve uzun ömürlü arıtma sistemleri oluşturuyoruz.
          </p>
        </section>

      </div>
    </main>
  );
}