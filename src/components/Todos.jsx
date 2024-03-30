import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos  = useSelector((state) => state.todos)
    const dispatch=useDispatch()
  return (
      <div>
          {todos.map((el) => <div key={el.id}>
              {el.text}
              <button onClick={()=>{dispatch(removeTodo(el.id))}}> delete</button>
          </div>)}
    </div>
  )
}

export default Todos