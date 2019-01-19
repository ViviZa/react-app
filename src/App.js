import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import FilterSection from './Components/FilterSection';
import BackToTop from './Components/BackToTop';
import parseData, {checkStateOfMovies} from "./Components/HelperFunctions";

class App extends Component {
    constructor(props) {
        super(props);
        this.onFilterMovies = this.onFilterMovies.bind(this);
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
            .catch(error => this.setState({error, noBackEndResponse: true, isLoading: false}));
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

    onFilterMovies(actor, genre, rating) {
        fetch('http://127.0.0.1:5000/getMovies?actor=' + actor + '&genre=' + genre + '&rating=' + rating)
            .then(response => response.json())
            .then(json => parseData(json))
            .then(data => this.setState({movies: data}));
    }

    render() {
        const movies = checkStateOfMovies(this.state.movies, this.state.noBackEndResponse);
        return (
            <div className="container">
                <Header/>
                <FilterSection renderApp={this.onFilterMovies} genres={this.state.genres} actors={this.state.actors}/>
                {movies}
                <BackToTop delay="40" scrollAmount="100"/>
            </div>
        );
    }
}

export default App;
