import React from "react";
import { Link } from "react-router-dom";
import "./projectList.css";

interface Project {
  id: number;
  title: string;
  description: string;
  image_url: string;
}

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <img src={project.image_url} alt={project.title} />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <Link to={`/projects/${project.id}`}>View More</Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
