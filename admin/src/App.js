import React from "react";
import Login from "pages/login";
import Logout from "pages/logout";
import Home from "pages/home";
import Page404 from "pages/404";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/dashboard" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/logout" component={Logout} />
                    <Route component={Page404} />
                </Switch>
            </Router>
        );
    }
}

export default App;
