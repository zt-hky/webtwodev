import ActionTypes from "../actions/actionTypes";

const initState = {
    email:'',
    uuid:'',
    password: '',
    repeatPassword: '',
    passwordError: '',
    repeatPasswordError: '',
    isRedirect: false
}

const ChangePassowrdReducer = (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case ActionTypes.CHANGE_PASS_INPUT_CHANGE:
        case ActionTypes.CHANGE_PASS_FAILURE:
        case ActionTypes.CHANGE_PASS_SUCCESS:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export default ChangePassowrdReducer;
