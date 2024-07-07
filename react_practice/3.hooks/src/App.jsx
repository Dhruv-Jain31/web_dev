import './App.css'
import { Fragment } from 'react'
import { Key } from './Components/Key'
import { UseEffect1 } from './Components/UseEffect1'
import { HashRouter, Routes, Route } from 'react-router-dom'




function App(){
  return (
    <Fragment>
      <HashRouter>
        <Routes>
          <Route path = "/key" element = {<Key></Key>} ></Route>
          <Route path = "/useEffect" element = {<UseEffect1></UseEffect1>} ></Route>
        </Routes>
      </HashRouter>
    </Fragment>
  )
}

export default App