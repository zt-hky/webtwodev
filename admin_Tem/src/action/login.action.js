import ActionTypes from './ActionTypes';
import AxiosInstance, { endPoint } from '../uitls/api';


const login = ({
  username,
  password
}) => {

  return (dispatch) => {
    return AxiosInstance.post(endPoint.login, {
      params: {
        username,
        password
      }
    }).then((res) => {
      console.log(res);

    }).catch((err) => {
      console.log(err);

    })
  }


}

const inputChanged = (event) => {

  const key = event.target.name;
  const errorKey = key + "Error";
  const value = event.target.value;
  console.log({
    [key]: value,
    [errorKey]: '',
    message: ''
  });

  return {
    type: ActionTypes.SIGNIN_INPUT_CHANGED,
    payload: {
      [key]: value,
      [errorKey]: '',
      message: ''
    }
  }
}

const LoginAction = {
  inputChanged,
  login

}
export default LoginAction;
