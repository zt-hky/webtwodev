import React from 'react'
import MoviePresentItem from '../MoviePresentItem';
import './MoviePresentList.scss';
export default class MoviePresentList extends React.Component{
    render(){
        return(
            <div>           
            <MoviePresentItem></MoviePresentItem>
            <MoviePresentItem></MoviePresentItem>
            <MoviePresentItem></MoviePresentItem>
            <MoviePresentItem></MoviePresentItem>
            </div>

        );
    }
}