import _ from 'lodash/fp'

const castFunction = (args) => {
  const list = _.dropRightWhile(_.isFunction, args)
  const method = _.isFunction(_.last(args)) ? _.last(args) : (state, value) => value
  return _.map(item => [item, method], list)
}

export default (...handlers) => (defaultValue = null) => {
  const actions = _.flow(
    _.map(_.castArray),
    _.map(castFunction),
    _.flatten,
    _.fromPairs
  )(handlers)
  return (state, { type, value }) =>
    actions[type] ? actions[type](state, value) : _.isNil(state) ? defaultValue : state
}
