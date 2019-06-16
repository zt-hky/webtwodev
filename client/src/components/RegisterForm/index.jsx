import React from 'react';
import './RegisterForm.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreator from '../../actions';
import AlertDialog from '../AlertDialog';
import { Redirect } from 'react-router-dom';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goTo: null
        }
    }

    // Handle submit form
    frmRegister_onSubmit = (event) => {
        this.props.signUp({ email: this.props.email, password: this.props.password, phone: this.props.phone, name: this.props.name })
        this.forceUpdate();
        event.preventDefault();
    }

    // Handle close dialog button
    closeAlertBtn_onClick = () => {
        if (this.props.isRedirect) {
            this.setState({ goTo: <Redirect to='/dang-nhap' /> })
        }
        this.props.clearProps({ password: '', phone: '', message: '', isRedirect: false });
    }

    render() {
        return (
            <section className="Content_Form_Register">
                {this.props.message ? <AlertDialog open={true}
                    title={"THÔNG BÁO"}
                    content={this.props.message}
                    onClose={this.closeAlertBtn_onClick}
                ></AlertDialog> : ''}
                <h3>ĐĂNG KÝ</h3>
                <form onSubmit={this.frmRegister_onSubmit}>
                    <section className="Content_Form_Register_Info">
                        {/* Email */}
                        <h6 className="text-danger">{this.props.emailError}</h6>
                        <input style={{ border: this.props.emailError ? '2px solid red' : '' }} name="email" id="txtEmail" onChange={this.props.inputChanged} value={this.props.email} name="email" type="email" placeholder="Email" />

                        {/* Name */}
                        <h6 className="text-danger"> {this.props.nameError}</h6>
                        <input style={{ border: this.props.nameError ? '2px solid red' : '' }} name="name" id="txtName" onChange={this.props.inputChanged} value={this.props.name} name="name" type="text" placeholder="Tên đầy đủ" />

                        {/* Password */}
                        <h6 className="text-danger">{this.props.passwordError}</h6>
                        <input style={{ border: this.props.passwordError ? '2px solid red' : '' }} name="password" id="txtPassword" onChange={this.props.inputChanged} value={this.props.password} name="password" type="password" placeholder="Mật khẩu" />

                        {/* Phone */}
                        <h6 className="text-danger">{this.props.phoneError}</h6>
                        <input style={{ border: this.props.phoneError ? '2px solid red' : '' }} name="phone" id="txtPhone" onChange={this.props.inputChanged} value={this.props.phone} name="phone" type="tel" placeholder="Số điện thoại" />
                    </section>
                    <button>Đăng ký</button>
                </form>
                {this.state.goTo}
            </section>
        );
    }
}

const mapStateToProp = (state) => {
    return state.signUp
}

const mapDispatchToProp = (dispatch) => {
    return bindActionCreators({
        inputChanged: ActionCreator.SignUpActions.inputChanged,
        signUp: ActionCreator.SignUpActions.signUp,
        clearProps: ActionCreator.SignUpActions.clearProps,

    }, dispatch)
}

const RegisterComponent = connect(mapStateToProp, mapDispatchToProp)(RegisterForm);
export default RegisterComponent;