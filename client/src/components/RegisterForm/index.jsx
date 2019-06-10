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
            messageBox: null
        }

        this.txtInput_onChange = this.txtInput_onChange.bind(this)
        this.frmRegister_onSubmit = this.frmRegister_onSubmit.bind(this);
        this.btnSendMail_onClick = this.btnSendMail_onClick.bind(this);
    }

    txtInput_onChange(event) {
        const key = event.target.name;
        const value = event.target.value;

        this.setState({
            [key]: value
        });
    }

    frmRegister_onSubmit(event) {
        if (!this.state.username || this.state.username === "" ||
            !this.state.email || this.state.email === "" ||
            !this.state.password || this.state.password === "" ||
            !this.state.name || this.state.name === "" ||
            !this.state.phone || this.state.phone === "") {
            this.setState({
                messageBox: <MessageBox kind='danger' title="" message="Vui lòng nhập đầy đủ thông tin!"></MessageBox>
            })
        } else {
            this.setState({ messageBox: null })

            axios("http://localhost:5000/api/user/signUp", {
                method: 'POST',
                timeout: 5000,
                headers: {
                    "Content-Type": "application/json"
                },
                data: {
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password,
                    phone: this.state.phone,
                    name: this.state.name
                }
            }).then((res) => {
                if (res.status === 200) {
                    this.setState({
                        messageBox: <MessageBox kind="success" title="Thông báo" message="Đăng ký thành công!"></MessageBox>
                    })
                }

            }).catch((error) => {
                this.setState({
                    messageBox: <MessageBox kind="danger" title="Lỗi" message="Đăng ký không thành công. Vui lòng nhập thông tin mới!"></MessageBox>
                })
            });
        }
        event.preventDefault()

    }

    btnSendMail_onClick(event){
        axios('http://localhost:5000/api/user/send-confirmation-mail',{
            method: 'POST',
            timeout: 5000,
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                email: "dinhhongngoc1234@gmail.com"
            }
        })
        .then(res=>{
            console.log(res);
        })
    }
    render() {
        return (
            <section className="Content_Form_Register">
                <h3>ĐĂNG KÝ</h3>
                <form onSubmit={this.frmRegister_onSubmit}>
                    <section className="Content_Form_Info">
                        <input name="username" id="txtUsername" onChange={this.txtInput_onChange} value={this.state.username} type="text" placeholder="Tên tài khoản" />
                        <input name="email" id="txtEmail" onChange={this.txtInput_onChange} value={this.state.email} type="email" placeholder="Email" />
                        <input name="name" id="txtName" onChange={this.txtInput_onChange} value={this.state.name} type="text" placeholder="Tên đầy đủ" />
                        <input name="password" id="txtPassword" onChange={this.txtInput_onChange} value={this.state.password} type="password" placeholder="Mật khẩu" />
                        <input name="phone" id="txtPhone" onChange={this.txtInput_onChange} value={this.state.phone} type="tel" placeholder="Số điện thoại" />
                    </section>
                    {this.state.messageBox}
                    <button>đăng ký</button>
                </form>
                <button onClick={this.btnSendMail_onClick} >Send mail</button>
            </section>
        );
    }
}