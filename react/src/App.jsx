// inside a jsx file we can return html from a function. but it is slightly different from html
// jsx = js + xml
// state
let state = {
  count: 0
}

// component. {..} are used to render a state in a component
//purpose of react is: give it a component, give it a state update the state
// react will automatically re renders the updated state to the DOM.
function App(){

  function onClickHandler(){
    state.count = state.count + 1;
  }

  return (
    <div>
      <button onClick={onClickHandler}>Counter {state.count}</button> 
    </div>
  )
}

export default App
