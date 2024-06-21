// inside a jsx file we can return html from a function
// state
let state = {
  count: 0
}

// component. {..} are used to render a state in a component
function App(){
  return (
    <div>
      <button>Counter {state.count}</button> 
    </div>
  )
}

export default App
