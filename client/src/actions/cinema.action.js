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
        type: ActionTypes.GET_CITIES_SUCCESS,
        payload: state
    }
}

const onGetAllCitiesFailure = (state) => {
    return {
        type: ActionTypes.GET_CITIES_FAILURE,
        payload: state
    }
}


const onGetAllCinemaSuccess = (state) => {
    return {
        type: ActionTypes.GET_CINEMA_SUCCESS,
        payload: state
    }
}

const onGetAllCinemaFailure = (state) => {
    return {
        type: ActionTypes.GET_CINEMA_FAILURE,
        payload: state
    }
}

const CinemaActions = {
    getAllCities,
    getAllCinemaByCity
}

export default CinemaActions;