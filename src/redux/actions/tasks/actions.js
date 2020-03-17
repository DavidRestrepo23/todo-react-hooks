import {
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  CHANGE_STATUS,
  CURRENT_TASK
} from "./actionTypes";

export function addTask(task) {
  return {
    type: ADD_TASK,
    task
  };
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
