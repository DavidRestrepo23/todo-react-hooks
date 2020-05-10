import {
  FORM_CREATE_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  SHOW_ERROR,
  CURRENT_PROJECT,
  DELETE_PROJECT,
  ERROR_PROJECT
} from "./actionTypes";
import clientAxios from '../../../config/axios';


/**
 * create alert
 * @param {*} data 
 */
const messages = data => {

  return alert = {
    msg: data.msg,
    category: data.category
  };

}

export function activeFormStatus() {
  return {
    type: FORM_CREATE_PROJECT
  };
}

export function getProjects() {
  return async (dispatch) => {
    await clientAxios.get('/api/projects').then(response => {
      dispatch({ type: GET_PROJECTS, payload: response.data });
    }).catch(error => {
      let alert = messages({ msg: error.response.data.msg, category: 'alert-error' });
      dispatch({ type: ERROR_PROJECT, payload: alert });
    });
  }
}

export function addProject(project) {
  return async (dispatch) => {
    await clientAxios.post('/api/projects', project).then(response => {
      dispatch({ type: ADD_PROJECT, payload: response.data });
    }).catch(error => {
      let alert = messages({ msg: error.response.data.msg, category: 'alert-error' });
      dispatch({ type: ERROR_PROJECT, payload: alert });
    });
  }
}

export function showErrorMessage() {
  return {
    type: SHOW_ERROR
  };
}

export function currentProjectActive(projectId) {
  return {
    type: CURRENT_PROJECT,
    projectId
  };
}

export function deleteProject(projectId) {
  return async (dispatch) => {
    await clientAxios.delete(`/api/projects/${projectId}`).then(response => {
      dispatch({ type: DELETE_PROJECT, payload: response.data });
    }).catch(error => {
      let alert = messages({ msg: error.response.data.msg, category: 'alert-error' });
      dispatch({ type: ERROR_PROJECT, payload: alert });
    });
  }
}
