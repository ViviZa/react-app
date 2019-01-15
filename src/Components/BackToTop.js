import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleUp);

class BackToTop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            position: 0
        }
    }

    anchorPosition(){
        if (window.scrollY === 0) {
            clearInterval(this.state.position);
        }
        window.scroll(0, window.scrollY - this.props.scrollAmount);
    }

    executeScroll() {
      let position = setInterval(this.anchorPosition.bind(this), this.props.delay);
      this.setState({ position: position})
    }

    render() {
        return (
            <button href="#" title="Back To Top" className="back-to-top"
                    onClick={ (event) => {
                                  event.preventDefault();
                                  this.executeScroll();
                              }}>
              <span><FontAwesomeIcon icon="angle-up" /></span>
            </button>
        );
    }
}

export default BackToTop;
