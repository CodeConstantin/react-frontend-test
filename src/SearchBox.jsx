import React from 'react'
import PropTypes from 'prop-types'

const SearchBox = (props) => (
  <form className="filter-input">
  	<label htmlFor="searchbox" className="accessibility">Search: Enter at least 3 letters from the start of a company name. Matching results will appear in a table below</label>
    <input type="text" name="searchbox" data-selector="searchfield" placeholder="company name" value={props.value} onChange={props.handleChange} />
  	<button className="filter-input__clear-button" type="button" value="x" onClick={props.clearButtonClicked}>X</button>
  </form>
)

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  clearButtonClicked: PropTypes.func.isRequired
}

export default SearchBox
