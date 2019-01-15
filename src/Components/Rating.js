import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faUndo } from '@fortawesome/free-solid-svg-icons'

library.add(faUndo);

class Rating extends Component {

	constructor(props) {
			super(props);
			this.handleClick = this.handleClick.bind(this);
			this.state = {
				value: "3",
			}
	}

	handleClick(param) {
        	this.state.value = param.target.value;
        	this.props.onDropDownClick("rating", this.state.value);
	}
	onResetFilter(){
			this.state.value = "0";
			this.props.onDropDownClick("rating", "");
			["star-1", "star-2", "star-3", "star-4", "star-5", "star-6", "star-7", "star-8", "star-9", "star-10"].forEach(function(id) {
        document.getElementById(id).checked = false;
      });
	}

	render() {
		return (
			<div className="rating-column">
				<div className="filter-headline">
					<h3>Rating</h3>
					<button className="reset-button" onClick={this.onResetFilter.bind(this)}>
						<span className="reset-filter"><FontAwesomeIcon icon="undo" /></span>
					</button>
				</div>
					<div className="rating-filter">
						<form id="rating-filter">
							<div className="stars">
								<input type="radio" name="star" className="star-1" id="star-1" onClick={this.handleClick.bind(this)} value="1"/>
								<label className="star-1" htmlFor="star-1">1</label>
								<input type="radio" name="star" className="star-2" id="star-2" onClick={this.handleClick.bind(this)} value="2"/>
								<label className="star-2" htmlFor="star-2">2</label>
								<input type="radio" name="star" className="star-3" id="star-3" onClick={this.handleClick.bind(this)} value="3"/>
								<label className="star-3" htmlFor="star-3">3</label>
								<input type="radio" name="star" className="star-4" id="star-4" onClick={this.handleClick.bind(this)} value="4"/>
								<label className="star-4" htmlFor="star-4">4</label>
								<input type="radio" name="star" className="star-5" id="star-5" onClick={this.handleClick.bind(this)} value="5"/>
								<label className="star-5" htmlFor="star-5">5</label>
								<input type="radio" name="star" className="star-6" id="star-6" onClick={this.handleClick.bind(this)} value="6"/>
								<label className="star-6" htmlFor="star-6">6</label>
								<input type="radio" name="star" className="star-7" id="star-7" onClick={this.handleClick.bind(this)} value="7"/>
								<label className="star-7" htmlFor="star-7">7</label>
								<input type="radio" name="star" className="star-8" id="star-8" onClick={this.handleClick.bind(this)} value="8"/>
								<label className="star-8" htmlFor="star-8">8</label>
								<input type="radio" name="star" className="star-9" id="star-9" onClick={this.handleClick.bind(this)} value="9"/>
								<label className="star-9" htmlFor="star-9">9</label>
								<input type="radio" name="star" className="star-10" id="star-10" onClick={this.handleClick.bind(this)} value="10"/>
								<label className="star-10" htmlFor="star-10">10</label>
								<span></span>
							</div>
						</form>
					</div>
			</div>

		);
	}
}

export default Rating;
