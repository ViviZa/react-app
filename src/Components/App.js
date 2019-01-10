import React, {Component} from 'react';
import '../App.css';
import Header from './Header';
import MovieList from './MovieList';
import FilterSection from './FilterSection';
import NotFound from './NotFound';
import parseData from "./ParseJson";

class App extends Component {
    constructor(props) {
        super(props);
        this.onDropDownClick = this.onDropDownClick.bind(this);
        this.state = {
            movies: ['initialState'],
            genres: [],
            actors: [],
            noBackEndResponse: false
         }
    }

    componentWillMount() {
        this.getMovies();
        this.getGenres();
        this.getActors();
    }

    getMovies() {
        fetch('http://127.0.0.1:5000/getMovies')
            .then(response => response.json())
            .then(json => parseData(json))
            .then(data => this.setState({movies: data, isLoading: false}))
            .catch(error => this.setState({error ,noBackEndResponse: true, isLoading: false}));
    }

    getGenres() {
        fetch('http://127.0.0.1:5000/getAllGenres')
            .then(response => response.json())
            .then(json => parseData(json))
            .then(data => this.setState({genres: data}));
    }

    getActors() {
        fetch('http://127.0.0.1:5000/getAllActors')
            .then(response => response.json())
            .then(json => parseData(json))
            .then(data => this.setState({actors: data}));
    }

    onDropDownClick(actor, genre, rating) {
        fetch('http://127.0.0.1:5000/getMovies?actor=' + actor + '&genre=' + genre + '&rating=' +rating)
            .then(response => response.json())
            .then(json => parseData(json))
            .then(data => this.setState({movies: data}));
    }

    render() {
        let movies;
        const movieState = this.state.movies;

        if (movieState[0] == 'initialState'){
            //if movies are still fetched
            movies = <p>is Loading...</p>
       } else if (movieState.length !== 0){
            //if back-end did response with movies
            movies = <MovieList movies={this.state.movies}/>;
        } else {
            //if back-end did response with no movies
            movies = <div className="no-movies"><NotFound/><p>No movies with selected criteria available.</p></div>;
        }
        if (this.state.noBackEndResponse) {
            //if back-end does not response
            movies = <div className="no-movies"><NotFound/><p>Currently no movies available.</p></div>;
        }
        return (
            <div className="container">
                <Header/>
                <FilterSection renderApp={this.onDropDownClick} genres={this.state.genres} actors={this.state.actors}/>
                {movies}
            </div>
        );
    }
}

export default App;
