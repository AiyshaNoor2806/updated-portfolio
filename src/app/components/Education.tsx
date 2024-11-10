"use client";

import Image from "next/image";
import styles from "@/app/page.module.css";

export default function Education() {
  const certificates = [
    {
      title: "Dars e Nizami Certificate",
      description: "Certification in Dars-e-Nizami with specialization in Islamic studies.",
      image: "/dars-e-nizami.png.jpeg",
    },
    {
      title: "HTML & CSS Certification",
      description: "Certification in HTML and CSS for web development.",
      image: "/html-css.png.jpeg",
    },
  ];

  return (
    <section className={styles.educationSection}>
      <h2>Education & Certifications</h2>
      <div className={styles.certificatesContainer}>
        {certificates.map((certificate, index) => (
          <div key={index} className={styles.certificateItem}>
            <Image
              src={certificate.image}
              alt={certificate.title}
              width={250}
              height={350}
              className={styles.certificateImage}
            />
            <h3>{certificate.title}</h3>
            <p>{certificate.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
