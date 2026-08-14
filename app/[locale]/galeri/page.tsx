"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import GalleryModal from "@/components/GalleryModal";

export default function Galeri() {
  const t = useTranslations("Gallery");

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: t("fire"),
      category: "yangin",
      image: "/galeri/yangin/yangin1.png",
    },
    {
      title: t("fire"),
      category: "yangin",
      image: "/galeri/yangin/yangin2.png",
    },
    {
      title: t("sanitary"),
      category: "sihhi",
      image: "/galeri/sihhi/sihhi1.png",
    },
    {
      title: t("sanitary"),
      category: "sihhi",
      image: "/galeri/sihhi/sihhi2.png",
    },
    {
      title: t("ventilation"),
      category: "havalandirma",
      image: "/galeri/havalandirma/havalandirma1.png",
    },
    {
      title: t("ventilation"),
      category: "havalandirma",
      image: "/galeri/havalandirma/havalandirma2.png",
    },
    {
      title: t("ventilation"),
      category: "havalandirma",
      image: "/galeri/havalandirma/havalandirma3.png",
    },
    {
      title: t("hvac"),
      category: "iklimlendirme",
      image: "/galeri/iklimlendirme/iklimlendirme1.png",
    },
    {
      title: t("hvac"),
      category: "iklimlendirme",
      image: "/galeri/iklimlendirme/iklimlendirme2.png",
    },
    {
      title: t("medical"),
      category: "medikal",
      image: "/galeri/medikal/medikal1.png",
    },
    {
      title: t("booster"),
      category: "hidrofor",
      image: "/galeri/hidrofor/hidrofor1.png",
    },
    {
      title: t("landscape"),
      category: "peyzaj",
      image: "/galeri/peyzaj/peyzaj1.png",
    },
    {
      title: t("treatment"),
      category: "aritma",
      image: "/galeri/aritma/aritma1.png",
    },
    {
      title: t("infrastructure"),
      category: "altyapi",
      image: "/galeri/altyapi/altyapi1.png",
    },
    {
      title: t("pool"),
      category: "havuz",
      image: "/galeri/havuz/havuz1.png",
    },
  ];

  const openImage = (index: number) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  return (
    <main>
      <section className="max-w-[1600px] mx-auto py-20 px-4">

        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          Galeri
        </h1>

        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-2">

          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => openImage(index)}
              className="rounded-2xl overflow-hidden cursor-pointer"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={1400}
                height={1000}
                className="w-full h-[350px] object-cover"
              />
            </div>
          ))}

        </div>

      </section>

      <GalleryModal
        isOpen={isModalOpen}
        image={projects[selectedIndex]?.image || ""}
        title={projects[selectedIndex]?.title || ""}
        onClose={() => setIsModalOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </main>
  );
}