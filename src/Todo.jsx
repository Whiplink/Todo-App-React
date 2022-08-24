import React, { useContext } from 'react'
import cross from './images/icon-cross.svg'
import './Todo.css'
import { setTodoContext } from './App'
import check from './images/icon-check.svg'

const Todo = ({name, isComplete, id}) => {
  const setTodo = useContext(setTodoContext)
 
  const removeTodo = () => {
    setTodo(todos => todos.filter(x => x.id !== id))
  }

  const finishTodo = () => {
    setTodo(todos => todos.map(({isComplete, ...todo}) => ({
      ...todo,
      isComplete: todo.id === id? !isComplete: isComplete
    })))
  }

  return (
    <div className={`todo ${isComplete? 'done': ''}`}>
      <div onClick={finishTodo} className='check-box'>
        {isComplete && <img src={check} alt="" />}
      </div>
      <p onClick={finishTodo} className='todo-name'>{name}</p>
      <img className="cross" onClick={removeTodo} src={cross} alt="" />
    </div>
  )
}

export default Todo