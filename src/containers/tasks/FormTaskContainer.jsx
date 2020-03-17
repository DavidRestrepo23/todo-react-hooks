import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask, validateTask } from "../../redux/actions/tasks/actions";
import FormTask from "../../components/tasks/FormTask";
import uuid from "uuid";

const ListTaskContainer = props => {
  const [task, setTask] = useState({
    name: "",
    state: false
  });

  const { name } = task;

  const handleChangeForm = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitForm = e => {
    e.preventDefault();

    if (name.trim() === "") {
      props.validateTask();
      return;
    }

    task.proyectId = props.currentProject[0].id;
    task.id = uuid.v4();

    props.addTask(task);
    setTask({
      name: ""
    });
  };

  if (props.currentProject != null) {
    return (
      <FormTask
        showForm={true}
        handleSubmitForm={handleSubmitForm}
        handleChangeForm={handleChangeForm}
        errorEmptyTask={props.errorEmptyTask}
        task={name}
      />
    );
  }

  return <FormTask />;
};

const mapStateToProps = state => {
  const { currentProject } = state.ProjectsReducer;
  const { errorEmptyTask } = state.TasksReducer;

  return {
    currentProject,
    errorEmptyTask
  };
};

const mapDispatchToProps = {
  addTask,
  validateTask
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTaskContainer);
