import React from "react";

import { Redirect } from "react-router-dom";
import DrawBar from "containers/DrawBar";

const redirect = () => {
    return <Redirect to="/login" />;
};

class Login extends React.Component {
    render() {
        var check = localStorage.getItem("token");
        if (!check) {
            return redirect();
        } else {
            return <DrawBar />;
        }
    }
}

export default Login;
