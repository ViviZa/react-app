import React from 'react';

export default function Movie(props) {
    return (
        <div className="teaser column">
            <a href={props.movies.url}>
            <img
                src="https://m.media-amazon.com/images/M/MV5BMjA1MTIwODY4Nl5BMl5BanBnXkFtZTgwNzkxNDc2NjM@._V1_.jpg"
                className="image"
                alt="logo"
            />
            </a>
            <div className="overlay">
                <div className="rating"> {/*include rating */} </div>
                <h5 className="genre">International</h5>
                <h2 className="title">{props.movies.title}</h2>
                <div className="release-date"><h4>{props.movies.release_date}</h4></div>
            </div>
        </div>

    );
}

