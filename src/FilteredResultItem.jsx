import React from 'react'
import PropTypes from 'prop-types'

const FilteredResultItem = (props) => (
  <tr>
    <td>
      <p className='company-name'>{props.name}</p>
      <p>{props.description}</p>
    </td>
    <td>
      {props.isListedEntity &&
        <p>Listed Entity</p>
      }
      {props.isPEVCHouse &&
        <p>PEVC House</p>
      }
    </td>
    <td>
      {props.geography.state &&
        <span>{props.geography.state}, </span>
      }
      {props.geography.country}
    </td>
  </tr>
)

FilteredResultItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isListedEntity: PropTypes.bool,
  isPEVCHouse: PropTypes.bool,
  geography: PropTypes.shape({
    state: PropTypes.string,
    country: PropTypes.string.isRequired
  }).isRequired
}

export default FilteredResultItem
