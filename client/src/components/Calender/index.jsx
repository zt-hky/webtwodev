import React from 'react'
import './Calender.scss'
import { isTemplateElement } from 'babel-types';
const DaysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FIR', 'SAT']
export default class Calender extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            calender: [],
            activeItem: 0,
        }
    }

    createCalender10Day = () => {
        let calender = []
        var now = new Date();
        for (let i = 0; i < 10; i++) {
            let next = now;
            let data = { day: '', date: '', month: '' }
            data.day = DaysOfWeek[next.getDay()]
            data.date = next.getDate();
            data.month = next.getMonth() + 1;
            calender.push(data)
            now =  new Date(next.getTime() + 86400000);
        }
        return calender;
    }

    createCalenderElements = () => {
        let calender = this.createCalender10Day();
        return calender.map((date, index) =>
            <li className={index === 0 ? 'active' : ''} 
            key={index}
                onClick={(event) => {
                    this.props.onItemSelected(date)
                }}>
                <span>{date.month}</span>
                <em>{date.day}</em>
                <strong>{date.date}</strong>
            </li>
        )
    }


    render() {
        return (
            <section className="Theater_Calendar">
                <ul>
                    {this.createCalenderElements()}
                </ul>
            </section>
        );
    }
}

Calender.defaultProps = {
    onItemSelected: (data) => {
        console.log(data);

    }
}