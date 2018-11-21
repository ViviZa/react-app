import React, { Component } from 'react';
import './App.css';
import jsondata from './imdb_data.json';

class App extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            This app is built with <br />React ⚛️ + Parcel 📦!
          </h1>
          <B></B>
        </header>
      </div>
    );
  }
}

function B() {
    const dataString = JSON.stringify(jsondata);
    let jsonData = JSON.parse(dataString);
    let objectlist = [];

    for (let i = 0; i < jsonData.length; i++) {
        let movie = jsonData[i];
        objectlist.push(movie);
    }
    return (
        <div>
            {objectlist.map(function (d) {
                return (
                    <p>{d.title} &&& {d.url}</p>)
            })}
        </div>
    );
}

export default App;
