import React from 'react';
import fallback from '../images/default_image_icon.jpg';

export default function Movie(props) {

    return (
        <div className="teaser column">
            <a href={props.movies.url}>
                <img
                    src={imageCheck(props.movies.image_url)}
                    className="image"
                    alt={props.movies.title}
                />
            </a>
            <div className="overlay">
                <div className="rating">
                    <div className="movie-rating">{props.movies.ranking || "n/a"}</div>
                    <svg id="movie-star-icon" width="18px" height="17px" viewBox="0 0 18 17" version="1.1">
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Artboard" fill="#FBEC40">
                                <polygon id="Star-Copy"
                                         points="9 13.5 3.70993273 16.2811529 4.72024568 10.3905765 0.440491353 6.21884705 6.35496636 5.35942353 9 0 11.6450336 5.35942353 17.5595086 6.21884705 13.2797543 10.3905765 14.2900673 16.2811529"></polygon>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className="genres">International, Humor</div>
                {/*<div className="genres">{props.movies.genres.map((genres) => <span>{genres}</span>)}</div>*/}
                <h2 className="title max-lines">{props.movies.title}</h2>
                <div className="release">
                    <div className="release-icon">
                        <svg width="26px" height="25px" viewBox="0 0 26 25" version="1.1">
                            <g>
                                <rect fill="#FFFFFF" x="1.08333333" y="9.61458333" width="6.83854167"
                                      height="6.83854167"></rect>
                                <rect fill="#FFFFFF" x="9.546875" y="9.61458333" width="6.83854167"
                                      height="6.83854167"></rect>
                                <rect fill="#FFFFFF" x="1.08333333" y="18.1458333" width="6.83854167"
                                      height="6.83854167"></rect>
                                <rect fill="#FFFFFF" x="9.546875" y="18.1458333" width="6.83854167"
                                      height="6.83854167"></rect>
                                <rect fill="#FFFFFF" x="18.078125" y="18.1458333" width="6.83854167"
                                      height="6.83854167"></rect>
                                <rect fill="#FFFFFF" x="18.078125" y="9.61458333" width="6.83854167"
                                      height="6.83854167"></rect>
                                <polygon fill="#FF5C5C"
                                         points="26 2.16666667 19.5 2.16666667 19.5 5.41666667 18.4166667 5.41666667 18.4166667 2.16666667 7.58333333 2.16666667 7.58333333 5.41666667 6.5 5.41666667 6.5 2.16666667 0 2.16666667 0 7.58333333 26 7.58333333"></polygon>
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

const imageCheck = (imageData) => {
    if (imageData === "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/180x268/film-173410679._CB470041619_.png" || imageData === "") {
        imageData = fallback;
    }
    return imageData;
}