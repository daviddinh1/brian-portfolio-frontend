import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="h-screen w-screen flex items-center justify-center">
          <Image
            src="/brian_0003.png"
            alt="Brian image not working"
            width={300}
            height={400}
          />
        </div>
      </div>
    </>
  );
}
