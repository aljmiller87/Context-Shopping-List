import React, { Component } from 'react';
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


      // Information regarding status of cards
      numberofCards: 16,
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

  componentDidMount() {
    this.generateCards();
  }

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
    console.log('called enter game');
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
    console.log('type in App cardsFlipped', type);
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
        console.log("match")
        this.setState({ matchedCards: [...this.state.matchedCards, type]})
        if(this.state.playerOneTurn) {
          let score = this.state.playerOneScore;
          console.log('add to player one score');
          this.setState({playerOneScore: ++score})
        } else {
          let score = this.state.playerTwoScore;
          console.log('add to player two score');
          this.setState({playerTwoScore: ++score})
        }
      }

      // after time delay, will reset card status defaults
      setTimeout(() => {
        // console.log('cardClick set to true');
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
      playerTwoScore: 0
    })
    this.generateCards();
  }

  generateCards() {
    let cards = [];
    for(let i=1; i<= this.state.numberofCards; i++) {
      let type = Math.ceil(i/2);
      cards.push(type)
    }
    this.shuffle(cards);
  }

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
        return <Card key={index} animated={this.state.showIntro} callback={() => this.cardsFlipped(type)} canFlip={this.state.cardClick} matchedCards={this.state.matchedCards} resetCard={this.state.resetCard} type={type} />;
      })
    }

    let appClass = "App";
    if (this.state.showIntro) {
      appClass = "App show-intro";
    } else if (this.state.showFakeGame) {
      appClass = "App show-fake-game";
    } else if (this.state.showGame) {
      appClass = "App show-game";
    }
      
    return (
      <div className={appClass}>
        <IntroPage showIntro={this.state.showIntro} buttonClick={this.enterFakeGame} />
        <FakeGame showFakeGame={this.state.showFakeGame} buttonClick={this.enterGame} />
        <div className={this.state.showGame === true ? 'game-wrap visible' : 'game-wrap'}>
          <header className="">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <ul>
                    <li>Memory Game</li>
                    <li>Player 1: {this.state.playerOneScore}</li>
                    <li>Player 2: {this.state.playerTwoScore}</li>
                    <li>
                      <button className="btn white" onClick={this.newGame}>New Game</button>
                      <button className="btn white" onClick={this.exitGame}>X</button>
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
                  <h1>Memory Game</h1>
                  <p>The hover states correlate to the hidden image. Or do they....?</p>
                </div>
                <section className="cards">
                  {cards}
                </section>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
