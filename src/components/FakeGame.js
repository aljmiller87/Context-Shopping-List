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
	   	fakeGameWrap.classList.add('fadeOut');
	   	fakeGameWrap.classList.remove('visible');
	   	// setTimeout(() => this.props.buttonClick(), 1150);
	   	this.props.buttonClick();
	}


	render() {
		// Generating 141 fake cards
		let fakeCards = [];
	    for (var i = 1; i <+ 141; i++) {
	        fakeCards.push(<li key={i} className="card"><div className="front">hello<span></span><span></span><span></span><span></span></div></li>);
	    }

	    // Set classes dependent on state
	    let loadingClassName = this.state.loading ? "loading-element animated" : "loading-element animated fadeOut";
	    // let fakeGameClass = this.state.loading ? "fakeGame animated" : "fakeGame animated fadeIn";
	    let fakeGameClass = this.state.loading ? "fakeGame" : "fakeGame visible"
	    let popUpClass = this.state.loading ? "pop-up" : "pop-up animated delay-3s bounceIn";

		return (
			<div id='fake-game-wrap' className={this.props.showFakeGame === true ? 'fake-game-wrap visible' : 'fake-game-wrap'}>
				<ReactLoading type="spokes" color="#ffffff" height={50} width={50} className={loadingClassName}/>
				<header className="">
					<div className="container">						
						<div className="row">
							<div className="col-xs-12">
								<ul>
									<li>Memory Game</li>
									<li>Player 1: 0</li>
									<li>Player 2: 0</li>
									<li></li>
								</ul>
							</div>
						</div>
					</div>	
				</header>
				<div className="container">
					<div className={popUpClass}>
						<h3>Just kidding</h3>
						<p>That would be a bit much, huh?</p>
						<p>Click below to enter the real game</p>
						<button className="btn blue" onClick={this.exitFakeGame}>Enter Game</button>
					</div>
					<div className="row">
						<div className="col-xs-12 col-sm-4 pull-right">							
						</div>
						<div className="col-xs-12 col-sm-8">
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

			