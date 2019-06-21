import DataTypes from "constants/ActionTypes";

import AxiosInstance, { endPoint } from "utils/api";

const inputChanged = event => {
    const key = event.target.name;
    const value = event.target.value;

    return {
        type: DataTypes.SIGNIN_INPUT_CHANGED,
        payload: {
            [key]: value
        }
    };
};

const signinSubmit = props => {
    return dispatch => {
        return AxiosInstance.post(endPoint.singin, {
            username: props.username,
            password: props.password
        }).then(res => {
            if (res.status === 200) {
                dispatch(success(res.data));
            }
        });
    };
};

const success = data => {
    localStorage.setItem("token", "bearer " + data.token);
    return {
        type: DataTypes.LOGIN_SUCCESS
    };
};

const singinAction = {
    inputChanged,
    signinSubmit
};

export default singinAction;
