import React from "react";

const FormTask = props => {
  if (!props.showForm) return null;
  return (
    <div className="form">
      <form onSubmit={props.handleSubmitForm}>
        <div className="content-input">
          <input
            type="text"
            className="input-text"
            placeholder="Name task..."
            name="name"
            value={props.task}
            onChange={props.handleChangeForm}
          />
        </div>
        <div className="content-input">
          <input
            type="submit"
            className="btn btn-primary btn-submit btn-block"
            value="Add Task"
          />
        </div>
      </form>

      {props.errorEmptyTask ? (
        <p className="message error">Field Name Task is required.</p>
      ) : null}
    </div>
  );
};

export default FormTask;
