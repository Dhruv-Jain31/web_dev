// Write a component that takes a todo id as an input
//And fetches the data for that todo from the given endpoint
//And then renders it

import { useState } from 'react';
import { useEffect } from 'react';
import { Fragment } from 'react';
import axios from "axios";

function UseEffect2(){
    return <div>
        <Todo id = {1} ></Todo>
    </div>
}

function Todo({id}){
    const [todo, setTodo] = useState({});

    useEffect(function(){

    })
}
