import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap in material-ui
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

import routes from './routes'
import store from './store/'
import Root from './containers/Root'

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render((
  <Root history={history}
        routes={routes}
        store={store}
  />
), document.getElementById('root'))