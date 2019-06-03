import React from 'react';
import './Movie.css'
import BreadCrumb from '../components/BreadCrumb';
import MovieDetail from '../components/MovieDetail';
import Calender from '../components/Calender';
import CinemaSelector from '../components/CinemaSelector';
import CinemaList from '../components/CinemaList';
import MoviePresentList from '../components/MoviePresentList';
export default class Movie extends React.Component {

    render() {
        return (
            <div>
                <BreadCrumb></BreadCrumb>
                <main className="container">
                    <h2> NỘI DUNG PHIM</h2>
                    <MovieDetail></MovieDetail>
                    <section className="Content">
                        <section className="Theater">
                            <h3>LỊCH CHIẾU:</h3>
                            <Calender></Calender>
                            <CinemaSelector></CinemaSelector>
                            <CinemaList></CinemaList>
                        </section>
                        <aside className="Present">
                            <h3>PHIM ĐANG CHIẾU</h3>
                            <MoviePresentList></MoviePresentList>
                        </aside>
                    </section>
                </main>
            </div>

        );
    }
}