import React, {Component, Fragment} from 'react';

// Using lodash so i don't have to test my version of these methods
import chunk from 'lodash/chunk';
import find from 'lodash/find';
import flatten from 'lodash/flatten';

import Card from '../Card';

const img = './images/';


/**
 * CardTable Class
 * @param {Object} of props
 * @return {Function} React Element
 */
export default class CardTable extends Component {
	constructor (props) {
		super(props);
		
		this.state = {
      cards: this.prepareDeck(),
      firstSelected: null,
      matches: [],
      message: ''
    }
  }
  
  /**
   * prepareDeck Method
   * @param {Undefined}
   * @return {Array} cards array that is shuffled and split
   * 
   * lets shuffle a copy of the initial array of cards and split into presentable rows
   */
  prepareDeck = () => {
    const {originalCards} = this.props;

    return this.splitCards(this.shuffleCards([...originalCards]));
  }

  /**
   * shuffleCards Method
   * @param {Array} cards array to shuffle.
   * @return {Array} cards array shuffled
   * 
   * Googled best way to shuffle cards - came across this fisher yates approach -
   * using without index variable in favor of array destructuing for readability
   * *accepting the performance hit
   */
  shuffleCards = (cards) => {
    for(let i = cards.length -1; i > 0; i--) {
      const index = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[index]] = [cards[index], cards[i]];
    }
    return cards;
  }

  /**
   * splitCards Method
   * @param {Array} collection of shuffled cards.
   * @return {Array} chunked list of presentable rows.
   */
  splitCards = (collection) => {
    const {rows} = this.props;

    return chunk(collection, rows); 
  }

  /**
   * selectCard Method
   * @param {String} id of clicked card
   * @return {Undefined} does not return anything - sets state
   */
  selectCard = (id) => {
    const {cards, firstSelected, message} = this.state;
    
    if(!message) {
      
      const lookup = flatten(cards);
      const selected = find(lookup, {id});
      let isMatch;

      selected.flipped = true
      
      if(firstSelected) {
        isMatch = this.checkForMatch(id);

        if (isMatch) {
          this.saveMatches(firstSelected, id);
        } else if(isMatch === false) {
          this.showMessage([firstSelected, id])
        }
      } else {
        this.setState({
          cards: this.splitCards(lookup),
          firstSelected: id
        })
      }
    }
  }
  
  /**
   * checkForMatch Method
   * @param {String} id of clicked card.
   * @return {Bool}
   * 
   * checks wether or not a second selection matches the first selection
   */
  checkForMatch = (id) => {
    const {cards, firstSelected} = this.state;
    const lookup = flatten(cards);
    const firstSelectedCard = find(lookup, {id: firstSelected});
    const secondSelectedCard = find(lookup, {id})

    return (firstSelectedCard.pair === secondSelectedCard.pair);
  }

  /**
   * saveMatches Method
   * @param {String} id of first match
   * @param {String} id of second match
   * @return {Undefined} saves state - returns nothing
   * 
   * Saves the current match pair
   */
  saveMatches = (id1, id2) => {
    const {matches} = this.state;

    const newMatches = [...matches, id1, id2];

    this.setState({
      firstSelected: null,
      matches: newMatches
    })
  }

  /**
   * showMessasge Method
   * @param {Array} pair of two ids
   * @return {Undefined} setTimeout method that clears incorrect choices 
   * 
   * sets a message after a mis match
   */
  showMessage = (pair) => {
    this.setState({
      message: 'No match - Try again!'
    })
    setTimeout(() => {
      this.continue(pair)
    }, 1000) 
  }

  /**
   * continue Method
   * @param {Array} pair of matches to flip back
   * @return {Undefined} returns nothing - sets state
   * 
   * resets selected / flipped cards after a failed match, as well as any error message.
   */
  continue = (pair) => {
    const {cards} = this.state;
    const lookup = flatten(cards);
    const firstSelectedCard = find(lookup, {id: pair[0]});
    const secondSelectedCard = find(lookup, {id: pair[1]});
    
    firstSelectedCard.flipped = false;
    secondSelectedCard.flipped = false;

    this.setState({
      cards: this.splitCards(lookup),
      firstSelected: null,
      message: ''
    })
  }

  /**
   * Render Method
   */
  render () {
    const {cards, message} = this.state;

    return (
      <Fragment>
        <h1>Memory Game!!</h1>
        <div className='message'>
          {
            (message && message !== '') && 
            <Fragment>
              <p>{message}</p>
              <img className='face' src={`${img}cry.jpeg`} />  
            </Fragment>
          }
        </div>
        <div className='columns'>
          {
            cards && cards.map((chunk, index) => {
              return (
                <div
                  className='column'
                  key={`card-${index}`}>
                  {
                    chunk.length && chunk.map((card, index) => {
                      return (
                        <Card
                          details={card}
                          key={`card-${index}`}
                          onSelect={this.selectCard} />
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>
      </Fragment>
    )
	}
}