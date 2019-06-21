import ActionTypes from "../actions/actionTypes";

const initState = {
    cities: [],
    cinemas: [],
    errorCity: '',
    errorCinema: '',
    error: '',
    cinema: ''

}

const CinemaReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.CINEMA_GET_SUCCESS:
        case ActionTypes.CINEMA_GET_FAILURE:
        case ActionTypes.CITIES_GET_FAILURE:
        case ActionTypes.CITIES_GET_SUCCESS:
        case ActionTypes.CINEMA_GET_SEAT_MAP_FAILURE:
        case ActionTypes.CINEMA_GET_SEAT_MAP_SUCCESS:
        case ActionTypes.CINEMA_CLEAR_PROPS:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
export default CinemaReducer;