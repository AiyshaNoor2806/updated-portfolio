"use client";

import { FaLinkedin, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import styles from "@/app/page.module.css";

export default function Contact() {
  return (
    <section className={styles.contactSection}>
      <h2>Contact Information</h2>
      <div className={styles.contactContainer}>
        <p>
          <FaPhoneAlt className={styles.contactIcon} />
          <strong> Phone:</strong> <a href="tel:+923333093149">+92 333 309 3149</a>
        </p>
        <p>
          <FaEnvelope className={styles.contactIcon} />
          <strong> Email:</strong> <a href="mailto:aiyshaprinces57@gmail.com">aiyshaprinces57@gmail.com</a>
        </p>
        <p>
          <FaLinkedin className={styles.contactIcon} />
          <strong> LinkedIn:</strong>
          <a href="https://www.linkedin.com/in/aiysha-noor-qadri-a085942b6/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bk7t4oYwjSsSZs0%2BpLHTS4Q%3D%3D" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </p>
      </div>
    </section>
  );
}
