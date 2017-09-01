import React from 'react'
import { arrayOf, shape } from 'prop-types'

import FilteredResultItem from './FilteredResultItem'

const FilteredResults = (props) => (
  <div>
    {props.data.length>0 &&
    <table className="filteredList">
      <tbody>
        <tr>
          <th>Name</th>
          <th width="200px">Type</th>
          <th width="200px">Headquarter</th>
        </tr>
        {props.data.map((listItem) =>
          <FilteredResultItem key={listItem.id} {...listItem}  />
        )}
      </tbody>
    </table>
    }
  </div>
)

FilteredResults.propTypes = {
  data: arrayOf(shape(FilteredResultItem.propTypes)).isRequired
}

export default FilteredResults
