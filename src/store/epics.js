import * as types from '../constants/ActionTypes'
// import * as Rx from 'rxjs'
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/observable/fromPromise";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/combineLatest";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import Ref from '../firebase'
import store from './index'

/****************************************************************************
 * 
 *  funct(action$: Observable<Action>, store: Store): Observable<Action>;
 * 
 * **************************************************************************/

export const firebaseEpic = (action$) => 
  action$.ofType(types.FIREBASE_VALUE$)
    .map(action => ({
      type: types.FIREBASE_VALUE,
      payload: action.payload
    }))


export const firebaseDB = (action$) => 
  action$.ofType(types.FIREBASE_SET$)
    .debounceTime(200)
    .switchMap((action) => 
      Observable
        .fromPromise(Ref.set(action.payload.info))
        .map(res => ({
          type: types.SET_COUNTER,
          info: res
        }))
    ) 


Observable.fromEvent(Ref, 'value')
  .subscribe(snap =>
    store.dispatch({
      type: types.FIREBASE_VALUE$,
      payload: {
        info: parseInt(snap.val())
      }
    })
  )