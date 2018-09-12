import React, { Component } from 'react';

class FakeGame extends Component {
	constructor(props) {
		super();
		this.state = {
			exitFakeGame: false
		}
		this.exitFakeGame = this.exitFakeGame.bind(this);
	}

	exitFakeGame() {
	   	
	   	let fakeGameWrap = document.getElementById('fake-game-wrap');
	   	fakeGameWrap.classList.add('animated');
	   	fakeGameWrap.classList.add('fadeOutUp');
	   	setTimeout(() => this.props.buttonClick(), 1150);
	}


	render() {

		let fakeCards = [];
	    for (var i = 1; i <+ 50; i++) {
	        fakeCards.push(<li key={i} className="fakeCard">hello<span></span><span></span><span></span><span></span></li>);
	    }

		return (
			<div id='fake-game-wrap' className={this.props.showFakeGame === true ? 'fake-game-wrap visible' : 'fake-game-wrap'}>
				<div className="container">
					<div className="row">
						<div className="col-xs-12">
							<h2>Testing Fake Game Page</h2>
							<div className="fakeGame">
								<ul>
									{fakeCards}
								</ul>
							</div>
							<button onClick={this.exitFakeGame} className="button slate outline">Enter Game</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default FakeGame;

			