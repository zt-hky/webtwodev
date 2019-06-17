import ActionTypes from "./actionTypes";
import { strongPasswordRegex } from "../utils/constants";
import AxiosInstance, { endPoint } from "../utils/api";
const changePassword = (state) => {
    //, password, repeatPassword 
    console.log("chgange");
    console.log(state);
    
    
    const { email, uuid, password, repeatPassword} = state;
    const data = { email, uuid };
    let failureState = {};
    return (dispatch) => {

        let errorFlag = false;

        //check new password
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


        // return AxiosInstance.post(endPoint.changePassForget, data).then((res) => {
        //     dispatch(onChangePasswordSuccess({ message: 'Đã đổi mật khẩu thành công!', isRedirect: true }))
        // }).catch((err) => {
        //     dispatch(onChangePasswordFailure({ message: 'Xãy ra lỗi ngoài ý muốn vui lòng. vui lòng báo quên mật khẩu.' }))
        // })
    }



}

const inputChanged = (state) => {

    return {
        type: ActionTypes.CHANGE_PASS_INPUT_CHANGE,
        payload: state

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