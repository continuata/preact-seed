export default {
  appInit: value => ({ type: 'APP_INIT', value }),
  appInitFulfilled: value => ({ type: 'APP_INIT_FULFILLED', value }),
  setTime: value => ({ type: 'SET_TIME', value })
}
