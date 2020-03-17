const initialState = {
  tasks: [
    { name: "Crear Proyecto", state: true, proyectId: 1, id:"b9c6ee7a-65ec-11ea-bc55-0242ac130003" },
    { name: "Crear Base de datos", state: true, proyectId: 2, id:"de61da1a-65ec-11ea-bc55-0242ac130003" },
    { name: "Crear API", state: false, proyectId: 3, id:"e31cde88-65ec-11ea-bc55-0242ac130003" },
    { name: "Conectar API con React", state: false, proyectId: 4, id:"e9c4b062-65ec-11ea-bc55-0242ac130003" },
    { name: "Crear Base de datos", state: true, proyectId: 2, id:"ee0522a6-65ec-11ea-bc55-0242ac130003" },
    { name: "Crear API", state: false, proyectId: 3, id:"f27d5286-65ec-11ea-bc55-0242ac130003" },
    { name: "Conectar API con React", state: false, proyectId: 3, id:"f9225e24-65ec-11ea-bc55-0242ac130003" },
  ],
  errorEmptyTask: false,
  currentTask: null
};

export function TasksReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.task],
        errorEmptyTask: false
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
    case "CURRET_TASK":
      return {
        ...state,
        currentTask: action.task

      }
    default:
      return state;
  }
}
