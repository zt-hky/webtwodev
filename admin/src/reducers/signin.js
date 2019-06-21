import SIGNIN_INPUT_CHANGED from "constants";

var initState = {
    username: "",
    password: ""
};

const SignInReducer = (state = initState, action) => {
    switch (action.type) {
        case SIGNIN_INPUT_CHANGED:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};

export default SignInReducer;
