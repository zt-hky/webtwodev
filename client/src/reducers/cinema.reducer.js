import ActionTypes from "../actions/actionTypes";

const initState = {
    cities: [],
    cinemas: [],
    errorCity: '',
    errorCinema:''
}

const CinemaReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.GET_CITIES_SUCCESS:
        case ActionTypes.GET_CITIES_FAILURE:
        case ActionTypes.GET_CINEMA_FAILURE:
        case ActionTypes.GET_CINEMA_SUCCESS:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
export default CinemaReducer;