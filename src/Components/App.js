import React, {Component} from 'react';
import '../App.css';
import Header from './Header';
import FilterSection from './FilterSection'
import Rating from './Rating';
import MovieList from './MovieList';

class App extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
           this.fetchBackend();
       }

       fetchBackend(){
           fetch('http://127.0.0.1:5000/getAllMovies')
               .then(response => response.json())
               .then(parsedJson => console.log(parsedJson))
               .catch(error => console.log('parsing failed' + error));
       }

    render() {
        return (
            <div className="container">
                <Header/>
                <FilterSection/>
                <MovieList/>
            </div>
        );
    }
}

export default App;
