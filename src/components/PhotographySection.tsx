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
    <div className="relative w-screen h-screen">
      {/* Main Carousel Container */}
      <div className="relative h-full w-full overflow-hidden">
        {/* Background Gradient */}
        <div
          className={`absolute inset-0 transition-all duration-700 ${projects[currentIndex].bgColor}`}
        />

        {/* Image Container */}
        <div className="relative h-full w-full">
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
                {/* <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover opacity-80"
                /> */}
                <Image src={project.image} alt={project.title} fill />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                  <div className="max-w-2xl">
                    <h1 className="text-5xl md:text-5xl lg:text-8xl font-bold mb-4">
                      {project.category}
                    </h1>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                      {project.title}
                    </h2>
                    <button className="text-2xl mt-4 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white hover:bg-white/20 transition-all duration-300 hover:scale-105">
                      {project.description}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-all duration-300 hover:scale-110 drop-shadow-lg"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-all duration-300 hover:scale-110 drop-shadow-lg"
          aria-label="Next image"
        >
          <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentIndex
                ? "w-8 h-2 bg-white rounded-full"
                : "w-2 h-2 bg-white/40 rounded-full hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotographySection;
