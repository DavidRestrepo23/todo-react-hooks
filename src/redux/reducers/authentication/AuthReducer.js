const initialState = {
    token: localStorage.getItem('token'),
    auth: null,
    user: {
        name: null,
        email: null,
        created_at: null,
        _id: null
    },
    message: null,
    loader: true
};

export function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case "REGISTER_OK":
            return {
                ...state,
                message: action.payload
            }
        case "LOGIN_OK":
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                auth: true,
                ...action.payload.user,
                loader: false
            }
        case "LOGOUT":
        case "LOGIN_ERROR":
        case "REGISTER_ERROR":
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                auth: null,
                user: null,
                message: action.payload,
                loader: false
            }
        case "GET_USER_AUTH":
            return {
                ...state,
                auth: true,
                ...action.payload,
                loader: false
            }
        default:
            return state;
    }
}