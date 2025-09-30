import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="h-screen w-500 flex flex-col items-center justify-center gap-4">
        <Image
          src="/brian_0003.png"
          alt="Brian image not working"
          width={300}
          height={400}
        />

        <div>
          <p className="text-center text-bold text-3xl">
            Scroll to explore my Creations
          </p>
          <div className="animate-bounce text-center mt-2 text-3xl">↓</div>
        </div>
      </div>
    </>
  );
}
