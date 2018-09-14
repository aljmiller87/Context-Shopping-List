import React, { Component } from 'react';
// import TypeWriter from 'react-typewriter';
import TypeWriterWrapper from './TypeWriterWrapper.js';

class IntroPage extends Component {
	constructor(props) {
		super();
		this.state = {
			showTypeWriter: false
		}

	}

	componentDidMount() {
	   	setTimeout(() => {
	      this.setState({ showTypeWriter: true }); 
	   	}, 4000);
	}


	render() {

		return (
			<div className={this.props.showIntro === true ? 'intro-wrap visible' : 'intro-wrap'}>
				<div className="bg">
				  <div className="video embed-responsive embed-responsive-16by9">
				    <iframe src="https://www.youtube.com/embed/9ZfN87gSjvI?modestbranding=1&amp;start=18&amp;autoplay=1&amp;loop=1&amp;playlist=9ZfN87gSjvI&amp;disablekb=1&amp;controls=0&amp;mute=1&amp;showinfo=0" frameBorder="0"></iframe>
				  </div>
				</div>
				<div className="container">
				  <h1 className="animated fadeInDown">Take a trip down memory lane</h1>
				  <div className="animated fadeInUp blurb">				    
				    <p>				   				 
				    	<TypeWriterWrapper renderTypeWriter={this.state.showTypeWriter} />
				    	<span className="placeholder">.</span>
				    </p>
				    <button className="btn white" onClick={this.props.buttonClick}>Enter</button>
				  </div>
				</div>
			</div>
		)
	}
}

export default IntroPage;

			