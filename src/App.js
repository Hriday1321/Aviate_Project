import React from 'react'

import { Routes, Route } from "react-router-dom"
import { DivC, Side, Main } from './layouts/Layout.elements'
import Nav from './layouts/Nav/Nav'

import Home from './pages/Home/Home'

function App() {
  const [value, setValue] = React.useState(0);

  return (
    <DivC className="App">
      <Side>
        <Nav {...{callback:{setValue}, value: {value}}}/>
      </Side>
      <Main>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      </Main>
    </DivC>
  );
}

export default App;
