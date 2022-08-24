import React, { useState, createContext } from 'react'
import './App.css'
import FilterButtons from './FilterButtons'
import sun from './images/icon-sun.svg'
import moon from './images/icon-moon.svg'
import TodoContainer from './TodoContainer'

export const TodoContext = createContext()
export const setTodoContext = createContext()

export const activeFilterContext = createContext()

const App = () => {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightMode, setLightMode] = useState(false)
  

  const handleSubmit = e => {
    e.preventDefault()
    const obj = {
      id: Math.floor(Math.random()*1e5),
      name: input,
      isComplete: false
    }
    setTodos([...todos, obj])
    setInput('')
  }

  return (
    <div className={`App ${lightMode? 'lightMode': ''}`}>
      <TodoContext.Provider value={todos}>
        <setTodoContext.Provider value={setTodos}>
          <activeFilterContext.Provider value={{activeFilter, setActiveFilter}}>
            <div className="container">
              <div className='header'>
                <span>TODO</span>
                <img className='toggle' onClick={() => {setLightMode(x => !x)}} src={lightMode? moon: sun} alt="" />
              </div>
              <form className="input-container" onSubmit={handleSubmit}>
                <div className="check-box"></div>
                <input value={input} onChange={e => {setInput(e.target.value)}} id="todo__input" type="text" placeholder='Create a new todo...'/>
              </form>
              <TodoContainer/>
              <div className='mobile-filter'>
                <FilterButtons/>
              </div>
            </div>
            <div className='bg'></div>
          </activeFilterContext.Provider>
        </setTodoContext.Provider>
      </TodoContext.Provider>
    </div>
  )
}

export default App