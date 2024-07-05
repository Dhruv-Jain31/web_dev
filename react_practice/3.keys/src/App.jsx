import { useState } from 'react'
import React, {Fragement} from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: "go to gym",
    description: "go to gym today"
  },{
    id: 2,
    title: "do DSA",
    description: "complete arrays"
  },{
    id: 3,
    title: "go to class",
    description: "study micro processor"
  }]);

  const [nextId, setNextId] = useState(4);

  function addTodo(){
    setTodos([...todos,{ //spread operator: spreads all the existing and adds the 4th todo
      id: nextId,
      title: Math.random(),
      description: Math.random()
    }]);
    setNextId(nextId + 1);
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
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>
}

export default App
