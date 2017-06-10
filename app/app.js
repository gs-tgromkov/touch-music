import 'cssrecipes-defaults/lib/document-remove-margin-padding.css';
import 'cssrecipes-defaults/lib/box-sizing.css';
import 'cssrecipes-defaults/lib/hidden.css';
import 'normalize.css/normalize.css';

import 'assets/styles/main.scss';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Root from './components/root/root';
import Preview from './components/preview';
import Game from './components/game';

render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Root } />
      <Route exact path="/preview" component={ Preview } />
      <Route exact path="/game" component={ Game } />
    </Switch>
  </BrowserRouter>,
  document.querySelector('#app')
);

// Enables hot-reload without page refresh. Removed during `build`
if (module.hot) {
  module.hot.accept();
}
