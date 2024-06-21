// inside a jsx file we can return html from a function. but it is slightly different from html
// jsx = js + xml

// hook
import { useState } from "react";

// component. {..} are used to render a state in a component
//purpose of react is: give it a component, give it a state update the state
// react will automatically re renders the updated state to the DOM.
function App(){

  // state
  const [count, setCount] = useState(0);

  // it is re rendering which is taken care by react
  return (
    <div>
      <CustomButton count = {count} setCount = {setCount}></CustomButton>
      <CustomButton count = {count + 1} setCount = {setCount}></CustomButton>
      <CustomButton count = {count - 1} setCount = {setCount}></CustomButton>
      <CustomButton count = {count * 100} setCount = {setCount}></CustomButton>

    </div>
  )
}


// components that take the state as the input and there html changes dynamically
function CustomButton(props){

  // updating the state variable
  function onClickHandler(){
    props.setCount(props.count + 1);
  }

  return <button onClick = {onClickHandler}>
    Counter {props.count}
  </button>
}

export default App
