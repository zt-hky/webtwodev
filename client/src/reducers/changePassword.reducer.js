import ActionTypes from "../actions/actionTypes";

const initState = {
    email:'',
    uuid:'',
    password: '',
    repeatPassword: '',
    passwordError: '',
    repeatPasswordError: '',
    isRedirect: false,
    message:''
}

const ChangePassowrdReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_PASS_INPUT_CHANGE:
        case ActionTypes.CHANGE_PASS_FAILURE:
        case ActionTypes.CHANGE_PASS_SUCCESS:
        case ActionTypes.CHANGE_PASS_CLEAR_PROPS:

            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export default ChangePassowrdReducer;
