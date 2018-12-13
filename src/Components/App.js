import React, {Component} from 'react';
import '../App.css';
import Header from './Header';
import MovieList from './MovieList';
import FilterSection from './FilterSection';
import parseMovies from "./ParseJson";
import jsondata from "../dummy-json-responses/imdb_data";

class App extends Component {
    constructor(props) {
        super(props);
        this.onDropDownClick = this.onDropDownClick.bind(this);
        this.renderMovies = this.renderMovies.bind(this);
        this.state = { movies: [] }
    }

    componentWillMount() {
        this.renderMovies();
    }

    renderMovies(){
        fetch('http://127.0.0.1:5000/getAllMovies')
            .then(response => response.json())
            .then(json => parseMovies(json))
            then(data => this.setState({ movies: data }));
        // für lokales arbeiten:
        // this.state.movies = parseMovies(jsondata);
    }

    onDropDownClick(actor, genre, rating){
        //TODO: fetch backend by filter criteria
        console.log("actor " + actor + "..." +  "genre " + genre + "..." + "rating" + rating);
        //now it just clears movies
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
