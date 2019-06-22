import React from 'react'
import Calender from '../components/Calender';
import CinemaSelector from '../components/CinemaSelector';
import CinemaList from '../components/CinemaList';
import MoviePresentList from '../components/MoviePresentList';
import './Booking.scss';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import ActionCreator from '../actions';
class Booking extends React.Component {


    constructor(props) {
        super(props);
        this.props.setMovieId({ movieId: this.props.match.params.movieId })
    }

    calender_onSelected = (item) => {
        this.props.setDate({ date: `${new Date().getFullYear()}-${item.month}-${item.date}` })
        this.props.getShowTimeList({
            date: `${new Date().getFullYear()}-${item.month}-${item.date}`,
            movieId: this.props.movieId,
            cinemaId: this.props.cinemaId
        })
    }

    cinemaSelector_onSelected = (cinemaId, cinameName) => {
        this.props.setCinemaId({ cinemaId: cinemaId, cinameName: cinameName })
        this.props.getShowTimeList({
            date: this.props.date,
            movieId: this.props.movieId,
            cinemaId: cinemaId
        })
    }
    render() {
        return (
            <main>
                <section className="Content">
                    <section className="Theater">
                        <h3>LỊCH CHIẾU:</h3>
                        <Calender onItemSelected={this.calender_onSelected}></Calender>
                        <CinemaSelector onItemSelected={this.cinemaSelector_onSelected}></CinemaSelector>
                        <CinemaList></CinemaList>
                    </section>
                    <aside className="Present">
                        <h3>PHIM ĐANG CHIẾU</h3>
                        <MoviePresentList></MoviePresentList>
                    </aside>
                </section>
                {/* <section className="container Main">
                    <MovieInfo></MovieInfo>
                    <BookingInfo></BookingInfo>
                </section> */}
            </main>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        date: state.booking.date,
        cinemaId: state.booking.cinemaId,
        movieId: state.booking.movieId,
        showTimesList: state.booking.showTimesList,
        error: state.booking.error,
        message: state.booking.message,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setDate: ActionCreator.BookingActions.setDate,
        setMovieId: ActionCreator.BookingActions.setMovieId,
        setCinemaId: ActionCreator.BookingActions.setCinemaId,
        getShowTimeList: ActionCreator.BookingActions.getShowTimeList,
    }, dispatch)
}

const BookingContainer = connect(mapStateToProps, mapDispatchToProps)(Booking)
export default BookingContainer;
