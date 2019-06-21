import SIGNIN_INPUT_CHANGED from "constants";

import AxiosInstance, { endPoint } from "utils/api";

const inputChanged = event => {
    const key = event.target.name;
    const value = event.target.value;

    return {
        type: SIGNIN_INPUT_CHANGED,
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
            console.log(res);
        });
    };
};

const singinAction = {
    inputChanged,
    signinSubmit
};

export default singinAction;
