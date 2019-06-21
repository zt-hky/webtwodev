import ActionTypes from "../actions/actionTypes";

const initState = {
    name: '',
    phone:'',
    error: '',
    email:'',
    message:''
   
}

const UserReducer = (state = initState, action) => {
    console.log('=====================');
    console.log(action);
    
    switch (action.type) {
        case ActionTypes.USER_GET_PROFILE:
        case ActionTypes.USER_GET_PROFILE_FAILURE:
        case ActionTypes.USER_GET_PROFILE_SUCCESS:
            return Object.assign({}, state, action.payload);

        default:
            return state;
    }
}

export default UserReducer;