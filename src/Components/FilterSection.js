import React from 'react';
import Button from './Button';
import Rating from './Rating';

export default function FilterSection() {
	return (
		<div className="filter-section">
			<Button title="Actor"/>
			<Button title="Genre"/>
			<Button title="Timeframe"/>
			<div className="rating-column">
				<h3>Rating</h3>
				<div className="rating-filter">
					<Rating/>
				</div>
			</div>
		</div>
	);
}
