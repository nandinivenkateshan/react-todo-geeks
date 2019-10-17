import React, { useState } from 'react'
import AddTodo from './AddTodo'
import Todo from './Todo'
import './style.css'

function TodoApp () {
  const [input, setInput] = useState('')
  const [items, setItem] = useState([])

  const handleInput = event => setInput(event.target.value)

  const handleSubmit = event => {
    event.preventDefault()
    const item = {
      id: (items.length > 0) ? items[items.length - 1].id + 1 : 1,
      text: input,
      complete: false
    }
    const str = item.text.trim()
    if (str === '') alert('Enter the values')
    else setItem(items.concat(item))
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

  return (
    <div>
      <AddTodo input={input} onInput={event => handleInput(event)} onSubmit={event => handleSubmit(event)} />
      <Todo
        items={items} onDelete={(key) => handleDelete(key)}
        onCheckBox={(key) => handleCheckBox(key)} onUpdate={(key, event) => handleUpdate(key, event)}
      />
    </div>
  )
}

export default TodoApp
