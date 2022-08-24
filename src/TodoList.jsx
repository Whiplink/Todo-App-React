import React, { useContext } from 'react'
import Todo from './Todo'
import { TodoContext, activeFilterContext } from './App'

const TodoList = () => {
  const todos = useContext(TodoContext)
  const {activeFilter} = useContext(activeFilterContext)

  return (
    <div>
      {todos.filter(todo => {
        if(activeFilter == 'all') return true
        if(activeFilter == 'active') return !todo.isComplete
        if(activeFilter == 'completed') return todo.isComplete
      }).map((todo, index) => (
       <Todo key={index} name={todo.name} isComplete={todo.isComplete} id={todo.id}/>
      ))}
    </div>
  )
}

export default TodoList