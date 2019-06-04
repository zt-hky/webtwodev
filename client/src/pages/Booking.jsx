import React from 'react'
import './Booking.css'
import MovieInfo from '../components/MovieInfo';
import BookInfo from '../components/BookInfo';

export default class Booking extends React.Component {

    render() {
        return (
            <main>
                <section className="container Main">
                    <MovieInfo></MovieInfo>
                    <BookInfo></BookInfo>
                </section>
            </main>

        );
    }
}