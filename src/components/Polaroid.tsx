"use client";

import { useState } from "react";
import { Play } from "lucide-react";

interface PolaroidProps {
  youtubeUrl: string;
  title?: string;
  description?: string;
}

export default function Polaroid({
  youtubeUrl,
  title,
  description,
}: PolaroidProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const getYouTubeVideoId = (url: string): string | null => {
    const regex =
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const getThumbnailUrl = (videoId: string): string => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const getEmbedUrl = (videoId: string): string => {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  const videoId = getYouTubeVideoId(youtubeUrl);

  if (!videoId) {
    return (
      <div className="bg-white p-4 shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300 w-[50vw] mx-auto">
        <div className="bg-gray-200 w-full aspect-video flex items-center justify-center">
          <p className="text-gray-500">Invalid YouTube URL</p>
        </div>
        <div className="mt-3 text-center">
          <p className="text-sm text-gray-600">Error loading video</p>
        </div>
      </div>
    );
  }

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="bg-white p-4 shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300 hover:shadow-xl w-[50vw] mx-auto pt-8">
      <div className="relative w-full aspect-video bg-black overflow-hidden">
        {!isPlaying ? (
          <>
            <img
              src={getThumbnailUrl(videoId)}
              alt={title || "YouTube Video"}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 cursor-pointer hover:bg-opacity-20 transition-all duration-200"
              onClick={handlePlay}
            >
              <div className="bg-red-600 rounded-full p-3 hover:bg-red-700 transition-colors duration-200">
                <Play className="w-6 h-6 text-white fill-current ml-1" />
              </div>
            </div>
          </>
        ) : (
          <iframe
            src={getEmbedUrl(videoId)}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
      <div className="mt-3 text-center">
        {title && (
          <h3 className="text-sm font-medium text-gray-800 mb-1">{title}</h3>
        )}
        {description && <p className="text-xs text-gray-600">{description}</p>}
      </div>
    </div>
  );
}
