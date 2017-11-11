import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {AppContainer} from 'react-hot-loader';

import App from '../app/App';

const render = Component => {
  hydrate(
      <AppContainer>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </AppContainer>,
      document.getElementById('app'),
  )
}

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('../app/App', () => {
    const App = require('../app/App').default;
    render(App);
  });
}