const initialState = {
  projects: [],
  activeForm: false,
  showError: false,
  currentProject: null
};

export function ProjectsReducer(state = initialState, action) {
  switch (action.type) {
    case "FORM_CREATE_PROJECT":
      return {
        ...state,
        activeForm: true
      };
    case "GET_PROJECTS":
      return {
        ...state,
        projects: action.projects
      };
    case "ADD_PROJECT":
      return {
        ...state,
        projects: [...state.projects, action.project],
        activeForm: false,
        showError: false
      };
    case "SHOW_ERROR":
      return {
        ...state,
        showError: true
      };
    case "CURRENT_PROJECT":
      return {
        ...state,
        currentProject: state.projects.filter(
          project => project.id === action.projectId
        )
      };
    case "DELETE_PROJECT":
      return {
        ...state,
        projects: state.projects.filter(
          project => project.id !== action.projectId
        )
      };
    default:
      return state;
  }
}
