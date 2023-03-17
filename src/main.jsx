import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux'

import App from './App'
import './index.css'
import { pokemonsReducer } from './reducers/pokemons';
import { addReduxAtTheEnd, logger } from './middlewares/index';


const composeEnhancers = compose( // Are vitamins for the reducer
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // To debbug using Crhome
  applyMiddleware(logger) // Custom middleware
)
const  store = createStore(
  pokemonsReducer,
  composeEnhancers
  )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
