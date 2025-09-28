import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100 bottom-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 md:h-20 gap-6 md:gap-8">
          <Link href="https://www.instagram.com/brian.ayooo/?hl=en">
            <Image
              src="/icons/insta-sketch.png"
              width={40}
              height={40}
              alt="Instagram"
              className="hover:opacity-70 transition-opacity cursor-pointer"
            />
          </Link>
          <Link href="https://www.youtube.com/@BrianAriyo">
            <Image
              src="/icons/youtube-sketch.png"
              width={40}
              height={40}
              alt="YouTube"
              className="hover:opacity-70 transition-opacity cursor-pointer"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/brianariyo">
            <Image
              src="/icons/linkedin-sketch.png"
              width={40}
              height={40}
              alt="LinkedIn"
              className="hover:opacity-70 transition-opacity cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
