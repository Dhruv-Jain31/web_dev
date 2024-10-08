// Write a component that takes a todo id as an input
//And fetches the data for that todo from the given endpoint
//And then renders it

import { useState } from 'react';
import { useEffect } from 'react';
import { Fragment } from 'react';
import axios from "axios";

export default function UseEffect2(){
    const [id, setId] = useState(1);
    return <Fragment>
    <div>

        <button onClick = {function(){
            setId(1)
        }}>1</button>

        <button onClick = {function(){
            setId(2)
        }}>2</button>

        <button onClick = {function(){
            setId(3)
        }}>3</button>

        <button onClick = {function(){
            setId(4)
        }}>4</button>

        <button onClick = {function(){
            setId(5)
        }}>5</button>

    </div>

    <Todo id = {id} />

    </Fragment>
}

function Todo({id}){
    const [todo, setTodo] = useState({});

    useEffect(function(){
        axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
        .then(function(response){
            setTodo(response.data.todo);
        })
    },[id]) // we passed id as a dependency here. Now this function will run every time the id changes

    return <Fragment>
        <h1>
            {todo.title}
        </h1>
        <h4>
            {todo.description}
        </h4>
        <i>
            {todo.completed.toString()}
        </i>
    </Fragment>
}
