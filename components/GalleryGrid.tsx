"use client";

type Project = {
  title: string;
  image: string;
  category: string;
};

interface GalleryGridProps {
  projects: Project[];
  onImageClick: (index: number) => void;
}

export default function GalleryGrid({
  projects,
  onImageClick,
}: GalleryGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {projects.map((project, index) => (
        <div
          key={index}
          onClick={() => onImageClick(index)}
          className="
            group
            cursor-pointer
            overflow-hidden
            rounded-2xl
            bg-white/5
            border
            border-cyan-500/20
            hover:border-orange-400
            transition-all
            duration-300
          "
        >
          <img
            src={project.image}
            alt={project.title}
            className="
              h-72
              w-full
              object-cover
              group-hover:scale-110
              transition-transform
              duration-500
            "
          />

          <div className="p-4">
            <h3 className="text-lg font-semibold text-white">
              {project.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}