import React from 'react';
import { hydrate } from 'react-dom';
import App from './components/App';
import {AppContainer} from 'react-hot-loader';

const render = Component => {
  hydrate(
      <AppContainer>
          <Component />
      </AppContainer>,
      document.getElementById('app'),
  )
}

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    const App = require('./components/App').default;
    render(App);
  });
}