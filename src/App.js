import React, { Component } from 'react';
import Card from './components/Card.js';
import IntroPage from './components/IntroPage.js';

import './scss/styles.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      //show intro
      showIntro: true,

      // Information regarding status of cards
      numberofCards: 10,
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
    this.cardsFlipped = this.cardsFlipped.bind(this);
    this.newGame = this.newGame.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.generateCards = this.generateCards.bind(this);

  }

  componentDidMount() {
    this.generateCards();
  }

  enterGame() {
    this.setState({
      showIntro: false
    })
  }

  exitGame() {
    this.setState({
      showIntro: true
    })
  }

  cardsFlipped(type) {
    console.log('type', type);
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
        console.log('cardClick set to true');
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
      let index = Math.ceil(i/2);
      let card = <Card key={i} type={index} canFlip={this.state.cardClick} callback={() => this.cardsFlipped(index)} matchedCards={this.state.matchedCards} resetCard={this.state.resetCard}/>
      cards.push(card)
    }
    this.setState({cardsArray: cards})
    return;
  }

  shuffle(a) {
    let cards = this.state.cardsArray; 
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    this.setState({shuffledCards: cards});
    return;
  }
  render() {    

    return (
      <div className="App">
        <IntroPage showIntro={this.state.showIntro} buttonClick={this.enterGame} />
        <div className={this.state.showIntro === true ? 'site-wrap intro-visible' : 'site-wrap'}>
          <header>
            <button onClick={this.newGame}>New Game</button>
            <button onClick={this.exitGame}>X</button>
  {/*          <button onClick={() => {cards = this.shuffle(cards) } }>Shuffle</button> */}
            <p>Player 1 score: {this.state.playerOneScore}</p>
            <p>Player 2 score: {this.state.playerTwoScore}</p>
          </header>
          <main>
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <h1>Memory Game</h1>
                  <p>The hover states correlate to the hidden image. Or do they....?</p>
                </div>
                <section className="cards">
                  <Card animated={this.state.showIntro} callback={() => this.cardsFlipped('1')} canFlip={this.state.cardClick} matchedCards={this.state.matchedCards} resetCard={this.state.resetCard} type="1" />
                  <Card animated={this.state.showIntro} callback={() => this.cardsFlipped('1')} canFlip={this.state.cardClick} matchedCards={this.state.matchedCards} resetCard={this.state.resetCard} type="1" />
                  <Card animated={this.state.showIntro} callback={() => this.cardsFlipped('2')} canFlip={this.state.cardClick} matchedCards={this.state.matchedCards} resetCard={this.state.resetCard} type="2" />
                  <Card animated={this.state.showIntro} callback={() => this.cardsFlipped('2')} canFlip={this.state.cardClick} matchedCards={this.state.matchedCards} resetCard={this.state.resetCard} type="2" />
                  <Card animated={this.state.showIntro} callback={() => this.cardsFlipped('3')} canFlip={this.state.cardClick} matchedCards={this.state.matchedCards} resetCard={this.state.resetCard} type="3" />
                  <Card animated={this.state.showIntro} callback={() => this.cardsFlipped('3')} canFlip={this.state.cardClick} matchedCards={this.state.matchedCards} resetCard={this.state.resetCard} type="3" />
                  <Card animated={this.state.showIntro} callback={() => this.cardsFlipped('4')} canFlip={this.state.cardClick} matchedCards={this.state.matchedCards} resetCard={this.state.resetCard} type="4" />
                  <Card animated={this.state.showIntro} callback={() => this.cardsFlipped('4')} canFlip={this.state.cardClick} matchedCards={this.state.matchedCards} resetCard={this.state.resetCard} type="4" />
                  <Card animated={this.state.showIntro} callback={() => this.cardsFlipped('5')} canFlip={this.state.cardClick} matchedCards={this.state.matchedCards} resetCard={this.state.resetCard} type="5" />
                  <Card animated={this.state.showIntro} callback={() => this.cardsFlipped('5')} canFlip={this.state.cardClick} matchedCards={this.state.matchedCards} resetCard={this.state.resetCard} type="5" />
                  <Card animated={this.state.showIntro} callback={() => this.cardsFlipped('6')} canFlip={this.state.cardClick} matchedCards={this.state.matchedCards} resetCard={this.state.resetCard} type="6" />
                  <Card animated={this.state.showIntro} callback={() => this.cardsFlipped('6')} canFlip={this.state.cardClick} matchedCards={this.state.matchedCards} resetCard={this.state.resetCard} type="6" />
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
