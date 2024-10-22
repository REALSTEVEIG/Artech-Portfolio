import React, { useEffect, useState } from "react";
import "./App.css";
import ProjectList from "./components/projectList";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>My Portfolio</h1>
      </header>
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
