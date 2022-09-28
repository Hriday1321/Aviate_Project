import { Routes, Route } from "react-router-dom"
import { DivC, Side, Main } from './layouts/Layout.elements'
import Nav from './layouts/Nav/Nav'

import Home from './pages/Home/Home'

function App() {
  return (
    <DivC className="App">
      <Side>
        <Nav />
      </Side>
      <Main>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/applications" element={'applied'} />
      </Routes>
      </Main>
    </DivC>
  );
}

export default App;
