import AxiosInstance, { endPoint } from "../utils/api";
import ActionTypes from "./actionTypes";

const getAllCities = () => {
    return (dispatch) => {
        return AxiosInstance.get(endPoint.getAllCities)
            .then((res) => {
                dispatch(onGetAllCitiesSuccess({ cities: res.data.data }));
            }).catch((err) => {
                dispatch(onGetAllCitiesFailure({ error: 'Không thể lấy danh sách thành phố.' }))
            })
    }
}

const getAllCinemaByCity = (cinemaId) => {
    return (dispatch) => {
        return AxiosInstance.get(`/cities/${cinemaId}/threatreSet?order=id`)
            .then((res) => {
                dispatch(onGetAllCinemaSuccess({ cinemas: res.data.data }))
            }).catch((err) => {
                dispatch(onGetAllCinemaFailure({ errorCinema: 'Không lấy được danh sách rạp' }))
            })
    }
}

const onGetAllCitiesSuccess = (state) => {
    return {
        type: ActionTypes.CITIES_GET_SUCCESS,
        payload: state
    }
}

const onGetAllCitiesFailure = (state) => {
    return {
        type: ActionTypes.CITIES_GET_FAILURE,
        payload: state
    }
}


const onGetAllCinemaSuccess = (state) => {
    return {
        type: ActionTypes.CINEMA_GET_SUCCESS,
        payload: state
    }
}

const onGetAllCinemaFailure = (state) => {
    return {
        type: ActionTypes.CINEMA_GET_FAILURE,
        payload: state
    }
}

const getCinemaSeatMap = (cinemaId) => {
    return (dispatch) => {
        return AxiosInstance.get(`/Threatres/${cinemaId}`, {
            headers: {
                'Authorization': "bearer " + localStorage.getItem('token')
            }
        }).then((res) => {
            console.log(res);
            return dispatch(onGetCinemaSeatMapSuccess({ cinema: res.data.data }))
        }).catch((err) => {
            return dispatch(onGetCinemaSeatMapFailure({ error: "Không thể lấy thông tin rạp." }))
        })
    }
}

const onGetCinemaSeatMapSuccess = (state)=>{
    return {
        type: ActionTypes.CINEMA_GET_SEAT_MAP_SUCCESS,
        payload : state
    }
}

const onGetCinemaSeatMapFailure = (state)=>{
    return {
        type: ActionTypes.CINEMA_GET_SEAT_MAP_FAILURE,
        payload : state
    }
}
const clearProps = (state) => {
    return {
        type: ActionTypes.CINEMA_CLEAR_PROPS,
        payload: state
    }
}
const CinemaActions = {
    getAllCities,
    getAllCinemaByCity,
    getCinemaSeatMap,
    clearProps
}


export default CinemaActions;