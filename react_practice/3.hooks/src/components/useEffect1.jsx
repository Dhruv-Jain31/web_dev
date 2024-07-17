import {useState, useEffect} from "react";
//import './App.css'
import { Fragment } from "react";

export default function UseEffect1(){
    const [todos, setTodos] = useState([]);

    useEffect(function(){
        setInterval(function(){
            fetch("https://sum-server.100xdevs.com/todos")
            .then(async function(response){
                const value = await response.json();
                setTodos(value.todos);
            })
        },2000) // set interval will call fetch api every 2 sec but useEffect function is called
        // only once since dependency array is empty
    },[])
     // [] is the dependency array if it empty it means it will call the function inside once
    // whenever the component mounts or when there is initial re render
    //[value] if we provide an array with specific values, the effect will run whenever any of those values change.

    return (
        <Fragment>
            {todos.map(function(todos){
                return <Todo_var
                key = {todos.id}
                title = {todos.title}
                description = {todos.description}
                completed = {todos.completed.toString()} />
            })}
        </Fragment>
    )
}

const Todo_var = function Todo({title,description,completed}){
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


