"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function VideoFilm() {
  const videoSection = [
    {
      id: 1,
      videoUrl: "https://www.youtube.com/watch?v=ogaqMfApnTg",
      title: "test1",
    },
    {
      id: 2,
      videoUrl: "https://www.youtube.com/watch?v=u6IZwnLuG5I&t=313s",
      title: "test2",
    },
    {
      id: 3,
      videoUrl: "https://www.youtube.com/watch?v=u6IZwnLuG5I&t=313s",
      title: "test3",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextFrame = () => {
    setCurrentIndex((prev) => (prev + 1) % videoSection.length);
  };

  const prevFrame = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + videoSection.length) % videoSection.length
    );
  };

  const getYouTubeEmbedUrl = (url) => {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white-100 p-8">
      {/* Top Film Strip */}
      <div className="relative w-[90vw] h-30">
        <Image
          src="/vintage-film-reel.jpg"
          alt="Film strip top"
          width={800}
          height={64}
          className="w-full h-full object-cover"
        />
        {/* Top Left Washi Tape */}
        <div className="absolute -top-30 -left-30 w-77 h-77 z-70">
          <Image
            src="/washi-tape.png"
            alt="Washi tape"
            fill
            className="object-contain transform -rotate-45"
          />
        </div>
      </div>

      <div className="relative w-[90vw] h-[50vh] bg-black flex justify-center items-center">
        {/* Image Container */}
        <div className="relative w-full h-full flex justify-center items-center p-4">
          {videoSection.map((video, index) => (
            <div
              key={video.id}
              className={`absolute inset-4 transition-all duration-400 ease-in-out ${
                index === currentIndex
                  ? "opacity-100 translate-x-0"
                  : index < currentIndex
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
              }`}
            >
              {/* this is where you edit the film */}
              <iframe
                src={getYouTubeEmbedUrl(video.videoUrl)}
                title={video.title}
                className="w-full h-full object-contain" // Add w-full h-full
                frameBorder="0"
                allowFullScreen
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevFrame}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-all hover:scale-110 z-20"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <button
          onClick={nextFrame}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-all hover:scale-110 z-20"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      {/* Bottom Film Strip */}
      <div className="relative w-[90vw] h-30">
        <Image
          src="/vintage-film-reel-bottom.jpg"
          alt="Film strip bottom"
          width={800}
          height={64}
          className="w-full h-full object-cover"
        />
        {/* Bottom Right Washi Tape */}
        <div className="absolute -bottom-30 -right-30 w-77 h-77 z-70">
          <Image
            src="/washi-tape.png"
            alt="Washi tape"
            fill
            className="object-contain transform -rotate-45"
          />
        </div>
      </div>

      {/* Film Reel Progress */}
      {/* <div className="mt-6 flex items-center justify-center gap-4">
        <div className="text-yellow-400 font-mono text-sm">REEL PROGRESS</div>
        <div className="flex-1 max-w-md bg-gray-700 h-2 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-500"
            style={{
              width: `${((currentIndex + 1) / videoSection.length) * 100}%`,
            }}
          ></div>
        </div>
        <div className="text-yellow-400 font-mono text-sm">
          {currentIndex + 1}/{videoSection.length}
        </div>
      </div> */}
    </div>
  );
}
