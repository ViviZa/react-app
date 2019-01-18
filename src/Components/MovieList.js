import React from 'react';
import Movie from "./Movie";

export default function MovieList(props) {

        return (
            <div className="movie-section">
                {props.movies.map((movie) => <Movie movies={movie} key={movie.id}/>)}
            </div>
        );
}
