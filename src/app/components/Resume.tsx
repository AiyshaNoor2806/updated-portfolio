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
            <div data-aos="fade-down-right">
              <Image
                src={"/resume-png.png"}
                alt="My Resume"
                width={600} // Fixed size
                height={900} // Fixed size
                className={styles.resumeImage}
              />
            </div>
            <div data-aos="fade-down-right">
              <Image
                src={"/resume2-png.png"}
                alt="My Resume"
                width={600} // Fixed size
                height={900} // Fixed size
                className={styles.resumeImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
