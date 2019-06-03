import React from 'react';
import './ListMoviePresent.css'
import { MovieData } from '../data_example'
import MovieGroup from '../components/MovieGroup';

export default class ListMoviePresent extends React.Component {
    render() {
        return (
            <main>
                <section className="HightLightFilm">
                    <h2>* MOVIE *</h2>
                    <MovieGroup groupName="PHIM ĐANG CHIẾU" status="Present"
                        items={MovieData}
                    ></MovieGroup>
                </section>
                <section className="container">
                    <section className="Pagination">
                        <ul>
                            <li className="prev disabled"><a href="/#">&lt;</a></li>
                            <li className="active"><a href="/#">1</a></li>
                            <li><a href="/#">2</a></li>
                            <li><a href="/#">3</a></li>
                            <li><a href="/#">4</a></li>
                            <li><a href="/#">5</a></li>
                            <li><a href="/#">6</a></li>
                            <li className="next"><a href="/#">&gt;</a></li>
                        </ul>
                    </section>
                </section>
            </main>
        );
    }
}
