import DataTypes from "constants/ActionTypes";

var initState = {
    username: "",
    password: ""
};

const SignInReducer = (state = initState, action) => {
    switch (action.type) {
        case DataTypes.SIGNIN_INPUT_CHANGED:
            return Object.assign({}, state, action.payload);
        case DataTypes.LOGIN_SUCCESS:
            return null;
        default:
            return state;
    }
};

export default SignInReducer;
