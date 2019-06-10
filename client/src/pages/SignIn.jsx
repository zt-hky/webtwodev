import React from 'react';
import Carousel from '../components/Carousel';
import {BannerData} from '../data_example'
import LoginForm from '../components/LoginForm';
import './SignIn.scss'
export default class SignIn extends React.Component {
    render() {
        return (
            <main>
                <section className="Content">
                    <Carousel data = {BannerData}></Carousel>
                    <LoginForm></LoginForm>
                </section>
            </main>
        );
    }
}