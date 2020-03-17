import React from "react";
import Project from "../projects/Project";

function ListProjects({projects, currentProject}) {
  
  return (
    <ul className="list-projects">
        {projects.map((project, index) => (
            <Project project={project} currentProject={currentProject}  key={index} />
        ))}
    </ul>
  );
}

export default ListProjects;
