"use client";

type Category = {
  id: string;
  label: string;
  icon: string;
};

const categories: Category[] = [
  { id: "all", label: "Tümü", icon: "🖼️" },
  { id: "yangin", label: "Yangın", icon: "🔥" },
  { id: "sihhi", label: "Sıhhi", icon: "🚿" },
  { id: "havalandirma", label: "Havalandırma", icon: "🌬️" },
  { id: "hvac", label: "HVAC", icon: "❄️" },
  { id: "vrf", label: "VRF", icon: "🏢" },
  { id: "medikal", label: "Medikal", icon: "🏥" },
  { id: "hidrofor", label: "Hidrofor", icon: "💦" },
  { id: "peyzaj", label: "Peyzaj", icon: "🌿" },
  { id: "aritma", label: "Arıtma", icon: "💧" },
  { id: "altyapi", label: "Alt Yapı", icon: "🚧" },
  { id: "havuz", label: "Havuz", icon: "🏊" },
];

interface GalleryFilterProps {
  selected: string;
  onSelect: (id: string) => void;
}

export default function GalleryFilter({
  selected,
  onSelect,
}: GalleryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelect(category.id)}
          className={`
            px-5 py-3 rounded-full
            border
            transition-all duration-300
            font-semibold
            ${
              selected === category.id
                ? "bg-orange-500 border-orange-500 text-white"
                : "bg-white/5 border-cyan-500/20 text-white hover:border-orange-400 hover:bg-orange-500/10"
            }
          `}
        >
          <span className="mr-2">{category.icon}</span>
          {category.label}
        </button>
      ))}
    </div>
  );
}