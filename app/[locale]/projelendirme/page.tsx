
"use client";

export default function ProjelendirmePage() {
  return (
    <main className="min-h-screen bg-[#202020] px-5 py-24 md:px-10 lg:px-20">
      <div className="mx-auto max-w-[1400px]">

        {/* Başlık */}
        <header className="mb-20">
          <p className="text-cyan-400 uppercase tracking-[0.35em] font-semibold">
            TACH MEKANİK
          </p>

         <h1 className="mt-5 text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            PROJELENDİRME
          </h1>

          <div className="mt-6 h-1 w-24 bg-cyan-400" />
        </header>

        {/* Ana açıklama */}
        <section>
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white">
            Profesyonel Mekanik Tesisat Projelendirme
          </h2>

          <p className="mt-8 text-lg md:text-xl text-gray-300 leading-9 max-w-[1250px]">
            TACH MEKANİK olarak, yapıların ihtiyaçlarına ve kullanım amaçlarına
            uygun, güvenli, verimli ve sürdürülebilir mekanik tesisat
            projeleri hazırlıyoruz. Projelendirme sürecini yalnızca teknik
            çizimlerden ibaret görmüyor; yapının mimari, elektrik ve diğer
            disiplinleriyle uyumlu, uygulamada sorun çıkarmayacak bütüncül
            çözümler geliştiriyoruz.
          </p>

          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-9 max-w-[1250px]">
            Mühendislik deneyimimizi modern proje teknikleriyle birleştirerek
            konutlardan ticari yapılara, endüstriyel tesislerden büyük ölçekli
            projelere kadar farklı yapı tiplerine özel mekanik sistemler
            tasarlıyoruz.
          </p>
        </section>

        {/* Projelendirme kapsamı */}
        <section className="mt-20">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white">
            Projelendirme Kapsamımız
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-9 max-w-[1250px]">
            Her projeyi kendi teknik ihtiyaçları doğrultusunda değerlendiriyor,
            mekanik sistemlerin birbiriyle uyumlu çalışmasını sağlayacak
            kapsamlı çözümler geliştiriyoruz.
          </p>

          <div className="mt-10 space-y-7">
            {[
              "Isıtma ve soğutma sistemleri projeleri",
              "Sıhhi tesisat projeleri",
              "Yangın tesisatı projeleri",
              "Havalandırma projeleri",
              "VRF sistemleri projeleri",
              "Medikal gaz tesisatı projeleri",
              "Mekanik altyapı projeleri",
              "Pompa ve hidrofor sistemleri",
              "Teknik hacim ve cihaz yerleşimleri",
              "Borulama ve kanal sistemleri",
              "Sistem kapasite ve debi hesaplamaları",
              "Uygulama ve detay projeleri",
            ].map((item, index) => (
              <article
                key={index}
                className="border-b border-white/10 pb-7"
              >
                <div className="flex items-start gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400 font-bold">
                    {index + 1}
                  </span>

                  <p className="text-xl md:text-2xl text-white leading-8">
                    {item}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Doğru proje */}
        <section className="mt-24">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white">
            Doğru Proje, Doğru Uygulama
          </h2>

          <p className="mt-8 text-lg md:text-xl text-gray-300 leading-9 max-w-[1250px]">
            İyi hazırlanmış bir mekanik tesisat projesi, uygulama sürecinin
            temelini oluşturur. TACH MEKANİK, proje aşamasında olası uygulama
            problemlerini önceden değerlendirerek malzeme, ekipman, kapasite
            ve sistem seçimini doğru şekilde planlar.
          </p>

          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-9 max-w-[1250px]">
            Amacımız yalnızca çalışan sistemler oluşturmak değil; uzun yıllar
            güvenilir şekilde hizmet verecek, işletme maliyetlerini azaltacak
            ve enerji verimliliğini destekleyecek mekanik tesisat çözümleri
            sunmaktır.
          </p>
        </section>

        {/* Son bölüm */}
        <section className="mt-24 border-t border-white/10 pt-12 pb-16">
          <p className="text-cyan-400 text-sm uppercase tracking-[0.3em] font-semibold">
            TACH MEKANİK
          </p>

          <h2 className="mt-5 text-3xl md:text-4xl font-bold text-white">
            Mühendislik Deneyimiyle Güvenilir Mekanik Çözümler
          </h2>

          <p className="mt-5 max-w-[1200px] text-lg md:text-xl text-gray-300 leading-9">
            Projeden uygulamaya, doğru planlama ve doğru mühendislik yaklaşımı
            ile uzun ömürlü sistemler tasarlıyoruz.
          </p>
        </section>

      </div>
    </main>
  );
}

