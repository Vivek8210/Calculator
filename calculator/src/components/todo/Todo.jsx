

import React from 'react'

import TodoInput from './TodoInput'
import { useSelector } from 'react-redux'
import TodoItems from './TodoItems'

const Todo = () => {
  const {todos}=useSelector((state)=>state.todos)
  return (
    <>
    <div>todos</div>
<TodoInput/>
<br />
{todos.map((todo)=>(
    <TodoItems  key={todo.id} {...todo}/>
))}

    </>
  )
}

export default Todo