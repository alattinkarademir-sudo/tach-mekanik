"use client";

import { useState } from "react";
import Image from "next/image";

const menuItems = [
  { title: "Ana Sayfa", href: "#home" },
  { title: "Hakkımızda", href: "#about" },
  { title: "Hizmetler", href: "#services" },
  { title: "Projeler", href: "#projects" },
  { title: "Galeri", href: "#gallery" },
  { title: "İletişim", href: "#contact" },
];

const languages = [
  { code: "TR", flag: "/flags/tr.png" },
  { code: "EN", flag: "/flags/en.png" },
  { code: "RU", flag: "/flags/ru.png" },
  { code: "AR", flag: "/flags/ar.png" },
];

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-cyan-400/20 bg-[#030712]/70 backdrop-blur-xl">

      <div className="mx-auto flex h-24 max-w-[1600px] items-center justify-between px-6 lg:px-12">

        {/* LOGO */}

        <a href="#home" className="flex items-center">

          <Image
            src="/logo/logo.png"
            alt="TACH Mekanik"
            width={250}
            height={60}
            priority
            className="w-[240px] lg:w-[250px] h-auto transition duration-300 hover:scale-105"
          />

        </a>

        {/* DESKTOP MENU */}

        <nav className="hidden lg:flex items-center gap-10">

          {menuItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="relative text-[16px] font-semibold text-white transition duration-300 hover:text-cyan-300"
            >
              {item.title}

              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-cyan-400 transition-all duration-300 hover:w-full"></span>

            </a>
          ))}

        </nav>

        {/* RIGHT */}

        <div className="hidden lg:flex items-center gap-4">

          {languages.map((lang) => (
            <button
              key={lang.code}
              className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-3 py-2 transition duration-300 hover:border-cyan-400 hover:bg-cyan-500/10"
            >
              <Image
                src={lang.flag}
                alt={lang.code}
                width={20}
                height={20}
                className="rounded-full"
              />

              <span className="text-sm font-semibold text-white">
                {lang.code}
              </span>

            </button>
          ))}

        </div>

        {/* MOBILE BUTTON */}

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1 rounded-lg border border-cyan-500/30 lg:hidden"
        >
          <span className="h-0.5 w-6 bg-white"></span>
          <span className="h-0.5 w-6 bg-white"></span>
          <span className="h-0.5 w-6 bg-white"></span>
        </button>

      </div>

      {/* MOBILE MENU */}

      {mobileMenu && (

        <div className="border-t border-cyan-400/20 bg-[#050B18]/95 lg:hidden">

          <div className="flex flex-col px-6 py-6">

            {menuItems.map((item) => (

              <a
                key={item.title}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className="border-b border-white/10 py-4 text-white transition hover:text-cyan-300"
              >
                {item.title}
              </a>

            ))}

            <div className="mt-6 flex flex-wrap gap-3">

              {languages.map((lang) => (

                <button
                  key={lang.code}
                  className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2"
                >
                  <Image
                    src={lang.flag}
                    alt={lang.code}
                    width={20}
                    height={20}
                    className="rounded-full"
                  />

                  <span className="text-white font-semibold">
                    {lang.code}
                  </span>

                </button>

              ))}

            </div>

          </div>

        </div>

      )}

    </header>
  );
}