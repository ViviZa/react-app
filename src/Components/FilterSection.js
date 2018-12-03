import React, {Component} from 'react';
import Button from './Button';
import Rating from './Rating';
import genreJson from "../dummy-json-responses/Genres";

class FilterSection extends Component {

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
					<div className="filter-section">
						<Button title="Actor" select="select actor"/>
						<Button title="Genre" select="select genre" content={this.getGenres()}/>
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
}
export default FilterSection;
