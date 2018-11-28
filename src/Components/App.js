import React, {Component} from 'react';
import '../App.css';
//import './General.css';
import Header from './Header';
import FilterSection from './FilterSection'
import Rating from './Rating';
import MovieList from './MovieList';

class App extends Component {
    constructor(props) {
        super(props)
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


function Button(props) {
    return (
        <div className="filter-column">
            <div className="dropdown">
                    <h3>{props.title}</h3>
            </div>
        </div>
    );
}

export default App;
