// Import React and other necessary modules
import React from 'react';

import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from './Projectcard';

// Define the Projects component
export const Projects = () => {
    return (
        <section className={styles.container} id="projects">
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>
          {projects.map((project, id) => {
            return <ProjectCard key={id} project={project} />;
          })}
        </div>
      </section>
    );
};