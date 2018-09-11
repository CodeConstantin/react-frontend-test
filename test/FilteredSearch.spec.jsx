import React from 'react'
import { mount, shallow } from 'enzyme'
import { expect } from 'chai'

import SearchBox from '../src/SearchBox'
import FilteredResults from '../src/FilteredResults'
import FilteredResultItem from '../src/FilteredResultItem'
import FilteredSearch from '../index'

describe('App', () => {
  const component = mount(<FilteredSearch />)

  describe('When the app initialises', () => {
    it('should render', () => {
      expect(component.find(FilteredSearch).length).to.be.equal(1)
    })

    it('should have one "search" component', () => {
      expect(component.find(SearchBox).length).to.be.equal(1)
    })

    it('should have one "results" component', () => {
      expect(component.find(FilteredResults).length).to.be.equal(1)
    })

    it('should not display any results', () => {
      expect(component.find(FilteredResultItem).length).to.be.equal(0)
    })
  })

  describe('When typing in the search box', () => {
    describe('with less than 3 characters', () => {
      it('should NOT display any results', () => {
        const event = {target: { value: 'so' }}
        component.instance().handleChange(event)
        expect(component.find(FilteredResultItem).length).to.be.equal(0)
      })
    })

    describe('with 3 characters or more', () => {
      beforeEach(() => {
        const event = {target: {value: 'son'}};
        component.instance().handleChange(event)
      })
      it('should filter the companies by search term', () => {
          expect(component.state('filterList').length).to.be.equal(5)
      })
    })

  })
})

describe( 'Search box', () => {
  it('renders a field', () => {
    const wrapper = shallow(<FilteredSearch />)
    expect(wrapper.find(SearchBox)).to.have.length(1)
  })

  it('initialises with an empty field', () => {
    const wrapper = shallow(<FilteredSearch />)
    expect(wrapper.state('searchTerm')).to.be.equal('')
  })

  it('updates the input value state when user enters characters in to field', () => {
    const wrapper = mount(<FilteredSearch />)
    wrapper.find('[data-selector="searchfield"]').simulate('change', { target: { value: 'ibm' } })
    expect(wrapper.state('searchTerm')).to.be.equal('ibm')
  })
})

describe('Show More Button', () => {
  it('it DOES NOT render when there is no search term', () => {
    const wrapper = mount(<FilteredSearch />)
    wrapper.find('[data-selector="searchfield"]').simulate('change', { target: { value: '' } })
    expect(wrapper.find('[data-selector="showMore"]')).to.have.length(0)
  })

  it('it RENDERS when there are more than 5 search results', () => {
    const wrapper = mount(<FilteredSearch />)
    wrapper.find('[data-selector="searchfield"]').simulate('change', { target: { value: 'son' } })
    expect(wrapper.find('[data-selector="showMore"]')).to.have.length(1)
  })

  it('it DOES NOT render if there are less than 5 search results', () => {
    const wrapper = mount(<FilteredSearch />)
    wrapper.find('[data-selector="searchfield"]').simulate('change', { target: { value: 'mob' } })
    expect(wrapper.find('[data-selector="showMore"]')).to.have.length(0)
  })

  it('it increases by 5 the number of search results on click', () => {
    const wrapper = mount(<FilteredSearch />)
    wrapper.find('[data-selector="searchfield"]').simulate('change', { target: { value: 'son' } })
    wrapper.find('[data-selector="showMore"]').simulate('click')
    expect(wrapper.state('filterList')).to.have.length(10)
  })

  it('it DOES NOT render if all the results were shown on the page', () => {
    const wrapper = mount(<FilteredSearch />)
    wrapper.find('[data-selector="searchfield"]').simulate('change', { target: { value: 'son' } })
    wrapper.find('[data-selector="showMore"]').simulate('click')
    wrapper.find('[data-selector="showMore"]').simulate('click')
    expect(wrapper.find('[data-selector="showMore"]')).to.have.length(0)
  })

})
