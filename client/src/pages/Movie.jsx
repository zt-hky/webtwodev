import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import MovieDetail from '../components/MovieDetail';
import Calender from '../components/Calender';
import CinemaSelector from '../components/CinemaSelector';
import CinemaList from '../components/CinemaList';
import MoviePresentList from '../components/MoviePresentList';
import './Movie.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ActionCreator from '../actions';
class Movie extends React.Component {

    componentDidMount = () => {
        this.props.getMovieById(this.props.match.params.movieId);
    }
    render() {
        return (
            <div>
                <BreadCrumb></BreadCrumb>
                <main className="container">
                    <h2> NỘI DUNG PHIM</h2>
                    <MovieDetail movieItem={this.props.movieItem}></MovieDetail>
                </main>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("mapStateToProps");
    console.log(state);
    
    
    return state.movie;
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getMovieById: ActionCreator.MovieActions.getMovieById
    }, dispatch)
}

const MovieContainer = connect(mapStateToProps, mapDispatchToProps)(Movie)
export default  MovieContainer;

