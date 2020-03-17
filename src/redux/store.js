import { createStore, combineReducers } from "redux";
import { ProjectsReducer } from './reducers/projects/ProjectsReducer';
import { TasksReducer } from './reducers/tasks/TasksReducer';

const rootReducer = combineReducers({
  ProjectsReducer,
  TasksReducer
});

export default createStore(rootReducer);
