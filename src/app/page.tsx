import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PhotographySection from "@/components/PhotographySection";
import Polaroid from "@/components/Polaroid";
import VideoFilm from "@/components/VideoFilm";
import NewspaperWithVideo from "@/components/NewspaperWithVideo";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <Hero />
      <VideoFilm />
      <PhotographySection />
      <NewspaperWithVideo />
      <Footer />
    </div>
  );
}
