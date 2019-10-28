import React from 'react'

function CheckBox (props) {
  const handleCheckBox = key => props.onCheckBox(key)

  return (
    <input type='checkbox' onChange={() => handleCheckBox(props.id)} />
  )
}

export default CheckBox
