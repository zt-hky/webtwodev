import ActionTypes from './actionTypes';
import Api from '../utils/api';
import axios from 'axios';
const authenticate = (state) => {
  const username = state.username;
  const password = state.password;
  // check username
  let action = { type: ActionTypes.AUTHEN_FAIL, payload: {} };
  if (!username || !password) {
    if (!username) {
      action.payload = Object.assign(action.payload, state, { usernameError: "Đây là thông tin bắt buộc!" })
    }
    if (!password) {
      action.payload = Object.assign(action.payload, state, { passwordError: "Đây là thông tin bắt buộc!" })
    }
    return action;
  }

  axios.post('http://localhost:5000/api/user/signIn', state, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json"
    }
  }).then((res) => {
    if (res.data.error) {
      alert("Tài khoản của bạn chưa được kích hoạt. Vui lòng kiểm tra mail")
    } else {
      //this.setState({ isRedirect: true })
      alert("Chào mừng bạn đến với WEB_TWO MOVIE")
      action.type = ActionTypes.AUTHEN_SUCCESS
      action.payload = Object.assign(action.payload, state, { usernameError: "", passwordError: "", token: res.data.token })
    }
    console.log("Token: " + res.data.token);

  }).catch((err) => {
    // this.setState({ isRedirect: false })
    alert('Tài khoản hoặc mật khẩu không đúng!')
    //console.log(err);

  })

  return action;
}

const inputUsername = (event) => {
  const payload = { username: event.target.value, usernameError: "" }
  return {
    type: ActionTypes.USERNAME_CHANGED,
    payload: payload
  }
}

const inputPassword = (event) => {
  const payload = { password: event.target.value, passwordError: "" }
  return {
    type: ActionTypes.PASSWORD_CHANGED,
    payload: payload
  }
}

const LoginActions = {
  authenticate,
  inputPassword,
  inputUsername
}

export default LoginActions;
