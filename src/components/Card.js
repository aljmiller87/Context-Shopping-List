import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
// import Image from './front-background.jpg';


class Card extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
      isMatched: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.isCardMatched = this.isCardMatched.bind(this);
  }
 
  

  componentDidUpdate(prevProps, prevState, snapshot) {
    // If new props matchedCards array is longer than prevProps,
    // then check if this card type is in matchArray
    if(this.props.matchedCards.length > prevProps.matchedCards.length)
      this.setState((prevState, props) => {
        return ({
          isMatched: true
        })
      });

    // If new props have resetCard status true, 
    // then card will check if it is matched.
    // If card is not matched, it will flip to show the front    
    if(!prevProps.resetCard && this.props.resetCard) {
      console.log('reset was false, now true, calling isMatched()');
      if(this.isCardMatched() === false) {
        this.setState({isFlipped: false})
      }
    }

    // Detects if new game has been requested because prevProps had matched cards, but new props have 0
    if(prevProps.matchedCards.length > 0 && this.props.matchedCards.length === 0) {
      this.setState((prevState, props) => {
        return ({
          isFlipped: false,
          isMatched: false
        })
      });
    }
  }

  // Tell app that this card has been clicked
  // Change this Card's flipped state
  handleClick(e) {
    // console.log('type in Card Handle Click', this.props.type);
    e.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
    this.props.callback(this.props.type);
    
  }

  // Checks if Card's type property is found in App's list of matched cards
  isCardMatched() {
    // console.log('isCardMatched called');
    let matchedCards = this.props.matchedCards;
    let length = matchedCards.length;
    for(let i =0; i<length; i++) {
      if(matchedCards[i] === this.props.type) {
        return true;
      }
    }
    return false;
  }
 
  render() {    
    // Checks matched status of card
    let matched = this.isCardMatched();
    // Will prevent card from being able to flip if either 
    // 1) apps prevents it (delay is set after 2 cards are flipped)
    // 2) if the card is matched, it will stay flipped
    // 3) if card is already flipped, 
    let canFlip = (this.props.canFlip && !matched && !this.state.isFlipped);
    // Adds animated class when game is viewed by player
    let cardWrapperClass = !this.props.animated ? 'col-xs-6 col-sm-4 col-md-3 card-wrapper animated fadeInDownSmall' : 'col-xs-6 col-sm-4 card-wrapper animated';
    // Class changes if cards flips and is either a match or not a match
    let cardClass = 'card';

    
    return (
      <div className={cardWrapperClass}>
        <div className="card" onClick={canFlip  ? this.handleClick : undefined}>
          <ReactCardFlip isFlipped={this.state.isFlipped}>
            <div className="front" key="front">
              <div className="text">
                <h4>hello.</h4>
                <p>is it me you're looking for?</p>
              </div>
            </div>

     
            <div className="back" key="back">
              <img src={`/images/image${this.props.type}.jpg`} />
            </div>
          </ReactCardFlip>
        </div>
      </div>
    )
  }
}

export default Card;
