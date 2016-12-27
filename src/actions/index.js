import * as types from '../constants/ActionTypes'

export const setFirebaseAsync = (info) => ({
  type : types.FIREBASE_SET$,
  payload: { info }
})

export const setCounter = (info) => ({
  type : types.SET_COUNTER,
  payload: { info }
})


