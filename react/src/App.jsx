// inside a jsx file we can return html from a function
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0) // it is the state variable i.e any variable that react
  // constantly watch means if it changes DOM will 

  return (
    <div>
      
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
    </div>
  )
}

export default App
