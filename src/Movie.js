import React, { Component } from 'react';

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            url: null
        };
    }

    render() {
        return (
            <div
                className="movie">
                {this.state.title}
            </div>
        );
    }
}