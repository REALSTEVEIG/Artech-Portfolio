import React from "react";
import "./projectList.css";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <img src={project.image_url} alt={project.title} />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a href={project.project_url} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
