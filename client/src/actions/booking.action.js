import AxiosInstance, { endPoint } from "../utils/api";
import ActionTypes from "./actionTypes";
import { log } from "util";

const getShowTimeList = (state) => {
    const { movieId, date, cinemaId } = state;
    if (!movieId || !date || !cinemaId) {
        return onGetShowTimesListFailure({ message: 'Chưa đủ thông tin.' })
    }
    return (dispatch) => {
        return AxiosInstance.get(endPoint.getShowTimes, {
            params: {
                date: date,
                FilmId: movieId,
                ThreatreSetId: cinemaId
            }
        }).then((res) => {
            return dispatch(onGetShowTimesListSuccess({ showTimesList: res.data.data, error: '' }))
        }).catch((err) => {
            return dispatch(onGetShowTimesListFailure({ error: 'Không thể tải lịch chiếu' }))
        })
    }
}

const onGetShowTimesListFailure = (state) => {
    return {
        type: ActionTypes.BOOKING_SHOWTIMES_LIST_FAILURE,
        payload: state
    }
}


const onGetShowTimesListSuccess = (state) => {
    return {
        type: ActionTypes.BOOKING_SHOWTIMES_LIST_SUCCESS,
        payload: state
    }
}

const setMovieId = (state) => {
    return {
        type: ActionTypes.BOOKING_SET_MOVIE_ID,
        payload: state
    }
}

const setDate = (state) => {
    return {
        type: ActionTypes.BOOKING_SET_DATE,
        payload: state
    }
}
const setCinemaId = (state) => {
    return {
        type: ActionTypes.BOOKING_SET_CINEMA_ID,
        payload: state
    }
}

const setShowTimeId = (state) => {
    return {
        type: ActionTypes.BOOKING_SET_SHOWTIME_ID,
        payload: state
    }
}

const clearProps = (state) => {
    return {
        type: ActionTypes.BOOKING_CLEAR_PROPS,
        payload: state
    }
}

const addSeat = (state) => {
    return {
        type: ActionTypes.BOOKING_CHOOSE_SEAT,
        payload: state
    }
}

const booking = (state,callback) => {
    const { seats, showTimeId } = state;
    if (seats && showTimeId) {
        return (dispatch) => {
            return AxiosInstance(
                {
                    method: 'post',
                    url: '/Booking',
                    data: {
                        seats: seats.toString(),
                        ShowTimeId: showTimeId
                    },
                    headers: { 'Authorization': "bearer " + window.localStorage.getItem('token') }

                }
            ).then((res) => {
                callback()
                return dispatch(onGetShowTimesListSuccess({ status: 'Đặt vé thành công!', bookError: '' }))
            }).catch((err) => {
                callback()
                return dispatch(onGetShowTimesListFailure({ status: 'lỗi', bookError: 'Xảy ra lỗi. Vui lòng thử lại.' }))
            })
        }
    }
}

const getAllTicketById = (showTimeId) => {
    if (showTimeId) {
        return (dispatch) => {
            return AxiosInstance.get(`/ShowTimes/${showTimeId}/Ticket`, {
                headers: { 'Authorization': "bearer " + window.localStorage.getItem('token') }
            }).then((res) => {
                return dispatch(onGetShowTimesListSuccess({ tickets: res.data.data }))
            }).catch((err) => {
                console.log(err);
            })
        }
    }
}

const BookingActions = {
    getShowTimeList,
    setCinemaId,
    setDate,
    setMovieId,
    setShowTimeId,
    clearProps,
    addSeat,
    booking,
    getAllTicketById

}

export default BookingActions