import React from 'react'
import TodoItem from './TodoItem'

function Todo (props) {
  
  const handleDelete = key => props.onDelete(key)

  const handleCheckBox = key => props.onCheckBox(key)

  const handleUpdate = (key, event) => props.onUpdate(key, event)

  const handleNote = (key) => props.onNote(key)

  const handleDueDate = key => props.onDueDate(key)

  return (
    <ul>
      <TodoItem
        props={props} onDelete={key => handleDelete(key)}
        onCheckBox={key => handleCheckBox(key)}
        onUpdate={(key, event) => handleUpdate(key, event)}
        onNote={key => handleNote(key)}
        onDueDate={key => handleDueDate(key)}
      />
    </ul>
  )
}

export default Todo
