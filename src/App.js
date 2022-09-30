import React from 'react'

import { Routes, Route } from "react-router-dom"
import { DivC, Side, Main } from './layouts/Layout.elements'
import Nav from './layouts/Nav/Nav'

import Home from './pages/Home/Home'
import Application from './pages/Applications/Application'

function App() {
  const [value, setValue] = React.useState(0);

  return (
    <DivC className="App">
      <Side>
        <Nav callback={setValue} value={value}/>
      </Side>
      <Main>
      <Routes>
        <Route index element={<Home callback={setValue} value={value}/>} />
        <Route path='/applications' element={<Application/>}/>
      </Routes>
      </Main>
    </DivC>
  );
}

export default App;
