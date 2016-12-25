import React, { Component } from 'react'
import { connect } from 'react-redux'

// actions
import {
  increment,
  decrement
} from '../../ducks/counter'

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
    this.props.increment()
  }

  clickDecrement() {
    this.props.decrement()
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

const mapStateProps = (state, props) => {
  return {
      count: state.counter.count
    }
}

export default connect(mapStateProps, {
  increment,
  decrement
})(ChildComponent)