import React from "react";
import NewspaperComponent from "./NewspaperComponent";
import styles from "./vanillaCss/tape.module.css";

const NewspaperWithVideo: React.FC = () => {
  return (
    <div className="flex items-start justify-center min-h-screen gap-8 p-8 max-w-7xl mx-auto w-full">
      {/* YouTube Video */}
      <div className="flex-1 max-w-2xl relative">
        <div className={styles.tapeMasking}></div>
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video"
          className="w-full h-64 md:h-80 lg:h-96 rounded-lg shadow-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Your existing newspaper component */}
      <div className="flex-1 relative">
        <div className={styles.tapeMasking}></div>

        <NewspaperComponent />
      </div>
    </div>
  );
};

export default NewspaperWithVideo;
