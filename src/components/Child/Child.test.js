import React from 'react'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import store from '../../store'

// components
import ChildComponent from './index'


describe('<ChildComponent @Conected />', ()=> {
    const wrapper = mount( // enzyme
        <MuiThemeProvider>
            <Provider store={store}>
            <ChildComponent />
            </Provider>
        </MuiThemeProvider>
      )

    it('Should render the component', ()=> {
        expect(wrapper).to.exist
    })

    it('Should have a 2 FlatButton elements', ()=> {
        expect(wrapper.find('FlatButton')).to.have.length(2)
    })

    it('Should have a 1 input elements', ()=> {
        expect(wrapper.find('input')).to.have.length(1)
    })

    it('Should have a 1 Card Component', ()=> {
        expect(wrapper.find('Card')).to.have.length(1)
    })

    it('Should have a 1 RaisedButton Components', ()=> {
        expect(wrapper.find('RaisedButton')).to.have.length(1)
    })
})
