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
        this.state = { movies: [] }
    }

    componentWillMount() {
        fetch('http://127.0.0.1:5000/getAllMovies')
            .then(response => response.json())
            .then(json => parseMovies(json))
            .then(data => this.setState({ movies: data }));
            // für lokales arbeiten: this.state.movies = parseMovies(jsondata);
    }

    onDropDownClick(){
        //clears movies -> later it will call the backend by wanted search criteria
        this.state.movies = [];
        this.forceUpdate();
    }

    render() {
        return (
            <div className="container">
                <Header/>
                <FilterSection renderApp={this.onDropDownClick}/>
                <MovieList movies={this.state.movies}/>
            </div>
        );
    }
}

export default App;
