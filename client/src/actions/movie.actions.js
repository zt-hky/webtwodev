import AxiosInstance, { endPoint} from "../utils/api";
import ActionTypes from "./actionTypes";

const getMoviesComingSoon = ({ offset, limit }) => {
    return (dispatch) => {
        return AxiosInstance.get(endPoint.getAllMovie, {
            params: {
                offset,
                limit,
                viewdel: 'false',
                order: '-release',
                release: 'soon'
            },
        }).then((res) => {
            dispatch(onGetMoivesComingSoonSuccess({ moviesComingSoon: res.data.data }))
        }).catch((err) => {
            dispatch(onGetMoivesComingSoonFailure({ errorMovieComing: "Không thể lấy thêm phim" }))
        })
    }
}

const getMoviesNowShowing = ({ offset, limit }) => {
    return (dispatch) => {
        return AxiosInstance.get(endPoint.getAllMovie, {
            params: {
                offset,
                limit,
                viewdel: 'false',
                order: '-release',
                release: 'now'
            },
        }).then((res) => {
            dispatch(onGetMoivesComingSoonSuccess({ moviesNowShowing: res.data.data }))
        }).catch((err) => {
            dispatch(onGetMoivesComingSoonFailure({ errorMovieComing: "Không thể lấy thêm phim" }))
        })
    }
}

const onGetMoivesComingSoonSuccess = (state) => {
    return {
        type: ActionTypes.GET_COMING_SOON_MOVIE_SUCCESS,
        payload: state
    }
}

const onGetMoivesComingSoonFailure = (state) => {
    return {
        type: ActionTypes.GET_COMING_SOON_MOVIE_FAILURE,
        payload: state
    }
}

const getMovieById = (movieId) => {
    return (dipatch) => {
        return AxiosInstance.get(endPoint.getMovieById + movieId)
            .then((res) => {
                dipatch(onGetMovieByIdSuccess({ movieItem: res.data.data }))
            }).catch((err) => {
                dipatch(onGetMovieByIdFailure({ error: "Có lỗi xảy ra." }))
            })
    }
}
const onGetMovieByIdSuccess = (state) => {
    return {
        type: ActionTypes.GET_MOVIE_DETAIL_SUCCESS,
        payload: state
    }
}

const onGetMovieByIdFailure = (state) => {
    return {
        type: ActionTypes.GET_MOVIE_DETAIL_FAILURE,
        payload: state
    }
}
const MovieAcitons = {
    getMovieById,
    getMoviesComingSoon,
    getMoviesNowShowing
}

export default MovieAcitons;
