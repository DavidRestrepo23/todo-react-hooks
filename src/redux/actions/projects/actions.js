import {
  FORM_CREATE_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  SHOW_ERROR,
  CURRENT_PROJECT,
  DELETE_PROJECT
} from "./actionTypes";
import uuid from "uuid";

export function activeFormStatus() {
  return {
    type: FORM_CREATE_PROJECT
  };
}

export function getProjects(projects) {
  return {
    type: GET_PROJECTS,
    projects
  };
}

export function addProject(project) {
  project.id = uuid.v4();

  return {
    type: ADD_PROJECT,
    project
  };
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
  return {
    type: DELETE_PROJECT,
    projectId
  };
}
