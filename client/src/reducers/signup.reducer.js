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
            return Object.assign({}, state, action.payload)
        case ActionTypes.SIGNUP_SUCCESS:
            return Object.assign({}, state, action.payload)
        case ActionTypes.SIGNUP_FAILURE:
            return Object.assign({}, state, action.payload)
        case ActionTypes.SIGNUP_CLEAR_PROPS:
            console.log("do toi xoa roif");
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export default SignUpReducer
