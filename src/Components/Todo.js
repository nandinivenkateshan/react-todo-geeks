import React from 'react'
import './style.css'

function Todo (props) {
  const handleDelete = key => props.onDelete(key)

  const handleCheckBox = key => {
    props.onCheckBox(key)
  }

  const handleUpdate = (key, event) => props.onUpdate(key, event)

  const list = props.items.map(item => {
    const checkBoxClass = (item.complete) ? 'strike-through' : 'text-area'
    return <li key={item.id} className='todo-list'>
      <input type='checkbox' onChange={() => handleCheckBox(item.id)} className='checkbox' />
      <textarea
        name='textarea' value={item.text}
        onChange={(event) => handleUpdate(item.id, event)}
        className={checkBoxClass}
      >{item.text}
      </textarea>
      <button className='delete-btn' onClick={() => handleDelete(item.id)}>Delete</button>
    </li>
  })

  return (
    <main>
      <ul>{list}</ul>
    </main>
  )
}

export default Todo
