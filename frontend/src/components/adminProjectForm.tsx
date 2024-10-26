import React, { useState } from "react";
import "./adminProjectForm.css";

interface Project {
  id?: number;
  title: string;
  description: string;
  image_url: string;
  project_url: string;
}

interface AdminProjectFormProps {
  project?: Project;
  onSave: (project: Project) => void;
}

const AdminProjectForm: React.FC<AdminProjectFormProps> = ({ project, onSave }) => {
  const [formData, setFormData] = useState<Project>({
    title: project?.title || "",
    description: project?.description || "",
    image_url: project?.image_url || "",
    project_url: project?.project_url || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
      <input name="image_url" value={formData.image_url} onChange={handleChange} placeholder="Image URL" required />
      <input name="project_url" value={formData.project_url} onChange={handleChange} placeholder="Project URL" required />
      <button type="submit">{project ? "Update" : "Create"} Project</button>
    </form>
  );
};

export default AdminProjectForm;
