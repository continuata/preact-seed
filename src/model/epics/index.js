import { Observable } from 'rxjs/Observable'
import { combineEpics } from 'redux-observable'
import actions from './actions'

const initApp = (actions$, store) =>
  actions$.ofType('APP_INIT')
    .switchMap(() =>
      Observable.interval(1000)
        .map(() => actions.setTime(Date.now())))

export default combineEpics(
  initApp
)
