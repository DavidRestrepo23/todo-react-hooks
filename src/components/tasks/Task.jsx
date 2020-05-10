import React from "react";

const Task = ({
  task,
  deleteTask,
  handleChangeStatusTask,
  handleSelectTask
}) => {
  return (
    <li className="task shadow">
      <p className={task.state === true ? "task-strikes" : null}>
        {task.name}
      </p>

      <div className="status">
        {task.state ? (
          <button
            type="button"
            onClick={e => handleChangeStatusTask(task)}
            className="complete"
          >
            Complete
          </button>
        ) : (
            <button
              type="button"
              onClick={e => handleChangeStatusTask(task)}
              className="incomplete"
            >
              Incomplete
          </button>
          )}
      </div>
      <div className="actions">
        <button
          type="button"
          onClick={e => handleSelectTask(task)}
          className="btn btn-primary"
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={e => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
