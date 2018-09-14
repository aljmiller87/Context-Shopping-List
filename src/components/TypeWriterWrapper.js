import React, { Component } from 'react';
import TypeWriter from 'react-typewriter';

class TypeWriterWrapper extends Component {
	constructor(props) {
		super();
	}

	render() {
		console.log('before');
		if (!this.props.renderTypeWriter) {
			return null;
		}
		
		return (
			<TypeWriter typing={1} minDelay={20} >Or perhaps just a memory game!</TypeWriter>
		)
	}
}

export default TypeWriterWrapper;