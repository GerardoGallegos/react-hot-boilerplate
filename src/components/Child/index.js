import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
// actions
import {
  increment,
  decrement
} from '../../ducks/counter'



const Button = styled.button`
background-color: orange;
cursor: pointer;
transition: all .3s;
  &:hover {
    transform: scale(1.5);
    background-color: red;
  }
`
const Title = styled.h3`
color: #00bcd4;
cursor: pointer;
transition: all .3s;
  &:hover {
    transform: scale(1.01);
  }
`

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
          <Title> Count: { count } </Title>
          <Button onClick={this.clickIncrement}>+</Button>
          <Button onClick={this.clickDecrement}>-</Button> 
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