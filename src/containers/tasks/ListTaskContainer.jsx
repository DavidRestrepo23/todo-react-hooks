import React from "react";
import { connect } from "react-redux";
import { deleteProject } from "../../redux/actions/projects/actions";
import {
  deleteTask,
  changeStatusTask,
  currentTask
} from "../../redux/actions/tasks/actions";
import ListTask from "../../components/tasks/ListTask";

const ListTaskContainer = props => {
  if (props.currentProject != null) {
    const deleteProject = projectId => {
      props.deleteProject(projectId);
    };

    /**
     * Delete task
     * @param {*} taskId
     */
    const deleteTask = taskId => {
      props.deleteTask(taskId);
    };

    /**
     * Change status task
     * @param {*} task
     */
    const handleChangeStatusTask = task => {
      if (task.state) {
        task.state = false;
      } else {
        task.state = true;
      }

      props.changeStatusTask(task);
    };

    /**
     * Select current task
     * @param {*} task 
     */
    const handleSelectTask = task => {
      props.currentTask(task);
    };

    /**
     * Get current project
     */
    const [project] = props.currentProject;

    /**
     * Filter tasks by projectId
     */
    const tasksFilter = props.tasks.filter(
      item => item.proyectId === project.id
    );

    return (
      <ListTask
        project={project}
        deleteProject={deleteProject}
        tasks={tasksFilter}
        deleteTask={deleteTask}
        handleChangeStatusTask={handleChangeStatusTask}
        handleSelectTask={handleSelectTask}
      />
    );
  }

  return <ListTask tasks={null} />;
};

const mapStateToProps = state => {
  const { currentProject } = state.ProjectsReducer;
  const { tasks } = state.TasksReducer;
  return {
    currentProject,
    tasks
  };
};

const mapDispatchToProps = {
  deleteProject,
  deleteTask,
  changeStatusTask
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTaskContainer);
