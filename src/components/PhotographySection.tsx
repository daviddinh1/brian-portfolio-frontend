"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const PhotographySection = () => {
  const projects = [
    {
      id: 1,
      title: "Photo 1",
      category: "Photography",
      description: "See more",
      image: "/brian_0003.png",
      bgColor: "bg-gradient-to-br from-gray-900 to-gray-700",
    },
    {
      id: 2,
      title: "Photo 2",
      category: "Photography",
      description: "See more",
      image: "/vercel.svg",
      bgColor: "bg-gradient-to-br from-red-900 to-black",
    },
    {
      id: 3,
      title: "Photo 3",
      category: "Photography",
      description: "Click Here",
      image: "/file.svg",
      bgColor: "bg-gradient-to-br from-blue-900 to-gray-800",
    },
    {
      id: 4,
      title: "Photo 4",
      category: "Photograph",
      description: "Click Here",
      image: "/globe.svg",
      bgColor: "bg-gradient-to-br from-purple-900 to-gray-900",
    },
    {
      id: 5,
      title: "Photo 5",
      category: "Photography",
      description: "See more",
      image: "/window.svg",
      bgColor: "bg-gradient-to-br from-green-900 to-gray-800",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-5/6">
      <div className="flex items-center justify-center min-h-screen bg-gray-50 p-8">
        <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] shadow-2xl">
          {/* Polaroid Frame Overlay */}
          <div className="absolute inset-0 z-50 pointer-events-none">
            {/* Top border */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-white shadow-lg" />
            {/* Bottom border */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-white shadow-lg" />
            {/* Left border */}
            <div className="absolute top-0 bottom-0 left-0 w-12 bg-white" />
            {/* Right border */}
            <div className="absolute top-0 bottom-0 right-0 w-12 bg-white" />
          </div>

          {/* Washi Tape */}
          <div className="absolute -top-30 -left-32 w-77 h-77 z-70">
            <Image
              src="/washi-tape.png"
              alt="Washi tape"
              fill
              className="object-contain transform -rotate-45"
            />
          </div>

          <div className="absolute -bottom-30 -right-30 w-77 h-77 z-70">
            <Image
              src="/washi-tape.png"
              alt="Washi tape"
              fill
              className="object-contain transform -rotate-45"
            />
          </div>

          {/* Main Carousel Container */}
          <div className="relative h-full w-full overflow-hidden">
            {/* Background Gradient */}
            <div
              className={`absolute inset-0 transition-all duration-700 ${projects[currentIndex].bgColor}`}
            />

            {/* Image Container - Inset to fit within polaroid frame */}
            <div
              className="relative h-full w-full"
              style={{
                margin: "48px 48px 64px 48px",
                height: "calc(100% - 112px)",
                width: "calc(100% - 96px)",
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentIndex
                      ? "opacity-100 translate-x-0"
                      : index < currentIndex
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                  }`}
                >
                  {/* Image with Overlay */}
                  <div className="relative h-full w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />

                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-12 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-all duration-300 hover:scale-110 drop-shadow-lg z-40"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-12 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-all duration-300 hover:scale-110 drop-shadow-lg z-40"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>

          {/* Text Content on Bottom Border */}
          <div className="absolute bottom-0 left-0 right-0 h-16 flex items-center justify-start pl-13 z-60 bg-white">
            <div className="text-left text-gray-800">
              <div className="text-4xl font-semibold">
                {projects[currentIndex].title}
              </div>
              <div className="text-2xl text-gray-600 -mt-2">
                {projects[currentIndex].category}
              </div>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex justify-center items-center gap-2 z-50">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? "w-6 h-1.5 bg-gray-600 rounded-full"
                    : "w-1.5 h-1.5 bg-gray-400 rounded-full hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotographySection;
