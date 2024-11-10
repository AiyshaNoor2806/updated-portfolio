"use client";

import styles from "@/app/page.module.css";

export default function ProfessionalExperience() {
  const experiences = [
    {
      title: "Teacher",
      company: "Madersa E Aiysha Siddiqua",
      duration: "July 2017 - Present",
      responsibilities: [
        "Teaching Quran Paak to students of all ages.",
      ],
    },
    {
      title: "Teacher",
      company: "Faizan e Aiysha Siddiqua Online Institute",
      duration: "Aug 2018 - Dec 2019",
      responsibilities: [
        "Teaching Quran e Paak with Urdu and English communication.",
        "Providing Tafseer (explanation) of Quran.",
      ],
    },
    {
      title: "Teacher",
      company: "Saylani Online Academy",
      duration: "Oct 2023 - Present",
      responsibilities: [
        "Conducting online Quran classes with comprehensive explanation.",
      ],
    },
  ];

  return (
    <section className={styles.experienceSection}>
      <h2>Professional Experience</h2>
      <div className={styles.experienceContainer}>
        {experiences.map((experience, index) => (
          <div key={index} className={styles.experienceItem}>
            <h3>{experience.title}</h3>
            <h4>{experience.company}</h4>
            <p className={styles.duration}>{experience.duration}</p>
            <ul>
              {experience.responsibilities.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
