
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




export const parseMovies2 = () => {
    const dataString = JSON.stringify(getMovies());
    let jsonData = JSON.parse(dataString);
    let movies = [];

    for (let i = 0; i < jsonData.length; i++) {
        movies.push(jsonData[i]);
    }
    return movies;
};

export default parseMovies2;


export const getMovies = () => {
    fetch('http://localhost:5000/getAllMovies').then(function (response) {
        return response;
    });
}