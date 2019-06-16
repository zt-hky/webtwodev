import React, { Component } from 'react';
import Carousel from '../components/Carousel';
import MovieGroup from '../components/MovieGroup';
import './Home.scss';
import { MovieData, BannerData } from '../data_example'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { offset: 0 };
    }

    handleClick = (offset) => {
        this.setState({ offset });
        console.log(offset);
    }

    render() {
        return (
            <div>
                <Carousel data={BannerData} ></Carousel>
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
            </div>

        );
    }
}
