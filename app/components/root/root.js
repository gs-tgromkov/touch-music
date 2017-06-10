import './root.scss';

import React from 'react';
import { Link } from 'react-router-dom';

export default class Root extends React.Component {
  renderHeading() {
    return (<h1 className="root-heading">Welcome to Irena Touch Music!</h1>);
  }

  render() {
    return (
      <div className="root">
        {this.renderHeading()}
        <Link to="/preview">
          Preview
        </Link>
        <br />
        <Link to="/game">
          Game
        </Link>
      </div>
    );
  }
}
