import React from 'react';

export default function Movie(props) {
    return (
        <div className="tile animated fadeIn">
            <span className="airdate">{props.movies.title}</span>
            {/*<img src={props.movies.url}/>*/}
            <span>{props.movies.url}</span>
            <span>{props.movies.release_date}</span>
        </div>

    );
}
