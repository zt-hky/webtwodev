import ActionTypes from "./actionTypes";
import { strongPasswordRegex } from "../utils/Constants";
const changePassword = (state) => {
    const { password, repeatPassword } = state;
    let failureState = {};
    return (dispatch) => {
        let errorFlag = false;
        // check new password
        if (!password) {
            errorFlag = true;
            failureState = Object.assign(failureState, { passwordError: 'Hãy đặt mật khẩu mới.' })
        } else if (password.length < 8 || password.length > 20) {
            errorFlag = true;
            failureState = Object.assign(failureState, { passwordError: 'Mật khẩu từ 8 - 20 ký tự.' })
        } else if (!strongPasswordRegex.test(password)) {
            errorFlag = true;
            failureState = Object.assign(failureState, { passwordError: 'Mật khẩu bao gồm ký tự đặc biệt, [a-z], [A-Z] và [0-9]' })
        }

        if (!repeatPassword) {
            errorFlag = true;
            failureState = Object.assign(failureState, { repeatPasswordError: 'Hãy nhập lại mật khẩu mới.' })
        } else if (repeatPassword !== password) {
            errorFlag = true;
            failureState = Object.assign(failureState, { repeatPasswordError: 'Mật khẩu không khớp.' })
        }

        if (errorFlag) return dispatch(onChangePasswordFailure(failureState));


        return null;
    }



}

const inputChanged = (event) => {
    const key = event.target.name;
    const keyError = key + 'Error';
    const value = event.target.value;
    return {
        type: ActionTypes.CHANGE_PASS_INPUT_CHANGE,
        payload: { [key]: value, [keyError]: '' }
    }
}

const onChangePasswordSuccess = (state) => {
    return {
        type: ActionTypes.CHANGE_PASS_SUCCESS,
        payload: state
    }
}

const onChangePasswordFailure = (state) => {
    return {
        type: ActionTypes.CHANGE_PASS_FAILURE,
        payload: state
    }
}

const ChangePasswordActions = {
    inputChanged,
    changePassword,
}


export default ChangePasswordActions;