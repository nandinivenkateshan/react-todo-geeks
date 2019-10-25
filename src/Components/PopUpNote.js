import React from 'react'
import './style.css'

function PopUpNote (props) {
  const handlePopUpNote = (event, id) => {
    props.onPopUpNote(event, id)
  }

  const handleCloseNote = () => props.onClose()

  return (
    props.show && (
      <div className='pop-up-note'>
        <textarea value={props.item.noteValue} onChange={(event) => handlePopUpNote(event, props.item.id)} className='textarea-note'>{props.item.noteValue}</textarea>
        <button className='save-btn' onClick={() => handleCloseNote()}>Save</button>
      </div>)
  )
}
export default PopUpNote
