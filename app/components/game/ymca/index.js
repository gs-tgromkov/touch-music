import './style.scss';

import React from 'react';
import Howler from 'react-howler';

import music from 'games/ymca/music/music.mp3';

export default class YMCA extends React.Component {
  constructor(props) {
    super(props);

    this.calculate = this.calculate.bind(this);
    this.tolerance = this.tolerance.bind(this);

    this.state = {
      properties: this.props.game,
      playing: true,
      duration: null,
      start: 0,
      y: 0,
      m: 0,
      c: 0,
      a: 0
    };
  }

  clicked(e, val) {
    if (e.target.clicked) {
      return;
    }

    e.target.classList.add('clicked');
    e.target.clicked = true;
    this.setState({ [val]: this.player.seek().toFixed(2) });
  }

  tolerance() {
    const obj = {
      y: this.state.y,
      m: this.state.m,
      c: this.state.c,
      a: this.state.a
    };

    return Object.values(obj).map((value, index) => {
      const press = this.state.properties.eachPress[index];
      const point = 25;

      const number = Number(value);

      if (number > 0) {
        let float = number - press;

        if (float < 0) {
          float *= -1;
        }

        float = float.toPrecision(2) * 50;

        return point - float;
      }

      return 0;
    });
  }

  calculate() {
    let points = 0;

    this.setState({
      playing: false,
      duration: this.player.duration().toFixed(2)
    });

    const tolerance = this.tolerance();

    tolerance.forEach((value) => {
      points += value;
    });

    this.finish(points);
  }

  finish(points) {
    console.log(points)
  }

  render() {
    return (
      <div className="ymca">
        <Howler
          onEnd={() => this.calculate()}
          src={music}
          preload
          playing={this.state.playing}
          ref={(ref) => (this.player = ref)}
        />
        <div className="ymca--upper">
          <div className="ymca--upper__a">
            <div
              onClick={(e) => this.clicked(e, 'a')}
              className="a"
            />
          </div>
          <div className="ymca--upper__m">
            <div
              onClick={(e) => this.clicked(e, 'm')}
              className="m"
            />
          </div>
        </div>
        <div className="ymca--lower">
          <div className="ymca--lower__y">
            <div
              onClick={(e) => this.clicked(e, 'y')}
              className="y"
            />
          </div>
          <div className="ymca--lower__c">
            <div
              onClick={(e) => this.clicked(e, 'c')}
              className="c"
            />
          </div>
        </div>
      </div>
    );
  }
}
