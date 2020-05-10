import React, { Fragment } from "react";
import Task from "./Task";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListTask = props => {
  const tasksProjects = props.tasks;
  const { deleteTask, handleChangeStatusTask, handleSelectTask } = props;
  return (
    <Fragment>
      <h2>{props.project != null ? props.project.name : "Select a project"}</h2>
      <ul className="list-task">
        {props.tasks != null ? (
          tasksProjects.length === 0 ? (
            <li className="task">
              <p>Without Tasks</p>
            </li>
          ) : (
              <TransitionGroup>
                {tasksProjects.map((task, index) => (
                  <CSSTransition key={index} timeout={500} className="task">
                    <Task
                      task={task}
                      deleteTask={deleteTask}
                      handleChangeStatusTask={handleChangeStatusTask}
                      handleSelectTask={handleSelectTask}
                    />
                  </CSSTransition>
                ))}
              </TransitionGroup>
            )
        ) : null}
      </ul>

      <button
        type="button"
        onClick={e => props.deleteProject(props.project._id)}
        className="btn btn-delete"
      >
        Delete project
      </button>
    </Fragment>
  );
};

export default ListTask;
