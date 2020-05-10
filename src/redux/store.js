import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { ProjectsReducer } from './reducers/projects/ProjectsReducer';
import { TasksReducer } from './reducers/tasks/TasksReducer';
import { AlertsReducer } from './reducers/alerts/AlertsReducer';
import { ValidationsReducer } from './reducers/validations/ValidationsReducer';
import { AuthReducer } from './reducers/authentication/AuthReducer';

const rootReducer = combineReducers({
  ProjectsReducer,
  TasksReducer,
  AlertsReducer,
  ValidationsReducer,
  AuthReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));
