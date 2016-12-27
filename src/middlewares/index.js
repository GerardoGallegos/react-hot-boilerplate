import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { 
  firebaseEpic,
  firebaseDB
} from './epics'

const allEpics = combineEpics(
    firebaseEpic,
    firebaseDB
  )

export const epicMiddleware = createEpicMiddleware(allEpics)