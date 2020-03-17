import React, { Fragment } from "react";

const NewProject = ({ formInfo, handleOnChange, handleSubmit, activeForm, handleClickNewProject, showError }) => {
  return (
    <Fragment>
      <button 
        type="button" 
        className="btn btn-block btn-primary"
        onClick={handleClickNewProject}
        >
        New Project
      </button>

      {activeForm === true ? (
       <div>
          <form className="form-new-project" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-text"
            placeholder="Name Project"
            name="name"
            value={formInfo.name}
            onChange={handleOnChange}
          />
          <input
            type="submit"
            className="btn btn-primary btn-block"
            value="Add Project"
          />
        </form>   
       </div>
      ) : null}

    {showError === true ? (<p className="message error"> Field <b>Name Project</b> is required. </p>) : null}
     

    </Fragment>
  );
};

export default NewProject;
