import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import Game from './no-redux/Game'
// ReactDOM.render(
//   <Game></Game>,
//   document.getElementById('root'))

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux/reducers/game'
import GameContainer from './redux/containers/GameContainer'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(reducer, applyMiddleware(...middleware),)

ReactDOM.render(
  <Provider store={ store }>
    <GameContainer />
  </Provider>,
  document.getElementById('root')
);