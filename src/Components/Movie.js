import React, {Component} from 'react';

export default function Movie(props) {

    return (
        <div className="teaser column">
            <a href={props.movies.url}>
            <img
                src={props.movies.image_url} /*check if existent*/
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

