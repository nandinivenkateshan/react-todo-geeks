import React from 'react'
import './style.css'

function AddTodo (props) {
  const handleInput = event => props.onInput(event)

  const handleSubmit = event => props.onSubmit(event)

  return (
    <header className='header'>
      <h1>Todos</h1>
      <form onSubmit={event => handleSubmit(event)}>
        <input
          type='text' className='input-box' placeholder='Enter a Task'
          value={props.input} onChange={event => handleInput(event)}
        />
        <button className='add-btn'>Add</button>
      </form>
    </header>
  )
}

export default AddTodo
