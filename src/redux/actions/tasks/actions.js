import {
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  CHANGE_STATUS,
  CURRENT_TASK,
  UPDATE_TASK,
  GET_TASKS
} from "./actionTypes";

import clientAxios from '../../../config/axios';

export function addTask(task) {
  return async (dispatch) => {
    await clientAxios.post('/api/tasks', task).then(response => {
      dispatch({ type: ADD_TASK, payload: response.data });
    }).catch(error => {
      console.log(error);
    });
  }
}

export function getTasksByProjectId(proyect) {
  return async (dispatch) => {
    await clientAxios.get(`/api/tasks/`, { params: { proyect } }).then(response => {
      dispatch({ type: GET_TASKS, payload: response.data });
    }).catch(error => {
      console.log(error);
    });
  }
}

export function validateTask() {
  return {
    type: VALIDATE_TASK
  };
}

export function deleteTask(taskId) {
  return {
    type: DELETE_TASK,
    taskId
  };
}

export function changeStatusTask(task) {
  return {
    type: CHANGE_STATUS,
    task
  };
}

export function currentTask(task) {
  return {
    type: CURRENT_TASK,
    task
  };
}

export function updateTask(task) {
  return {
    type: UPDATE_TASK,
    task
  }
}