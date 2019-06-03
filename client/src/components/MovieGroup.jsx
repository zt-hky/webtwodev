import React from 'react'
import './MovieGroup.css'
import MovieItem from './MovieItem';

export default class MovieGroup extends React.Component {

    render() {
        console.log(this.props.items);
        
        var elements = null;
        if (this.props.items) {
            elements = this.props.items.map((item) => 
                <MovieItem title={item.title}
                    imgUrl={item.imgUrl}
                    duration={item.duration}
                    debut={item.debut}
                    genre={item.genre}></MovieItem>
            );
        } else {
            console.log("ko data");
            elements = "";
        }

        console.log(elements);
        

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
