import React, { PropTypes  } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


const Root = ({history, routes, store})=> {
  return (
    <MuiThemeProvider>
      <Provider store={store} >
          <Router history={history} routes={routes} />
      </Provider>
    </MuiThemeProvider>
  )
}

Root.PropTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired,
}

export default Root