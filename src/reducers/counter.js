import * as types from '../constants/ActionTypes'

const initialState = {
 count: 0
}

export default function counter(state = initialState, action) {
  switch (action.type) { 

  case types.FIREBASE_VALUE:
    const STATE = Object.assign({}, state)
      STATE.count = action.payload.info
    return STATE

  default:
    return state
  }
}