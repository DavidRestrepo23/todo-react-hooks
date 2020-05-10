import React from "react";
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";
import ListTaskContainer from '../../containers/tasks/ListTaskContainer';
import FormTaskContainer from "../../containers/tasks/FormTaskContainer";

const Projects = ({ user, logout }) => {

  return (
    <div className="content-app">
      <Sidebar />
      <div className="section-principal">
        <Navbar user={user} logout={logout} />
        <main>
          <FormTaskContainer />
          <div className="content-tasks">
            <ListTaskContainer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
