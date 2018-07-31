import React, { Component } from 'react';

import CardTable from './Components/CardTable';

import './App.css';
import '../node_modules/bulma/css/bulma.css';

const originalCards = [
  {
    id: 1,
    flipped: false,
    pair: 'aa',
    image: 'backtothefuture.jpg'
  },
  {
    id: 2,
    flipped: false,
    pair: 'bb',
    image: 'pokemon.jpg'
  },
  {
    id: 3,
    flipped: false,
    pair: 'cc',
    image: 'diehard.jpg'
  },
  {
    id: 4,
    flipped: false,
    pair: 'dd',
    image: 'ghostbusters.jpg'
  },
  {
    id: 5,
    flipped: false,
    pair: 'ee',
    image: 'goonies.jpg'
  },
  {
    id: 6,
    flipped: false,
    pair: 'ff',
    image: 'karatekid.jpg'
  },
  {
    id: 7,
    flipped: false,
    pair: 'gg',
    image: 'lw4.jpeg'
  },
  {
    id: 8,
    flipped: false,
    pair: 'hh',
    image: 'pointbreak.jpg'
  },
  {
    id: 9,
    flipped: false,
    pair: 'ii',
    image: 'predator.jpg'
  },
  {
    id: 10,
    flipped: false,
    pair: 'jj',
    image: 'airplaine.jpg'
  },
  {
    id: 11,
    flipped: false,
    pair: 'kk',
    image: 'rockyiv.jpg'
  },
  {
    id: 12,
    flipped: false,
    pair: 'll',
    image: 'terminator.jpg'
  },
  {
    id: 13,
    flipped: false,
    pair: 'aa',
    image: 'backtothefuture.jpg'
  },
  {
    id: 14,
    flipped: false,
    pair: 'bb',
    image: 'pokemon.jpg'
  },
  {
    id: 15,
    flipped: false,
    pair: 'cc',
    image: 'diehard.jpg'
  },
  {
    id: 16,
    flipped: false,
    pair: 'dd',
    image: 'ghostbusters.jpg'
  },
  {
    id: 17,
    flipped: false,
    pair: 'ee',
    image: 'goonies.jpg'
  },
  {
    id: 18,
    flipped: false,
    pair: 'ff',
    image: 'karatekid.jpg'
  },
  {
    id: 19,
    flipped: false,
    pair: 'gg',
    image: 'lw4.jpeg'
  },
  {
    id: 20,
    flipped: false,
    pair: 'hh',
    image: 'pointbreak.jpg'
  },
  {
    id: 21,
    flipped: false,
    pair: 'ii',
    image: 'predator.jpg'
  },
  {
    id: 22,
    flipped: false,
    pair: 'jj',
    image: 'airplaine.jpg'
  },
  {
    id: 23,
    flipped: false,
    pair: 'kk',
    image: 'rockyiv.jpg'
  },
  {
    id: 24,
    flipped: false,
    pair: 'll',
    image: 'terminator.jpg'
  }
]

class App extends Component {

  render() {
    return (
      <div className="App">
        <h2>Favorite movie memory game</h2>
        <CardTable
          originalCards={originalCards}
          rows={4} />
      </div>
    );
  }
}

export default App;
