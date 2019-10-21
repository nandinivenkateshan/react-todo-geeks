import React from 'react'
import './style.css'

function CheckBox (props) {
  const handleCheckBox = key => props.onCheckBox(key)

  return (
    <input type='checkbox' onChange={() => handleCheckBox(props.id)} className='checkbox' />
  )
}

export default CheckBox
