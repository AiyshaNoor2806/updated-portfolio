"use client";

import styles from "@/app/page.module.css";

export default function Skills() {
  const technicalSkills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React", level: "75%" },
    { name: "Next.js", level: "70%" },
  ];

  const softSkills = [
    { name: "Problem Solving", level: "90%" },
    { name: "Communication", level: "85%" },
    { name: "Teamwork", level: "80%" },
  ];

  return (
    <section className={styles.skillsSection}>
      <h2>Skills Overview</h2>
      <div className={styles.skillsContainer}>
        {/* Technical Skills */}
        <div className={styles.skillCategory}>
          <h3>Technical Skills</h3>
          <ul>
            {technicalSkills.map((skill, index) => (
              <li key={index}>
                <span>{skill.name}</span>
                <div className={styles.skillBar}>
                  <div className={styles.skillLevel} style={{ width: skill.level }}>
                    <span>{skill.level}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Soft Skills */}
        <div className={styles.skillCategory}>
          <h3>Soft Skills</h3>
          <ul>
            {softSkills.map((skill, index) => (
              <li key={index}>
                <span>{skill.name}</span>
                <div className={styles.skillBar}>
                  <div className={styles.skillLevel} style={{ width: skill.level }}>
                    <span>{skill.level}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
