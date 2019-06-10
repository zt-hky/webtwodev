import React from 'react'
import MovieInfo from '../components/MovieInfo';
import BookingInfo from '../components/BookingInfo';
import'./Booking.scss';

export default class Booking extends React.Component {

    render() {
        return (
            <main>
                <section className="container Main">
                    <MovieInfo></MovieInfo>
                    <BookingInfo></BookingInfo>
                </section>
            </main>

        );
    }
}