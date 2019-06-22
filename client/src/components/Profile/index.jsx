import React from 'react';
import './Profile.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreator from '../../actions';
import { CircularProgress } from '@material-ui/core';
import AlertDialog from '../AlertDialog';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isWaiting: false }
    }

    componentDidMount = () => {
        this.props.getUserProfile()
    }

    frmRegister_onSubmit = (e) => {
        this.setState({ isWaiting: true })
        this.props.update({ name: this.props.name, phone: this.props.phone }, () => {
            this.setState({ isWaiting: false })
        })
        e.preventDefault()
    }

    onFinish = () => {
        
        if (this.props.message) {
            return <AlertDialog open={true}
                title="Thông báo"
                content={this.props.message}></AlertDialog>
        }
        if (this.props.error) {
            return <AlertDialog open={true}
                title="Lỗi"
                content={this.props.error}></AlertDialog>
        }
    }
    render() {

        return (

            <section className="Content_Form_Profile">
                <h3>THÔNG TIN CÁ NHÂN </h3>
                <form onSubmit={this.frmRegister_onSubmit}>
                    <section className="Content_Form_Profile_Info">
                        {/* <h6 className="text-danger">{this.state.emailError}</h6> */}
                        <input value={this.props.email} id="disabledInput" placeholder="Email@gmail.com" disabled />

                        {/* <h6 className="text-danger"> {this.state.nameError}</h6> */}
                        <input name="name" id="txtName" onChange={(e) => {
                            this.props.onChanged(e)
                        }} value={this.props.name} type="text" placeholder="Tên đầy đủ" />

                        {/* <h6 className="text-danger">{this.state.phoneError}</h6> */}
                        <input name="phone" id="txtPhone" onChange={(e) => {
                            this.props.onChanged(e)
                        }} value={this.props.phone} type="tel" placeholder="Số điện thoại" />
                    </section>
                    <button type="submit"> {this.state.isWaiting ? <CircularProgress></CircularProgress> : 'Cập Nhật'} </button>
                </form>
                {this.onFinish()}
            </section>
        );
    }

}

const mapStateToProps = (state) => {
    return state.user
}

const mapDispatchToProp = (dispatch) => {
    return bindActionCreators({
        getUserProfile: ActionCreator.UserAction.getUserProfile,
        onChanged: ActionCreator.UserAction.onChanged,
        update: ActionCreator.UserAction.update
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProp)(Profile)