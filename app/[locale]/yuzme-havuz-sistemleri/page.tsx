"use client";

export default function YuzmeHavuzSistemleriPage() {
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
            YÜZME HAVUZU SİSTEMLERİ
          </h1>

          <div className="mt-6 h-1 w-24 bg-cyan-400" />
        </header>

        {/* Ana açıklama */}
        <section>
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Profesyonel Yüzme Havuzu Sistemleri
          </h2>

          <p className="mt-8 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            TACH MEKANİK olarak, yüzme havuzlarının mekanik tesisat,
            filtrasyon, sirkülasyon ve su şartlandırma ihtiyaçlarına yönelik
            güvenilir ve verimli sistemler tasarlıyor ve uyguluyoruz.
          </p>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            Konut, otel, spor tesisi, sosyal tesis ve büyük ölçekli
            projelerde havuzun kullanım amacına ve kapasitesine uygun
            mühendislik çözümleri sunuyoruz.
          </p>
        </section>

        {/* Sistem kapsamı */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Yüzme Havuzu Sistemleri Kapsamımız
          </h2>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            Havuzun tüm mekanik ihtiyaçlarını bir bütün olarak değerlendiriyor,
            suyun sağlıklı şekilde sirküle edilmesi, filtrelenmesi ve kontrol
            altında tutulması için uygun sistemleri oluşturuyoruz.
          </p>

          <div className="mt-10 space-y-7">
            {[
              "Havuz sirkülasyon sistemleri",
              "Havuz filtrasyon sistemleri",
              "Havuz pompa sistemleri",
              "Denge tankı sistemleri",
              "Havuz ısıtma sistemleri",
              "Havuz suyu şartlandırma sistemleri",
              "Kimyasal dozaj sistemleri",
              "Havuz taşma ve geri dönüş sistemleri",
              "Havuz drenaj sistemleri",
              "Havuz mekanik tesisat borulaması",
              "Havuz ekipman ve kontrol sistemleri",
              "Yüzme havuzu uygulama ve detay projeleri",
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

        {/* Hijyen ve verimlilik */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Hijyenik ve Verimli Havuz Sistemleri
          </h2>

          <p className="mt-8 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            Yüzme havuzlarında su kalitesinin korunması ve kullanıcı
            konforunun sağlanması için doğru sirkülasyon ve filtrasyon
            sistemlerinin kullanılması büyük önem taşır.
          </p>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            TACH MEKANİK, havuz kapasitesi ve kullanım koşullarını
            değerlendirerek uygun pompa, filtre, borulama ve kontrol
            sistemlerini belirler. Enerji verimliliği ve işletme maliyetlerini
            de dikkate alarak sürdürülebilir çözümler sunar.
          </p>
        </section>

        {/* Son bölüm */}
        <section className="mt-24 border-t border-white/10 pb-16 pt-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            TACH MEKANİK
          </p>

          <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Sağlıklı ve Konforlu Havuzlar
          </h2>

          <p className="mt-5 max-w-[1300px] text-lg leading-9 text-gray-300 md:text-xl">
            Doğru mühendislik, kaliteli ekipman ve profesyonel uygulama ile
            güvenilir, verimli ve uzun ömürlü yüzme havuzu sistemleri
            oluşturuyoruz.
          </p>
        </section>

      </div>
    </main>
  );
}