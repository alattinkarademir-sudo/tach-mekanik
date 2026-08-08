
import HeroSlider from "@/components/HeroSlider";

export default function HomePage() {
  return (
    <main className="pt-20 md:pt-24">
      <HeroSlider />

      <section className="bg-[#242424] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
            TACH MEKANİK
          </p>

          <h2 className="mb-8 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Mühendislik, Tecrübe ve Güven
          </h2>

          <p className="mx-auto max-w-3xl text-base leading-8 text-white sm:text-lg">
            Mekanik tesisatın yalnızca bir uygulama değil, doğru planlama ve
            mühendislik gerektiren kapsamlı bir süreç olduğuna inanıyoruz.
          </p>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white sm:text-lg">
            Projenin ilk aşamasından uygulama ve teslim sürecine kadar; teknik
            detayları, kaliteyi ve uzun vadeli performansı ön planda tutuyoruz.
          </p>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white sm:text-lg">
            Her projeye kendi ihtiyaçları doğrultusunda yaklaşarak, işlevsel,
            güvenilir ve sürdürülebilir mekanik sistemler oluşturmayı
            hedefliyoruz.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-8">
              <div className="text-3xl font-bold text-cyan-300">
                39+
              </div>
              <div className="mt-2 text-sm text-gray-200">
                Yıl Tecrübe
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-8">
              <div className="text-xl font-bold text-cyan-300">
                Profesyonel
              </div>
              <div className="mt-2 text-sm text-gray-200">
                Mühendislik
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-8">
              <div className="text-xl font-bold text-cyan-300">
                Güvenilir
              </div>
              <div className="mt-2 text-sm text-gray-200">
                Mekanik Çözümler
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
