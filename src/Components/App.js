import React, {Component} from 'react';
import '../App.css';
//import './General.css';
import MovieList from './MovieList';

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                <section className="stage">
                    <h1>Upcoming movie releases</h1>
                    <p className="subline">Here you find the upcoming movie releases in Germany.</p>
                </section>
                <section className="filter-section">
                        <Button title="Actor"/>
                        <Button title="Genre"/>
                        <Button title="Timeframe"/>
                </section>
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
