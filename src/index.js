/* global window */
import 'rxjs'
import 'preact'
import { Router } from 'preact-router'
import { Provider } from 'preact-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap-theme.min.css'
import './assets/css/compiled/theme.css'

import Header from './components/header'
import Home from './components/routes/home'
import Profile from './components/routes/profile'

import epics from './model/epics'
import actions from './model/epics/actions'
import reducers from './model/reducers'

const epicMiddleware = createEpicMiddleware(epics)
const composeEnhancers = typeof window !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(epicMiddleware)))
store.dispatch(actions.appInit())

/** @jsx h */
export default () => (
  <div id='app'>
    <Header />
    <div class='container'>
      <Provider store={store}>
        <Router>
          <Home path='/' />
          <Profile path='/profile/' user='me' />
          <Profile path='/profile/:user' />
        </Router>
      </Provider>
    </div>
  </div>
)
