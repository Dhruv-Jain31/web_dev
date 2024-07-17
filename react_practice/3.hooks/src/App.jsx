import './App.css';
import { Fragment } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Key } from './Components/Key';
import { UseEffect1 } from './Components/UseEffect1';
import { UseEffect2 } from './Components/UseEffect2';
import { UseMemo } from './Components/UseMemo'
import { UseCallback } from './Components/UseCallback'
import { UseRef } from './Components/UseRef'

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
      <HashRouter>
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
      </HashRouter>
    </Fragment>
  );
}

export default App;
