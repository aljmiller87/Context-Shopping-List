import React, { Component } from 'react';
import ReactLoading from 'react-loading';

class FakeGame extends Component {
	constructor(props) {
		super();
		this.state = {
			exitFakeGame: false,
			loading: true
		}
		this.exitFakeGame = this.exitFakeGame.bind(this);
	}

	componentDidUpdate(prevProps, prevState) {
		// Sets timer for loading icon do fadeOut and fake game to render
		if(!prevProps.showFakeGame && this.props.showFakeGame) {
			setTimeout(() => {
	          this.setState((prevState, props) => {
		        	return ({
		         		loading: false
		        	})
		    	});
	        }, 1500);
		}
	}

	exitFakeGame() {
	   	let fakeGameWrap = document.getElementById('fake-game-wrap');
	   	fakeGameWrap.classList.add('animated');
	   	fakeGameWrap.classList.add('fadeOutUp');
	   	setTimeout(() => this.props.buttonClick(), 1150);
	}


	render() {

		let fakeCards = [];
	    for (var i = 1; i <+ 141; i++) {
	        fakeCards.push(<li key={i} className="fakeCard">hello<span></span><span></span><span></span><span></span></li>);
	    }

	    let loadingClassName = this.state.loading ? "loading-element animated" : "loading-element animated fadeOut";
	    let fakeGameClass = this.state.loading ? "fakeGame animated" : "fakeGame animated fadeIn";

		return (
			<div id='fake-game-wrap' className={this.props.showFakeGame === true ? 'fake-game-wrap visible' : 'fake-game-wrap'}>
				<div className="container">
					<div className="row">
						<div className="col-xs-12">
							<h2>Testing Fake Game Page</h2>
							<button onClick={this.exitFakeGame} className="button slate outline">Enter Game</button>
							<ReactLoading type="spokes" color="#ffffff" height={50} width={50} className={loadingClassName}/>
							<div className={fakeGameClass}>
								<ul>
									{fakeCards}
								</ul>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default FakeGame;

			