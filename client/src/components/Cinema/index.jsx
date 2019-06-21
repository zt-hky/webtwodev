import React from 'react';
import './Cinema.scss'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreator from '../../actions';
import {
    Button, Dialog, CircularProgress,
    DialogActions, DialogContent, DialogTitle, DialogContentText, Link
} from '@material-ui/core';
class Cinema extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isGoToLogin: false,
            isShowDialog: false,
            isGoToBooking: false
        }
    }

    componentDidMount = ()=>{
        
    }

    createShowTimeElement = () => {
        if (this.props.showTimesList && this.props.date) {
            return this.props.showTimesList.map((item) => <article key={item.key}> <button key={item.id} value={item.id} onClick={this.showTime_onClick}> {item.time}</button></article>);
        }
    }

    showTime_onClick = (event) => {
        this.props.setShowTimeId({ showTimeId: event.target.value })
        const token = localStorage.getItem('token')
        if (!token) {
            this.setState({ isShowDialog: true })
        }else{
            this.setState({isGoToBooking: true})
        }
    }

    showDialog = () => {
        if (this.state.isShowDialog) {
            return <FormDialog onClose={this.btnClose_onClick} onSubmit={this.btnOk_onClick} open={true}></FormDialog>
        }
    }

    btnOk_onClick = () => {
        this.setState({ isGoToLogin: true })
    }

    btnClose_onClick = () => {
        this.setState({ isShowDialog: false, isGoToLogin: false, isGoToBooking: false})
    }

    goToLogin = () => {
        if (this.state.isGoToLogin) {
            return <Redirect to='/dang-nhap'></Redirect>
        }
    }

    goToSeatBooking = () => {
        if (this.props.showTimeId && this.state.isGoToBooking) {
            this.props.clearProps({date:''})            
            return <Redirect to={`/cho-ngoi/${this.props.movieId}/${this.props.showTimeId}`}></Redirect>
        }
    }

    componentWillUnmount = ()=>{
        //this.props.clearProps({showTimesList:[], date:'',cinemaId:''})
    }

    render() {
        return (
            <article className="Theater_Calendar_List_Theater">
                <h4>{this.props.cinemaName}</h4>
                <section className="Theater_Calendar_List_Theater_Ticket">
                    <h5>2D - Phụ đề</h5>
                    <section className="Theater_Calendar_List_Theater_Ticket_ListTime">
                        {this.createShowTimeElement()}
                    </section>
                </section>
                {this.showDialog()}
                {this.goToLogin()}
                {this.goToSeatBooking()}
            </article>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        showTimesList: state.booking.showTimesList,
        showTimeId: state.booking.showTimeId,
        movieId: state.booking.movieId,
        date: state.booking.date,
        cinemaName: state.booking.cinemaName
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        clearProps: ActionCreator.BookingActions.clearProps,
        setShowTimeId: ActionCreator.BookingActions.setShowTimeId,
        clearState:ActionCreator.BookingActions.clearState,
    }, dispatch)
}
const CinemaContainer = connect(mapStateToProps, mapDispatchToProps)(Cinema)
export default CinemaContainer;



class FormDialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open,
        }
    }

    btnCancel_onClick = () => {
        this.setState({ open: false })
        this.props.onClose();
    }

    btnOk_onClick = () => {
        this.props.onSubmit()
        this.setState({ open: false })
    }
    render() {
        return (
            <div>
                <Dialog open={this.state.open} onClose={this.btnCancel_onClick} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Thông báo</DialogTitle>
                    <DialogContent>
                        <DialogContentText>Bạn cần đăng nhập để tiếp tục đặt vé.</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.btnCancel_onClick} color="primary">Quay lại</Button>
                        <Button onClick={this.btnOk_onClick} color="primary">Đăng nhâp</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

FormDialog.defaultProps = {
    open: false,
    onSubmit: () => {
        console.log('ok');
    },
    onClose: () => {
        console.log("close");
    },

}

