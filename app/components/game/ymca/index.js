import './style.scss';

import React from 'react';
import Howler from 'react-howler';

import Gif from '../Gif';

import music from 'games/ymca/music/preview.mp3';
import Y from 'games/ymca/gifs/Y.gif'
import M from 'games/ymca/gifs/M.gif'
import C from 'games/ymca/gifs/C.gif'
import A from 'games/ymca/gifs/A.gif'

export default class YMCA extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      start: false,
      properties: this.props.game
    }
  }

  render() {
    return (
      <div className="ymca">
        <div className="ymca--upper">
          <div className="ymca--upper__a">
            <Gif src={A} stopped />
          </div>
          <div className="ymca--upper__m">
          </div>
        </div>
        <div className="ymca--lower">
          <div className="ymca--lower__y">
          </div>
          <div className="ymca--lower__c">
          </div>
        </div>
      </div>
    )
  }
}

// <Howler
  // src={music}
  // preload={true}
  // playing={true}
// />
