import { createSelector } from 'reselect'
import { get } from 'lodash/fp'

export default createSelector(
  get('count'),
  get('time'),
  (count, time) => ({ count, time })
)
