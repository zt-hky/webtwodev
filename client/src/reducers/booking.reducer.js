import ActionTypes from "../actions/actionTypes";

const initState = {
    showTimesList: null,
    date: '',
    cinemaId: null,
    movieId: null,
    error: '',
    message: '',
    showTimeId: '',
    seats: [],
    tickets:[],
    status:'',
    bookError:''
}


const BookingReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.BOOKING_CLEAR_PROPS:
        case ActionTypes.BOOKING_SET_CINEMA_ID:
        case ActionTypes.BOOKING_SET_DATE:
        case ActionTypes.BOOKING_SET_MOVIE_ID:
        case ActionTypes.BOOKING_SET_SHOWTIME_ID:
        case ActionTypes.BOOKING_SHOWTIMES_LIST_FAILURE:
        case ActionTypes.BOOKING_SHOWTIMES_LIST_SUCCESS:
        case ActionTypes.BOOKING_CHOOSE_SEAT:
        case ActionTypes.BOOKING:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export default BookingReducer;