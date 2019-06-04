import React from 'react'
import './Calender.css'

export default class Calender extends React.Component {
    render() {
        return (
            <section className="Theater_Calendar">
                <ul>
                    <li>
                        <span>05</span>
                        <em>wed</em>
                        <strong>29</strong>
                    </li>
                </ul>
            </section>
        );
    }
}