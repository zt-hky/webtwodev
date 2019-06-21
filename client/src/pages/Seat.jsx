import React from 'react'
import MovieInfo from '../components/MovieInfo';
import SeatGrid from '../components/SeatGrid';
import './Seat.scss';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreator from '../actions';
 class Seat extends React.Component {
    componentDidMount = ()=>{
       this.props.getMovieById(this.props.match.params.movieId);
    }
    render() {
        console.log('can xem');
        
        console.log(this.props);
        
        return (
            <main>
                <section className="container Main">
                 <MovieInfo movieId={this.props.match.params.movieId}></MovieInfo>
                 <SeatGrid></SeatGrid>
                 </section>
            </main>

        );
    }
}

const mapStateToProps = (state)=>{
    return state.movie;
}

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({
        getMovieById: ActionCreator.MovieActions.getMovieById
    },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Seat)