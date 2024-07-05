import { useState } from 'react'
import React, {Fragement} from 'react'
import './App.css'

let id = 1;

function App() {
  const [todos, setTodos] = useState([{
    id: id,
    title: "go to gym",
    description: "go to gym today"
  },{
    id: id++,
    title: "do DSA",
    description: "complete arrays"
  }],{
    id: id++,
    title: "go to class",
    description: "study micro processor"
  })

  function addTodo(){
    setTodos([...todos,{ //spread operator: spreads all the existing and adds the 4th todo
      id: id++,
      title: Math.random(),
      description: Math.random()
    }])
  }


  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>

      {todos.map(function(todo){
        return <Todo title = {todo.title} id={id} description = {todo.description} />
      })}

    </div>
  )
}

function Todo({title, description}){
  return <div>
    <i>
      {id}
    </i>
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>
}

export default App
