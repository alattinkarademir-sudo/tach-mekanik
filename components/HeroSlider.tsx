"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const images = [
  "/slides/hero1.png",
  "/slides/hero2.png",
  "/slides/hero3.png",
  "/slides/hero11.png",
  "/slides/hero5.png",
  "/slides/hero6.png",
  "/slides/hero7.png",
  "/slides/hero8.png",
  "/slides/hero9.png",
  "/slides/hero10.png",
];

export default function HeroSlider() {
  const t = useTranslations("HeroSlider");
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[420px] md:h-[550px] lg:h-[650px] overflow-hidden">
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="absolute inset-0 w-full h-full object-cover object-[center_25%]"
      />

      <div className="absolute inset-0 bg-black/45"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          {t("title")}
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl">
          {t("subtitle")}
        </p>

        <button className="mt-8 px-8 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold">
          {t("button")}
        </button>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-orange-500" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}