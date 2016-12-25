import React, { Component } from 'react'
import { connect } from 'react-redux'

import './styles.css'
 
export class ChildComponent extends Component {
  constructor(props) {
    super(props)

    const METHODS = [
      'clickIncrement',
      'clickDecrement'
    ]

    METHODS.forEach((method)=> {
      this[method] = this[method].bind(this)
    })

    this.state = {
      count: 0
    }
  }

  clickIncrement() {
    this.props.dispatch({
      type: 'INCREMENT'
    })
  }

  clickDecrement() {
    this.props.dispatch({
      type: 'DECREMENT'
    })
  }


  render() {
    const count = this.props.count
    return (
      <div>
        <h2 className="subtitle">This is the child component conected width Redux</h2>
        <section className="card">
          <h3 >Count: { count }</h3>
          <button onClick={this.clickIncrement}>+</button>
          <button onClick={this.clickDecrement}>-</button> 
        </section>
      </div>
    )
  }
}

export default connect((state, props) => {
  return {
      count: state.counter.count
    }
})(ChildComponent)