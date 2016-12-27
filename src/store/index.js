import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import counter from '../reducers/counter'
import { 
  // counterEpic,
  firebaseEpic,
  firebaseDB
} from './epics'

const allEpics = combineEpics(
    // counterEpic,
    firebaseEpic,
    firebaseDB
  )

const epicMiddleware = createEpicMiddleware(allEpics)

const rootReducer = combineReducers({
  counter, 
  routing
})
 
export default createStore(rootReducer,
  applyMiddleware(epicMiddleware)
)