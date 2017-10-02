/* global window */
import { h, Component } from 'preact'
import { Router } from 'preact-router'
import { Provider } from 'preact-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import Header from './header'
import Home from '../routes/home'
import Profile from '../routes/profile'

import epics from '../model/epics'
import actions from '../model/epics/actions'
import reducers from '../model/reducers'

const epicMiddleware = createEpicMiddleware(epics)
const composeEnhancers = typeof window !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(epicMiddleware)))
store.dispatch(actions.appInit())

/** @jsx h */
export default class App extends Component {
  handleRoute (e) {
    App.currentUrl = e.url
  }

  render () {
    return (
      <div id='app'>
        <Header />
        <Provider store={store}>
          <Router onChange={this.handleRoute}>
            <Home path='/' />
            <Profile path='/profile/' user='me' />
            <Profile path='/profile/:user' />
          </Router>
        </Provider>
      </div>
    )
  }
}
