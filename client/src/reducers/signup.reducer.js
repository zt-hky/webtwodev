import ActionTypes from '../actions/actionTypes';

const initState = {
    password: "",
    name: "",
    email: "",
    phone: "",
    nameError: '',
    emailError: '',
    passwordError: '',
    phoneError: '',
    isRedirect: false,
    message: ""
}

const SignUpReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.SIGNUP_INPUT_CHANGED:
        case ActionTypes.SIGNUP_SUCCESS:
        case ActionTypes.SIGNUP_FAILURE:
        case ActionTypes.SIGNUP_CLEAR_PROPS:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export default SignUpReducer
