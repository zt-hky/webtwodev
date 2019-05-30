import React, { Component } from 'react';
import './Home.css';
import NavMaster from '../components/NavMaster';
import Menu from '../components/Menu';
import Carousel from '../components/Carousel';
import MovieGroup from '../components/MovieGroup';
import Information from '../components/Information';
import Relation from '../components/Relation';

import { MovieData, BannerData } from '../data_example'

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavMaster brandName = "WEB_TWO"></NavMaster>
                <Menu></Menu>
                <Carousel data = {BannerData} ></Carousel>
                <main>
                    <section className="HightLightFilm">
                        <h2>* MOVIE *</h2>
                        <MovieGroup groupName="PHIM SẮP CHIẾU" status="Present"
                            items={MovieData}
                        ></MovieGroup>
                        <MovieGroup groupName="PHIM ĐANG CHIẾU" status="Future"
                            items={MovieData}
                        ></MovieGroup>
                    </section>
                </main>
                <footer>
                    <Relation></Relation>
                    <Information></Information>
                </footer>
            </div>

        );
    }
}
