import React from 'react';
import Cinema from '../Cinema';
import './CinemaList.scss';
export default class CinemaList extends React.Component {
    render() {
        return (
            <section className="Theater_Calendar_List">
                <Cinema></Cinema>
            </section>
        );
    }
}