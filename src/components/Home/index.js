import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import {
  AppBar,
  FlatButton,
  IconMenu,
  MenuItem,
  IconButton
} from 'material-ui'

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


class Menu extends Component {
  constructor(props) {
    super(props)
  }

  goChild(route) {
    browserHistory.push('/child')
  }

  goHome(route) {
    browserHistory.push('/')
  }

  render() {
    return (
    <div>
      <IconMenu
        iconButtonElement={
          <IconButton >
            <MoreVertIcon color="#FFF"/>
          </IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Home"  onClick={this.goHome}/>
        <MenuItem primaryText="Child" onClick={this.goChild} />
      </IconMenu>
    </div>
    )
  }
}


export class HomeComponent extends Component {
  render() {
    const count = this.props.count
    return (
        <div>
          <AppBar
            style={{backgroundColor: '#343b34'}}
            title="~React Hot Boilerplate"
            iconElementRight={<Menu />}
          />
          { this.props.children }
        </div>
    )
  }
}

export default connect((state, props) => {
  return {
      count: state.counter.count
    }
})(HomeComponent)