import React from "react";
import styles from "./vanillaCss/NewspaperComponent.module.css"; // Import the CSS file

const NewspaperComponent: React.FC = () => {
  return (
    <div className={styles.tornPaperContainer}>
      <div className={styles.tornPaper}>
        <div className={styles.paperContent}>
          {/* Paper holes for notebook effect */}
          <div className={styles.paperHoles}>
            <div className={styles.paperHole}></div>
            <div className={styles.paperHole}></div>
            <div className={styles.paperHole}></div>
          </div>

          {/* Sample content - you can replace this with your own */}
          <h2 className={styles.paperTitle}>Video Title</h2>
          <p className={styles.paperText}>
            Welcome to my creative space! Im a{" "}
            <span className={styles.paperHighlight}>passionate developer</span>{" "}
            who loves building beautiful and functional web experiences.
          </p>
          <p className={styles.paperText}>
            This torn paper effect represents my journey - each project is like
            a page from my notebook, filled with ideas, sketches, and solutions.
          </p>
          <p className={styles.paperText}>
            Feel free to explore my work and dont hesitate to{" "}
            <span className={styles.paperHighlight}>reach out</span> if youd
            like to collaborate on something amazing together!
          </p>
          <p className={styles.paperText}>
            Best regards,
            <br />
            <span className={styles.paperHighlight}>Your Name</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewspaperComponent;
