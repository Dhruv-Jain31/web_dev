import { useState } from 'react'
import './App.css'

// re render happens when a state variable that is being used inside the a component changes, it triggers parent
// component to re render as well if it is inside parent
// whenever a parent component re renders it triggers all children to re render irrespective whether some children
// are static or not

// so we push the state down to minimize re rendering

function App() {

  return (
    // this cannot return multiple siblings together,
    // it can only return one sibling at a time.
    // for multiple siblings they must be wrapped in a fragment/parent.
    <div>
      <Header_With_Button></Header_With_Button>
      <Header title = <br></br>>  </Header>
      <Header title = "Dhruv_jain">  </Header>
      <Header title = "Dhruv_jain2"> </Header>
    </div>
  )
}

function Header_With_Button(){  // only this part will re render as it has state variables

  const [Title, setTitle] = useState("Dhruv")
  const [Description, setDescription] = useState("Dj_2")

  function updateTitle() {
    setTitle("my name is " + Math.random());
    setDescription("my name is " + Math.floor(Math.random() * 100));
  }

  return <div>
    <button onClick={updateTitle}>Click me to see random numbers </button>
    <Header title = {Title}>  </Header>
    <Header title = {Description}>  </Header>
  </div>
}

function Header({title}){
  return <div>
    {title}
  </div>
}

export default App