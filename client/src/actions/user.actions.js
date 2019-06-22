import AxiosInstance from '../utils/api';
import ActionTypes from './actionTypes';
const getUserProfile = () => {
    return (dispatch) => {
        return AxiosInstance.get('/users', {
            headers: { 'Authorization': "bearer " + window.localStorage.getItem('token') }
        }).then((res) => {
            console.log(res);

            return dispatch(onSuccess({ name: res.data.data.name, phone: res.data.data.phone, email: res.data.data.email }))
        }).catch((err) => {
            return dispatch(onFailure({ error: 'Không tải được không tin cá nhân.' }))
        })
    }
}

const onSuccess = (state) => {
    return {
        type: ActionTypes.USER_GET_PROFILE_SUCCESS,
        payload: state
    }
}


const onFailure = (state) => {
    return {
        type: ActionTypes.USER_GET_PROFILE_FAILURE,
        payload: state
    }
}

const onChanged = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    console.log(value);

    console.log({ [key]: value });

    return {
        type: ActionTypes.USER_GET_PROFILE,
        payload: { [key]: value }
    }
}

const update = (state,callback) => {
    const { name, phone } = state;
    if (name && phone) {
        return (dispatch) => {
            return AxiosInstance.put('/users', { name: name, phone: phone }, {
                headers: { 'Authorization': "bearer " + window.localStorage.getItem('token') }
            }
            ).then((res) => {
                callback()
                return dispatch(onSuccess({message:'Cập nhập thành công!'}))
            }).catch((err) => {
                callback()
                return dispatch(onSuccess({ error: "Xảy ra lỗi!" }))
            })
        }
    }else{
        return { name: name, phone: phone }
    }
}
const UserAction = {
    getUserProfile,
    onChanged,
    update
}

export default UserAction