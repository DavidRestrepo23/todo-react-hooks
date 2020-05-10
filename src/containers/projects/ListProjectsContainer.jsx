import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProjects, currentProjectActive } from "../../redux/actions/projects/actions";
import { showAlert, hideAlert } from '../../redux/actions/alerts/actions';
import ListProjects from "../../components/projects/ListProjects";

function ListProjectsContainer(props) {

  useEffect(() => {

    if (props.message) {
      props.showAlert(props.message.msg, props.message.category);
    }

    props.getProjects();
  }, []);

  const currentProject = (project) => {
    props.currentProjectActive(project);
  }

  if (props.projects.length === 0) return null;

  return <ListProjects projects={props.projects} currentProject={currentProject} alert={props.message} />;
}

const mapStateToProps = state => {

  const { projects, message } = state.ProjectsReducer;

  return {
    projects,
    message
  };
};

const mapDispatchToProps = {
  getProjects,
  currentProjectActive,
  showAlert,
  hideAlert
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListProjectsContainer);
