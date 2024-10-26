import React, { useState, useEffect } from "react";
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
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  useEffect(() => {
    setFilteredProjects(
      projects.filter((project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, projects]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
        <div className="project-list">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image_url} alt={project.title} />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <Link to={`/projects/${project.id}`}>View More</Link>
            </div>
          ))}
        </div>
    </div>
  );
};

export default ProjectList;
