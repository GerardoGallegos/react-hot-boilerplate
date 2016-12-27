import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

// actions
import {
  setFirebaseAsync
} from '../../actions'



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
      'clickDecrement',
      'clickSet',
      'updateFB',
      'submit'
    ]

    METHODS.forEach((method)=> {
      this[method] = this[method].bind(this)
    })

  }

  clickIncrement() {
    this.updateFB(this.props.count + 1)
  }

  clickDecrement() {
    this.updateFB(this.props.count + -1)
  }

  clickSet() {
    const input = this.refs.input.value
    this.updateFB(input)
  }

  updateFB(info) {
    const info_num = parseInt(info)
    if(info != '') {
      if(isNaN(info_num)) {
        throw `A number is expected in info, not ${typeof info}`
      } else {
        this.props.setFirebaseAsync(info_num)
      }
    }
  }

  submit(e) {
    const input = this.refs.input.value
    if(e.keyCode === 13 && input != '') {
      this.updateFB(input)
    }
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
          <input ref="input" onKeyDown={this.submit} />
          <Button onClick={this.clickSet}>SET</Button> 
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
  setFirebaseAsync
})(ChildComponent)