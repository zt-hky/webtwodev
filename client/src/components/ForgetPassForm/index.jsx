import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../../actions';
import { Redirect } from 'react-router-dom';


class ForgetPassForm extends React.Component {

    componentDidMount = () => {
        this.state = {url: window.location.href}
    }

    input_onChanged = (event) => {
        const key = event.target.name;
        const keyError = key + 'Error';
        const value = event.target.value;
        this.props.inputChanged({ [key]: value, [keyError]: '' })
        event.preventDefault()
    }

    frmChangePassForm_onSubmit = (event) => {
        console.log(this.state);
        const curUrl = new URL(this.state.url)
        const email = curUrl.searchParams.get('email')
        const uuid = curUrl.searchParams.get('uuid')

        console.log(email+'/n'+uuid);
        this.props.changePassword({ email,uuid, password: this.props.password, repeatPassword: this.props.repeatPassword });
        event.preventDefault()
    }

    render() {
        console.log('=====================');

        console.log(this.state);
        return (

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: 'auto'
                }}>
                <form onSubmit={this.frmChangePassForm_onSubmit}>
                    <Grid style={{ width: 500, marginTop: "10%", marginBottom: '10%' }}>
                        <h3 style={{ textAlign: 'center' }}>ĐỔI MẬT KHẨU</h3>
                        <TextField style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
                            name="password"
                            value={this.props.password}
                            placeholder = {this.props.passwordError}
                            //label={this.props.passwordError ? this.props.passwordError : "Mật khẩu mới"}
                            error={this.props.passwordError ? true : false}
                            type="password"
                            margin="normal"
                            variant="outlined"
                            onChange={this.input_onChanged}
                        />
                        <TextField style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
                            name="repeatPassword"
                            value={this.props.repeatPassword}
                            placeholder = {this.props.repeatPasswordError}
                            //label={this.props.repeatPasswordError ? this.props.repeatPasswordError : "Nhập lại mật khẩu"}
                            error={this.props.repeatPasswordError ? true : false}
                            type="password"
                            margin="normal"
                            variant="outlined"
                            onChange={this.input_onChanged}
                        />
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            {/* disabled={this.props.password === "" || this.props.repeatPassword === "" ? true : false}  */}
                            <Button type='submit' variant="contained" color="primary">Xác nhận</Button></div>
                    </Grid>
                </form>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return state.changePass;
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        inputChanged: ActionCreators.ChangePasswordActions.inputChanged,
        changePassword: ActionCreators.ChangePasswordActions.changePassword
    }, dispatch)
}

const ForgetPassContainer = connect(mapStateToProps, mapDispatchToProps)(ForgetPassForm)
export default ForgetPassContainer;