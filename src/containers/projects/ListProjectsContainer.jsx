import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProjects, currentProjectActive } from "../../redux/actions/projects/actions";

import ListProjects from "../../components/projects/ListProjects";

function ListProjectsContainer(props) {
  const { getProjects } = props;

  useEffect(() => {
    const projects = [
      { id: 1, name: "React" },
      { id: 2, name: "Vue" },
      { id: 3, name: "Angular" },
      { id: 4, name: "Nodejs" }
    ];

    getProjects(projects);
  }, [getProjects]);


  const currentProject = (project) => {
    props.currentProjectActive(project);
  }

  if (props.projects.length === 0) return null;

  return <ListProjects projects={props.projects} currentProject={currentProject} />;
}

const mapStateToProps = state => {
  const { projects } = state.ProjectsReducer;
  return {
    projects
  };
};

const mapDispatchToProps = {
  getProjects,
  currentProjectActive
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListProjectsContainer);
