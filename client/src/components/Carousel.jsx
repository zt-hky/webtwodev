import React from 'react';
import './Carousel.css';
export default class Carousel extends React.Component {
    render() {
        var li_elements = null;
        var carousel_items = null;
        if (this.props.data) {
            li_elements = this.props.data.map((item, index) =>
                <li key={index} data-target="#demo" data-slide-to={index} className={index === 0 ? "active" : ""} />
            );

            carousel_items = this.props.data.map((item, index) =>
                <div className={index === 0 ? "carousel-item active" : "carousel-item"} key={index}>
                    <img src={item.imgUrl} alt="#" />
                </div>
            );
        } else {
            li_elements = carousel_items = "";
        }

        console.log(li_elements);


        return (
            <header>
                <div className="carousel slide poster" data-ride="carousel">
                    <ul className="carousel-indicators">
                        {li_elements}
                    </ul>
                    <div className="carousel-inner poster_content">
                        {carousel_items}
                    </div>
                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                        <span className="carousel-control-prev-icon" />
                    </a>
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                        <span className="carousel-control-next-icon" />
                    </a>
                </div>
            </header>
        );
    }
}
