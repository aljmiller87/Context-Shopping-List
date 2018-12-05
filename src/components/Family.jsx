import React, { Component } from 'react';
import Person from './Person.jsx';

export default class Family extends Component {
    render() {
        return (
            <div className="family">
                <Person name={this.props.name}/>
            </div>
        )
    }
}