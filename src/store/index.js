import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import {epicMiddleware} from '../middlewares/'
import counter from '../reducers/counter'

const rootReducer = combineReducers({
  counter, 
  routing
})
 
export default createStore(rootReducer,
  applyMiddleware(epicMiddleware)
)