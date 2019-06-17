import ActionTypes from "../actions/actionTypes";

const initState = {
    password: '',
    repeatPassword: '',
    passwordError: '',
    repeatPasswordError: ''
}

const ChangePassowrdReducer = (state = initState, action) => {
    console.log(action.type);
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
