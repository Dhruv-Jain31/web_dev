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
        </Routes>
      </HashRouter>
    </Fragment>
  );
}

export default App;
