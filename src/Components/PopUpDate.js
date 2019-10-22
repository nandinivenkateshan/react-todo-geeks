import React from 'react'
import './style.css'

function PopUpDate (props) {
  const handleUpdateDate = (event, id) => props.onUpdateDate(event, id)
  const handleSaveDate = id => props.onSaveDate(id)
  const handleCloseDate = () => props.onCloseDate()
  
  const curDate = new Date()
  const curMonth = curDate.getMonth() >= 9 ? curDate.getMonth() + 1 : '0' + (curDate.getMonth() + 1)
  const curDay = curDate.getDate() >= 9 ? curDate.getDate() : '0' + curDate.getDate()
  const dateStr = curDay + '-' + curMonth + '-' + curDate.getFullYear()
  return (
    props.show && (
      <div className='pop-up-date'>
        <input
          type='date'
          min={dateStr}
          onChange={event => handleUpdateDate(event, props.id)}
        />
        <button className='save-btn' onClick={() => handleSaveDate(props.id)}>
          Save
        </button>
        <button className='close-btn' onClick={()=>handleCloseDate()}>Close</button>
      </div>
    )
  )
}

export default PopUpDate
