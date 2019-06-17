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
        case ActionTypes.GET_MOVIE_DETAIL_SUCCESS:
        case ActionTypes.GET_MOVIE_DETAIL_FAILURE:
        case ActionTypes.GET_COMING_SOON_MOVIE_FAILURE:
        case ActionTypes.GET_COMING_SOON_MOVIE_SUCCESS:
        case ActionTypes.GET_NOW_SHOWING_MOVIE_FAILURE:
        case ActionTypes.GET_NOW_SHOWING_MOVIE_SUCCESS:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export default MovieReducer;