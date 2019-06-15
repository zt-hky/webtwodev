import React from 'react';
import './LoginForm.scss'
import { Redirect } from 'react-router-dom';
import axios from 'axios';
export default class LoginForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            usernameError: "",
            passwordError: "",
            isRedirect: false

        }
    }

    txtUsername_onChange = (event) => {
        this.setState({ username: event.target.value, usernameError: "" })
    }

    txtPassword_onChange = (event) => {
        this.setState({ password: event.target.value, passwordError: "" })
    }

    frmLogin_onSubmit = (event) => {
        this.state.username ? this.setState({ usernameError: "" }) : this.setState({ usernameError: "Đây là trường bắt buộc." })
        this.state.password ? this.setState({ passwordError: "" }) : this.setState({ passwordError: "Đây là trường bắt buộc." })

        if (this.state.username && this.state.password) {
            axios.post('http://localhost:5000/api/user/signIn', this.state, {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json"
                }
            }).then((res) => {

                if (res.data.error) {
                    alert("Tài khoản của bạn chưa được kích hoạt. Vui lòng kiểm tra mail")
                } else {
                    this.setState({ isRedirect: true })
                    alert("Chào mừng bạn đến với WEB_TWO MOVIE")
                }
                console.log(res);


            }).catch((err) => {
                this.setState({ isRedirect: false })
                alert('Tài khoản hoặc mật khẩu không đúng!')
            })
        }
        event.preventDefault();
    }


    goHomePage = () => {
        if (this.state.isRedirect) {
            return <Redirect to='/trang-chu' />
        }

    }

    render() {
        return (
            <section className="Content_Form">
                <h3>ĐĂNG NHẬP</h3>
                <form onSubmit={this.frmLogin_onSubmit}>
                    <section className="Content_Form_Info">

                        <input style={{ border: this.state.usernameError ? "2px solid red" : "" }} onChange={this.txtUsername_onChange} type="text" placeholder="Tài khoản" />
                        <h6 className="text-danger">{this.state.usernameError}</h6>
                        <input style={{ border: this.state.passwordError ? "2px solid red" : "" }} onChange={this.txtPassword_onChange} type="password" placeholder="Mật khẩu" />
                        <h6 className="text-danger">{this.state.passwordError}</h6>

                    </section>
                    <section className="Content_Form_Check">
                        <a href="#" aria-controls="home" role="tab" data-toggle="tab">Quên mật khẩu ? </a>
                    </section>
                    <button type="submit">Đăng nhập</button>
                </form>
                {this.goHomePage()}
            </section>
        );
    }
}
