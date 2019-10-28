import React from 'react'
import './dueDate.css'

function DueDate (props) {
  const handleDueDate = key => props.onDueDate(key)

  return (
    <button className='due-date-btn' onClick={() => handleDueDate(props.item.id)}>Due-Date</button>
  )
}

export default DueDate
