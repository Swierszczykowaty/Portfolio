import React from "react";
import { BrowserRouter } from "react-router-dom";
import About from "./components/About";


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <About />
      </div>
    </BrowserRouter>
  )
}

export default App