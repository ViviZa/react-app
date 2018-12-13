import React, {Component} from 'react';
import '../App.css';
import Header from './Header';
import FilterSection from './FilterSection'
import MovieList from './MovieList';
import parseMovies from "./ParseJson";
import jsondata from "../dummy-json-responses/imdb_data";

class App extends Component {
    constructor(props) {
        super(props);
        this.onDropDownClick = this.onDropDownClick.bind(this);
        this.onResetClick = this.onResetClick.bind(this);
        this.onRenderCurrentMovies = this.onRenderCurrentMovies.bind(this);
        this.state = { movies: [] }
    }

    componentWillMount() {
        this.onRenderCurrentMovies();
    }

    onRenderCurrentMovies(){
        fetch('http://127.0.0.1:5000/getAllMovies')
            .then(response => response.json())
            .then(json => parseMovies(json))
            .then(data => this.setState({ movies: data }));
        // für lokales arbeiten:
        // this.state.movies = parseMovies(jsondata);
    }

    onDropDownClick(){
        //TODO: fetch backend by filter criteria
        //now it just clears movies
        this.state.movies = [];
        this.forceUpdate();
    }

    onResetClick(){
        this.onRenderCurrentMovies();
        this.forceUpdate();
    }

    render() {
        return (
            <div className="container">
                <Header/>
                <FilterSection renderApp={this.onDropDownClick}/>
                <button onClick={this.onResetClick}>Reset</button>
                <MovieList movies={this.state.movies}/>
            </div>
        );
    }
}

export default App;
