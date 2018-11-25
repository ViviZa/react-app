import React, {Component} from 'react';
import jsondata from "./imdb_data2";
import Movie from "./Movie";

class MovieList extends Component {

    constructor() {
        super()
        this.state = {movies: []}
    }

    componentWillMount() {
        const dataString = JSON.stringify(jsondata);
        let jsonData = JSON.parse(dataString);
        let movies = [];

        for (let i = 0; i < jsonData.length; i++) {
            movies.push(jsonData[i]);
        }
        this.state.movies = movies;
    }

    render() {
        return (
            <div className="movie-section">
                <div className="teaser column">
                    <div className="container">
                        {this.state.movies.map((movies) => <Movie movies={movies}/>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieList;