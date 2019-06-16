import ActionTypes from '../actions/actionTypes';
const initState = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    message: "",
    isAuthenticating: false,
    isRedirect: false
}
const SignInReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.SIGNIN_CLEAR_PROPS: 
            return Object.assign({}, state, action.payload)
        case ActionTypes.SIGNIN_INPUT_CHANGED:
            return Object.assign({}, state, action.payload)
        case ActionTypes.SIGNIN_FAILURE:
            return Object.assign({}, state, action.payload)
        case ActionTypes.SIGNIN_SUCCESS:
            return Object.assign({}, state, action.payload)
        default:
            return state;
    }
    return state;
}
export default SignInReducer;