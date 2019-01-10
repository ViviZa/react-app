import React, {Component} from 'react';
import DropDown from './DropDown';
import Rating from './Rating';

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

