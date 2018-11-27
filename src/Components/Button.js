import React, {Component} from 'react';

class Button extends Component {
    render() {
        return (
            <div className="filter-column">
                <div className="dropdown">
                    <h3>{this.props.title}</h3>
                    <div className="dropdown">
                        <button className="dropbtn">Sharukh Khan
                        </button>
                        <div className="dropdown-content">
                            <a href="#">Sharukh Khan</a>
                            <a href="#">Sharukh Khan</a>
                            <a href="#">Sharukh Khan</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Button;