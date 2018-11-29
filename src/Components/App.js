import React, {Component} from 'react';
import '../App.css';
import MovieList from './MovieList';
import ButtonList from './ButtonList';

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
                    <ButtonList/>
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
