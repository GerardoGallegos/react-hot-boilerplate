import React from 'react'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'
import { Provider } from 'react-redux'
import store from '../../store/store'
import ChildComponent from './index'



describe('<ChildComponent @Conected />', ()=> {
    const wrapper = mount( // enzyme
        <Provider store={store}>
          <ChildComponent />
        </Provider>
      )

    it('Should render the component', ()=>{
        expect(wrapper).to.exist
    })

    it('Should have a one div element', ()=>{
        expect(wrapper.find('div')).to.have.length(1)
    })

    it('Should have a 2 buttons elements', ()=> {
        expect(wrapper.find('button')).to.have.length(2)
    })

    it('Testing click buttons', ()=> {
        expect(wrapper.props().store.getState().counter.count).to.equal(0)

        // click in increment button
        wrapper.find('button')
            .first()
                .simulate('click')
                .simulate('click')
                .simulate('click')
                .simulate('click')
          expect(wrapper.props().store.getState().counter.count).to.equal(4)

        // click in decrement button
        wrapper.find('button')
          .last()
                .simulate('click')
                .simulate('click')
          expect(wrapper.props().store.getState().counter.count).to.equal(2)
      })
})
