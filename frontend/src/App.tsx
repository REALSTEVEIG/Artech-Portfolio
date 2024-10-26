import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectList from "./components/projectList";
import ProjectDetail from "./components/projectDetail";
import Login from "./components/login";
import Signup from "./components/signup";
import Navbar from "./components/navbar";
import ProtectedRoute from "./components/protectedRoutes";
import { AuthProvider } from "./context/authContext";
import "./App.css";

interface Project {
  id: number;
  title: string;
  description: string;
  image_url: string;
  project_url: string;
}

function App() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/projects")
      .then((response) => response.json())
      .then((data: Project[]) => setProjects(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="App">
          <header>
            <h1>My Portfolio</h1>
          </header>
          <Routes>
            <Route path="/" element={<ProjectList projects={projects} />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <ProjectList projects={projects} />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
