import React from 'react'
import MovieItem from '../MovieItem';
import './MovieGroup.scss';

import Pagination from "material-ui-flat-pagination";

export default class MovieGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { offset: 0 };
    }

    handleClick = (offset) => {
        this.setState({ offset });
        console.log(offset);

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

                <Pagination
                    limit={10}
                    offset={this.state.offset}
                    total={100}
                    onClick={(e, offset) => this.handleClick(offset)}
                />
            </article>


        );
    }
}
