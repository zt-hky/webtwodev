import ActionTypes from '../actions/actionTypes';
const initState = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    message: "",
    forgotPassMessageError:"",
    forgotPassMessage:"",
    isRedirect: false
}
const SignInReducer = (state = initState, action) => {
   // console.log(action);
    
    switch (action.type) {
        case ActionTypes.SIGNIN_CLEAR_PROPS:
        case ActionTypes.SIGNIN_INPUT_CHANGED:
        case ActionTypes.SIGNIN_FAILURE:
        case ActionTypes.SIGNIN_SUCCESS:
        case ActionTypes.FORGOT_PASSWORD:
        case ActionTypes.FORGOT_PASSWORD_SUCCESS:
        case ActionTypes.FORGOT_PASSWORD_FAILURE:
        case ActionTypes.RESET_STATE:

            return Object.assign({}, state, action.payload)
        default:
            return state;
    }
}
export default SignInReducer;