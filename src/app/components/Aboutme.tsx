import styles from "@/app/page.module.css";

export default function AboutMe() {
  return (
    <section className={styles.aboutMeSection}>
      <h2>About Me</h2>
      <div className={styles.aboutMeContent}>
        <p>
          Hello, I am Aiysha Noor, a passionate web developer with expertise in front-end technologies such as HTML, CSS, TypeScript, and React. I have a strong foundation in building responsive and dynamic websites.
        </p>
        <p>
          I enjoy solving problems, learning new technologies, and contributing to innovative projects. With my experience in building various projects, including resume builders and personal portfolios, I am always looking to expand my skill set and create impactful user experiences.
        </p>
        <p>
          When I am not coding, I enjoy reading, exploring new tech trends, and collaborating with others on open-source projects.
        </p>
      </div>
      </section>
  );
}
