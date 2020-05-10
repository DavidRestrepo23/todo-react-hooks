const InitialState = {
    validation: null
};

export function ValidationsReducer(state = InitialState, action) {
    switch (action.type) {
        case "SHOW_VALIDATION":
            return {
                ...state,
                validation: action.msg
            }
        case "HIDE_VALIDATION":
            return {
                ...state,
                validation: false
            }
        default:
            return state;
    }
}