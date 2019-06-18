import React from 'react';
import MovieGroup from '../components/MovieGroup';
import './ListMoviePresent.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ActionCreator from '../actions';
class ListMoviePresent extends React.Component {
    componentDidMount = () => {   
        this.props.getMoviesNowShowing({ offset: 0, limit: 4 })
    }
    render() {
        return (
            <main>
                <section className="HightLightFilm">
                    <h2>* MOVIE *</h2>
                    <MovieGroup groupName="PHIM ĐANG CHIẾU" status="Present"
                        items={this.props.moviesNowShowing}
                    ></MovieGroup>
                </section>
                {/* <section className="container">
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
                </section> */}
            </main>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        moviesNowShowing: state.movie.moviesNowShowing,
        errorNowShowing: state.movie.errorNowShowing
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getMoviesNowShowing: ActionCreator.MovieActions.getMoviesNowShowing
    }, dispatch)
}
const ListMoviePresentContainer = connect(mapStateToProps, mapDispatchToProps)(ListMoviePresent)
export default ListMoviePresentContainer