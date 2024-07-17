import './App.css';
import { lazy,Fragment } from 'react';
import { Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom';

// lazy allows to us to lazily export the route instead of loading all the routes at once
// we can use lazy function and they will load when we'll hit that specific route
//makes application better optimized. use export default <function_name> when using lazy
const Key = lazy(() =>import('./Components/Key'));
const UseEffect1 = lazy(() =>import('./Components/UseEffect1'));
const UseEffect2 = lazy(() =>import('./Components/UseEffect2'));
const UseMemo = lazy(() =>import('./Components/UseMemo'));
const UseCallback = lazy(() =>import('./Components/UseCallback'));
const UseRef = lazy(() =>import ('./Components/UseRef'));

import { Memo_Assignment1 } from './Assignments/1.Use-Memo/Assignment1';
import { Memo_Assignment2 } from './Assignments/1.Use-Memo/Assignment2';
import { Memo_Assignment3 } from './Assignments/1.Use-Memo/Assignment3';
import { Callback_Assignment1 } from './Assignments/2.Use-Callback/Assignment1';
import { Callback_Assignment2 } from './Assignments/2.Use-Callback/Assignment2';
import { Ref_Assignment1 } from './Assignments/3.Use-Ref/Assignment1';
import { Ref_Assignment2 } from './Assignments/3.Use-Ref/Assignment2';

function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Navigate />
        <Routes>
          <Route path="/key" element={<Key />} />
          <Route path="/useEffect1" element={<UseEffect1 />} />
          <Route path="/useEffect2" element={<UseEffect2 />} />
          <Route path="/useMemo" element={<UseMemo />} />
          <Route path="/useCallback" element={<UseCallback />} />
          <Route path="/useRef" element={<UseRef />} />

          <Route path="/usememoAssign1" element={<Memo_Assignment1 />} />
          <Route path="/usememoAssign2" element={<Memo_Assignment2 />} />
          <Route path="/usememoAssign3" element={<Memo_Assignment3 />} />
          <Route path="/usecallAssign1" element={<Callback_Assignment1 />} />
          <Route path="/usecallAssign2" element={<Callback_Assignment2 />} />
          <Route path="/userefAssign1" element={<Ref_Assignment1 />} />
          <Route path="/userefAssign2" element={<Ref_Assignment2 />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

function Navigate(){
  const navigate = useNavigate();

  // window.href.location reloads the whole client side bundle i.e loads all the files when we go another
  // route but window.href will not reload the bundle again and again. It is helpful in SPA's.
  // to use this all the part that is using this navigate must in top level router like <HashRouter> here

  return <Fragment>
    <div>
          <button onClick={() => {
            navigate( "/useMemo")
          }}>useMemo</button>

          <button onClick={() => {
            navigate("/useRef")
          }}> useCallback </button>

          <button onClick={ () => {
            navigate("/key")
          }}> key </button>
        </div>
        <br></br>
        <br></br>
  </Fragment>
}

export default App;
