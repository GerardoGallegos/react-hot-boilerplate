import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'


function counter(state = { count: 0 }, action) {
  switch (action.type) {
  case 'INCREMENT':
    return _increment(state)

  case 'DECREMENT':
    return _decrement(state)
  default:
    return state
  }
}

function _increment (state) {
  const STATE = Object.assign({}, state)
  STATE.count = state.count + 1
  return STATE
}

function _decrement (state) {
  const STATE = Object.assign({}, state)
  STATE.count = state.count - 1
  return STATE
}

const reducers = combineReducers({
  counter, 
  routing: routerReducer
})


export default createStore(reducers)