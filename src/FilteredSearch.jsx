import React from 'react'

import data from './data/company.js'
import SearchBox from './SearchBox'
import FilteredResults from './FilteredResults'

class FilteredSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      filterList: []
    };
    this.handleChange = this.handleChange.bind(this)
    this.clearButtonClicked = this.clearButtonClicked.bind(this)
  }

  handleChange(event) {
    const { value } = event.target

    this.setState({searchTerm: value})
    if (value.length > 2) {
      this.getFilterResults(value)
    } else {
      this.clearFilterResults()
    }
  }

  clearButtonClicked() {
    this.setState({searchTerm: ''})
    this.clearFilterResults()
  }

  clearFilterResults() {
    this.setState({
      filterList: []
    })
  }

  getFilterResults(str) {
    const filterList = data.filter(item => item.name.toLowerCase().includes(str.toLowerCase()))
    this.setState({filterList})
  }

  render() {
    return (
      <div>
        <SearchBox value={this.state.searchTerm} handleChange={this.handleChange} clearButtonClicked={this.clearButtonClicked} />
        <FilteredResults data={this.state.filterList} />
      </div>
    );
  }
}

export default FilteredSearch
