// create an app that does two things -
//1. Increases a counter by 1
//2. Lets user put a value in an input box (n) and you need
//to show sum from 1-n

import { useMemo, useState, useEffect } from "react";
import { Fragment } from "react";

export function UseMemo(){
    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState(1);
    //const [count, setCount] = useState(1);
    // use memo memoizes the expensive computations
    // with useMemo we can store result of a function call and reuse it when the dependencies of that function haven't changed,
    //rather than recalculating the value on every render.

    let final_count = useMemo(function(){
        let count = 0;
        for (let i = 1; i<= value; i++){
           count = count + i;
        }
        return count;
    },[value]) // whenever value changes function is called. It is "NOT" called on every re render

    /*useEffect(function(){
        let count = 0;
        for (let i = 1; i<= value; i++){
            count = count + i;
        }
        setCount(count)
    },[value]) */
    // this use effect will cause unnecessary two re renders first when value updates this will
    // cause function to run and will again update setCount which will again cause a re render

    return(
    <Fragment>
        <div>
            <input onChange={function(e){
                setValue(e.target.value);
            }} placeholder={"Find sum from 1 to n"}></input>
            <br />
            Sum from 1 to {value} is {final_count}
            <br />
            <button onClick = {function (){
                setCounter(counter + 1)
            }}>Counter {counter} </button>
        </div>
    </Fragment>
    )
}