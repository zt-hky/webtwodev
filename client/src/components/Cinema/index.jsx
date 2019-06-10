import React from 'react';
import './Cinema.scss'
export default class Cinema extends React.Component{
    render(){
        return(
            <article className="Theater_Calendar_List_Theater">
            <h4>Web Two Nguyễn Du</h4>
            <section className="Theater_Calendar_List_Theater_Ticket">
                <h5>2D - Phụ đề</h5>
                <section className="Theater_Calendar_List_Theater_Ticket_ListTime">
                    <article><a href> 09:15</a> </article>
                    <article><a href> 09:15</a> </article>
                    <article><a href> 09:15</a> </article>
                    <article><a href> 09:15</a> </article>
                    <article><a href> 09:15</a> </article>
                </section>
            </section>
        </article>

        );
    }
}