import ActionTypes from "../actions/actionTypes";

const initState = {
    moviesComingSoon: [],
    moviesNowShowing: [],
    errorNowShowing: '',
    errorMovieComing: '',
    movieItem: null,
    error: ''
}

const MovieReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.MOVIE_GET_DETAIL_SUCCESS:
        case ActionTypes.MOVIE_GET_DETAIL_FAILURE:
        case ActionTypes.COMINGSOON_GET_MOVIE_FAILURE:
        case ActionTypes.COMINGSOON_GET_MOVIE_SUCCESS:
        case ActionTypes.NOWSHOWING_GET_MOVIE_FAILURE:
        case ActionTypes.NOWSHOWING_GET_MOVIE_SUCCESS:
        case ActionTypes.MOVIE_CLEAR_PROPS:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export default MovieReducer;