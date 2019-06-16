'user-strict'
import React from 'react';
import './LoginForm.scss'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreator from '../../actions';
import AlertDialog from '../AlertDialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class LoginForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            goTo: null,
            open: false
        }
    }

    frmLogin_onSubmit = (event) => {
        this.props.signIn({ email: this.props.email, password: this.props.password });
        this.forceUpdate()
        event.preventDefault();
    }

    closeAlertBtn_onClick = () => {
        if (this.props.isRedirect) {
            this.setState({ goTo: <Redirect to='/trang-chu' /> })
        }
        this.props.clearProps({ password: "", message: "", isRedirect: false });
    }

    frmForgotPassword_onSubmit = (email) => {
        this.props.forgotPassword({ email: email });
    }

    frmForgotPassword_onClose = () => {
        this.setState({ open: false })
    }
    render() {
        console.log(this.props);

        return (
            <section className="Content_Form">
                {this.props.message ? <AlertDialog open={true}
                    title={"THÔNG BÁO"}
                    content={this.props.message}
                    onClose={this.closeAlertBtn_onClick}
                ></AlertDialog> : ''}

                {this.state.open ? <FormDialog open={this.state.open}
                    onClose={this.frmForgotPassword_onClose} onSubmit={this.frmForgotPassword_onSubmit}
                    error={this.props.forgotPassMessageError}></FormDialog>
                    : ""}

                <h3>ĐĂNG NHẬP</h3>
                <form onSubmit={this.frmLogin_onSubmit}>
                    <section className="Content_Form_Info">
                        {/* Email */}
                        <input value={this.props.email} onChange={this.props.inputChanged} style={{ border: this.props.emailError ? "2px solid red" : "" }} name="email" type="email" placeholder="Email" />
                        <h6 className="text-danger">{this.props.emailError}</h6>
                        {/* Password */}
                        <input value={this.props.password} onChange={this.props.inputChanged} style={{ border: this.props.passwordError ? "2px solid red" : "" }} name="password" type="password" placeholder="Mật khẩu" />
                        <h6 className="text-danger">{this.props.passwordError}</h6>
                    </section>
                    <section className="Content_Form_Check">
                        <a onClick={() => {
                            this.setState({ open: true })
                        }} aria-controls="home" role="tab" data-toggle="tab">Quên mật khẩu ? </a>
                    </section>
                    <button type="submit">Đăng nhập</button>
                </form>
                {this.state.goTo}
            </section>
        );
    }
}

function mapStateToProp(state) {
    console.log(state);

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
        this.setState({ email: event.target.value })
        console.log(event.target);
    }
    render() {
        return (
            <div>
                <Dialog open={this.state.open} onClose={this.btnCancel_onClick} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Quên Mật Khẩu</DialogTitle>
                    <DialogContent>
                        <DialogContentText>Để lấy lại mật khẩu bạn vui lòng nhập email đã đăng ký tài khoản.</DialogContentText>
                        <TextField value={this.state.email} onChange={this.txtEmail_onChanged} autoFocus margin="dense" id="name" label="Email" type="email" fullWidth />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.btnCancel_onClick} color="primary">Huỷ</Button>
                        <Button onClick={this.btnSend_onClick} color="primary">Gửi</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

FormDialog.defaultProps = {
    open: false,
    onSubmit: (email) => {
        console.log(email);
    },

    onClose: () => {
        console.log("close");

    }

}
