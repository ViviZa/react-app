import React from 'react';
import Movie from "./Movie";

export default function MovieList(props) {

        return (
            <div className="movie-section">
                {props.movies.map((movies) => <Movie movies={movies}/>)}
            </div>
        );
}
