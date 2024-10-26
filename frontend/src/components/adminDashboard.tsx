import React, { useState, useEffect } from "react";
import AdminProjectForm from "./adminProjectForm";
import "./adminDashboard.css";

interface Project {
  id?: number;
  title: string;
  description: string;
  image_url: string;
  project_url: string;
}

const AdminDashboard: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch("http://localhost:8000/projects");
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const createProject = async (project: Project) => {
    try {
      await fetch("http://localhost:8000/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
      });
      fetchProjects();
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  const updateProject = async (project: Project) => {
    if (project.id !== undefined) {
      try {
        await fetch(`http://localhost:8000/projects/${project.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(project),
        });
        fetchProjects();
      } catch (error) {
        console.error("Error updating project:", error);
      }
    }
  };

  const deleteProject = async (id?: number) => {
    if (id !== undefined) {
      try {
        await fetch(`http://localhost:8000/projects/${id}`, {
          method: "DELETE",
        });
        fetchProjects();
      } catch (error) {
        console.error("Error deleting project:", error);
      }
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <button className="add-project-button" onClick={() => setSelectedProject(null)}>
        Add New Project
      </button>
      {selectedProject ? (
        <AdminProjectForm
          project={selectedProject}
          onSave={(project) => {
            if (project.id) {
              updateProject(project);
            } else {
              createProject(project);
            }
            setSelectedProject(null);
          }}
        />
      ) : (
        <AdminProjectForm onSave={createProject} />
      )}
      <div className="project-list">
        {projects.map((project) => (
          <div className="project-item" key={project.id}>
            <h3>{project.title}</h3>
            <button onClick={() => setSelectedProject(project)}>Edit</button>
            <button onClick={() => deleteProject(project.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
