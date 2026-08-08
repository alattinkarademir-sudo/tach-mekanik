"use client";

export default function VrfSistemleriPage() {
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
            VRF SİSTEMLERİ
          </h1>

          <div className="mt-6 h-1 w-24 bg-cyan-400" />
        </header>

        {/* Ana açıklama */}
        <section>
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Profesyonel VRF Sistemleri
          </h2>

          <p className="mt-8 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            TACH MEKANİK olarak, farklı kullanım alanlarının ısıtma ve
            soğutma ihtiyaçlarına yönelik yüksek verimli VRF sistemleri
            tasarlıyor ve uyguluyoruz. Konut, ofis, otel, ticari yapı ve
            büyük ölçekli projelere uygun çözümler sunuyoruz.
          </p>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            Yapının kullanım amacı, kapasitesi ve mimari özelliklerini
            değerlendirerek uygun dış ünite ve iç ünite kombinasyonlarını
            belirliyor; enerji verimliliği ve kullanıcı konforunu birlikte
            ele alıyoruz.
          </p>
        </section>

        {/* VRF kapsamı */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            VRF Sistemleri Kapsamımız
          </h2>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            Projenin teknik gereksinimlerine göre VRF sistemlerinin
            tasarımından uygulamasına kadar tüm süreçleri mühendislik
            prensipleri doğrultusunda yürütüyoruz.
          </p>

          <div className="mt-10 space-y-7">
            {[
              "VRF sistem tasarımı",
              "VRF dış ünite sistemleri",
              "VRF iç ünite sistemleri",
              "Kaset tipi iç üniteler",
              "Duvar tipi iç üniteler",
              "Kanal tipi iç üniteler",
              "Gizli tavan tipi iç üniteler",
              "VRF bakır borulama sistemleri",
              "Yoğuşma suyu drenaj sistemleri",
              "Kumanda ve kontrol sistemleri",
              "VRF uygulama ve detay projeleri",
              "Devreye alma ve sistem kontrolleri",
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

        {/* Enerji verimliliği */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Konfor ve Enerji Verimliliği
          </h2>

          <p className="mt-8 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            VRF sistemleri, farklı mahallerin ihtiyaçlarına göre bağımsız
            olarak kontrol edilebilmesi sayesinde enerji kullanımının
            optimize edilmesine yardımcı olur. Doğru sistem tasarımı,
            ekipman seçimi ve uygulama ile yüksek konfor sağlanabilir.
          </p>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            TACH MEKANİK, sistem kapasitesini ve mahal ihtiyaçlarını
            değerlendirerek dengeli çalışan, kullanıcı konforunu ve enerji
            verimliliğini ön planda tutan VRF çözümleri oluşturur.
          </p>
        </section>

        {/* Son bölüm */}
        <section className="mt-24 border-t border-white/10 pb-16 pt-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            TACH MEKANİK
          </p>

          <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Modern Yapılar İçin Akıllı İklimlendirme
          </h2>

          <p className="mt-5 max-w-[1300px] text-lg leading-9 text-gray-300 md:text-xl">
            Doğru mühendislik, uygun sistem seçimi ve profesyonel uygulama
            ile verimli, konforlu ve uzun ömürlü VRF sistemleri oluşturuyoruz.
          </p>
        </section>

      </div>
    </main>
  );
}