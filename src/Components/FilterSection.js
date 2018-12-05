import React from 'react';
import Button from './Button';
import Rating from './Rating';
import genreJson from "../dummy-json-responses/Genres";
import actorJson from "../dummy-json-responses/Actors";

export default function FilterSection() {

    return (
        <div className="filter-section">
            <Button title="Actor" select="select actor" content={getOptions(actorJson, "Actor")}/>
            <Button title="Genre" select="select genre" content={getOptions(genreJson, "Genre")}/>
            <Button title="Timeframe" select="select timeframe"/>
            <div className="rating-column">
                <h3>Rating</h3>
                <div className="rating-filter">
                    <Rating/>
                </div>
            </div>
        </div>
    );
}

const getOptions = (data, buttonType) => {
    const dataString = JSON.stringify(data);
    let jsonData = JSON.parse(dataString);
    let genreArray = "";
    if (buttonType === "Genre") {
        genreArray = jsonData.genre
    } else {
        genreArray = jsonData.actor_list
    }
    let content = [];

    for (let i = 0; i < genreArray.length; i++) {
        content.push(genreArray[i]);
    }
    return content;
};
