import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoFilm from "@/components/VideoFilm";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <Hero />
      <VideoFilm />
      <AboutSection />
      <Footer />
    </div>
  );
}
