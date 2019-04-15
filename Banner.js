import React, { Component } from 'react';
import './Banner.scss';


class Banner extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="banner-container">
                <img src={this.props.src} alt={this.props.alt} />
            </div>
        );
    }
}

export default Banner;


