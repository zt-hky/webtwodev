import React from 'react';
import { MovieData, } from '../data_example'
import MovieGroup from '../components/MovieGroup';
import './ListMovieFuture.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ActionCreator from '../actions';
class ListMovieFuture extends React.Component {

    componentDidMount = () => {   
        this.props.getMoviesComingSoon({ offset: 0, limit: 8 })
    }

    render() {
        return (
            <main>
                <section className="HightLightFilm">
                    <h2>* MOVIE *</h2>
                    <MovieGroup groupName="PHIM SẮP CHIẾU" status="Present"
                        items={this.props.moviesComingSoonData}
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
