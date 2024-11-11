"use client";

import Image from "next/image";
import Link from "next/link";
import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa"; // React Icons

import styles from "@/app/page.module.css";

export default function Projects() {
  const projects = [
    {
      title: "Static Resume Builder",
      description: "A static resume builder using HTML, CSS, and TypeScript.",
      image: "/static-resume.png",
      link: "https://updated-static-resume-builder.vercel.app/", // Valid link
      tech: [
        { id: "html5-static", icon: <FaHtml5 /> },
        { id: "css3-static", icon: <FaCss3Alt /> },
        { id: "nodejs-static", icon: <FaNodeJs /> },
      ],
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio built with Next.js.",
      image: "/portfolio.png",
      link: "", // Empty link to be handled
      tech: [
        { id: "react-portfolio", icon: <FaReact /> },
        { id: "css3-portfolio", icon: <FaCss3Alt /> },
        { id: "html5-portfolio", icon: <FaHtml5 /> },
      ],
    },
    {
      title: "Dynamic Resume Builder",
      description: "A dynamic resume builder using HTML, CSS, and TypeScript.",
      image: "/dynamic-resume-builder.PNG",
      link: "https://updated-dynamic-resume-builder.vercel.app/", // Valid link
      tech: [
        { id: "html5-dynamic", icon: <FaHtml5 /> },
        { id: "css3-dynamic", icon: <FaCss3Alt /> },
        { id: "nodejs-dynamic", icon: <FaNodeJs /> },
      ],
    },
    {
      title: "Editable Resume with Unique Path",
      description: "Editable resume with a unique path and shareable link.",
      image: "/resume-builder-with-unique-path.png",
      link: "https://updated-unique-path-and-link.vercel.app/", // Ensure the link is valid
      tech: [
        { id: "html5-editable", icon: <FaHtml5 /> },
        { id: "css3-editable", icon: <FaCss3Alt /> },
        { id: "nodejs-editable", icon: <FaNodeJs /> },
      ],
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
              {project.tech.map((techItem) => (
                <span key={techItem.id} className={styles.techIcon}>
                  {techItem.icon}
                </span>
              ))}
            </div>
            {/* Only render Link if there is a valid project link */}
            {project.link ? (
              <Link href={project.link} className={styles.projectLink}>
                View Project
              </Link>
            ) : (
              <span className={styles.projectLink}>Coming Soon</span> // Fallback if no link
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
