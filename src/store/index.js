import { createStore, combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import counter from '../ducks/counter'

const rootReducer = combineReducers({
  counter, 
  routing
})

export default createStore(rootReducer)