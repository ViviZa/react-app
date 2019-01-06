import React, {Component} from 'react';
import DropDown from './DropDown';
import Rating from './Rating';
import genreJson from "../dummy-json-responses/Genres";
import actorJson from "../dummy-json-responses/Actors";
import {parseData} from "./ParseJson";


class FilterSection extends Component {

    constructor(props) {
        super(props);
        this.onDropDownClick = this.onDropDownClick.bind(this);
        this.state = {
            actor : "",
            genre : "",
            rating: ""
        }
    }

    onDropDownClick(property, value){
        if (property === "actor") this.state.actor = value;
        if (property === "genre") this.state.genre = value;
        if (property === "rating") this.state.rating = value;
        this.props.renderApp(this.state.actor, this.state.genre, this.state.rating);
    }


    render() {
        return (
            <div className="filter-section">
                <DropDown title="Actor" type="actor" content={this.props.actors} onDropDownClick={this.onDropDownClick}/>
                <DropDown title="Genre" type="genre" content={this.props.genres} onDropDownClick={this.onDropDownClick}/>
                <Rating onDropDownClick={this.onDropDownClick}/>
            </div>
        );
    }
}

export default FilterSection;

const getOptions = (data, buttonType) => {
    //TODO: call getActors, getGenres, getRating
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
