import React from 'react';
import NewProjectContainer from '../../containers/projects/NewProjectContainer';
import ListProjectsContainer from '../../containers/projects/ListProjectsContainer';

const Sidebar = () => {
    return ( 
        <aside>
            <h1>MERN <span>Tasks</span></h1>
            <NewProjectContainer />
            <div className="projects">
                <h2>Your's Projects</h2>
                <ListProjectsContainer />
            </div>
        </aside>
     );
}
 
export default Sidebar;
