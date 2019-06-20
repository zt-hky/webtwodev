import React, { Component } from "react"
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavMaster from "./components/NavMaster"
import Menu from "./components/Menu"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import { MenuData } from "./data_example"
import ListMoviePresent from "./pages/ListMoviePresent";
import ListMovieFuture from "./pages/ListMovieFuture";
import Movie from "./pages/Movie";
import Booking from "./pages/Booking";
import Seat from "./pages/Seat";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/ProfileUser"
import Forget from "./pages/Forget";
export default class App extends Component {
    render() {
        console.log(window.location.pathname);
        
        return (
            
                <Router >
                    <div>
                        <NavMaster brandName="WEB_TWO"></NavMaster>
                        <Menu items={MenuData}></Menu>
                        <Route exact path={"/"} component={Home} />
                        <Route path={"/trang-chu"} component={Home} />
                        <Route path="/dang-nhap" component={SignIn} />
                        <Route path="/dang-ky" component={SignUp} />
                        <Route path="/phim-dang-chieu" component={ListMoviePresent} />
                        <Route path="/phim-sap-chieu" component={ListMovieFuture} />
                        <Route path="/mua-ve/:movieId" component={Booking} />
                        <Route path="/cho-ngoi" component={Seat} />
                        <Route path="/chi-tiet/:movieId" component={Movie} />
                        <Route path="/trang-ca-nhan" component={Profile} />
                        <Route path="/forget" component={Forget} />
                        <Route path="/dang-phat-trien" render={() => <h1 style={{ textAlign: "center", color: "red" }}>Đang phát triển</h1>} />
                        <Footer></Footer>
                    </div>
                </Router>
        );
    }
}
