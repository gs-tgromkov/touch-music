import './game.scss';

import React from 'react';

import GAMES from 'assets/games.json'
import YMCA from './ymca';

export default class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      game: this.props.game || 'ymca'
    }
  }

  tapToPlay() {
    return (
      <div className={`${this.state.game}-container`}>
        <YMCA
          game={GAMES[this.state.game]}
        />
      </div>
    )
  }

  render() {
    return (
      <div className="game-screen">
        { !this.state.start
          ? this.tapToPlay()
          : this.state.game
        }
      </div>
    );
  }
}
