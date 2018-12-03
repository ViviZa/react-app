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

    handleClick(param, e) {
        this.setState({ select: param });
    }

    render() {
        return (
            <div className="filter-column">
                <div className="dropdown">
                    <h3>{this.state.title}</h3>
                    <div className="dropdown">
                        <button className="dropbtn">{this.state.select}<span className="fa fa-angle-down arrow-down"></span></button>
                        <div className="dropdown-content">
                            {this.state.content.map(function(choice){
                                return (<a key={choice} href="#">{choice}</a>)
                            })}
                            <a href="#" onClick={this.handleClick.bind(this, 'Value')}>test-click</a> {/*example how to change dropdown-button content*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Button;
