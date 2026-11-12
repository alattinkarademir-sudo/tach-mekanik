"use client";

import { useEffect, useState } from "react";

let audio: HTMLAudioElement | null = null;

export default function BackgroundMusic() {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!audio) {
      audio = new Audio("/music/piano.mp3");
      audio.loop = true;
      audio.preload = "auto";
      audio.volume = 0.35;
    }

    setPlaying(!audio.paused);
  }, []);

  const toggleMusic = async () => {
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
        setPlaying(true);
      } else {
        audio.pause();
        setPlaying(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-2xl text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-orange-600"
      title={playing ? "Müziği Kapat" : "Müziği Aç"}
    >
      {playing ? "🔊" : "🎵"}
    </button>
  );
}