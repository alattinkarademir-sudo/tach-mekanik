"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import GalleryModal from "@/components/GalleryModal";

type GalleryItem = {
  title: string;
  category: string;
  image: string;
  type: "image" | "video";
};

export default function Galeri() {
  const t = useTranslations("Gallery");

  const [projects, setProjects] = useState<GalleryItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const loadGallery = async () => {
      try {
        const response = await fetch("/api/gallery-files");

        if (!response.ok) {
          throw new Error("Galeri yüklenemedi");
        }

        const data: GalleryItem[] = await response.json();

        setProjects(data);
      } catch (error) {
        console.error("Galeri yükleme hatası:", error);
      }
    };

    loadGallery();
  }, []);

  const getTitle = (category: string) => {
    const titles: Record<string, string> = {
      yangin: t("fire"),
      sihhi: t("sanitary"),
      havalandirma: t("ventilation"),
      iklimlendirme: t("hvac"),
      medikal: t("medical"),
      hidrofor: t("booster"),
      peyzaj: t("landscape"),
      aritma: t("treatment"),
      altyapi: t("infrastructure"),
      havuz: t("pool"),
    };

    return titles[category] || category;
  };

  const translatedProjects = useMemo(() => {
    return projects.map((project) => ({
      ...project,
      title: getTitle(project.category),
    }));
  }, [projects]);

  const openImage = (index: number) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === translatedProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? translatedProjects.length - 1 : prev - 1
    );
  };

  return (
    <main>
      <section className="max-w-[1600px] mx-auto py-20 px-4">

        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          Galeri
        </h1>

        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-2">

          {translatedProjects.map((project, index) => (
            <div
              key={`${project.category}-${project.image}`}
              onClick={() => openImage(index)}
              className="rounded-2xl overflow-hidden cursor-pointer"
            >
              {project.type === "video" ? (
  <video
    src={project.image}
    muted
    playsInline
    preload="metadata"
    controls
    className="w-full h-[350px] object-cover"
  />
) : (
  <Image
    src={project.image}
    alt={project.title}
    width={1400}
    height={1000}
    className="w-full h-[350px] object-cover"
  />
)}
            </div>
          ))}

        </div>

      </section>

      <GalleryModal
        isOpen={isModalOpen}
        image={translatedProjects[selectedIndex]?.image || ""}
        title={translatedProjects[selectedIndex]?.title || ""}
        type={projects[selectedIndex]?.type || "image"}
        onClose={() => setIsModalOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </main>
  );
}