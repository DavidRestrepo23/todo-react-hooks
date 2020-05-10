import React from "react";
import Project from "../projects/Project";

function ListProjects({ projects, currentProject, alert }) {

  return (
    <div>
      {alert ? (<div className={`alert ${alert.category}`}>{alert.msg}</div>) : null}
      <ul className="list-projects">
        {projects.map((project, index) => (
          <Project project={project} currentProject={currentProject} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default ListProjects;
