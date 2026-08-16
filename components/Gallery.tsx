"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import GalleryFilter from "./GalleryFilter";
import GalleryGrid from "./GalleryGrid";
import GalleryModal from "./GalleryModal";

type GalleryItem = {
  title: string;
  category: string;
  image: string;
  type: "image" | "video";
};

export default function Gallery() {
  const t = useTranslations("Gallery");

  const [projects, setProjects] = useState<GalleryItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(false);

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

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") {
      return translatedProjects;
    }

    return translatedProjects.filter(
      (project) => project.category === selectedCategory
    );
  }, [selectedCategory, translatedProjects]);

  const openImage = (index: number) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  return (
    <section id="gallery" className="pt-0 pb-0 bg-[#242424]">
      <div className="w-full px-0">
        <GalleryFilter
          selected={selectedCategory}
          onSelect={(category) => {
            setSelectedCategory(category);
            setSelectedIndex(0);
          }}
        />

        <GalleryGrid
          projects={filteredProjects}
          onImageClick={openImage}
        />

        <GalleryModal
          isOpen={open}
          image={
            filteredProjects[selectedIndex]
              ? filteredProjects[selectedIndex].image
              : ""
          }
          title={
            filteredProjects[selectedIndex]
              ? filteredProjects[selectedIndex].title
              : ""
          }
          onClose={() => setOpen(false)}
          onNext={nextImage}
          onPrev={prevImage}
        />
      </div>
    </section>
  );
}