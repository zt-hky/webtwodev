import React from 'react';
import './CinemaSelector.scss';
import ActionCreator from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class CinemaSelector extends React.Component {

    constructor(props) {
        super(props);
        this.state = { itemSelected: '' }
    }


    componentDidMount = () => {
        this.props.getAllCities()
        this.props.getAllCinemaByCity(1)
    }

    createCityItems = () => {
        if (!this.props.error) {
            return this.props.cities.map((city, index) => <option key={city.id} value={city.id}>{city.name}</option>);
        }
        return <option key={0} value='null'>Empty</option>
    }

    createCinemaItem = () => {
        if (!this.props.errorCinema) {
            return this.props.cinemas.map((cinema, index) => <option key={cinema.id} value={cinema.id}>{cinema.name}</option>);
        }
        return <option key={0} value='null'>Empty</option>
    }

    cites_onSelect = (event) => {
        this.setState({ itemSelected: event.target.value }, () => {
            this.props.getAllCinemaByCity(this.state.itemSelected)
        })
    }

    render() {
        return (
            <section className="Theater_Calendar_Addr">
                <article>

                    <select onChange={this.cites_onSelect}>
                        <option>Chọn thành phố</option>
                        {this.createCityItems()}
                    </select>
                </article>
                <article>
                    <select onChange={(event) => {
                        this.props.onItemSelected(event.target.value)
                    }}>
                        <option>Chọn rạp</option>
                        {this.createCinemaItem()}
                    </select>
                </article>
            </section>

        );
    }
}

CinemaSelector.defaultProps = {
    onItemSelected: (cinemaId) => {
        console.log("cinemaId: " + cinemaId);
    }
}

const mapStateToProps = (state) => {
    return {
        cities: state.cinema.cities,
        errorCity: state.cinema.error,
        cinemas: state.cinema.cinemas,
        errorCinema: state.cinema.errorCinema
    }
}

const mapDipatchToProps = (ditpatch) => {
    return bindActionCreators({
        getAllCities: ActionCreator.CinemaActions.getAllCities,
        getAllCinemaByCity: ActionCreator.CinemaActions.getAllCinemaByCity
    }, ditpatch)
}

const CinemaSelectorContainer = connect(mapStateToProps, mapDipatchToProps)(CinemaSelector)
export default CinemaSelectorContainer;