import React from 'react';
import Rating from './Rating';

export default function FilterSection() {
	return (
		<div className="filter-section">
			<div className="filter-column">
				<h3>Actor</h3>
				<div className="dropdown">
					<button className="dropbtn">Sharukh Khan</button>
					<div className="dropdown-content">
						<a href="#">Sharukh Khan</a>
						<a href="#">Sharukh Khan</a>
						<a href="#">Sharukh Khan</a>
					</div>
				</div>
			</div>
			<div className="filter-column">
				<h3>Genre</h3>
				<div className="dropdown">
					<button className="dropbtn">Sharukh Khan</button>
					<div className="dropdown-content">
						<a href="#">Sharukh Khan</a>
						<a href="#">Sharukh Khan</a>
						<a href="#">Sharukh Khan</a>
					</div>
				</div>
			</div>
			<div className="filter-column">
				<h3>Timeframe</h3>
				<div className="dropdown">
					<button className="dropbtn">Sharukh Khan</button>
					<div className="dropdown-content">
						<a href="#">Sharukh Khan</a>
						<a href="#">Sharukh Khan</a>
						<a href="#">Sharukh Khan</a>
					</div>
				</div>
			</div>
			<div className="rating-column">
				<h3>Rating</h3>
				<div className="rating-filter">
				<Rating/>
				</div>
			</div>
		</div>
	);
}