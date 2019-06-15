import React from 'react';
import './RegisterForm.scss';
import { MessageBox } from '../UtilComponents';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default class RegisterForm extends React.Component {
    constructor(props) {
        super(props)
        var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var strongPasswordRegex = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
        var vnPhoneNumberRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;

        this.state = {
            username: "",
            password: "",
            name: "",
            email: "",
            phone: "",
            nameError: '',
            usernameError: '',
            emailError: '',
            passwordError: '',
            phoneError: '',
            emailRegex: emailRegex,
            strongPasswordRegex: strongPasswordRegex,
            vnPhoneNumberRegex: vnPhoneNumberRegex,
            isRedirect: false
        }
    }

    txtUsername_onChange = (event) => {
        this.setState({ username: event.target.value, usernameError: "" })
    }

    txtPassword_onChange = (event) => {
        const value = event.target.value;
        this.setState({ passwordError: '' });
        if (value.length < 8 || value.length > 20) {
            this.setState({ passwordError: 'Mật khẩu từ 8 - 20 ký tự.' });
        } else if (!this.state.strongPasswordRegex.test(value)) {
            this.setState({ passwordError: 'Mật khẩu bao gồm ký tự đặc biệt, [a-z], [A-Z] và [0-9]' });
        }
        this.setState({ password: value })
    }

    txtName_onChange = (event) => {
        this.setState({ name: event.target.value, nameError: "" })
    }

    txtPhone_onChange = (event) => {
        console.log(this.state);

        const value = event.target.value;
        this.setState({ phoneError: '', });
        if (!this.state.vnPhoneNumberRegex.test(value)) {
            this.setState({ phoneError: 'Phải là số điện thoại Việt Nam' });
        }
        this.setState({ phone: value })
    }

    txtEmail_onChange = (event) => {
        const value = event.target.value;
        this.setState({ emailError: '', });
        if (value && !this.state.emailRegex.test(value)) {
            this.setState({ emailError: "Email chưa hợp lệ" })
        }
        this.setState({ email: value })
    }


    frmRegister_onSubmit = (event) => {
        if (!this.state.username || !this.state.password || !this.state.email || !this.state.name || !this.state.phone) {
            this.frmRegisterValidate();
        } else if (this.state.email && !this.state.emailRegex.test(this.state.email)) {
            this.setState({ emailError: "Email chưa hợp lệ" })
        } else if (this.state.password && !this.state.strongPasswordRegex.test(this.state.password)) {
            this.setState({ passwordError: 'Mật khẩu bao gồm ký tự đặc biệt, [a-z], [A-Z] và [0-9]' });
        } else if (this.state.phone && !this.state.vnPhoneNumberRegex.test(this.state.phone)) {
            this.setState({ phoneError: 'Phải là số điện thoại Việt Nam' });
        } else {

            axios.post('http://localhost:5000/api/user/signUp', this.state, {
                method: 'POST',
                headers: {
                    "Content-Type": 'Application/json'
                }
            }).then((res) => {
                this.setState({ isRedirect: true })
                alert("Chúng tôi đã gửi đến bạn mail kích hoạt. Vui lòng kiểm tra  mail!")
            }).catch((err) => {
                this.setState({ isRedirect: false })
                alert("Tài khoản đã tồn tại.")
            })
        }
        console.log(this.state);
        event.preventDefault()
    }

    frmRegisterValidate = () => {
        const msg = "Đây là trường bắt buộc."
        this.state.username ? this.setState({ usernameError: "" }) : this.setState({ usernameError: msg });
        this.state.password ? this.setState({ passwordError: "" }) : this.setState({ passwordError: msg });
        this.state.email ? this.setState({ emailError: "" }) : this.setState({ emailError: msg });
        this.state.phone ? this.setState({ phoneError: "" }) : this.setState({ phoneError: msg });
        this.state.name ? this.setState({ nameError: "" }) : this.setState({ nameError: msg });
    }

    redirectLoginPage = () => {
        if (this.state.isRedirect) {
            return <Redirect to='/dang-nhap' />
        }
    }
    render() {
        return (
            <section className="Content_Form_Register">
                <h3>ĐĂNG KÝ</h3>
                <form onSubmit={this.frmRegister_onSubmit}>
                    <section className="Content_Form_Register_Info">
                        <h6 className="text-danger">{this.state.usernameError}</h6>
                        <input style={{ border: this.state.usernameError ? '2px solid red' : '' }} name="username" id="txtUsername" onChange={this.txtUsername_onChange} value={this.state.username} type="text" placeholder="Tên tài khoản" />
                        <h6 className="text-danger">{this.state.emailError}</h6>
                        <input style={{ border: this.state.emailError ? '2px solid red' : '' }} name="email" id="txtEmail" onChange={this.txtEmail_onChange} value={this.state.email} type="email" placeholder="Email" />

                        <h6 className="text-danger"> {this.state.nameError}</h6>
                        <input style={{ border: this.state.nameError ? '2px solid red' : '' }} name="name" id="txtName" onChange={this.txtName_onChange} value={this.state.name} type="text" placeholder="Tên đầy đủ" />

                        <h6 className="text-danger">{this.state.passwordError}</h6>
                        <input style={{ border: this.state.passwordError ? '2px solid red' : '' }} name="password" id="txtPassword" onChange={this.txtPassword_onChange} value={this.state.password} minLength={8} maxLength={20} type="password" placeholder="Mật khẩu" />

                        <h6 className="text-danger">{this.state.phoneError}</h6>
                        <input style={{ border: this.state.phoneError ? '2px solid red' : '' }} name="phone" id="txtPhone" onChange={this.txtPhone_onChange} value={this.state.phone} type="tel" placeholder="Số điện thoại" />
                    </section>
                    <button>Đăng ký</button>
                </form>
                {this.redirectLoginPage()}
            </section>
        );
    }
}