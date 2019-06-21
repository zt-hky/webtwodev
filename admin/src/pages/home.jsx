import React from "react";

import { Redirect } from "react-router-dom";

const redirect = () => {
    return <Redirect to="/login" />;
};

const homepage = () => {
    return <h1>Đăng nhập thành công</h1>;
};

class Login extends React.Component {
    render() {
        var check = localStorage.getItem("token");
        if (!check) {
            return redirect();
        } else {
            return homepage();
        }
    }
}

export default Login;
