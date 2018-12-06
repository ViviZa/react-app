import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faUndo } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleDown)
library.add(faUndo)

class DropDown extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            title: this.props.title,
            select: "select",
            content: this.props.content || ["abc", "def", "default"]}
    }

    handleClick(param) {
        this.setState({ select: param });
    }

    render() {
        return (
            <div className="filter-column">
              <div className="filter-headline">
                <h3>{this.state.title}</h3>
                <button className="reset-button" onClick={this.handleClick.bind(this, "select")}>
                  <span className="reset-filter"><FontAwesomeIcon icon="undo" /></span>
                </button>
              </div>
              <div className="dropdown">
                  <button className="dropbtn">{this.state.select}<span className="arrow-down"><FontAwesomeIcon icon="angle-down" /></span></button>
                  <div className="dropdown-content">
                      {this.state.content.map((choice,i) => <a key={i} onClick={this.handleClick.bind(this, choice)}>{choice}</a>)}
                  </div>
              </div>
            </div>
        );
    }
}

export default DropDown;
