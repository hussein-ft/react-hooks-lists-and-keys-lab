
import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import projects from "./data/projects";
import { username, city, color, bio, links } from "./data/user";

function App() {
  return (
    <div>
      <NavBar />
      <Home name={username} city={city} color={color} />
      <About bio={bio} links={links} />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
