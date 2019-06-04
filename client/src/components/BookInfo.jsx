import React from 'react'
import './BookInfo.css'
import TicketBooking from './TicketBooking';
import ComboBooking from './ComboBooking';
export default class BookInfo extends React.Component {


    render() {
        return (
            <section className="Main_Booking">
                <h3>LOẠI VÉ - COMBO</h3>
                <section className="Main_Booking_Info">
                    <TicketBooking></TicketBooking>
                    <ComboBooking></ComboBooking>
                </section>
            </section>

        );
    }
}