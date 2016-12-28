import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card'

import {
  AppBar,
  FlatButton,
  RaisedButton,
  TextField
} from 'material-ui'


// actions
import {
  setFirebaseAsync
} from '../../actions'


import './styles.css'

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
    const input = this.refs.textField.input.value
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
    const input = this.refs.textField.input.value

    
    if(e.keyCode === 13 && input != '') {
      this.updateFB(input)
    }
  }


  render() {
    const count = this.props.count

    return (
      <Card
        zDepth={3}
        style={{width: '800px', height: '400px', margin: '20px auto'}}
        className="animate"
      >
        <AppBar
          style={{backgroundColor: '#2196f3'}}
          title="Counter"  
        />
        <CardTitle title={count} subtitle="Contador desde Firebase + RxJs" />
        
        <CardText>
          Contador Redux + Rxjs + Firebase + Matarial-ui
        </CardText>

         <CardActions>
          <TextField
            ref="textField"
            onKeyDown={this.submit} 
            floatingLabelText="Set counter"
          /><br />
          <FlatButton label="+" onClick={this.clickIncrement}/>
          <FlatButton label="-" onClick={this.clickDecrement}/>
          <RaisedButton backgroundColor="#6bc519" labelColor="#FFF" label="Update" onClick={this.clickSet} />
        </CardActions>
      </Card>
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