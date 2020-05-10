const initialState = {
    alert: null
};

export function AlertsReducer(state = initialState, action) {
    switch (action.type) {
        case "SHOW_ALERT":
            return {
                ...state,
                alert: action.payload
            };
        case "HIDE_ALERT":
            return {
                alert: null
            }
        default:
            return state;
    }
}