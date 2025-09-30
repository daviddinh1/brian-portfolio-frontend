import Image from "next/image";
import styles from "./vanillaCss/tape.module.css";

interface PolaroidProps {
  imageUrl: string;
  title?: string;
  description?: string;
}

export default function Polaroid({
  imageUrl,
  title,
  description,
}: PolaroidProps) {
  return (
    <>
      <div className="bg-gray-50 p-4 shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300 hover:shadow-xl w-[50vw] mx-auto pt-8 group relative">
        <div className={styles.tapeMasking}></div>

        <div className="relative w-full aspect-square bg-gray-200 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title || "Photo"}
            width={1080}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-67">
            <div className="text-center px-6">
              {title && (
                <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
              )}
              {description && (
                <p className="text-sm text-white/90">{description}</p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-3 text-center">
          {title && (
            <h3 className="text-sm font-medium text-gray-800">{title}</h3>
          )}
        </div>
      </div>
    </>
  );
}
