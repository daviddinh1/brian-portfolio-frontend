import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PhotographySection from "@/components/PhotographySection";
import Polaroid from "@/components/Polaroid";
import VideoFilm from "@/components/VideoFilm";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <Hero />
      <VideoFilm />
      <PhotographySection />
    </div>
  );
}
