import ActionTypes from "../action/ActionTypes";

const initState = {
  username: '',
  password: '',
  message:''
}

const LoginReducer = (State = initState, Action) => {
  console.log(Action);

  switch (Action.type) {
    case ActionTypes.SIGNIN_INPUT_CHANGED:
    case ActionTypes.SIGNIN_SUCCESS:
      return Object.assign({}, State, Action.payload);
    default:
      return State;

  }

}

export default LoginReducer;
