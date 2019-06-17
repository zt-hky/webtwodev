import React from 'react';
import Carousel from '../components/Carousel';
import { BannerData } from '../data_example'
import LoginForm from '../components/LoginForm';
import './SignIn.scss'
export default class SignIn extends React.Component {
    render() {
        return (
            <main>
                <section className="Content">
                    <section className="Content_Img">
                        <Carousel data={BannerData}></Carousel>
                    </section>
                    <LoginForm></LoginForm>
                </section>
            </main>
        );
    }
}