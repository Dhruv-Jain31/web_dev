import React, {Fragment} from 'react';
import { useState } from 'react'

function App() {
  const [Title, setTitle] = useState("Dhruv")
  const [Description, setDescription] = useState("Dj_2")

  function updateTitle() {
    setTitle("my name is " + Math.random());
    setDescription("my name is " + Math.floor(Math.random() * 100));
  }
  return (
    // this cannot return multiple siblings together,
    // it can only return one sibling at a time.
    // for multiple siblings they must be wrapped in a fragment/parent.
    <div>
      <button onClick={updateTitle}>Click me to see random numbers </button>
      <Header title = {Title}>  </Header>
      <Header title = {Description}>  </Header>
      <Header title = <br></br>>  </Header>
      <Header title = "Dhruv_jain">  </Header>
      <Header title = "Dhruv_jain2"> </Header>
    </div>
  )
}

function Header({title}){
  return <div>
    {title}
  </div>
}

export default App
