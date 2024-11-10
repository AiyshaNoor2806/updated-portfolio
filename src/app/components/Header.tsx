"use client";

import Image from "next/image";
import styles from "@/app/page.module.css";
import Link from "next/link";
import { useEffect } from "react";
import "aos/dist/aos.css";  // Import AOS styles globally

export default function Header() {
  useEffect(() => {
    // Dynamically import AOS only on the client side
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({
          duration: 1200,
        });
      }).catch((error) => {
        console.error("Error loading AOS:", error);
      });
    }
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.navbar}>
          <div className={styles.container}>
            <div className={styles.imagecontainer} data-aos="fade-left">
              <Image
                src={"/my-profile.png"}
                alt="image"
                width={300}
                height={300}
                className={styles.profileImage}
              />
            </div>
            <div className={styles.introduction} data-aos="fade-right">
              <h1>I am Aiysha Noor</h1>
              <p>
                I am a passionate web developer, specializing in frontend
                development and UI/UX design. I love creating beautiful and
                functional websites! I am Hafiza and Aalima also so I can teach
                Quran e Paak and Islamic courses.
              </p>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className={styles.navMenu}>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/resume">Resume</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
