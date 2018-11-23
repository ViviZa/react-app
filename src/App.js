import React, { Component } from 'react';
import './App.css';
import MovieList from './MovieList';

class App extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <section className="stage">
            <h1>Upcoming movie releases</h1>
            <p className="subline">Here you find the upcoming movie releases in Germany.</p>
        </section>
        <div className="movie-section">
        <MovieList/>
        </div>
      </div>
    );
  }
}

// function B() {
//     const dataString = JSON.stringify(jsondata);
//     let jsonData = JSON.parse(dataString);
//     let objectlist = [];
//
//     for (let i = 0; i < jsonData.length; i++) {
//         let movie = jsonData[i];
//         objectlist.push(movie);
//     }
//     return (
//         <div>
//             {objectlist.map(function (d) {
//                 return (
//                     <p>{d.title} &&& {d.url}</p>)
//             })}
//         </div>
//     );
// }

export default App;
