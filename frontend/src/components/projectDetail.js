import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/projects/${id}`)
      .then((response) => response.json())
      .then((data) => setProject(data))
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
      <a href={project.project_url} target="_blank" rel="noopener noreferrer">Visit Project</a>
    </div>
  );
};

export default ProjectDetail;
