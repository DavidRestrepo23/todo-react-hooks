const initialState = {
  projects: [],
  activeForm: false,
  showError: false,
  currentProject: null,
  message: null
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
        projects: action.payload.projects
      };
    case "ADD_PROJECT":
      return {
        ...state,
        projects: [...state.projects, action.payload.project],
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
          project => project._id === action.projectId
        )
      };
    case "DELETE_PROJECT":
      return {
        ...state,
        projects: state.projects.filter(
          project => project._id !== action.projectId
        )
      };
    case "ERROR_PROJECT":
      console.log(action.payload);
      return {
        ...state,
        message: action.payload
      }
    default:
      return state;
  }
}
