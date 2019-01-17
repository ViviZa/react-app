import MovieList from "./MovieList";
import NotFound from "./NotFound";
import React from "react";

const parseData = (dataList) => {
    let jsonData = JSON.parse(dataList);
    let data = [];

    for (let i = 0; i < jsonData.length; i++) {
        data.push(jsonData[i]);
    }
    return data;
};

export default parseData;

export const checkMovies = (movieList, noBackEndResponse) => {
    let movies;
    if (movieList[0] === 'initialState'){
        //if movies are still fetched
        movies = <p>is Loading...</p>;
    } else if (movieList.length !== 0){
        //if back-end did response with movies
        movies = <MovieList movies={movieList}/>;
    } else {
        //if back-end did response with no movies
        movies = <div className="no-movies"><NotFound/><p>No movies with selected criteria available.</p></div>;
    }
    if (noBackEndResponse) {
        //if back-end does not response
        movies = <div className="no-movies"><NotFound/><p>Currently no movies available.</p></div>;
    }
    return movies;
};
