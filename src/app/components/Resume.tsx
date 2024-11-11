"use client";

import Image from "next/image";
import styles from "@/app/page.module.css";

export default function Resume() {
  return (
    <section className={styles.resumeSection}>
      <div className={styles.resumeContainer}>
        <div className={styles.resumeItem}>
          <h2>Resume</h2>
          <p>Here is the image of my detailed resume:</p>
          <div className={styles.resumeImageContainer}>
            <Image
              src={"/resume-png.PNG"}
              alt="My Resume"
              width={800}
              height={1200}
              className={styles.resumeImage}
            />
            <Image
              src={"/resume2-png.PNG"}
              alt="My Resume"
              width={800}
              height={1200}
              className={styles.resumeImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
