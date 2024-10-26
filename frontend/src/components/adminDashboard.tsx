import React, { useState, useEffect } from "react";
import "./adminDashboard.css";

interface Project {
  id: number;
  title: string;
  description: string;
  image_url: string;
  project_url: string;
}

const AdminDashboard: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [projectUrl, setProjectUrl] = useState("");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const response = await fetch("http://localhost:8000/projects");
    const data = await response.json();
    setProjects(data);
  };

  const handleAddProject = async () => {
    const newProject = { title, description, image_url: imageUrl, project_url: projectUrl };
    await fetch("http://localhost:8000/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProject),
    });
    fetchProjects();
    resetForm();
  };

  const handleDeleteProject = async (id: number) => {
    await fetch(`http://localhost:8000/projects/${id}`, { method: "DELETE" });
    fetchProjects();
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setImageUrl("");
    setProjectUrl("");
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      
      <div className="project-form">
        <h3>Add New Project</h3>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="text" placeholder="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        <input type="text" placeholder="Project URL" value={projectUrl} onChange={(e) => setProjectUrl(e.target.value)} />
        <button onClick={handleAddProject}>Add Project</button>
      </div>

      <div className="project-list">
        <h3>Existing Projects</h3>
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <h4>{project.title}</h4>
            <button onClick={() => handleDeleteProject(project.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
