
export const parseMovies = (movieList) => {
    let jsonData = JSON.parse(movieList);
    let movies = [];

    for (let i = 0; i < jsonData.length; i++) {
        movies.push(jsonData[i]);
    }
    return movies;
};

export default parseMovies;