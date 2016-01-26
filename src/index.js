import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import * as reducers from './reducers.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { syncHistory, routeReducer } from 'react-router-redux';
import { Router, Route, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import App from './views/App/App';

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}));
const reduxRouterMiddleware = syncHistory(browserHistory);
const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware, thunk, promise, logger)(createStore);
const store = createStoreWithMiddleware(reducer);

// Required for replaying actions from devtools to work
// reduxRouterMiddleware.listenForReplays(store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
