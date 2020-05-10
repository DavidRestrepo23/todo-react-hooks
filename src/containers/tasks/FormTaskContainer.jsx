import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addTask, validateTask, updateTask } from "../../redux/actions/tasks/actions";
import FormTask from "../../components/tasks/FormTask";


const FormTaskContainer = props => {



  const [task, setTask] = useState({
    name: "",
    state: false
  });

  useEffect(() => {
    if (props.currentTask !== null) {
      setTask(props.currentTask);
    } else {
      setTask({
        name: ''
      });
    }
  }, [props.currentTask]);

  const handleChangeForm = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitForm = e => {
    e.preventDefault();

    if (task.name.trim() === "") {
      props.validateTask();
      return;
    }

    if (props.currentTask === null) {
      task.proyect_id = props.currentProject[0]._id;
      props.addTask(task);
    } else {
      props.updateTask(task);
    }

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
        task={task.name}
        currentTask={props.currentTask}
      />
    );
  }

  return <FormTask />;
};

const mapStateToProps = state => {
  const { currentProject } = state.ProjectsReducer;
  const { errorEmptyTask, currentTask } = state.TasksReducer;

  return {
    currentProject,
    errorEmptyTask,
    currentTask
  };
};

const mapDispatchToProps = {
  addTask,
  validateTask,
  updateTask
};

export default connect(mapStateToProps, mapDispatchToProps)(FormTaskContainer);
