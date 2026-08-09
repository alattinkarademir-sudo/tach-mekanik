
"use client";

export default function KesifPage() {
  const kesifler = [
    "Mevcut mekanik tesisat sistemlerinin incelenmesi",
    "Yapının teknik ve mimari durumunun değerlendirilmesi",
    "Isıtma ve soğutma sistemlerinin incelenmesi",
    "Sıhhi tesisat ihtiyaçlarının belirlenmesi",
    "Yangın tesisatı ihtiyaçlarının değerlendirilmesi",
    "Havalandırma sistemlerinin incelenmesi",
    "VRF sistemleri için teknik değerlendirme",
    "Medikal gaz tesisatı ihtiyaçlarının belirlenmesi",
    "Mekanik cihaz ve ekipmanların kontrolü",
    "Boru ve kanal güzergâhlarının değerlendirilmesi",
    "Kapasite ve debi ihtiyaçlarının belirlenmesi",
    "Uygulama için gerekli malzeme ve ekipmanların tespiti",
  ];

  return (
    <main
      className="min-h-screen px-6 py-32 md:px-10 lg:px-16"
      style={{ backgroundColor: "#242424" }}
    >
      <header className="mb-50">
  <p className="font-semibold uppercase tracking-[0.35em] text-cyan-200">
    TACH MEKANİK
  </p>

  <h1 className="mt-5 text-5xl font-bold text-slate-200 md:text-6xl lg:text-6xl">
    KEŞİF
  </h1>

  <div className="mx-auto mt-6 h-1 w-24 bg-cyan-200" />
</header>

<section>
  <h2 className="text-3xl font-bold text-slate-200 md:text-4xl lg:text-5xl">
    Profesyonel Mekanik Tesisat Keşif Hizmeti
  </h2>

          <p className="mx-auto mt-8 max-w-[1400px] text-lg leading-9 text-gray-200 md:text-xl">
            TACH MEKANİK olarak, mekanik tesisat uygulamalarının doğru
            planlanması için keşif çalışmalarını titizlikle gerçekleştiriyoruz.
            Yapının mevcut durumunu, kullanım amacını ve teknik ihtiyaçlarını
            yerinde değerlendirerek uygulanabilir ve güvenilir çözümler
            oluşturuyoruz.
          </p>

          <p className="mx-auto mt-6 max-w-[1400px] text-lg leading-9 text-gray-200 md:text-xl">
            Keşif sürecinde yalnızca mevcut sistemi incelemekle kalmıyor;
            proje, uygulama ve işletme aşamalarında karşılaşılabilecek teknik
            ihtiyaçları önceden belirleyerek doğru malzeme, ekipman ve sistem
            seçiminin yapılmasına yardımcı oluyoruz.
          </p>
        </section>

        <section className="mt-24">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Keşif Çalışmalarımız
          </h2>

          <p className="mx-auto mt-6 max-w-[1400px] text-lg leading-9 text-gray-200 md:text-xl">
            Her yapıyı kendi özellikleri doğrultusunda değerlendiriyor,
            mekanik tesisat sistemlerinin ihtiyaçlarını detaylı şekilde
            analiz ediyoruz.
          </p>

          <div className="mx-auto mt-12 grid max-w-[1400px] grid-cols-1 gap-6 md:grid-cols-2">
            {kesifler.map((item, index) => (
              <article
                key={item}
                className="border border-white/10 bg-white/[0.02] p-6 text-left transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.04]"
              >
                <div className="flex items-center gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 font-bold text-cyan-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-lg leading-8 text-white md:text-xl">
                    {item}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-28 max-w-[1400px] text-center">
          <div className="border-l-2 border-cyan-400 pl-6 md:pl-10">
            <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Doğru Keşif, Doğru Planlama
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-200 md:text-xl">
              Sağlıklı bir mekanik tesisat uygulamasının ilk adımlarından biri
              doğru keşif çalışmasıdır. Yerinde yapılan detaylı incelemeler,
              uygulama sırasında oluşabilecek belirsizliklerin ve gereksiz
              maliyetlerin önüne geçilmesine yardımcı olur.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-200 md:text-xl">
              TACH MEKANİK olarak keşif sürecinde elde edilen teknik verileri
              değerlendirerek projelendirme ve uygulama aşamalarına doğru
              şekilde aktarılmasını sağlıyoruz. Böylece zaman, malzeme ve
              işçilik açısından daha verimli çözümler oluşturuyoruz.
            </p>
          </div>
        </section>

        <section className="mt-28 border-t border-white/10 pb-20 pt-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            TACH MEKANİK
          </p>

          <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Yerinde İnceleme, Doğru Tespit, Güvenilir Çözüm
          </h2>

          <p className="mx-auto mt-6 max-w-[1400px] text-lg leading-9 text-gray-200 md:text-xl">
            Her projeye doğru keşif ve doğru teknik değerlendirme ile
            başlıyor, ihtiyaçlara uygun mekanik tesisat çözümleri
            geliştiriyoruz.
          </p>
         </section>
  </main>
);
}