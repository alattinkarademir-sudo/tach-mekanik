"use client";

type Project = {
  title: string;
  image: string;
  category: string;
  type: "image" | "video";
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
    <div className="w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-1">
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
          {project.type === "video" ? (
            <video
              src={project.image}
              muted
              playsInline
              preload="metadata"
              className="
                block
                w-full
                h-72
                object-cover
                group-hover:scale-110
                transition-transform
                duration-500
              "
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="
                block
                w-full
                h-72
                object-cover
                group-hover:scale-110
                transition-transform
                duration-500
              "
            />
          )}

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