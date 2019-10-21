import React, { useState } from 'react'
import AddTodo from './AddTodo'
import Todo from './Todo'
import PopUpNote from './PopUpNote'
import PopUpDate from './PopUpDate'
import './style.css'

function TodoApp () {
  const [input, setInput] = useState('')
  const [items, setItem] = useState([])

  const handleInput = event => setInput(event.target.value)

  const handleSubmit = event => {
    event.preventDefault()
    const item = {
      id: Date.now(),
      text: input,
      complete: false,
      note: false,
      noteValue: '',
      dueDate: false,
      updateDate: '',
      saveDate: false
    }
    const str = item.text.trim()
    if (str === '') alert('Enter the values')
    else setItem([item, ...items])
    setInput('')
  }

  const handleDelete = key => {
    const item = items.filter(item => item.id !== key)
    setItem(item)
  }

  const handleCheckBox = key => {
    const item = items.map(item => {
      if (item.id === key) {
        item.complete = !item.complete
        return item
      }
      return item
    })
    setItem(item)
  }

  const handleUpdate = (key, event) => {
    const item = items.map(item => {
      if (item.id === key) {
        item.text = event.target.value
        return item
      }
      return item
    })
    setItem(item)
  }

  const handleNote = key => {
    const newItems = items.map(item => {
      if (item.id === key) {
        item.note = true
        return item
      } else {
        item.note = false
        return item
      }
    })
    setItem(newItems)
  }

  const handlePopUpNote = (event, id) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        item.noteValue = event.target.value
        return item
      }
      return item
    })
    setItem(newItems)
  }

  const handleDueDate = key => {
    const newItems = items.map(item => {
      if (item.id === key) {
        item.dueDate = true
        return item
      } else {
        item.dueDate = false
        return item
      }
    })
    setItem(newItems)
  }

  const handleUpdateDate = (event, key) => {
    const newItems = items.map(item => {
      if (item.id === key) {
        item.updateDate = event.target.value.split('-').reverse().join('-')
        return item
      }
      return item
    })
    setItem(newItems)
  }
  const handleSaveDate = id => {
    const newItems = items.map(item => {
      if (item.id === id) {
        item.saveDate = true
        return item
      } else {
        item.saveDate = false
        return item
      }
    })
    setItem(newItems)
  }

  return (
    <div>
      <AddTodo input={input} onInput={event => handleInput(event)} onSubmit={event => handleSubmit(event)} />
      <Todo
        items={items} onDelete={(key) => handleDelete(key)}
        onCheckBox={(key) => handleCheckBox(key)} onUpdate={(key, event) => handleUpdate(key, event)}
        onNote={key => handleNote(key)} onDueDate={key => handleDueDate(key)}
      />
      {items.map(item => {
        return (item.note && <PopUpNote key={item.id} item={item} onPopUpNote={(event, id) => handlePopUpNote(event, id)} />)
      })}
      {items.map(item => {
        return (item.dueDate &&
          <PopUpDate
            key={item.id} id={item.id} onUpdateDate={(event, id) => handleUpdateDate(event, id)}
            date={item.updateDate} onSaveDate={id => handleSaveDate(id)}
          />)
      })}
    </div>
  )
}

export default TodoApp
