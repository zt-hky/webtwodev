import ActionTypes from './actionTypes';
import AxiosInstance, { endPoint } from '../utils/api';
import { strongPasswordRegex, vnPhoneNumberRegex, emailRegex } from '../utils/Constants';

const signUp = (state) => {
    const { email, password, name, phone } = state;
    const data = { email, password, name, phone }
    let flagError = false
    const msg = 'Đây là thông tin bắt buộc.'
    return (dispatch) => {
        let failureState = { data }
        // check email
        if (!email) {
            flagError = true;
            failureState = Object.assign(failureState, { emailError: msg });
        } else if (!emailRegex.test(email)) {
            flagError = true;
            failureState = Object.assign(failureState, { emailError: 'Email chưa hợp lệ' });
        }
        // check fullname
        if (!name) {
            flagError = true;
            failureState = Object.assign(failureState, { nameError: msg })
        }
        // Check password
        if (!password) {
            flagError = true;
            failureState = Object.assign(failureState, { passwordError: msg })
        } else if (password.length < 8 || password.length > 20) {
            flagError = true;
            failureState = Object.assign(failureState, { passwordError: 'Mật khẩu từ 8 - 20 ký tự.' })
        } else if (!strongPasswordRegex.test(password)) {
            flagError = true;
            failureState = Object.assign(failureState, { passwordError: 'Mật khẩu bao gồm ký tự đặc biệt, [a-z], [A-Z] và [0-9]' })
        }

        // check phone
        if (!phone) {
            flagError = true;
            failureState = Object.assign(failureState, { phoneError: msg })
        } else if (!vnPhoneNumberRegex.test(phone)) {
            flagError = true;
            failureState = Object.assign(failureState, { phoneError: 'Phải là số điện thoại Việt Nam' })
        }

        // return if error
        if (flagError) return dispatch(onFailure(failureState))

        // send request
        return AxiosInstance.post(endPoint.createNewAccount, data).then((res) => {
            var successState = Object.assign({}, data, { isRedirect: true, message: 'Chúng tôi đã gửi đến bạn mail kích hoạt. Vui lòng kiểm tra  mail!' })
            dispatch(onSuccess(successState))
        }).catch((err) => {
            failureState = Object.assign({}, { message: 'Email đã được sử dụng!' })
            dispatch(onFailure(failureState))
        })
    }



}

const inputChanged = (event) => {
    const key = event.target.name;
    const keyError = key + 'Error';
    const value = event.target.value;
    return {
        type: ActionTypes.SIGNUP_INPUT_CHANGED,
        payload: { [key]: value, [keyError]: '' }
    }
}

const onSuccess = (state) => {
    return {
        type: ActionTypes.SIGNUP_SUCCESS,
        payload: state
    }
}

const onFailure = (state) => {
    return {
        type: ActionTypes.SIGNUP_FAILURE,
        payload: state
    }
}

const onWaitting = (state) => {
    return {
        type: ActionTypes.SIGNUP_WAITTING,
        payload: state
    }
}

const clearProps = (state) => {
    return {
        type: ActionTypes.SIGNUP_CLEAR_PROPS,
        payload: state
    }
}

const SignUpActions = {
    signUp,
    inputChanged,
    clearProps
}

export default SignUpActions;