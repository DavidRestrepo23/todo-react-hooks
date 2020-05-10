const initialState = {
  tasks: [],
  errorEmptyTask: false,
  currentTask: null
};

export function TasksReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        errorEmptyTask: false
      }
    case "GET_TASKS":
      return {
        ...state,
        tasks: state.tasks.filter(item => item.proyect_id === action.payload)
      }
    case "VALIDATE_TASK":
      return {
        ...state,
        errorEmptyTask: true
      }
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.taskId)
      }
    case "CHANGE_STATUS":
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.task.id ? action.task : task)
      }
    case "CURRENT_TASK":
      return {
        ...state,
        currentTask: action.task

      }
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.task.id ? action.task : task),
        currentTask: null,
      }
    default:
      return state;
  }
}
