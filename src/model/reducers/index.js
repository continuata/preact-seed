import createReducer from '../utils/createReducer'
import { combineReducers } from 'redux'

export const init = createReducer('APP_INIT_FULFILLED')('')
export const app = createReducer('DO_SOMETHING')('')
export const time = createReducer('SET_TIME')('')
export const count = createReducer(
  'SET_COUNTER',
  ['INCREMENT_COUNTER', (count) => count + 1]
)(10)

export default combineReducers({
  init,
  app,
  time,
  count
})
