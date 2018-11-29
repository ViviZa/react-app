import React, {Component} from 'react';
import Button from "./Button";

class ButtonList extends Component {

    /*
    * jeweils den Namen übergeben und List of contents
    * */


    render() {
        return (
            <div>
                <Button title="Actor" select="filter by actor"/>
                <Button title="Genre" select="filter by genre"/>
                <Button title="Timeframe" select="filter by timeframe"/>
            </div>
        );
    }

}
export default ButtonList;