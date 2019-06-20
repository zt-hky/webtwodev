import React from 'react';
import Cinema from '../Cinema';
import './CinemaList.scss';
export default class CinemaList extends React.Component {
    createCinemaList = () => {
       return this.props.items.map((item, index) => <Cinema item={item} key={index}></Cinema>)
    }
    render() {
        return (
            <section className="Theater_Calendar_List">
                {this.createCinemaList()}
            </section>
        );
    }
}