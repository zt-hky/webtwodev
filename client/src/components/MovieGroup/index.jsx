import React from 'react'
import './MovieGroup.css'
import MovieItem from '../MovieItem';
import axios from 'axios';

export default class MovieGroup extends React.Component {

    componentDidMount() {
        
    }

    render() {
        var elements = null;
        if (this.props.items) {
            elements = this.props.items.map((item, index) =>
                <MovieItem key={index} movieId={item.id} title={item.title}
                    imgUrl={item.imgUrl}
                    duration={item.duration}
                    debut={item.debut}
                    genres={item.genres}></MovieItem>
            );
        } else {
            elements = "";
        }


        return (
            <article className="Film">
                <h3>{this.props.groupName}</h3>
                <section className="ListFilm">
                    {elements}
                </section>
            </article>


        );
    }
}
