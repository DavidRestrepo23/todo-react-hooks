import React, { useState } from "react";
import { connect } from "react-redux";
import NewProject from "../../components/projects/NewProject";
import {
  activeFormStatus,
  addProject,
  showErrorMessage
} from "../../redux/actions/projects/actions";

function NewProjectContainer(props) {
  /**
   * Local state
   */
  const [project, setProject] = useState({
    name: ""
  });

  /**
   * Show form
   */
  const handleClickNewProject = () => {
    props.activeFormStatus();
  };

  /**
   * Listen event change in input
   * @method setProject | update state
   * @param e
   */
  const handleOnChange = e => {
    setProject({
      ...project,
      [e.target.name]: e.target.value
    });
  };

  /**
   * Listen event submit
   * @method props.showErrorMessage | show message error
   * @method props.addProject | add project to array
   * @param e 
   */
  const handleSubmit = e => {
    e.preventDefault();

    if (project.name === "") {
      props.showErrorMessage();
      return;
    } else {
      props.addProject(project);
      setProject({ name: "" });
    }
  };

  return (
    <NewProject
      formInfo={project}
      handleOnChange={handleOnChange}
      handleSubmit={handleSubmit}
      activeForm={props.activeForm}
      handleClickNewProject={handleClickNewProject}
      showError={props.showError}
    />
  );
}

const mapStateToProps = state => {
  const { activeForm, showError } = state.ProjectsReducer;

  return {
    activeForm,
    showError
  };
};

const mapDispatchToProps = {
  activeFormStatus,
  addProject,
  showErrorMessage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewProjectContainer);
