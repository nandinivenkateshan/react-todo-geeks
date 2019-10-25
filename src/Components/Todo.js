import React from 'react'
import './style.css'
import Delete from './Delete'
import CheckBox from './CheckBox'
import TextArea from './TextArea'
import Note from './Note'
import DueDate from './DueDate'

function Todo (props) {
  const handleDelete = key => props.onDelete(key)

  const handleCheckBox = key => props.onCheckBox(key)

  const handleUpdate = (key, event) => props.onUpdate(key, event)

  const handleNote = (key) => props.onNote(key)

  const handleDueDate = key => props.onDueDate(key)

  const list = props.items.map(item => {
    const checkBoxClass = (item.complete) ? 'strike-through' : 'text-area'
    return (
      <li key={item.id} className='todo-list'>
        <CheckBox id={item.id} onCheckBox={key => handleCheckBox(key)} />
        <div className='show-input-date'>
          <TextArea item={item} className={checkBoxClass} onUpdate={(key, event) => handleUpdate(key, event)} />
          {item.saveDate && <label>{item.updateDate}</label>}
        </div>
        <Delete id={item.id} onDelete={key => handleDelete(key)} />
        <Note id={item.id} onNote={key => handleNote(key)} />
        <DueDate item={item} onDueDate={key => handleDueDate(key)} />
      </li>
    )
  })

  return (
    <ul>{list}</ul>
  )
}

export default Todo
