import React, { Component } from 'react'
import { connect } from 'react-redux'


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
        <h2>This is the child component conected width Redux</h2>
        <section>
          <h3>Count: { count }</h3>
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