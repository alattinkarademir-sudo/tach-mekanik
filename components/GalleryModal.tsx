"use client";

import { useEffect, useRef, useState } from "react";

interface GalleryModalProps {
  image: string;
  title: string;
  type?: "image" | "video";
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function GalleryModal({
  image,
  title,
  type = "image",
  isOpen,
  onClose,
  onNext,
  onPrev,
}: GalleryModalProps) {
  const touchStartX = useRef<number | null>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(true);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    document.addEventListener("keydown", handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose, onNext, onPrev]);

  useEffect(() => {
    if (type === "image") {
      setIsImageLoaded(false);
    } else {
      setIsImageLoaded(true);
    }
  }, [image, type]);

  if (!isOpen) return null;

  const handleTouchStart = (
    e: React.TouchEvent<HTMLDivElement>
  ) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (
    e: React.TouchEvent<HTMLDivElement>
  ) => {
    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const difference = touchStartX.current - touchEndX;

    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        onNext();
      } else {
        onPrev();
      }
    }

    touchStartX.current = null;
  };

  return (
    <div
      className="
        fixed inset-0 z-[9999]
        bg-black/95
        flex items-center justify-center
      "
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* X KAPAT */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="
          absolute top-4 right-4 sm:top-6 sm:right-6
          z-[10001]
          w-12 h-12
          rounded-full
          bg-red-600
          text-white
          text-2xl
          flex items-center justify-center
          hover:bg-red-700
          transition
        "
        aria-label="Kapat"
      >
        ✕
      </button>

      {/* SOL OK */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="
          absolute left-2 sm:left-6
          top-1/2 -translate-y-1/2
          z-[10001]
          w-12 h-12 sm:w-14 sm:h-14
          rounded-full
          bg-black/60
          text-white
          text-5xl
          flex items-center justify-center
          hover:bg-orange-500
          transition
        "
        aria-label="Önceki"
      >
        ‹
      </button>

      {/* İÇERİK */}
      <div
        className="
          w-full h-full
          flex flex-col
          items-center justify-center
          px-14 sm:px-24
          py-16
        "
        onClick={(e) => e.stopPropagation()}
      >
        {type === "video" ? (
          <video
            key={image}
            src={image}
            controls
            autoPlay
            playsInline
            className="
              max-w-full
              max-h-[85vh]
              w-auto
              h-auto
              object-contain
              rounded-lg
              bg-black
            "
          />
        ) : (
          <img
            key={image}
            src={image}
            alt={title}
            draggable={false}
            onLoad={() => setIsImageLoaded(true)}
            className={`
              max-w-full
              max-h-[92vh]
              w-auto
              h-auto
              object-contain
              rounded-lg
              select-none
              transition-opacity
              duration-150
              ${isImageLoaded ? "opacity-100" : "opacity-0"}
            `}
          />
        )}

        {title && isImageLoaded && (
          <h2
            className="
              mt-4
              text-white
              text-base
              sm:text-xl
              md:text-2xl
              font-bold
              text-center
              max-w-full
            "
          >
            {title}
          </h2>
        )}
      </div>

      {/* SAĞ OK */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="
          absolute right-2 sm:right-6
          top-1/2 -translate-y-1/2
          z-[10001]
          w-12 h-12 sm:w-14 sm:h-14
          rounded-full
          bg-black/60
          text-white
          text-5xl
          flex items-center justify-center
          hover:bg-orange-500
          transition
        "
        aria-label="Sonraki"
      >
        ›
      </button>
    </div>
  );
}