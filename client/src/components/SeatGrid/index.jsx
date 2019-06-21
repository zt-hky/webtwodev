import React from 'react';
import './SeatGrid.scss';
import AlertDialog from '../AlertDialog';
import { Redirect } from 'react-router-dom';
import AxiosInstance from '../../utils/api';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreator from '../../actions';
import MovieAcitons from '../../actions/movie.actions';
import { BASE_URL_IMAGE } from '../../utils/constants';
class SeatGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seats: [],
            newSeat: ''
        }

    }

    componentDidMount = () => {
        if (this.props.movieId) {
            this.props.getMovieById(this.props.movieId)
        }
        if (this.props.cinemaId) {
            this.props.getCinemaSeatMap(this.props.cinemaId)

        }
        if (this.props.showTimeId) {
            this.props.getAllTicketById(this.props.showTimeId)
        }

    }

    createSeatMap = () => {


        let rows = []
        let cols = []
        for (let index = 0; index < this.props.cinema.row; index++) {//
            rows.push(String.fromCharCode(65 + index))
        }
        for (let index = 0; index < this.props.cinema.column; index++) {//
            cols.push('A')
        }

        return <section className="Main_Seat_Content_Map">
            <section className="Main_Seat_Content_Map_Column">
            </section>
            <section className="Main_Seat_Content_Map_State">
                <h3>Màn hình</h3>
                {rows.map((item, index) => {
                    return <ul key={item}>
                        {cols.map((_item, _index) => {
                            return <li onClick={() => {
                                let flag = false;
                                for (let i = 0; i < this.state.seats.length; i++) {
                                    if (this.state.seats[i] === item + _index) {
                                        flag = true
                                        this.state.seats.splice(i, 1);
                                        break;
                                    }
                                }
                                if (!flag) {
                                    this.state.seats.push(item + _index);
                                }
                                this.props.addSeat({ seats: this.state.seats })
                                const listGhe = document.getElementsByClassName('ghe')[0];
                                const tongTien = document.getElementsByClassName('tong')[0];

                                listGhe.innerText = `Ghế: ${this.state.seats}`;
                                tongTien.innerText = `Tổng: ${this.state.seats.length * 45000}đ`;
                                this.forceUpdate()

                            }} className={
                                this.checkSelected(item + _index)
                            } key={item + _index}><span >{item + _index}</span></li>
                        })}
                    </ul>

                })}

            </section>
        </section>

    }

    checkSelected = (seat) => {
        for (let index = 0; index < this.state.seats.length; index++) {
            if (this.state.seats[index] === seat) {
                return "Selected"
            }
        }
       
        for (let index = 0; index < this.props.tickets.length; index++) {
            if (this.props.tickets[index].row+this.props.tickets[index].column === seat) {
                return "Block"
            }
        }

        return 'Available'
    }
    render() {
        const phongChieu = document.getElementsByClassName('phongChieu')[0];
        if (phongChieu) {
            phongChieu.innerText = `Phòng Chiếu: ${this.props.cinema.name ? this.props.cinema.name : ''}`
        }

        const name = document.getElementsByClassName('name')[0];
        if (name) {
            name.innerText = this.props.movieItem.name ? this.props.movieItem.name : ''
        }

        const avatarImg = document.getElementsByClassName('avatarImg')[0];
        if (avatarImg && this.props.movieItem.poster) {
            avatarImg.src = BASE_URL_IMAGE + this.props.movieItem.poster;
        }


        return (
            <section className="Main_Seat">
                <h3>Chọn ghế</h3>
                <section className="Main_Seat_Content">
                    <section className="Main_Seat_Content_Note">
                        <article className="Main_Seat_Content_Note_Selected">
                            <span />
                            <p>Ghế bạn chọn</p>
                        </article>
                        <article className="Main_Seat_Content_Note_Available">
                            <span />
                            <p>Ghế trống</p>
                        </article>
                        <article className="Main_Seat_Content_Note_Block">
                            <span />
                            <p>Ghế đã bán</p>
                        </article>
                    </section>
                    {this.createSeatMap()}
                </section>
            </section>

        );
    }
}


function mapStateToProp(state) {
    return {
        showTimeId: state.booking.showTimeId,
        cinemaId: state.booking.cinemaId,
        cinema: state.cinema.cinema,
        movieId: state.booking.movieId,
        movieItem: state.movie.movieItem,
        tickets: state.booking.tickets
    };
}

function mapDispatchToProp(dispatch) {
    return bindActionCreators({
        getCinemaSeatMap: ActionCreator.CinemaActions.getCinemaSeatMap,
        getMovieById: ActionCreator.MovieActions.getMovieById,
        addSeat: ActionCreator.BookingActions.addSeat,
        getAllTicketById: ActionCreator.BookingActions.getAllTicketById
    }, dispatch)
}

const SeatGridContainer = connect(mapStateToProp, mapDispatchToProp)(SeatGrid)
export default SeatGridContainer;

