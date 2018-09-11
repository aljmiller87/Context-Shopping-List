import React, { Component } from 'react';
import TypeWriter from 'react-typewriter';

class TypeWriterWrapper extends Component {
	constructor(props) {
		super();
	}

	render() {
		if (!this.props.renderTypeWriter) {
			return null;
		}
		
		return (
			<TypeWriter typing={1} minDelay={30} >Or perhaps just a memory game!</TypeWriter>
		)
	}
}

export default TypeWriterWrapper;