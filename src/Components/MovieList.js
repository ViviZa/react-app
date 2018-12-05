import React, {Component} from 'react';
import jsondata from "../dummy-json-responses/imdb_data";
import Movie from "./Movie";
import GetMovies from "./GetMovies";

class MovieList extends Component {

    constructor() {
        super();
        this.state = {movies: GetMovies(jsondata)}
    }

    render() {
        return (
            <div className="movie-section">
                {this.state.movies.map((movies) => <Movie movies={movies}/>)}
            </div>
        );
    }
}


export default MovieList;
