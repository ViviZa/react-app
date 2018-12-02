import React, {Component} from 'react';

class Button extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            title: this.props.title,
            select: this.props.select,
            content: this.props.content || ["abc", "def", "default"]}
    }

    handleClick() {
        this.setState({ select: "New title" });
    }

    render() {
        return (
            <div className="filter-column">
                <div className="dropdown">
                    <h3>{this.state.title}</h3>
                    <div className="dropdown">
                        <button className="dropbtn" onClick={this.handleClick}>{this.state.select}</button>
                        <div className="dropdown-content">
                            {this.state.content.map(function(choice){
                                return (<a href="#">{choice}</a>)
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Button;