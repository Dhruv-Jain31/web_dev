// create an app that does two things -
//1. Increases a counter by 1
//2. Lets user put a value in an input box (n) and you need
//to show sum from 1-n

import { useEffect, useState } from "react";
import { Fragment } from "react";

export function UseMemo(){
    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState(1);
    const [count_value, set_count_value] = useState(0);

    useEffect(function(){
        let count = 0;
        for (let i = 1; i<= value; i++){
           count = count + i;
        }
        set_count_value(count);
    },[value])

    return(
    <Fragment>
        <div>
            <input onChange={function(e){
                setValue(e.target.value);
            }} placeholder={"Find sum from 1 to n"}></input>
            <br />
            Sum from 1 to {value} is {count_value}
            <br />
            <button onClick = {function (){
                setCounter(counter + 1)
            }}>Counter {counter} </button>
        </div>
    </Fragment>
    )
}