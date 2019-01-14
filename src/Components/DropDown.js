import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faUndo } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleDown);
library.add(faUndo);

class DropDown extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            select: "select"
        }
    }

    handleClick(param) {
        this.state.select = param;
        this.props.onDropDownClick(this.props.type, this.state.select);
    }

    onResetFilter(){
        this.state.select = "select" ;
        this.props.onDropDownClick(this.props.type, "");
    }

    render() {
        return (
            <div className="filter-column">
              <div className="filter-headline">
                <h3>{this.props.title}</h3>
                <button className="reset-button" onClick={this.onResetFilter.bind(this)}>
                  <span className="reset-filter"><FontAwesomeIcon icon="undo" /></span>
                </button>
              </div>
              <div className="dropdown">
                  <button className="dropbtn">{this.state.select}<span className="arrow-down"><FontAwesomeIcon icon="angle-down" /></span></button>
                  <div className="dropdown-content">
                      {this.props.content.map((choice,i) => <a key={i} onClick={this.handleClick.bind(this, choice)}>{choice}</a>)}
                  </div>
              </div>
            </div>
        );
    }
}

export default DropDown;
