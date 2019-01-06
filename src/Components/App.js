import React, {Component} from 'react';
import '../App.css';
import Header from './Header';
import MovieList from './MovieList';
import FilterSection from './FilterSection';
import NotFound from './NotFound';
import parseData from "./ParseJson";
import jsondata from "../dummy-json-responses/imdb_data";

class App extends Component {
    constructor(props) {
        super(props);
        this.onDropDownClick = this.onDropDownClick.bind(this);
        this.getMovies = this.getMovies.bind(this);
        this.state = {
            movies: [],
            genres: [],
            actors: []
        }
    }

    componentWillMount() {
        this.getMovies();
        this.getGenres();
        this.getActors();
    }

    getMovies(){
        fetch('http://127.0.0.1:5000/getAllMovies')
            .then(response => response.json())
            .then(json => parseData(json))
            .then(data => this.setState({ movies: data }));
        // für lokales arbeiten:
        // this.state.movies = parseData(jsondata);
    }

    getGenres(){
        fetch('http://127.0.0.1:5000/getAllGenres')
            .then(response => response.json())
            .then(json => parseData(json))
            .then(data => this.setState({ genres: data }));
    }

    getActors(){
        fetch('http://127.0.0.1:5000/getAllActors')
            .then(response => response.json())
            .then(json => parseData(json))
            .then(data => this.setState({ actors: data }));
    }

    onDropDownClick(actor, genre, rating){
        //TODO: fetch backend by filter criteria
        console.log("actor " + actor + "..." +  "genre " + genre + "..." + "rating" + rating);
        //now it just clears movies
        this.state.movies = [];
        this.forceUpdate();
    }

    render() {
        const movieState = this.state.movies;
        let movies;

        if (movieState.length === 0) {
            movies = <div className="no-movies"><NotFound/><p>No movies with selected criteria available.</p></div>;
        } else {
            movies = <MovieList movies={this.state.movies}/>;
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
