import React from 'react';
import './RegisterForm.scss';
import { MessageBox } from '../UtilComponents';
import axios from 'axios';

export default class RegisterForm extends React.Component {
    constructor(props) {
        super(props)

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
            messageBox: null
        }

        this.txtInput_onChange = this.txtInput_onChange.bind(this)
        this.frmRegister_onSubmit = this.frmRegister_onSubmit.bind(this);
    }

    txtInput_onChange(event) {
        // get key: value
        const key = event.target.name;
        const value = event.target.value;

        var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var strongPasswordRegex = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
        var vnPhoneNumberRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;

        // clear state error
        this.setState({
            usernameError: '',
            nameError: '',
            emailError: '',
            passwordError: '',
            phoneError: ''
        });

        // // validation
        // if (key === "email" && value && !emailRegex.test(value)) {
        //     this.setState({ emailError: "email chưa hợp lệ" })
        // } else if (key === "password" && value) {

        //     if (value.lenght < 8 || value.lenght > 20) {
        //         this.setState({ passwordError: "Mật khẩu phải từ 8 - 20 ký tự." })
        //     } else if (!strongPasswordRegex.test(value)) {
        //         this.setState({ passwordError: "Mật khẩu bao gồm ký tự đặc biệt, [A-Z], [a-z] và [0-9]" })
        //     }
        // } else if (key === "phone" && value && !vnPhoneNumberRegex.test(value)) {
        //     this.setState({ phoneError: "Số điện thoại phải là số Việt Nam" })
        // }

        // set new data to state
        this.setState({
            [key]: value
        });
    }

    frmRegister_onSubmit(event) {
        this.frmRegisterValidate();






        // this.setState({ messageBox: null })

        // if (!(this.state.username && this.state.password && this.state.phone && this.state.name && this.state.email)) {
        //     this.setState({
        //         messageBox: <MessageBox kind="danger" title="Lỗi" message="Hãy nhập đủ thông tin."></MessageBox>
        //     })
        // } else {
        //     axios("http://localhost:5000/api/user/signUp", {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         data: {
        //             username: this.state.username,
        //             email: this.state.email,
        //             password: this.state.password,
        //             phone: this.state.phone,
        //             name: this.state.name
        //         }
        //     }).then((res) => {
        //         if (res.status === 200) {
        //             this.setState({
        //                 messageBox: <MessageBox kind="success" title="Thông báo" message="Đăng ký thành công!"></MessageBox>
        //             })
        //         }

        //     }).catch((error) => {
        //         alert(error.response.data.message);
        //         this.setState({
        //             messageBox: <MessageBox kind="danger" title="Lỗi" message="Đăng ký không thành công. Vui lòng nhập thông tin mới!"></MessageBox>
        //         })
        //     });
        //}
        event.preventDefault()

    }

    frmRegisterValidate() {
        const msg = "Đây là trường bắt buộc."
        this.state.username ? this.setState({ usernameError: "" }) : this.setState({ usernameError: msg, });
        this.state.password ? this.setState({ passwordError: "" }) : this.setState({ passwordError: msg, });
        this.state.email ? this.setState({ emailError: "" }) : this.setState({ emailError: msg, });
        this.state.phone ? this.setState({ phoneError: "" }) : this.setState({ phoneError: msg, });
        this.state.name ? this.setState({ nameError: "" }) : this.setState({ nameError: msg, });
    }


    render() {
        return (
            <section className="Content_Form_Register">
                <h3>ĐĂNG KÝ</h3>
                <form onSubmit={this.frmRegister_onSubmit}>
                    <section className="Content_Form_Register_Info">
                        <input style={{ border: this.state.usernameError ? '2px solid red' : '' }} name="username" id="txtUsername" onChange={this.txtInput_onChange} value={this.state.username} type="text" placeholder="Tên tài khoản" />
                        <h6 className="text-danger">{this.state.usernameError}</h6>
                        <input style={{ border: this.state.emailError ? '2px solid red' : '' }} name="email" id="txtEmail" onChange={this.txtInput_onChange} value={this.state.email} type="email" placeholder="Email" />
                        <h6 className="text-danger">{this.state.emailError}</h6>

                        <input style={{ border: this.state.nameError ? '2px solid red' : '' }} name="name" id="txtName" onChange={this.txtInput_onChange} value={this.state.name} type="text" placeholder="Tên đầy đủ" />
                        <h6 className="text-danger"> {this.state.nameError}</h6>

                        <input style={{ border: this.state.passwordError ? '2px solid red' : '' }} name="password" id="txtPassword" onChange={this.txtInput_onChange} value={this.state.password} minLength={8} maxLength={20} type="password" placeholder="Mật khẩu" />
                        <h6 className="text-danger">{this.state.passwordError}</h6>

                        <input style={{ border: this.state.phoneError ? '2px solid red' : '' }} name="phone" id="txtPhone" onChange={this.txtInput_onChange} value={this.state.phone} type="tel" placeholder="Số điện thoại" />
                        <h6 className="text-danger">{this.state.phoneError}</h6>
                    </section>
                    {this.state.messageBox}
                    <button>đăng ký</button>
                </form>
            </section>
        );
    }
}