import React from 'react';
import './CinemaSelector.scss';
export default class CinemaSelector extends React.Component {
    render() {
        return (
            <section className="Theater_Calendar_Addr">
                <article>
                    <select>
                        <option value="volvo">Cả cước</option>
                        <option value="saab">Cà Mau</option>
                        <option value="mercedes">TP HCM</option>
                        <option value="audi">Hà Nội</option>
                    </select>
                </article>
                <article>
                    <select>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </article>
            </section>

        );
    }
}