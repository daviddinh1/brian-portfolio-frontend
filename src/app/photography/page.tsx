import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Polaroid from "@/components/Polaroid";

export default function Photography() {
  const imgs = [
    // {
    //   id: 0,
    //   url: "/brianPhotos/image1.jpg",
    //   title: "1st image",
    //   description: "cool picture",
    // },
    {
      id: 1,
      url: "/brianPhotos/image2.jpg",
      title: "1st image",
      description: "cool picture",
    },
    // {
    //   id: 2,
    //   url: "/brianPhotos/image3.jpg",
    //   title: "3rd image",
    //   description: "cool picture",
    // },
  ];
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <Header />
      <div className="h-screen flex flex-col items-center">
        <div className="text-black text-5xl">
          Here is a collection of my photography
        </div>
        <div className="w-1/2 h-500 flex justify-center items-center gap-10">
          {imgs.map((img, index) => (
            <Polaroid
              key={img.id}
              imageUrl={img.url}
              title={img.title}
              description={img.description}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
