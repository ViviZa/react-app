import React, {Component} from 'react';
import jsondata from "../dummy-json-responses/imdb_data";
import Movie from "./Movie";
import parseMovies from "./ParseJson";

class MovieList extends Component {

    constructor() {
       super();
       this.state = { movies: [] }
    }

    componentDidMount() {
       fetch('http://127.0.0.1:5000/getAllMovies')
       .then(response => response.json())
       .then(json => parseMovies(json))
       .then(data => this.setState({ movies: data }));
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