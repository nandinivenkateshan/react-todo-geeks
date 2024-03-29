import React from 'react'
import './style.css'

function Note (props) {
  const handleNote = key => props.onNote(key)

  return (
    <button className='note-btn' onClick={() => handleNote(props.id)}>Note</button>
  )
}

export default Note
