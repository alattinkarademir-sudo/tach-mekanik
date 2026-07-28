"use client";

interface GalleryModalProps {
  image: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function GalleryModal({
  image,
  title,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: GalleryModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Önceki */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="
          absolute
          left-6
          text-white
          text-6xl
          hover:text-orange-400
          transition"
      >
        ‹
      </button>

      {/* Resim */}
      <div
        className="max-w-7xl w-full px-6"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image}
          alt={title}
          className="
            max-h-[85vh]
            w-full
            object-contain
            rounded-xl"
        />

        <h2 className="text-center text-white text-2xl mt-6 font-bold">
          {title}
        </h2>
      </div>

      {/* Sonraki */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="
          absolute
          right-6
          text-white
          text-6xl
          hover:text-orange-400
          transition"
      >
        ›
      </button>

      {/* Kapat */}
      <button
        onClick={onClose}
        className="
          absolute
          top-6
          right-6
          w-12
          h-12
          rounded-full
          bg-red-600
          text-white
          text-2xl
          hover:bg-red-700
          transition"
      >
        ✕
      </button>
    </div>
  );
}