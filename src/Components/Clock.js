import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <Fragment>
                <h2 className="now-date">{this.props.text} {this.state.date.toLocaleTimeString()}</h2>
            </Fragment>
        );
    }
}

Clock.propTypes = {
    text: PropTypes.string
}