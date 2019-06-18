'user-strict'
import React from 'react';
import './LoginForm.scss'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreator from '../../actions';
import AlertDialog from '../AlertDialog';
import {
    Button, TextField, Dialog, CircularProgress,
    DialogActions, DialogContent, DialogTitle, DialogContentText, Link
} from '@material-ui/core';

class LoginForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            goTo: null,
            open: false,
            isSignInWaitting: false,
            isForgotPassWaitting: false
        }
    }

    componentWillReceiveProps = (newProps) => {
        if (newProps.forgotPassMessage || newProps.forgotPassMessageError) {
            this.setState({ isForgotPassWaitting: false })
        }

        if (newProps.message || newProps.emailError || newProps.passwordError) {
            this.setState({ isSignInWaitting: false })
        }
    }

    frmLogin_onSubmit = (event) => {
        this.setState({ isSignInWaitting: true })
        this.props.signIn({ email: this.props.email, password: this.props.password });
        this.forceUpdate()
        event.preventDefault();
    }

    closeAlertBtn_onClick = () => {
        if (this.props.isRedirect) {
            this.setState({ goTo: <Redirect to='/trang-chu' /> })
            this.forceUpdate();
        }
        this.props.clearProps({ password: "", message: "", isRedirect: false });
    }

    frmForgotPassword_onSubmit = (email) => {
        this.setState({ isForgotPassWaitting: true })
        this.props.forgotPassword({ email: email });
    }

    frmForgotPassword_onClose = () => {
        this.setState({ open: false })
        this.props.clearProps({ forgotPassMessage: '', forgotPassMessageError: '' })
    }

    frmForgotPassword_onChange = (event) => {
        this.props.clearProps({ forgotPassMessage: '', forgotPassMessageError: '' })
    }
    render() {
        return (
            <section className="Content_Form">

                {/* Login message alert dialog */}
                {this.props.message ? <AlertDialog open={true}
                    title={"THÔNG BÁO"}
                    content={this.props.message}
                    onClose={this.closeAlertBtn_onClick}
                ></AlertDialog> : ''}

                {/* Forgot password form dialog */}
                {this.state.open ? <FormDialog open={this.state.open}
                    onClose={this.frmForgotPassword_onClose}
                    onSubmit={this.frmForgotPassword_onSubmit}
                    onChange={this.frmForgotPassword_onChange}
                    error={this.props.forgotPassMessageError}
                    isWatting={this.state.isForgotPassWaitting}
                    success={this.props.forgotPassMessage}></FormDialog>
                    : ""}

                {/* Login form */}
                <h3>ĐĂNG NHẬP</h3>
                <form onSubmit={this.frmLogin_onSubmit}>
                    <section className="Content_Form_Info">
                        {/* Email input*/}
                        <input value={this.props.email} onChange={this.props.inputChanged} style={{ border: this.props.emailError ? "2px solid red" : "" }} name="email" type="email" placeholder="Email" />
                        <h6 className="text-danger">{this.props.emailError}</h6>
                        {/* Password input*/}
                        <input value={this.props.password} onChange={this.props.inputChanged} style={{ border: this.props.passwordError ? "2px solid red" : "" }} name="password" type="password" placeholder="Mật khẩu" />
                        <h6 className="text-danger">{this.props.passwordError}</h6>
                    </section>
                    <section className="Content_Form_Check">
                        <Link onClick={() => {
                            this.setState({ open: true })
                        }} aria-controls="home" role="tab" data-toggle="tab">Quên mật khẩu ? </Link>
                    </section>
                    <button className="loginBtn" type="submit">{this.state.isSignInWaitting ? <CircularProgress size={24} color="inherit">Đăng nhập</CircularProgress> : "Đăng nhập"} </button>
                </form>
                {this.state.goTo}
            </section>
        );
    }
}

function mapStateToProp(state) {
    return state.signIn;
}

function mapDispatchToProp(dispatch) {
    return bindActionCreators({
        signIn: ActionCreator.SignInActions.signIn,
        inputChanged: ActionCreator.SignInActions.inputChanged,
        forgotPassword: ActionCreator.SignInActions.forgotPassword,
        clearProps: ActionCreator.SignInActions.clearProps,
    }, dispatch)
}

const SignInContainer = connect(mapStateToProp, mapDispatchToProp)(LoginForm)
export default SignInContainer;




class FormDialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open,
            email: '',
        }
    }

    handleClickOpen = () => {
        this.setState({ open: true })
    }

    btnCancel_onClick = () => {
        this.setState({ open: false })
        this.props.onClose();
    }

    btnSend_onClick = () => {
        this.props.onSubmit(this.state.email);
    }

    txtEmail_onChanged = (event) => {
        this.props.onChange(event)
        this.setState({ email: event.target.value })
    }
    render() {
        return (
            <div>
                <Dialog open={this.state.open} onClose={this.btnCancel_onClick} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Quên Mật Khẩu</DialogTitle>
                    <DialogContent>
                        <DialogContentText >Để lấy lại mật khẩu bạn vui lòng nhập email đã đăng ký tài khoản.</DialogContentText>
                        <DialogContentText color='error'>{this.props.error}</DialogContentText>
                        <DialogContentText color='primary'>{this.props.success}</DialogContentText>
                        <TextField value={this.state.email} onChange={this.txtEmail_onChanged} autoFocus margin="dense" id="name" label="Email" type="email" fullWidth />
                    </DialogContent>
                    <DialogActions>
                        {this.props.success ?
                            <Button onClick={this.btnCancel_onClick} color="primary">Đóng</Button>
                            :
                            <div><Button onClick={this.btnCancel_onClick} color="primary">Huỷ</Button>
                                {this.props.isWatting ? <Button><CircularProgress size={24} color='inherit'></CircularProgress></Button>
                                    : <Button onClick={this.btnSend_onClick} color="primary">Gửi</Button>}
                            </div>}
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

FormDialog.defaultProps = {
    open: false,
    error: '',
    isWaitting: false,
    onSubmit: (email) => {
        console.log(email);
    },

    onClose: () => {
        console.log("close");
    },
    onChange: (event) => {
        console.log('change');

    }

}
