"use client";

export default function PeyzajSistemleriPage() {
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
            PEYZAJ SİSTEMLERİ
          </h1>

          <div className="mt-6 h-1 w-24 bg-cyan-400" />
        </header>

        {/* Ana açıklama */}
        <section>
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Profesyonel Peyzaj Sulama Sistemleri
          </h2>

          <p className="mt-8 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            TACH MEKANİK olarak, yeşil alanların ve peyzaj düzenlemelerinin
            ihtiyaçlarına yönelik modern, verimli ve uzun ömürlü sulama
            sistemleri tasarlıyor ve uyguluyoruz. Konutlardan ticari
            yapılara, otellerden büyük ölçekli peyzaj projelerine kadar
            farklı alanlara uygun çözümler sunuyoruz.
          </p>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            Alanın büyüklüğü, bitki türleri, su ihtiyacı ve kullanım
            koşullarını değerlendirerek doğru sulama yöntemini belirliyor;
            suyun kontrollü ve dengeli şekilde dağıtılmasını sağlayan
            sistemler oluşturuyoruz.
          </p>
        </section>

        {/* Sistem kapsamı */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Peyzaj Sistemleri Kapsamımız
          </h2>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            Peyzaj alanlarının sulama ihtiyaçlarını bütüncül şekilde
            değerlendiriyor, otomatik ve kontrollü sulama sistemleri ile
            sürdürülebilir çözümler geliştiriyoruz.
          </p>

          <div className="mt-10 space-y-7">
            {[
              "Otomatik peyzaj sulama sistemleri",
              "Damla sulama sistemleri",
              "Sprinkler sulama sistemleri",
              "Çim sulama sistemleri",
              "Bahçe sulama sistemleri",
              "Ağaç ve bitki sulama sistemleri",
              "Sulama pompa sistemleri",
              "Su depolama ve dağıtım sistemleri",
              "Sulama borulama sistemleri",
              "Otomatik sulama kontrol sistemleri",
              "Yağmur sensörü ve kontrol sistemleri",
              "Peyzaj sulama uygulama ve detay projeleri",
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

        {/* Su verimliliği */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Su Tasarrufu ve Verimli Sulama
          </h2>

          <p className="mt-8 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            Peyzaj sulama sistemlerinde doğru tasarım, suyun gereksiz
            kullanımını önlemek ve bitkilerin ihtiyaç duyduğu suyu doğru
            zamanda sağlamak açısından büyük önem taşır.
          </p>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            TACH MEKANİK, sulama bölgelerini ve su ihtiyaçlarını ayrı ayrı
            değerlendirerek kontrollü çalışan sistemler oluşturur. Otomatik
            kontrol ve uygun sulama ekipmanları sayesinde su tüketiminin
            verimli şekilde yönetilmesine katkı sağlar.
          </p>
        </section>

        {/* Son bölüm */}
        <section className="mt-24 border-t border-white/10 pb-16 pt-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            TACH MEKANİK
          </p>

          <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Yeşil Alanlar İçin Akıllı Sulama
          </h2>

          <p className="mt-5 max-w-[1300px] text-lg leading-9 text-gray-300 md:text-xl">
            Doğru mühendislik, uygun ekipman ve profesyonel uygulama ile
            verimli, kontrollü ve uzun ömürlü peyzaj sulama sistemleri
            oluşturuyoruz.
          </p>
        </section>

      </div>
    </main>
  );
}