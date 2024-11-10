"use client";

import Image from "next/image";
import Link from "next/link";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa"; // React Icons

import styles from "@/app/page.module.css";

export default function Projects() {
  const projects = [
    {
      title: "Static Resume Builder",
      description: "A static resume builder using HTML, CSS, and TypeScript.",
      image: "/static-resume.png",
      link: "https://updated-static-resume-builder.vercel.app/",
      tech: [<FaHtml5 />, <FaCss3Alt />, <FaNodeJs />] // Tech stack
    },
    {
      title: "Dynamic Resume Builder",
      description: "A dynamic resume builder using HTML, CSS, and TypeScript.",
      image: "/dynamic-resume-builder.PNG",
      link: "https://updated-dynamic-resume-builder.vercel.app/",
      tech: [<FaHtml5 />, <FaCss3Alt />, <FaNodeJs />] // Tech stack
    },
    {
      title: "Editable Resume with Unique Path",
      description: "Editable resume with a unique path and shareable link.",
      image: "/resume-builder-with-unique-path.png",
      link:"updated-unique-path-and-link.vercel.app/",
      tech: [<FaHtml5 />, <FaCss3Alt />, <FaNodeJs />] // Tech stack
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio built with Next.js.",
      image: "/portfolio.png",
      link: "",
      tech: [<FaReact />, <FaCss3Alt />, <FaHtml5 />] // Tech stack for Next.js
    },
  ];

  return (
    <section className={styles.projectsSection}>
      <h2>Projects Portfolio</h2>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectItem}>
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className={styles.projectImage}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.techIcons}>
              {project.tech.map((icon, idx) => (
                <span key={idx} className={styles.techIcon}>
                  {icon}
                </span>
              ))}
            </div>
            <Link href={project.link} className={styles.projectLink}>
              View Project
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
