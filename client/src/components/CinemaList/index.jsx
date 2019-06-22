import React from 'react';
import Cinema from '../Cinema';
import './CinemaList.scss';
import { connect } from 'react-redux';
class CinemaList extends React.Component {
    render() {
        return (
            <section className="Theater_Calendar_List">
                {this.props.showTimesList ? <Cinema></Cinema> : ''}
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        showTimesList: state.booking.showTimesList
        
    }
}

const CinemaListContainer = connect(mapStateToProps)(CinemaList)
export default CinemaListContainer;