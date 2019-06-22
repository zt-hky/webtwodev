import React from 'react'
import './MovieInfo.scss'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreator from '../../actions';
import { CircularProgress } from '@material-ui/core';
import AlertDialog from '../AlertDialog';

class MovieInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isWaiting: false
        }
    }

    onSuccess = () => {
        if (this.props.status) {
            return <AlertDialog open={true}
                title={"THÔNG BÁO"}
                content={this.props.status}
            ></AlertDialog>
        }
        if (this.props.bookError) {
            return <AlertDialog open={true}
                title={"THÔNG BÁO"}
                content={this.props.bookError}
            ></AlertDialog>
        }
    }

    componentWillUnmount= () =>{
        this.props.clearProps({status:'', error:''})
    }

    render() {
        return (
            <aside className="Main_Info">
                <img className="avatarImg" src={require("../../img/seat_film.svg")} alt="#" />
                <section className="Main_Info_Detail">
                    <h3 className='name'>ALADIN</h3>
                    <section>
                        <ul>
                            <li>Rạp: {this.props.cinameName}</li>
                            <li>Suất chiếu: 22:15 Thứ năm, 30/5/2019</li>
                            <li className="phongChieu">Phòng Chiếu: </li>
                            <li className='ghe'>Ghế: </li>
                            <li className='tong'> Tổng: 0đ</li>
                        </ul>
                    </section>
                    <button onClick={(e) => {
                        this.setState({ isWaiting: true })
                        this.props.booking({ seats: this.props.seats, showTimeId: this.props.showTimeId }, () => {
                            this.setState({ isWaiting: false })
                        })
                    }}> {this.state.isWaiting ? <CircularProgress></CircularProgress> : 'Đặt vé'}</button>
                </section>
                {this.onSuccess()}
            </aside>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        seats: state.booking.seats,
        cinameName: state.booking.cinameName,
        showTimeId: state.booking.showTimeId,
        showTimesList: state.booking.showTimesList,
        bookError: state.booking.bookError,
        status: state.booking.status

    }
}
const matDispatchTopProp = (dispatch) => {
    return bindActionCreators({
        booking: ActionCreator.BookingActions.booking,
        clearProps: ActionCreator.BookingActions.clearProps
    }, dispatch)
}

const MovieInfoContainer = connect(mapStateToProps, matDispatchTopProp)(MovieInfo)
export default MovieInfoContainer;