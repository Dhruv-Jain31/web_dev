// Write a component that takes a todo id as an input
//And fetches the data for that todo from the given endpoint
//And then renders it

import { useState } from 'react';
import { useEffect } from 'react';
import { Fragment } from 'react';
import axios from "axios";

export function UseEffect2(){
    return <div>
        <Todo id = {4} ></Todo>
    </div>
}

function Todo({id}){
    const [todo, setTodo] = useState({});

    useEffect(function(){
        axios.get("https://sum-server.100xdevs.com/todo?id=" +id)
        .then(function(response){
            setTodo(response.data.todo);
        })
    },[])

    return <Fragment>
        <h1>
            {todo.title}
        </h1>
        <h4>
            {todo.description}
        </h4>
    </Fragment>
}
