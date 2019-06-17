import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../../actions';

class ForgetPassForm extends React.Component {

    componentDidMount = () => {
        console.log(window.location.href);
    }

    render() {
        console.log("=================");

        console.log(this.props);
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: 'auto'
                }}>
                <Grid style={{ width: 500, marginTop: "10%", marginBottom: '10%' }}>
                    <h3 style={{ textAlign: 'center' }}>ĐỔI MẬT KHẨU</h3>
                    <TextField style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
                        name="password"
                        value={this.props.password}
                        label="Mật khẩu mới"
                        type="password"
                        margin="normal"
                        variant="outlined"
                        onChange={this.props.inputChanged}
                    />
                    <TextField style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
                        name="repeatPassword"
                        value={this.props.repeatPassword}
                        label="Nhập lại mật khẩu"
                        type="password"
                        margin="normal"
                        variant="outlined"
                        onChange={this.props.inputChanged}
                    />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="contained" color="primary">Xác nhận</Button></div>
                </Grid>
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