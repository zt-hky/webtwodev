import React from 'react'
import './Seat.css'
import MovieInfo from '../components/MovieInfo';
import SeatGrid from '../components/SeatGrid';

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