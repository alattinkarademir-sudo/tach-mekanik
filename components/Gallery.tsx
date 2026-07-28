"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import GalleryFilter from "./GalleryFilter";
import GalleryGrid from "./GalleryGrid";
import GalleryModal from "./GalleryModal";

export default function Gallery() {
  const t = useTranslations("Gallery");

  const projects = [
    {
      title: t("fire"),
      category: "yangin",
      image: "/galleri/yangin/yangin1.png",
    },
    {
      title: t("fire"),
      category: "yangin",
      image: "/galleri/yangin/yangin2.png",
    },
    {
      title: t("sanitary"),
      category: "sihhi",
      image: "/galleri/sihhi/sihhi1.png",
    },
    {
      title: t("sanitary"),
      category: "sihhi",
      image: "/galleri/sihhi/sihhi2.png",
    },
    {
      title: t("ventilation"),
      category: "havalandirma",
      image: "/galleri/havalandirma/havalandirma1.png",
    },
    {
      title: t("ventilation"),
      category: "havalandirma",
      image: "/galleri/havalandirma/havalandirma2.png",
    },
    {
      title: t("ventilation"),
      category: "havalandirma",
      image: "/galleri/havalandirma/havalandirma3.png",
    },
    {
      title: t("hvac"),
      category: "iklimlendirme",
      image: "/galleri/iklimlendirme/iklimlendirme1.png",
    },
    {
      title: t("hvac"),
      category: "iklimlendirme",
      image: "/galleri/iklimlendirme/iklimlendirme2.png",
    },
    {
      title: t("medical"),
      category: "medikal",
      image: "/galleri/medikal/medikal1.png",
    },
    {
      title: t("booster"),
      category: "hidrofor",
      image: "/galleri/hidrofor/hidrofor1.png",
    },
    {
      title: t("landscape"),
      category: "peyzaj",
      image: "/galleri/peyzaj/peyzaj1.png",
    },
    {
      title: t("treatment"),
      category: "aritma",
      image: "/galleri/aritma/aritma1.png",
    },
    {
      title: t("infrastructure"),
      category: "altyapi",
      image: "/galleri/altyapi/altyapi1.png",
    },
    {
      title: t("pool"),
      category: "havuz",
      image: "/galleri/havuz/havuz1.png",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return projects;

    return projects.filter(
      (project) => project.category === selectedCategory
    );
  }, [selectedCategory]);

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
    <section id="gallery" className="pt-0 pb-0 bg-[#05070D]">
      <div className="mx-auto max-w-7xl px-6">
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