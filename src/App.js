import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import Card from './components/Card.js';
import FakeGame from './components/FakeGame.js';
import IntroPage from './components/IntroPage.js';

import './scss/styles.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      //show intro, fake game, or real game
      showIntro: true,
      showFakeGame: false,
      hasShownFakeGameOnce: false,
      showGame: false,

      //game loading status
      loading: true,


      // Information regarding status of cards
      numberofCards: 14,
      cardsArray: undefined,
      cardClick: true,
      cardsFlipped: 0,
      matchedCards: [],
      currentCardType: undefined,
      resetCard: false,
      shuffledCards: undefined,
      // Score information
      playerOneScore: 0,
      playerTwoScore: 0,
      endGame: false,
      // Turn information
      playerOneTurn: true

    };
    // this.listTypes = ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd']
    this.enterGame = this.enterGame.bind(this);
    this.exitGame = this.exitGame.bind(this);
    this.enterFakeGame = this.enterFakeGame.bind(this);
    this.cardsFlipped = this.cardsFlipped.bind(this);
    this.newGame = this.newGame.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.generateCards = this.generateCards.bind(this);

  }

  // Generates cards when component first mounts
  componentDidMount() {
    this.generateCards();
  }

  componentDidUpdate(prevProps, prevState) {
    // Sets timer for loading icon do fadeOut and fake game to render
    if(!prevState.showGame && this.state.showGame) {
      setTimeout(() => {
        this.setState((prevState, props) => {
          return ({
            loading: false
          })
        });
      }, 1500);
    }

    // Detect if all cards have been flipped and game is over
    if(prevState.matchedCards.length < 7 && this.state.matchedCards.length === 7) {
      this.setState((prevState, props) => {
          return ({
            endGame: true
          })
        });
    }
  }

  // When into screen button is clicked, app will take user to fake game
  // or, if fake game has already been viewed, will enter real game
  enterFakeGame() {    
    if(this.state.hasShownFakeGameOnce === false) {
      this.setState({
        showIntro: false,
        showFakeGame: true,
        hasShownFakeGameOnce: true
      })
    } else {
      this.setState({
        showFakeGame: false,
      })
      this.enterGame();
    }
      
  }

  enterGame() {
    this.setState({
      showIntro: false,
      showFakeGame: false,
      showGame: true
    })
  }

  exitGame() {
    this.setState({
      showGame: false,
      showFakeGame: false,
      showIntro: true
    })
  }

  cardsFlipped(type) {
    // Check if this is the first or second card flipped
    // If card flipped is first card flipped
    if (this.state.cardsFlipped === 0) {
      this.setState({
        cardsFlipped: 1,
        currentCardType: type,
        resetCard: false,
      })
    } else {

      // If this is second card flipped:
      // 1) cards will lose ability to be clicked for 1.5 seconds
      // 2) state will be updated in event of matched cards
      // 3) Player turn and score will be updated
      this.setState({cardClick: false})
      if(type === this.state.currentCardType) {
        this.setState({ matchedCards: [...this.state.matchedCards, type]})
        if(this.state.playerOneTurn) {
          let score = this.state.playerOneScore;
          this.setState({playerOneScore: ++score})
        } else {
          let score = this.state.playerTwoScore;
          this.setState({playerTwoScore: ++score})
        }
      }

      // after time delay, will reset card status defaults
      setTimeout(() => {
          this.setState({
            cardClick: true,
            cardsFlipped: 0,
            currentCardType: undefined,
            resetCard: true,
            playerOneTurn: !this.state.playerOneTurn
          })
        }, 1500);
    }
  }

  // Reset all game defaults to start new game
  newGame() {
    this.setState({
      cardClick: true,
      cardsFlipped: 0,
      matchedCards: [],
      currentCardType: undefined,
      resetCard: false,
      playerOneScore: 0,
      playerTwoScore: 0,
      endGame: false
    })
    this.generateCards();
  }

  // Adds the type to each cards, only two cards will share a type
  generateCards() {
    let cards = [];
    for(let i=1; i<= this.state.numberofCards; i++) {
      let type = Math.ceil(i/2);
      cards.push(type)
    }
    this.shuffle(cards);
  }

  // Shuffles all cards
  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    this.setState(function(prevState, props){
      return {shuffledCards: a}
    });
  }


  render() {  
    let cards = []; 
    if(this.state.shuffledCards) {
      cards = this.state.shuffledCards.map((type,index) => {
        return <Card key={index} loading={this.state.loading} callback={() => this.cardsFlipped(type)} canFlip={this.state.cardClick} matchedCards={this.state.matchedCards} resetCard={this.state.resetCard} type={type} />;
      })
    }

    // CSS controls slides depending on status of app (i.e. view intro, fake game, or real game)
    let appClass = "App";
    if (this.state.showIntro) {
      appClass = "App show-intro";
    } else if (this.state.showFakeGame) {
      appClass = "App show-fake-game";
    } else if (this.state.showGame) {
      appClass = "App show-game";
    }

    // Set classes dependent on state, mainly to control animations
    let headerClass = this.state.loading ? "" : "animate";
    let loadingClassName = this.state.loading ? "loading-element animated" : "loading-element animated fadeOut";
    let newGameButtonClass = this.state.loading ? "btn slate upper large new-game-btn" : "btn slate upper large new-game-btn animate";
    let popUpClass = this.state.endGame ? "pop-up animate" : "pop-up";    

    // When app has ended game, this declares winner for UI
    let winner; 
    if (this.state.endGame) {
      if (this.state.playerOneScore > this.state.playerTwoScore) {
        winner = 'Player 1';
      } else {
        winner = 'Player 2';
      }
    }
      
    return (
      <div className={appClass}>
        <IntroPage showIntro={this.state.showIntro} buttonClick={this.enterFakeGame} />
        <FakeGame showFakeGame={this.state.showFakeGame} buttonClick={this.enterGame} />

        {/*Next step: break out game into it's own compoenent*/}
        <div className={this.state.showGame === true ? 'game-wrap visible' : 'game-wrap'}>
          <ReactLoading type="spokes" color="#ffffff" height={50} width={50} className={loadingClassName}/>
          <div className={popUpClass}>
            <h3>Winner!</h3>
            <p>{winner}</p>
            <button className="btn blue" onClick={this.newGame}>New Game</button>
          </div>
          <button className={newGameButtonClass} onClick={this.newGame}>New Game</button>
          <header className={headerClass}>
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <ul>
                    <li><h1>Memory Game</h1></li>
                    <li><span>Player 1: {this.state.playerOneScore}</span></li>
                    <li><span>Player 2: {this.state.playerTwoScore}</span></li>
                    <li> 
                      {/* Iconmoon library not loading on build                     
                      <span className="icon-x" onClick={this.exitGame}></span>
                      Using button as replacement */}
                      <button className="btn white" onClick={this.exitGame}>Close</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>  
          </header>          
          <main>
            <div className="container">
              <div className="row">
                <div className="col-xs-12">                
                  <section className="cards">
                    {cards}
                  </section>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
