import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectList from "./components/projectList";
import ProjectDetail from "./components/projectDetail";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <Router>
      <div className="App">
        <header>
          <h1>My Portfolio</h1>
        </header>
        <Routes>
          <Route path="/" element={<ProjectList projects={projects} />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
