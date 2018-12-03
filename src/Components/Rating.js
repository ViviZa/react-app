import React from 'react';

export default function Rating() {
	return (
		<form id="rating-filter">
			<div className="stars">
				<input type="radio" name="star" className="star-1" id="star-1" />
				<label className="star-1" htmlFor="star-1">1</label>
				<input type="radio" name="star" className="star-2" id="star-2" />
				<label className="star-2" htmlFor="star-2">2</label>
				<input type="radio" name="star" className="star-3" id="star-3" />
				<label className="star-3" htmlFor="star-3">3</label>
				<input type="radio" name="star" className="star-4" id="star-4" />
				<label className="star-4" htmlFor="star-4">4</label>
				<input type="radio" name="star" className="star-5" id="star-5" />
				<label className="star-5" htmlFor="star-5">5</label>
				<input type="radio" name="star" className="star-6" id="star-6" />
				<label className="star-6" htmlFor="star-6">6</label>
				<input type="radio" name="star" className="star-7" id="star-7" />
				<label className="star-7" htmlFor="star-7">7</label>
				<input type="radio" name="star" className="star-8" id="star-8" />
				<label className="star-8" htmlFor="star-8">8</label>
				<input type="radio" name="star" className="star-9" id="star-9" />
				<label className="star-9" htmlFor="star-9">9</label>
				<input type="radio" name="star" className="star-10" id="star-10" />
				<label className="star-10" htmlFor="star-10">10</label>
				<span></span>
			</div>
		</form>
	);
}
