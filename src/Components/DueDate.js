import React from 'react'
import './style.css'

function DueDate (props) {
  const handleDueDate = key => props.onDueDate(key)

  return (
    <button className='due-date-btn' onClick={() => handleDueDate(props.id)}>Due-Date</button>
  )
}

export default DueDate
