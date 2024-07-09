import './App.css';
import { Fragment } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Key } from './Components/Key';
import { UseEffect1 } from './Components/UseEffect1';
import { UseEffect2 } from './Components/UseEffect2';

function App() {
  return (
    <Fragment>
      <HashRouter>
        <Routes>
          <Route path="/key" element={<Key />} />
          <Route path="/useEffect" element={<UseEffect1 />} />
          <Route path="/useEffect2" element={<UseEffect2 />} />
        </Routes>
      </HashRouter>
    </Fragment>
  );
}

export default App;
