import React, {Component} from 'react';
import jsondata from "../dummy-json-responses/imdb_data";
import Movie from "./Movie";
import parseMovie, {getMovies, parseMovies2} from "./ParseJson";

class MovieList extends Component {

    constructor() {
        super();
        this.state = {movies: parseMovies2()}
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
