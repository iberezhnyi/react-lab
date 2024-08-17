import PropTypes from 'prop-types'
import css from './Filter.module.css'

const Filter = ({ value, searchUser }) => {
  console.log('Filter :>>')
  return (
    <label>
      <p className={css['filter-text']}>Find contacts by name</p>
      <input
        className={css['filter-input']}
        onChange={searchUser}
        value={value}
        type="text"
      />
    </label>
  )
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  searchUser: PropTypes.func.isRequired,
}

export default Filter
