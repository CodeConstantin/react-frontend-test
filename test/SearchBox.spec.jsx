import React from 'react'
import { mount, shallow } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'

import SearchBox from '../src/SearchBox'

describe( 'SearchBox', () => {
  it('Renders the value which is set by the props', () => {
    const wrapper = shallow(<SearchBox value="test"/>)
    expect(wrapper.find('input').props().value).to.equal('test')
  })

  it('updates the input value state when user enters characters in to field', () => {
    const spy = sinon.spy()
    const wrapper = shallow(<SearchBox handleChange={spy} value="" />)
    const event = {
      target: { value: 'ibm' } 
    }
    wrapper.find('input').simulate('change', event)
    expect(spy.calledWith(event)).to.equal(true);
  })

  it('calls a click handler when the clear button is clicked', () => {
    const onChangeStub = sinon.stub()
    const component = mount(<SearchBox clearButtonClicked={onChangeStub} value="" />)
    component.find('button').simulate('click')
    expect(onChangeStub.called).to.equal(true)
  })
})