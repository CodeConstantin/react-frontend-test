import React from 'react'

import data from './data/company.js'
import SearchBox from './SearchBox'
import FilteredResults from './FilteredResults'

class FilteredSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      filterList: [],
      filterListAllResults: 0,
      searchLimit: 5
    };
    this.handleChange = this.handleChange.bind(this)
    this.clearButtonClicked = this.clearButtonClicked.bind(this)
    this.showMore = this.showMore.bind(this)
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
      filterList: [],
      filterListAllResults: 0,
      searchLimit: 5
    })
  }

  showMore() {
    const searchStr = this.state.searchTerm
    const searchLimit = this.state.searchLimit + 5
    this.getFilterResults(searchStr, searchLimit)
    this.setState({searchLimit})
  }

  getFilterResults(str, limit = 5) {
    const filterList = data.filter(item => item.name.toLowerCase().includes(str.toLowerCase()))
    const filterListAllResults = filterList.length
    const limitFilterList = filterList.slice(0, limit)
    this.setState({filterList: limitFilterList, filterListAllResults})
  }

  render() {
    const buttonStyle = {
      marginTop: '20px'
    }
    return (
      <div>
        <SearchBox value={this.state.searchTerm} handleChange={this.handleChange} clearButtonClicked={this.clearButtonClicked} />
        <FilteredResults data={this.state.filterList} />
        {this.state.filterListAllResults > 5 && this.state.filterListAllResults > this.state.searchLimit ? 
          <button onClick={this.showMore} data-selector="showMore" style={buttonStyle}>Show More</button> : 
          null}
      </div>
    )
  }
}

export default FilteredSearch
