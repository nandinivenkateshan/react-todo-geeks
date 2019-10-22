import React from 'react'
import Filter from './Filter'
import './style.css'

function AddTodo (props) {
  const handleInput = event => props.onInput(event)

  const handleSubmit = event => props.onSubmit(event)

  const handleFilterTodo = (filter) => props.onUpdatedFilter(filter)

  return (
    <header className='header'>
      <h1>Todos</h1>
      <form onSubmit={event => handleSubmit(event)}>
        <input
          type='text' className='input-box' placeholder='Enter a Task'
          value={props.input} onChange={event => handleInput(event)}
        />
        <button className='add-btn'>Add</button>
        <Filter onUpdatedFilter={(filter) => handleFilterTodo(filter)} />
      </form>
    </header>
  )
}

export default AddTodo
