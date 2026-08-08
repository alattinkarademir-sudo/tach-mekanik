"use client";

export default function IsitmaSogutmaSistemleriPage() {
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
            ISITMA SOĞUTMA SİSTEMLERİ
          </h1>

          <div className="mt-6 h-1 w-24 bg-cyan-400" />
        </header>

        {/* Ana açıklama */}
        <section>
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Profesyonel Isıtma ve Soğutma Sistemleri
          </h2>

          <p className="mt-8 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            TACH MEKANİK olarak, yapıların ısıtma ve soğutma ihtiyaçlarına
            yönelik konforlu, verimli ve güvenilir mekanik sistemler
            tasarlıyor ve uyguluyoruz. Konutlardan ticari yapılara,
            endüstriyel tesislerden büyük ölçekli projelere kadar farklı
            kullanım alanlarına uygun çözümler sunuyoruz.
          </p>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            Yapının kullanım amacı, kapasitesi ve teknik gereksinimlerini
            değerlendirerek uygun sistem seçimi yapıyor; doğru kapasite,
            ekipman ve borulama tasarımı ile enerji verimli ve uzun ömürlü
            sistemler oluşturuyoruz.
          </p>
        </section>

        {/* Kapsam */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Isıtma ve Soğutma Kapsamımız
          </h2>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            Her projeyi kendi ihtiyaçları doğrultusunda değerlendiriyor,
            yapıların iklimlendirme ve enerji gereksinimlerine uygun
            mühendislik çözümleri geliştiriyoruz.
          </p>

          <div className="mt-10 space-y-7">
            {[
              "Kalorifer ve merkezi ısıtma sistemleri",
              "Kazan ve sıcak su sistemleri",
              "Kat kaloriferi sistemleri",
              "Radyatörlü ısıtma sistemleri",
              "Yerden ısıtma sistemleri",
              "Fan-coil sistemleri",
              "Chiller sistemleri",
              "Soğutma grubu sistemleri",
              "Isı pompası sistemleri",
              "Sıcak ve soğuk su borulama sistemleri",
              "Pompa ve sirkülasyon sistemleri",
              "Isıtma ve soğutma uygulama projeleri",
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

        {/* Konfor ve verimlilik */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Konforlu ve Enerji Verimli Sistemler
          </h2>

          <p className="mt-8 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            Isıtma ve soğutma sistemlerinde doğru kapasite seçimi, uygun
            ekipman kullanımı ve dengeli bir sistem tasarımı enerji tüketimi
            ve kullanıcı konforu açısından büyük önem taşır.
          </p>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            TACH MEKANİK, sistem tasarımından uygulamaya kadar tüm aşamalarda
            performans, enerji verimliliği ve işletme maliyetlerini birlikte
            değerlendirerek sürdürülebilir çözümler sunar.
          </p>
        </section>

        {/* Son bölüm */}
        <section className="mt-24 border-t border-white/10 pb-16 pt-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            TACH MEKANİK
          </p>

          <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Her Yapıya Uygun İklimlendirme Çözümleri
          </h2>

          <p className="mt-5 max-w-[1300px] text-lg leading-9 text-gray-300 md:text-xl">
            Doğru mühendislik, kaliteli ekipman ve profesyonel uygulama ile
            konforlu, verimli ve uzun ömürlü ısıtma-soğutma sistemleri
            oluşturuyoruz.
          </p>
        </section>

      </div>
    </main>
  );
}