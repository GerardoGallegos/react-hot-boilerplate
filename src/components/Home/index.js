import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'


export class HomeComponent extends Component {
  render() {
    const count = this.props.count
    return (
        <div>
          <h1>React Hot Boilerplate Works!</h1>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/child">Child Lazy</Link></li>
          
          {
            this.props.children ||
            <div>No children component, count: { count }</div>
          }
        </div>
    )
  }
}

export default connect((state, props) => {
  return {
      count: state.counter.count
    }
})(HomeComponent)