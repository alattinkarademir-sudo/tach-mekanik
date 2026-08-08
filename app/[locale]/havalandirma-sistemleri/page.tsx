"use client";

export default function HavalandirmaSistemleriPage() {
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
            HAVALANDIRMA SİSTEMLERİ
          </h1>

          <div className="mt-6 h-1 w-24 bg-cyan-400" />
        </header>

        {/* Ana açıklama */}
        <section>
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Profesyonel Havalandırma Sistemleri
          </h2>

          <p className="mt-8 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            TACH MEKANİK olarak, yapılarda sağlıklı ve konforlu iç ortam
            koşullarının oluşturulması amacıyla profesyonel havalandırma
            sistemleri tasarlıyor ve uyguluyoruz. Konutlardan ticari yapılara,
            endüstriyel tesislerden büyük ölçekli projelere kadar farklı
            ihtiyaçlara uygun mekanik havalandırma çözümleri sunuyoruz.
          </p>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            Taze hava ihtiyacı, egzoz havası, hava değişim oranları ve
            sistem kapasitesi gibi teknik gereksinimleri değerlendirerek;
            enerji verimli, güvenilir ve uzun ömürlü havalandırma sistemleri
            oluşturuyoruz.
          </p>
        </section>

        {/* Havalandırma kapsamı */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Havalandırma Sistemleri Kapsamımız
          </h2>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            Her yapının kullanım amacı ve teknik ihtiyaçlarını ayrı ayrı
            değerlendirerek uygun havalandırma sistemlerini belirliyor,
            projelendirme ve uygulama süreçlerini mühendislik prensipleri
            doğrultusunda yürütüyoruz.
          </p>

          <div className="mt-10 space-y-7">
            {[
              "Taze hava havalandırma sistemleri",
              "Egzoz ve atık hava sistemleri",
              "Mekanik havalandırma sistemleri",
              "Otopark havalandırma sistemleri",
              "Mutfak davlumbaz ve egzoz sistemleri",
              "Banyo ve WC egzoz sistemleri",
              "Endüstriyel havalandırma sistemleri",
              "Isı geri kazanımlı havalandırma sistemleri",
              "Hava kanalı sistemleri",
              "Fan ve aspiratör sistemleri",
              "Hava dağıtım ve menfez sistemleri",
              "Havalandırma uygulama ve detay projeleri",
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

        {/* Konforlu ve sağlıklı ortamlar */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Sağlıklı ve Konforlu İç Ortamlar
          </h2>

          <p className="mt-8 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            Doğru tasarlanmış bir havalandırma sistemi, iç ortam havasının
            kalitesinin korunması ve kullanıcı konforunun sağlanması açısından
            büyük önem taşır. Yeterli miktarda taze havanın sağlanması ve
            kirli havanın kontrollü şekilde ortamdan uzaklaştırılması sistemin
            temel görevlerindendir.
          </p>

          <p className="mt-6 max-w-[1350px] text-lg leading-9 text-gray-300 md:text-xl">
            TACH MEKANİK, hava debisi, kanal kesitleri, fan kapasitesi ve hava
            dağılımını birlikte değerlendirerek dengeli çalışan sistemler
            oluşturur. Enerji tüketimini ve işletme maliyetlerini dikkate
            alarak sürdürülebilir çözümler geliştirir.
          </p>
        </section>

        {/* Son bölüm */}
        <section className="mt-24 border-t border-white/10 pb-16 pt-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            TACH MEKANİK
          </p>

          <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Temiz Hava İçin Güvenilir Havalandırma
          </h2>

          <p className="mt-5 max-w-[1300px] text-lg leading-9 text-gray-300 md:text-xl">
            Doğru mühendislik, uygun ekipman seçimi ve profesyonel uygulama
            ile verimli, güvenilir ve uzun ömürlü havalandırma sistemleri
            oluşturuyoruz.
          </p>
        </section>

      </div>
    </main>
  );
}