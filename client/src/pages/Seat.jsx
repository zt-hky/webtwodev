import React from 'react'
import MovieInfo from '../components/MovieInfo';
import SeatGrid from '../components/SeatGrid';
import './Seat.scss';
export default class Seat extends React.Component {
    render() {
        return (
            <main>
                <section className="container Main">
                 <MovieInfo></MovieInfo>
                 <SeatGrid></SeatGrid>
                 </section>
            </main>

        );
    }
}