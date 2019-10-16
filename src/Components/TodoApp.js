import React, { Component } from 'react'
import './style.css'

class AddTodo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      input: '',
      items: []
    }
  }

  handleInput (event) {
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit (event) {
    const array = this.state.items
    const item = {
      id: (array.length > 0) ? array[array.length - 1].id + 1 : 1,
      text: this.state.input,
      complete: false
    }
    this.setState(prevState => {
      return {
        items: prevState.items.concat(item)
      }
    })
    this.setState({ input: '' })
    event.preventDefault()
  }

  handleDelete (key) {
    const item = this.state.items.filter(item => item.id !== key)
    this.setState({ items: item })
  }

  handleCheckBox (key) {
    const items = this.state.items.map(item => {
      if (item.id === key) {
        item.complete = !item.complete
        return item
      }
      return item
    }
    )
    this.setState({ items: items })
  }

  handleUpdate (key) {
    console.log('fgnbkj')
  }

  render () {
    return (
      <div>
        <header className='header'>
          <h1>Todo</h1>
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <input type='text' className='input-box' placeholder='Enter a Task' onChange={(event) => this.handleInput(event)} value={this.state.input} />
            <button type='submit' className='add-btn'>Add</button>
          </form>
        </header>
        <main>
          <Todos
            todos={this.state.items} onDelete={(key) => this.handleDelete(key)}
            onCheckBox={(key) => this.handleCheckBox(key)} onUpdate={(key) => this.handleUpdate(key)}
          />
        </main>
      </div>

    )
  }
}

class Todos extends Component {
  handleDelete (key) {
    this.props.onDelete(key)
  }

  handleCheckBox (key) {
    this.props.onCheckBox(key)
  }

  handleUpdate (key) {
    this.props.onUpdate(key)
  }

  render () {
    const todos = this.props.todos
    const list = todos.map(item => {
      const checkBoxClass = (item.complete) ? 'strike-through' : 'text-area'
      console.log(checkBoxClass)
      return <li key={item.id} className='todo-list'>
        <input type='checkbox' onChange={() => this.handleCheckBox(item.id)} />
        <textarea value={item.text} onChange={() => this.handleUpdate(item.id)} className={checkBoxClass}>{item.text}</textarea>
        <button className='delete-btn' onClick={() => this.handleDelete(item.id)}>Delete</button>
      </li>
    })
    return (
      <ul>{list}</ul>
    )
  }
}

class TodoApp extends Component {
  render () {
    return (
      <div>
        <AddTodo />
      </div>

    )
  }
}

export default TodoApp
