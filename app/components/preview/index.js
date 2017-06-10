import './preview.scss';

import React from 'react';

export default class Preview extends React.Component {
  renderHeading() {
    return <h1 className="root-heading">Preview!</h1>;
  }

  render() {
    return (
      <div className="root">
        { this.renderHeading() }
      </div>
    );
  }
}
