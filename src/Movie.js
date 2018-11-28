import React from 'react';
import logo from './images/image.png';

export default function Movie(props) {
    return (
        <div className="teaser column">
            <a href={props.movies.url}>
            <img
                src={logo}
                className="image"
                alt="logo"
            />
            </a>
            <div className="overlay">
                <div className="rating"> {/*include rating */} </div>
                <h5 className="genre">International</h5>
                <h2 className="title max-lines">{props.movies.title}</h2>
                <div className="release-date"><h4>{props.movies.release_date}</h4></div>
            </div>
        </div>

    );
}

