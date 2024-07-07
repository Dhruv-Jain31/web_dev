import { useState } from 'react'
import React, {Fragment} from 'react'
import './App.css'

let counter = 4

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: "go to gym",
    description: "go to gym today"
  },
  {
    id: 2,
    title: "do DSA",
    description: "complete arrays"
  },
  {
    id: 3,
    title: "go to class",
    description: "study micro processor"
  },
]);



  function addTodo(){
    setTodos([...todos,{ //spread operator: spreads all the existing and adds the 4th todo
      id: counter++,
      title: Math.random(),
      description: Math.random()
  }
]);
  }


  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>

      {todos.map(function(todo){
        return <Todo key = {todo.id} id = {todo.id} title = {todo.title} description = {todo.description} />
      })}

    </div>
  )
}

function Todo({id, title, description}){
  return (
  <div>
    <p>
      {id}
    </p>
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>
  );
}

export default App
