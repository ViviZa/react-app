import React from 'react';
import fallback from '../images/default_image_icon.png';

export default function Movie(props) {

    return (
        <div className="teaser column">
            <a href={props.movies.url}>
            <img
                src={props.movies.image_url || fallback}
                className="image"
                alt="logo"
            />
            </a>
            <div className="overlay">
                <div className="rating">{/*include rating */}</div>
					<h5 className="genre">International</h5>
					<h2 className="title max-lines">{props.movies.title}</h2>
				<div className="release">
					<div className="release-icon">
						<svg width="26px" height="25px" viewBox="0 0 26 25" version="1.1" >
							<g><rect fill="#FFFFFF" x="1.08333333" y="9.61458333" width="6.83854167" height="6.83854167"></rect>
								<rect fill="#FFFFFF" x="9.546875" y="9.61458333" width="6.83854167" height="6.83854167"></rect>
								<rect fill="#FFFFFF" x="1.08333333" y="18.1458333" width="6.83854167" height="6.83854167"></rect>
								<rect fill="#FFFFFF" x="9.546875" y="18.1458333" width="6.83854167" height="6.83854167"></rect>
								<rect fill="#FFFFFF" x="18.078125" y="18.1458333" width="6.83854167" height="6.83854167"></rect>
								<rect fill="#FFFFFF" x="18.078125" y="9.61458333" width="6.83854167" height="6.83854167"></rect>
								<polygon fill="#FF5C5C" points="26 2.16666667 19.5 2.16666667 19.5 5.41666667 18.4166667 5.41666667 18.4166667 2.16666667 7.58333333 2.16666667 7.58333333 5.41666667 6.5 5.41666667 6.5 2.16666667 0 2.16666667 0 7.58333333 26 7.58333333"></polygon>
								<rect fill="#FFFFFF" x="6.5" y="0" width="1.08333333" height="2.16666667"></rect>
								<rect fill="#FFFFFF" x="18.4166667" y="0" width="1.08333333" height="2.16666667"></rect>
							</g>
						</svg>
					</div>
            	</div>
                <div className="release-date">
					<h4>{props.movies.release_date}</h4>
				</div>
        	</div>
		</div>
	);
}

