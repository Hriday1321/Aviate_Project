import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={'index'} />
        <Route path="/applications" element={'applied'} />
      </Routes> 
    </div>
  );
}

export default App;
