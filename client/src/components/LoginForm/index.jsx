import React from 'react';
import './LoginForm.scss'
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreator from '../../actions';
import ActionTypes from '../../actions/actionTypes';
import { access } from 'fs';
class LoginForm extends React.Component {

    // txtUsername_onChange = (event) => {
    //     this.setState({ username: event.target.value, usernameError: "" })
    // }

    // txtPassword_onChange = (event) => {
    //     this.setState({ password: event.target.value, passwordError: "" })
    // }

    // frmLogin_onSubmit = (event) => {
    //     this.state.username ? this.setState({ usernameError: "" }) : this.setState({ usernameError: "Đây là trường bắt buộc." })
    //     this.state.password ? this.setState({ passwordError: "" }) : this.setState({ passwordError: "Đây là trường bắt buộc." })

    //     if (this.state.username && this.state.password) {
    //         axios.post('http://localhost:5000/api/user/signIn', this.state, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "Application/json"
    //             }
    //         }).then((res) => {

    //             if (res.data.error) {
    //                 alert("Tài khoản của bạn chưa được kích hoạt. Vui lòng kiểm tra mail")
    //             } else {
    //                 this.setState({ isRedirect: true })
    //                 alert("Chào mừng bạn đến với WEB_TWO MOVIE")
    //             }
    //             console.log(res);


    //         }).catch((err) => {
    //             this.setState({ isRedirect: false })
    //             alert('Tài khoản hoặc mật khẩu không đúng!')
    //         })
    //     }
    //     event.preventDefault();
    // }


    // goHomePage = () => {
    //     if (this.state.isRedirect) {
    //         return <Redirect to='/trang-chu' />
    //     }

    // }

    frmLogin_onSubmit = (event) => {
        this.props.authenticate({ username: this.props.username, password: this.props.password });
        event.preventDefault();
    }

    render() {
        console.log(this.props);

        return (
            <section className="Content_Form">
                <h3>ĐĂNG NHẬP</h3>
                <form onSubmit={this.frmLogin_onSubmit}>
                    <section className="Content_Form_Info">
                        <input value={this.props.username} onChange={this.props.inputUsername} style={{ border: this.props.usernameError ? "2px solid red" : "" }} type="text" placeholder="Tài khoản" />
                        <h6 className="text-danger">{this.props.usernameError}</h6>
                        <input value={this.props.password} onChange={this.props.inputPassword} style={{ border: this.props.passwordError ? "2px solid red" : "" }}  type="password" placeholder="Mật khẩu" />
                        <h6 className="text-danger">{this.props.passwordError}</h6>

                    </section>
                    <section className="Content_Form_Check">
                        <a href="#" aria-controls="home" role="tab" data-toggle="tab">Quên mật khẩu ? </a>
                    </section>
                    <button type="submit">Đăng nhập</button>
                </form>
                {/* {this.goHomePage()} */}
            </section>
        );
    }
}

function mapStateToProp(state) {
    return {
        username: state.login.username,
        password: state.login.password,
        usernameError: state.login.usernameError,
        passwordError: state.login.passwordError
    }
}

function mapDispatchToProp(dispatch) {
    return bindActionCreators({
        authenticate: ActionCreator.LoginActions.authenticate,
        inputUsername: ActionCreator.LoginActions.inputUsername,
        inputPassword: ActionCreator.LoginActions.inputPassword
    }, dispatch)
}

const LoginContainer = connect(mapStateToProp, mapDispatchToProp)(LoginForm)
export default LoginContainer;
