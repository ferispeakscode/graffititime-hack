import React, { Component } from 'react';
import '../styles/wall.css';
import wall from '../images/wood.jpg';

class Wall extends Component {
    render () {
        return (
            <div className="wall">
                <img src={wall}></img>
            </div>
        );
    };
}

export default Wall;