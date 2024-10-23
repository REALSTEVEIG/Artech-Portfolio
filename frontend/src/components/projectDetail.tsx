import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  description: string;
  image_url: string;
  project_url: string;
}

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    fetch(`http://localhost:8000/projects/${id}`)
      .then((response) => response.json())
      .then((data: Project) => setProject(data))
      .catch((error) => console.error("Error fetching project: ", error));
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
      <img src={project.image_url} alt={project.title} />
      <p>{project.description}</p>
      <a
        href={project.project_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Project
      </a>
    </div>
  );
};

export default ProjectDetail;
