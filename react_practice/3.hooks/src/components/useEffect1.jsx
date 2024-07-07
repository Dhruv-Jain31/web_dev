import {useState, useEffect} from "react";
import './src/App.css'
import { Fragment } from "react";

function App(){
    const [todos, setTodos] = useState("")

    useEffect(function(){
        fetch("https://sum-server.100xdevs.com/todos")
        .then(async function(response){
            const value = await response.json
            setTodos (value.todos);
        })
    },[])

    return (
        <Fragment>
            {todos.map(function(todos){
                return <Todo title = {todos.title} description = {todos.description}
                completed = {todos.completed} />
            })}
        </Fragment>
    )
}

function Todo({title,description,completed}){
    return <div>
    <h2>
    {title}
    </h2>
    <p>
    {description}
    </p>
    <b>
        {completed}
    </b>

    </div>
}

