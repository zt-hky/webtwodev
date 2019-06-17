import ActionTypes from './actionTypes';
import AxiosInstance, { endPoint } from '../utils/api';
const signIn = (state) => {
  const { email, password } = state;
  const data = { email, password }
  let failureState = { data, isWaitting: false }
  return (dispatch) => {
    let errorFlag = false;

    // check email
    if (!email) {
      errorFlag = true;
      failureState = Object.assign(failureState, state, { emailError: "Đây là thông tin bắt buộc." });
    }
    // check password
    if (!password) {
      errorFlag = true;
      failureState = Object.assign(failureState, state, { passwordError: "Đây là thông tin bắt buộc." });
    }
    // return if error
    if (errorFlag) return dispatch(onFailure(failureState))

    // send request
    return AxiosInstance.post(endPoint.login, data).then((res) => {
      if (res.data.error) {

        failureState = Object.assign(failureState, { message: 'Tài khoản của bạn chưa được kích hoạt. Vui lòng kiểm tra mail' })
        dispatch(onFailure(failureState))
      } else {

        localStorage.setItem('token', res.data.token)
        const successState = Object.assign({}, data, { message: 'Chào mừng bạn đến với WEB_TWO MOVIE', isRedirect: true })
        dispatch(onSuccess(successState))
      }
    }).catch((err) => {

      failureState = Object.assign(failureState, { message: 'Tài khoản hoặc mật khẩu không đúng!' })
      dispatch(onFailure(failureState))
    })
  };
}

const forgotPassword = (state) => {
  const { email } = state;
  return (dispatch) => {
    return AxiosInstance.post(endPoint.forgotPassword, { email }).then((res) => {
      dispatch(onForgetPassSuccess({ forgotPassMessage: `Chúng tôi đã gửi đến ${email} 1 email khôi phục mật khẩu.` }))
    }).catch((err) => {
      dispatch(onForgetPassFailure({ forgotPassMessageError: "Email không đúng." }))
    })
  }
}

const inputChanged = (event) => {
  const key = event.target.name;
  const errorKey = key + "Error";
  const value = event.target.value;
  return {
    type: ActionTypes.SIGNIN_INPUT_CHANGED,
    payload: { [key]: value, [errorKey]: '', message: '' }
  }
}

const onForgetPassSuccess = (state) => {
  return {
    type: ActionTypes.FORGOT_PASSWORD_SUCCESS,
    payload: state
  }
}

const onForgetPassFailure = (state) => {
  return {
    type: ActionTypes.FORGOT_PASSWORD_FAILURE,
    payload: state
  }
}

const onSuccess = (state) => {
  return {
    type: ActionTypes.SIGNIN_SUCCESS,
    payload: state
  }
}

const onFailure = (state) => {
  // finish waitting mode
  return {
    type: ActionTypes.SIGNIN_FAILURE,
    payload: state
  }
}

const onWaitting = (state) => {
  return {
    type: ActionTypes.SIGNIN_WAITTING,
    payload: state
  }
}

const clearProps = (state) => {
  return {
    type: ActionTypes.SIGNIN_CLEAR_PROPS,
    payload: state
  }
}



const SignInActions = {
  inputChanged,
  signIn,
  clearProps,
  onWaitting,
  forgotPassword
}

export default SignInActions;
