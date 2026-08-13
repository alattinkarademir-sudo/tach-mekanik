"use client";

import { useTranslations } from "next-intl";

export default function TeklifAl() {
  const t = useTranslations("QuotePage");

  return (
    <main className="min-h-screen bg-[#242424] px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">

        <div className="text-center">
          <p className="text-cyan-400 uppercase tracking-[0.3em] font-semibold">
            {t("brand")}
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold">
            {t("title")}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-gray-300">
            {t("description")}
          </p>
        </div>

        <div className="mt-14 rounded-2xl bg-[#F5F5F5] p-8 md:p-12 text-gray-900 shadow-2xl">

          <h2 className="text-2xl md:text-3xl font-bold text-center">
            {t("formTitle")}
          </h2>

          <p className="mt-3 text-center text-gray-600">
            {t("formDescription")}
          </p>

          {/* FORM */}
          <form className="mt-10 space-y-6">

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block mb-2 font-semibold">
                  {t("name")}
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  placeholder={t("namePlaceholder")}
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  {t("company")}
                </label>

                <input
                  type="text"
                  name="company"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  placeholder={t("companyPlaceholder")}
                />
              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block mb-2 font-semibold">
                  {t("phone")}
                </label>

                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  placeholder="+90 5XX XXX XX XX"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  {t("email")}
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  placeholder="ornek@email.com"
                />
              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block mb-2 font-semibold">
                  {t("projectType")}
                </label>

                <select
                  name="projectType"
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                >
                  <option value="">
                    {t("projectTypePlaceholder")}
                  </option>

                  <option value="residential">
                    {t("residential")}
                  </option>

                  <option value="hotel">
                    {t("hotel")}
                  </option>

                  <option value="hospital">
                    {t("hospital")}
                  </option>

                  <option value="industrial">
                    {t("industrial")}
                  </option>

                  <option value="commercial">
                    {t("commercial")}
                  </option>

                  <option value="other">
                    {t("other")}
                  </option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  {t("service")}
                </label>

                <select
                  name="service"
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                >
                  <option value="">
                    {t("servicePlaceholder")}
                  </option>

                  <option value="project">
                    {t("project")}
                  </option>

                  <option value="heating-cooling">
                    {t("heatingCooling")}
                  </option>

                  <option value="ventilation">
                    {t("ventilation")}
                  </option>

                  <option value="fire">
                    {t("fire")}
                  </option>

                  <option value="plumbing">
                    {t("plumbing")}
                  </option>

                  <option value="vrf">
                    {t("vrf")}
                  </option>

                  <option value="medical">
                    {t("medical")}
                  </option>

                  <option value="infrastructure">
                    {t("infrastructure")}
                  </option>

                  <option value="other">
                    {t("other")}
                  </option>
                </select>
              </div>

            </div>

            <div>
              <label className="block mb-2 font-semibold">
  {t("projectDescription")}
</label>

<textarea
  name="message"
  rows={6}
  required
  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 resize-none"
  placeholder={t("projectDescriptionPlaceholder")}
              />
            </div>

            <div className="text-center pt-4">

              <button
                type="submit"
                className="rounded-xl bg-cyan-500 px-10 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-cyan-400 hover:scale-105 shadow-lg shadow-cyan-500/20"
              >
                {t("submit")}
              </button>

            </div>

          </form>

        </div>

      </div>
    </main>
  );
}