import { memo, useCallback, useState } from "react";

export default function UseCallback(){
  const [count, setCount] = useState(0);

  const inputFunction = useCallback(function(){
    console.log("input function called")
  },[])

  return (
    <div>
      <Button_component inputFunction = {inputFunction}  />
      <br></br>
      <button onClick = {function(){
        setCount(count + 1)
      }}> Click the button </button>
    </div>
  )
}

//memo prevents re-rendering of Button_component unless its props change.
//In the above function, the inputFunction was defined inside the UseCallback component, 
//and it was recreated every time the component re-renders. Even if the function's logic doesn't change, 
//its reference does, causing memo to treat it as a new prop and triggering a re-render of Button_component.

// using useCallback will not change there references and both the functions will be referentially equal on every re render

const Button_component = memo(function({inputFunction}){
  console.log("child is rendering")

  return (
    <div>
      <button>Button is clicked</button>
    </div>
  )
})

