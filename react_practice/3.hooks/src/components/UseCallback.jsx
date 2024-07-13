import { memo, useCallback, useState } from "react";

export function UseCallback(){
  const [count, setCount] = useState(0);

  const inputFunction = function(){
    console.log("input function called")
  }

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

const Button_component = memo(function({inputFunction}){
  console.log("child is rendering")

  return (
    <div>
      <button>Button is clicked</button>
    </div>
  )
})

