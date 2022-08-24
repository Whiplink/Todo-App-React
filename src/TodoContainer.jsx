import React, { useContext } from 'react'
import TodoList from './TodoList'
import './TodoContainer.css'
import { TodoContext, setTodoContext } from './App'
import FilterButtons from './FilterButtons'

const TodoContainer = () => {
  const todos = useContext(TodoContext)
  const setTodos = useContext(setTodoContext)

  const clear = () => {
    setTodos(todos => todos.filter(todo => todo.isComplete === false))
  }

  return (
    <div className="todo-container">
      <TodoList />
      <div className='items-left'>
        <p>{todos.length} item{todos.length > 1 && 's'} left</p>
        <div className="desktop-filter">
          <FilterButtons/>
        </div>
        <p className='clear'onClick={clear}>Clear Completed</p>
      </div>
    </div>
  )
}

export default TodoContainer
