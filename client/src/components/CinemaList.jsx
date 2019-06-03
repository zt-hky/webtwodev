import React from 'react';
import './CinemaList.css'
import Cinema from './Cinema';
export default class CinemaList extends React.Component {
    render() {
        return (
            <section className="Theater_Calendar_List">
                <Cinema></Cinema>
            </section>
        );
    }
}