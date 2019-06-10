import React from 'react';
import './SignUp.css';
import Carousel from '../components/Carousel';
import {BannerData} from '../data_example';
import RegisterForm from '../components/RegisterForm';
import './SignUp.css'
export default class SignUp extends React.Component {

    render() {
        return (
            <main>
                <section className="Content">
                    <section className="Content_Img">
                    <Carousel data ={BannerData}></Carousel>
                    </section>
                   <RegisterForm></RegisterForm>
                </section>
            </main>

        );
    }
}
