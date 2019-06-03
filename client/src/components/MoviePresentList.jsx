import React from 'react'
import MoviePresentItem from './MoviePresentItem';

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