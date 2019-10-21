import React from 'react'
import './style.css'

function Delete (props) {
  const handleDelete = key => props.onDelete(key)
  return (
    <button className='delete-btn' onClick={() => handleDelete(props.id)}>Delete</button>
  )
}

export default Delete
