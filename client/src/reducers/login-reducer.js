import ActionTypes from '../actions/actionTypes';
const initState = {
    username: "",
    password: "",
    usernameError: "",
    passwordError: "",
    isRedirect: false
}
const LoginReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.USERNAME_CHANGED:
        case ActionTypes.PASSWORD_CHANGED:
            return Object.assign({}, state, action.payload)
        case ActionTypes.AUTHEN_FAIL:
            return Object.assign({}, state, action.payload)
        default:
            return state;
    }
    return state;
}
export default LoginReducer;