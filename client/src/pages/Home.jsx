import React, { Component } from 'react';
import Carousel from '../components/Carousel';
import MovieGroup from '../components/MovieGroup';
import './Home.scss';
import { BannerData } from '../data_example'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreator from '../actions';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { offset: 0 };
    }

    componentDidMount = () => {
        this.props.getMoviesComingSoon({ offset: 0, limit: 4 });
        this.props.getMoviesNowShowing({ offset: 0, limit: 4 })
    }

    handleClick = (offset) => {
        this.setState({ offset });
    }

    render() {
        return (
            <div>
                <Carousel data={BannerData} ></Carousel>
                <main>
                    <section className="HightLightFilm">
                        <h2>* MOVIE *</h2>
                        {this.props.errorMovieComing ? "" :
                            <MovieGroup groupName="PHIM SẮP CHIẾU" status="Present"
                                items={this.props.moviesComingSoon}
                            ></MovieGroup>}
                        {this.props.errorNowShowing ? "" :
                            <MovieGroup groupName="PHIM ĐANG CHIẾU" status="Future"
                                items={this.props.moviesNowShowing}
                            ></MovieGroup>}
                    </section>
                </main>
            </div>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        moviesComingSoon: state.movie.moviesComingSoon,
        moviesNowShowing: state.movie.moviesNowShowing,
        errorNowShowing: state.movie.errorNowShowing,
        errorMovieComing: state.movie.errorMovieComing
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getMoviesComingSoon: ActionCreator.MovieActions.getMoviesComingSoon,
        getMoviesNowShowing: ActionCreator.MovieActions.getMoviesNowShowing
    }, dispatch)
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)
export default HomeContainer;
