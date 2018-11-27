import React, {Component} from 'react';
import '../App.css';
//import './General.css';
import MovieList from './MovieList';
import Button from './Button';

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
                    <div className="rating-column">
                        <h3>Rating</h3>
                    </div>
                </section>

                <MovieList/>
            </div>
        );
    }
}

export default App;
