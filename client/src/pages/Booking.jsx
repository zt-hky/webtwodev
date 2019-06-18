import React from 'react'
import Calender from '../components/Calender';
import CinemaSelector from '../components/CinemaSelector';
import CinemaList from '../components/CinemaList';
import MoviePresentList from '../components/MoviePresentList';

import './Booking.scss';
import AxiosInstance, { endPoint } from '../utils/api';
import { thisExpression } from 'babel-types';

export default class Booking extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            date: '',
            movieId: this.props.match.params.movieId,
            cinemaId: '',
            data:null
        }
    }

    calender_onSelected = (item) => {
        console.log("date: ");
        console.log(item);
        this.setState({ date: `${new Date().getFullYear()}-${item.month}-${item.date}` }, () => {
            console.log(this.state);
            this.fetch_date()
        })
    }

    cinemaSelector_onSelected = (cinemaId) => {
        console.log('cinemaId: ' + cinemaId);
        this.setState({ cinemaId: cinemaId }, () => {
            console.log(this.state);
            this.fetch_date()
        })
    }
    componentDidMount = ()=>{
        this.fetch_date()
    }

    fetch_date = () => {
        AxiosInstance.get(endPoint.getShowTimes, {
            params: {
                date: '2019-6-17',//date,
                FilmId: 1,//movieId,
                ThreatreSetId:1//cinemaId
            }
        }).then((res) => {
           
            this.setState({data: res.data.data})
            
            //this.setState()
        }).catch((err) => {
            console.log(err);

        })
        // const { movieId, date, cinemaId } = this.state;

        // if (movieId && date && cinemaId) {
        //     console.log('fetch');
        //     AxiosInstance.get(endPoint.getShowTimes, {
        //         params: {
        //             date: '2019-6-17',//date,
        //             FilmId: 1,//movieId,
        //             ThreatreSetId:1//cinemaId
        //         }
        //     }).then((res) => {
        //         console.log(res.data);
                
        //         //this.setState()
        //     }).catch((err) => {
        //         console.log(err);

        //     })

        // } else {
        //     console.log('no ');

        // }
    }

    render() {
        return (
            <main>
                <section className="Content">
                    <section className="Theater">
                        <h3>LỊCH CHIẾU:</h3>
                        <Calender onItemSelected={this.calender_onSelected}></Calender>
                        <CinemaSelector onItemSelected={this.cinemaSelector_onSelected}></CinemaSelector>
                        <CinemaList items = {this.state.data? this.state.data: []}></CinemaList>
                    </section>
                    <aside className="Present">
                        <h3>PHIM ĐANG CHIẾU</h3>
                        <MoviePresentList></MoviePresentList>
                    </aside>
                </section>
                {/* <section className="container Main">
                    <MovieInfo></MovieInfo>
                    <BookingInfo></BookingInfo>
                </section> */}
            </main>

        );
    }
}