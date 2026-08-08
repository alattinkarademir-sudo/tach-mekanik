"use client";

export default function YanginTesisatiPage() {
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
            YANGIN TESİSATI
          </h1>

          <div className="mt-6 h-1 w-24 bg-cyan-400" />
        </header>

        {/* Ana açıklama */}
        <section>
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Profesyonel Yangın Tesisatı Sistemleri
          </h2>

          <p className="mt-8 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            TACH MEKANİK olarak, yapıların yangın risklerine karşı güvenliğini
            sağlamak amacıyla ulusal ve uluslararası standartlara uygun yangın
            tesisatı sistemleri tasarlıyor ve uyguluyoruz. Konutlardan ticari
            yapılara, endüstriyel tesislerden büyük ölçekli yapılara kadar
            farklı kullanım alanlarına uygun yangın güvenliği çözümleri
            sunuyoruz.
          </p>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            Yangın tesisatı sistemlerinde doğru kapasite hesabı, uygun ekipman
            seçimi ve güvenilir uygulama prensiplerini esas alıyor; yangın
            anında ihtiyaç duyulan suyun doğru basınç ve debi değerleriyle
            gerekli noktalara ulaştırılmasını sağlıyoruz.
          </p>
        </section>

        {/* Yangın tesisatı kapsamı */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Yangın Tesisatı Kapsamımız
          </h2>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            Yapının kullanım amacı, büyüklüğü ve yangın riskleri
            değerlendirilerek ihtiyaca uygun yangın söndürme ve yangından
            korunma sistemleri oluşturuyoruz.
          </p>

          <div className="mt-10 space-y-7">
            {[
              "Yangın hidrant sistemleri",
              "Yangın dolapları sistemleri",
              "Sprinkler yangın söndürme sistemleri",
              "Yangın pompa sistemleri",
              "Yangın su depoları",
              "Yangın kolon tesisatları",
              "Islak borulu sprinkler sistemleri",
              "Kuru borulu sprinkler sistemleri",
              "Gazlı söndürme sistemleri",
              "Yangın suyu basınçlandırma sistemleri",
              "Yangın tesisatı borulama sistemleri",
              "Yangın tesisatı hesap ve uygulama projeleri",
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

        {/* Yangın güvenliği */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Güvenli Yangın Söndürme Sistemleri
          </h2>

          <p className="mt-8 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            Yangın tesisatı sistemlerinin amacı, yangın sırasında müdahale
            süresini kısaltmak ve yangının kontrol altına alınmasına yardımcı
            olmaktır. Bu nedenle sistemlerin doğru projelendirilmesi,
            ekipmanların uygun şekilde seçilmesi ve uygulamanın teknik
            standartlara uygun gerçekleştirilmesi büyük önem taşır.
          </p>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            TACH MEKANİK, yangın güvenliği ihtiyaçlarını bütüncül şekilde
            değerlendirerek güvenilir, dayanıklı ve uzun ömürlü yangın
            tesisatı çözümleri sunar. Sistemlerin bakım ve işletme süreçlerinin
            sağlıklı yürütülebilmesi için erişilebilir ve sürdürülebilir
            çözümler oluşturur.
          </p>
        </section>

        {/* Son bölüm */}
        <section className="mt-24 border-t border-white/10 pb-16 pt-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            TACH MEKANİK
          </p>

          <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Güvenli Yapılar İçin Etkin Yangın Çözümleri
          </h2>

          <p className="mt-5 max-w-[1300px] text-lg leading-9 text-gray-300 md:text-xl">
            Doğru mühendislik, kaliteli ekipman ve profesyonel uygulama ile
            yapıların yangın güvenliğine katkı sağlayan güvenilir sistemler
            oluşturuyoruz.
          </p>
        </section>

      </div>
    </main>
  );
}