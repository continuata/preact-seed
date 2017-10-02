import { createSelector } from 'reselect'
import { get } from 'lodash/fp'

export default createSelector(
  get('app'),
  (app) => ({ app })
)
