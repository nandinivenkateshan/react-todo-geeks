import React, { useState } from 'react'
import './style.css'

function PopUpNote (props) {
  const [val, setVal] = useState(true)
  const handlePopUpNote = (event, id) => {
    props.onPopUpNote(event, id)
  }
  const handleCloseNote = () => setVal(false)

  return (
    val && (
      <div className='pop-up-note'>
        <textarea value={props.item.noteValue} onChange={(event) => handlePopUpNote(event, props.item.id)} className='textarea-note'>{props.item.noteValue}</textarea>
        <button className='save-btn'>Save</button>
        <button className='close-btn' onClick={() => handleCloseNote()}>Close</button>
      </div>)
  )
}
export default PopUpNote
