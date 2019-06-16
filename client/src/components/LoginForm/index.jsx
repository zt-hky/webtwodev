'user-strict'
import React from 'react';
import './LoginForm.scss'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreator from '../../actions';
import AlertDialog from '../AlertDialog';
class LoginForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            goTo: null
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

    render() {
        return (
            <section className="Content_Form">
                {this.props.message ? <AlertDialog open={true}
                    title={"THÔNG BÁO"}
                    content={this.props.message}
                    onClose={this.closeAlertBtn_onClick}
                ></AlertDialog> : ''}

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
                        <a href="#" aria-controls="home" role="tab" data-toggle="tab">Quên mật khẩu ? </a>
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
        clearProps: ActionCreator.SignInActions.clearProps
    }, dispatch)
}

const SignInContainer = connect(mapStateToProp, mapDispatchToProp)(LoginForm)
export default SignInContainer;
