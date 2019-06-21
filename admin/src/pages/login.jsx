import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import singinAction from "actions/signin";

function MadeWithLove() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Built with love by the "}
            <Link color="inherit" href="https://material-ui.com/">
                Material-UI
            </Link>
            {" team."}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    "@global": {
        body: {
            backgroundColor: theme.palette.common.white
        }
    },
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

const redirect = () => {
    return <Redirect to="/" />;
};

class Login extends React.Component {
    frm_onSubmit = event => {
        console.log(this.props);
        event.preventDefault();
        this.props.signinSubmit(this.props);
    };
    render() {
        var check = localStorage.getItem("token");
        if (check) {
            return redirect();
        } else {
            const classes = useStyles;
            return (
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form
                            className={classes.form}
                            noValidate
                            onSubmit={this.frm_onSubmit}
                        >
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                autoFocus
                                value={this.props.username}
                                onChange={this.props.inputChanged}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={this.props.password}
                                onChange={this.props.inputChanged}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign In
                            </Button>
                        </form>
                    </div>
                    <Box mt={5}>
                        <MadeWithLove />
                    </Box>
                </Container>
            );
        }
    }
}

const mapStateToProp = state => {
    return state.signin;
};

function MapDisPatchtoProp(DisPatch) {
    return bindActionCreators(
        {
            inputChanged: singinAction.inputChanged,
            signinSubmit: singinAction.signinSubmit
        },
        DisPatch
    );
}

export default connect(
    mapStateToProp,
    MapDisPatchtoProp
)(Login);
