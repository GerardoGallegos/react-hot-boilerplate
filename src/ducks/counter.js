const INCREMENT_COUNTER = 'App/Counter/INCREMENT_COUNTER'
const DECREMENT_COUNTER = 'App/Counter/DECREMENT_COUNTER'

const initialState = {
 count: 0
}

export default function counter(state = initialState, action) {
  switch (action.type) {
  case INCREMENT_COUNTER:
    return _increment(state)

  case DECREMENT_COUNTER:
    return _decrement(state)
  default:
    return state
  }
}

/*   INCREMENT_COUNTER
*****************************************************/

export function increment(data) {
  return {
    type : INCREMENT_COUNTER,
    // payload : { data }
  }
}


function _increment (state) {
  const STATE = Object.assign({}, state)
  STATE.count = state.count + 1
  return STATE
}


/*   DECREMENT_COUNTER
*****************************************************/

export function decrement(data) {
  return {
    type : DECREMENT_COUNTER,
    // payload : { data }
  }
}

function _decrement (state) {
  const STATE = Object.assign({}, state)
  STATE.count = state.count - 1
  return STATE
}


