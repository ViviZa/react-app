import React, {Component} from 'react';
import Button from "./Button";
import genreJson from "../dummy-json-responses/Genres";

class ButtonList extends Component {

     getGenres() {
        const dataString = JSON.stringify(genreJson);
        let jsonData = JSON.parse(dataString);
        let genreArray = jsonData.genre;
        let content = [];

        for (let i = 0; i < genreArray.length; i++) {
            content.push(genreArray[i]);
        }
        return content;
    }

    render() {
        return (
            <div>
                <Button title="Actor" select="select actor"/>
                <Button title="Genre" select="select genre" content={this.getGenres()}/>
                <Button title="Timeframe" select="select timeframe"/>
            </div>
        );
    }

}
export default ButtonList;