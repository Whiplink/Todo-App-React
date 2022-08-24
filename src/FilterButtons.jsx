import React, { useContext } from 'react'
import './FilterButtons.css'
import { activeFilterContext } from './App'

const FilterButtons = () => {
  const {activeFilter, setActiveFilter} = useContext(activeFilterContext)


  return (
    <div className='filter-buttons'>
      <p className={activeFilter === 'all'? 'active': ''}
      onClick={() => {setActiveFilter('all')}}>All</p>
      <p className={activeFilter === 'active'? 'active': ''}
      onClick={() => {setActiveFilter('active')}}>Active</p>
      <p className={activeFilter === 'completed'? 'active': ''}
      onClick={() => {setActiveFilter('completed')}}>Completed</p>
    </div>
  )
}

export default FilterButtons