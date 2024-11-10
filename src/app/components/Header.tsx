"use client";

import Image from "next/image";
import styles from "@/app/page.module.css";

export default function Header() {
  return (
    <header className={styles.header}> 
      <div className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.imagecontainer}>
            <Image
              src={"/my-profile.png"}
              alt="Profile Image"
              width={300}
              height={300}
              className={styles.profileImage}
            />
          </div>
          <div className={styles.introduction}>
            <h1>I am Aiysha Noor</h1>
            <p>
              I am a passionate web developer, specializing in frontend
              development and UI/UX design. I love creating beautiful and
              functional websites! I am Hafiza and Aalima also so I can teach
              Quran e Paak and Islamic courses.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}