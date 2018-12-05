
export const parseMovies = (movieList) => {
    const dataString = JSON.stringify(movieList);
    let jsonData = JSON.parse(dataString);
    let movies = [];

    for (let i = 0; i < jsonData.length; i++) {
        movies.push(jsonData[i]);
    }
    return movies;
};

export default parseMovies;